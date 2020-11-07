import React from "react";
import { link } from"react-router-dom";

import ""
import { Menu, Icon } from "";

export default function NavBar () {
    return (
        <Menu mode='horizontal'>
      <Menu.Item >
        <Link to='/'>
          <Icon type='home' /> Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='log-in'>
          <Icon type='' /> Log-In
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='sign-up'>
          <Icon type='' /> Sign Up
        </Link>
    </Menu>
    )
}