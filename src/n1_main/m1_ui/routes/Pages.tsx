import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {Error404} from "../common/c7-error404/Error404";
import {Login} from "../../../n2_features/f1-auth/a1-login/Login";
import {Register} from "../../../n2_features/f1-auth/a2-register/Register";
import {PasswordRecovery} from "../../../n2_features/f1-auth/a4-pass-recovery/PasswordRecovery";
import {SetPassword} from "../../../n2_features/f1-auth/a5-set-pass/SetPassword";
import {TestPage} from "../../../n2_features/f0-test/TestPage";

export enum Path {
    Login = "/login",
    Register = "/register",
    PageNotFound = "page-not-found",
    PasswordRecovery = "/password-recovery",
    SetPassword = "/set-password",
    Test = "/test"
}

export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Navigate to={Path.Test}/>}/>
                <Route path={Path.Login} element={<Login/>}/>
                <Route path={Path.Register} element={<Register/>}/>
                <Route path={Path.PageNotFound} element={<Error404/>}/>
                <Route path={Path.PasswordRecovery} element={<PasswordRecovery/>}/>
                <Route path={Path.SetPassword} element={<SetPassword/>}/>
                <Route path={Path.Test} element={<TestPage/>}/>
                <Route path={"/*"} element={<Error404/>}/>
            </Routes>
        </div>
    );
};

