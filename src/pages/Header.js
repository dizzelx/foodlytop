import React from "react";
import image1 from "./img/logo.svg";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Contacts from '../pages/Contacts';

class Header extends React.Component{
    render() {
        return (
        <header className="container header">
        <nav className="nav">
            <Link to="/" className="logo">
                <img src={image1} alt="Foodly-logo" className="logo__img" />
                <p className="logo__text">Foodly</p>
            </Link>

            <ul className="nav__list">
                <li className="nav__list-item"><Link to="/">Главная</Link></li>
                <li className="nav__list-item"><Link to="/Menu">Меню</Link></li>
                <li className="nav__list-item"><Link to="/Contacts">Контакты</Link></li>
            </ul>

            <div className="nav__account">
                <div className="basket">
                    <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.74196 9.02001C1.77883 8.56058 1.9874 8.1319 2.32613 7.81933C2.66486 7.50676 3.10889 7.33325 3.56979 7.33334H14.623C15.0839 7.33325 15.5279 7.50676 15.8666 7.81933C16.2054 8.1319 16.4139 8.56058 16.4508 9.02001L17.1869 18.1867C17.2071 18.4389 17.1749 18.6927 17.0923 18.9319C17.0097 19.1711 16.8784 19.3906 16.7068 19.5766C16.5352 19.7626 16.3269 19.911 16.0951 20.0126C15.8633 20.1141 15.613 20.1666 15.36 20.1667H2.83279C2.57972 20.1666 2.32941 20.1141 2.09761 20.0126C1.86581 19.911 1.65754 19.7626 1.48593 19.5766C1.31432 19.3906 1.18307 19.1711 1.10045 18.9319C1.01783 18.6927 0.985631 18.4389 1.00588 18.1867L1.74196 9.02001V9.02001Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.7631 10.0833V5.50001C12.7631 4.52755 12.3767 3.59492 11.6891 2.90729C11.0015 2.21965 10.0688 1.83334 9.09639 1.83334C8.12392 1.83334 7.19129 2.21965 6.50366 2.90729C5.81603 3.59492 5.42972 4.52755 5.42972 5.50001V10.0833" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>   
                </div>

                <a href="login.html" className="button button-login">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.7931 17.069H7.96551C7.66371 17.069 7.37427 16.9491 7.16087 16.7357C6.94746 16.5223 6.82758 16.2328 6.82758 15.931V14.2241H7.96551V15.931H14.7931V2.27587H7.96551V3.98277H6.82758V2.27587C6.82758 1.97407 6.94746 1.68464 7.16087 1.47123C7.37427 1.25783 7.66371 1.13794 7.96551 1.13794H14.7931C15.0949 1.13794 15.3843 1.25783 15.5977 1.47123C15.8111 1.68464 15.931 1.97407 15.931 2.27587V15.931C15.931 16.2328 15.8111 16.5223 15.5977 16.7357C15.3843 16.9491 15.0949 17.069 14.7931 17.069Z" fill="#F2F2F2" stroke="#F2F2F2" stroke-width="0.5"/>
                        <path d="M8.30122 11.715L10.3381 9.67243H2.27588V8.53449H10.3381L8.30122 6.49191L9.10347 5.68967L12.5173 9.10346L9.10347 12.5173L8.30122 11.715Z" fill="#F2F2F2" stroke="#F2F2F2" stroke-width="0.5"/>
                    </svg>
                    <p>Вход</p>
                </a>
            </div>
        </nav>
        </header>


        )
    }
}

export default Header;