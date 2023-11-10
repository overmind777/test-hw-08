import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Login</NavLink>
      <NavLink to="/registration">Registration</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </div>
  );
};

export default Navigation;
