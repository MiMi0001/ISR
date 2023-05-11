import React, {useState} from "react";
import {MainNavBar} from "./MainNavBar";
import {Outlet} from "react-router-dom";


export function ISRApp(){
    return  <div>
                <div>
                    <MainNavBar/>
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
}

