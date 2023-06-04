import React, {useState} from "react";
import {MainNavBar} from "./MainNavBar";
import {Outlet} from "react-router-dom";
import {UserContext} from "./context/UserContext";
import {ConfigContext} from "./context/ConfigContext";
import {fetchISR} from "../utils/fetchISR";
import Image from 'react-bootstrap/Image'

export function ISRApp() {
    let [user, setUser] = useState({"username": ""});
    let [appConfig, setAppConfig] = useState({"owner":{"name":"Betöltés... "}})

    return <UserContext.Provider value={[user, setUser]}>
        <ConfigContext.Provider value={[appConfig, setAppConfig]}>
            <div>
                <MainNavBar/>
            </div>
            <div>
                <Outlet/>
            </div>
        </ConfigContext.Provider>
    </UserContext.Provider>
}
