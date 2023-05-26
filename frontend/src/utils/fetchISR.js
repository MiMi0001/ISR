import jwtDecode from "jwt-decode";
import dayjs from "dayjs";


let baseURL = "http://127.0.0.1:8000"
let refreshURL = baseURL + "/token/refresh/";

async function refreshAccessToken() {
    let refreshToken = localStorage.getItem("refreshToken");
    let payload = {"refresh": refreshToken};

    let response = await fetch(refreshURL, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    let tokens = await response.json();

    localStorage.setItem("accessToken", tokens.access);
    console.log("Access token refreshed /w fetch API.");

    return tokens.access;
}

export async function loginToBackend(user) {
    let url = baseURL + "/token/";

    let response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    return response.json();
}

export async function fetchISR(relativeURL, httpMethodString, payloadObject) {
    let url = baseURL + relativeURL;

    let accessToken = localStorage.getItem("accessToken");

    let response = null;
    if (accessToken) {
        let tokenExpiry = jwtDecode(accessToken).exp;
        let isTokenExpired = dayjs.unix(tokenExpiry).diff(dayjs()) < 1;

        // If the access token has been  expired, we have to refresh it.
        if (isTokenExpired) {
            accessToken = await refreshAccessToken();
        }

        const headers = {'Authorization': `Bearer ${accessToken}`}

        if (httpMethodString.toUpperCase() === "GET") { // GET request cannot have a body.
            response = await fetch(url, {
                method: httpMethodString,
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`
                }
            })

        } else if (httpMethodString.toUpperCase() === "POST") {
            response = await fetch(url, {
                method: httpMethodString,
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify(payloadObject)
            })
        }
    }
    // If we don't have the access token(the user hadn't login yet), return null.
    else {
        return null;
    }

    return response.json();
}
