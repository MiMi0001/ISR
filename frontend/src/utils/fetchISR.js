import jwtDecode from "jwt-decode";
import dayjs from "dayjs";
import axios from "axios";


let baseURL = "http://127.0.0.1:8000"
let refreshURL = baseURL + "/token/refresh/";

async function refreshAccessToken() {
    let refreshToken = localStorage.getItem("refreshToken");
    let payload = {"refresh": refreshToken};
    let tokens = (await axios.post(refreshURL, payload)).data;
    console.log("Access token refreshed.");

    // let response = await fetch(refreshURL, {
    //     method: "POST",
    //     mode: "cors",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(payload)
    // });
    // let tokens = await response.json();

    localStorage.setItem("accessToken", tokens.access);
    return tokens.access;
}

export async function loginToBackEnd(user) {
    let url = baseURL + "/token/";
    let response = await axios.post(url, user);

    // let response = await fetch(url, {
    //     method: "POST",
    //     mode: "cors",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(user)
    // });

    return response.data;
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
            response = await axios.get(url, {headers});

            // response = await fetch(url, {
            //     method: httpMethodString,
            //     mode: "cors",
            //     cache: "no-cache",
            //     headers: {
            //         "Content-Type": "application/json",
            //         Authentication: `Bearer ${accessToken}`
            //     }
            // })

        } else if (httpMethodString.toUpperCase() === "POST") {
            response = await axios.post(url, payloadObject, {headers});

            //     response = await fetch(url, {
            //         method: httpMethodString,
            //         mode: "cors",
            //         headers: {
            //             "Content-Type": "application/json",
            //             Authentication: `Bearer ${accessToken}`
            //         },
            //         body: JSON.stringify(payloadObject)
            //     })
            // }
        }

        // If we don't have the access token(the user hadn't login yet), return null.
        else {
            return null;
        }
    }
    return response.data;
}
