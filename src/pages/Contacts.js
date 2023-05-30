import React, { Component } from 'react'
import '../about.css';
import plate from "./img/plate_food.svg";
import facebook from "./img/facebook.svg";
import twitter from "./img/twitter.svg";
import insta from "./img/insta.svg";
import image1 from "./img/logo.svg";
import Header from "../pages/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export default class Contacts extends Component {
    render() {
        return(
            <body>
                <Header/>
                <div className="contacts">
        <div className="plate">
            <img src={plate} width="532px" height="516px"/>
        </div>

        <div className="contacts_about">
            <h3>О нас</h3>
            <hr/>
            <div className="about_text_1">Цель нашей компании — <br/>обеспечить вас готовой и вкусной <br/>едой на каждый день.</div>
            <div className="about_text_2">Больше не нужно самостоятельно <br/>решать, какие блюда приготовить<br/> на завтрак, обед и ужин и что<br/> взять на работу.</div>
            <div className="about_text_3">Мы сами доставим вкусную <br/>готовую еду на дом в удобное <br/>утреннее время и место.</div>
        </div>

        <div className="contacts_contacts">
            <h3>Контакты</h3>
            <hr className="contacts_hr"/>
            <div className="contacts_number">
                <h4>Телефон:</h4>
                <h5>+7 908-555-55-55</h5>
            </div>
            <div className="contacts_mail">
                <h4>Почта:</h4>
                <h5>foodly@gmail.com</h5>
            </div>
            <button className="more_info"><Link to="/">Узнать больше</Link></button>
        </div>
    </div>

    <footer>
        <div className="first_section">
            <h2 className="footer_number">+7 908-555-55-55</h2>
            <h2 className="footer_mail">foodly@gmail.com</h2>
        </div>
    
        <div className="second_section">
            <a href="#" className="logo_footer">
                <img src={image1} alt="Foodly-logo" className="logo__img_footer"/>
                <p className="logo__text">Foodly</p>
            </a>
            <h2 className="footer_devis">Наша работа заключается в том,<br/> чтобы наполнить ваш желудок<br/> вкусной едой с быстрой и<br/> бесплатной доставкой</h2>
            <div className="socials">
                <img src={facebook}/>
                <img src={twitter}/>
                <img src={insta}/>
            </div>
        </div>
        <div className="third_section">
            <h2 className="footer_about">О нас</h2>
            <div className="footer_nav">
                <h2 className="nav_links">Главная</h2>
                <h2 className="nav_links">Меню</h2>
                <h2 className="nav_links">Контакты</h2>
            </div>
        </div>
    </footer>
        </body>
        )
    }

}