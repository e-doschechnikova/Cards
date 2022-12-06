import React from "react";
import s from "./Error404.module.scss";

export const Error404 = () => {
    return (
        <div className={s.error}>
            <h1>404</h1>
            <h2>OOPS! PAGE NOT FOUND!</h2>
        </div>
    );
}

