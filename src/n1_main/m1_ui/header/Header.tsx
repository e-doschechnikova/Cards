import React from "react";
import { NavLink } from "react-router-dom";
import { Path } from "../routes/Pages";
import s from "./Header.module.scss";

export const Header = () => {
  const activeClass = (props: { isActive: boolean }) =>
    props.isActive ? s.active : s.link;

  return (
    <div className={s.container}>
      <NavLink to={Path.Login} className={activeClass}>
        Login
      </NavLink>
      <NavLink to={Path.Register} className={activeClass}>
        Registration
      </NavLink>
      <NavLink to={Path.PageNotFound} className={activeClass}>
        404
      </NavLink>
      <NavLink to={Path.PasswordRecovery} className={activeClass}>
        Password recovery
      </NavLink>
      <NavLink to={Path.SetPassword} className={activeClass}>
        New password
      </NavLink>
      <NavLink to={Path.Test} className={activeClass}>
        Test
      </NavLink>
    </div>
  );
};
