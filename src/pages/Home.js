import React from "react";
import image1 from "./img/logo.svg";
import image2 from "./img/food.png";
import image3 from "./img/arrow.svg";
import image4 from "./img/burger.png";
import image5 from "./img/mark.svg";
import image6 from "./img/stars.svg";
import image7 from "./img/plus.svg";
import image8 from "./img/pasta.png";
import image9 from "./img/pancake.png";
import image10 from "./img/stake.png";
import image11 from "./img/about_image_1.svg";
import image12 from "./img/about_image_2.svg";
import image13 from "./img/about_image_3.svg";
import facebook from "./img/facebook.svg";
import twitter from "./img/twitter.svg";
import insta from "./img/insta.svg";
import Header from "./Header";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


class Home extends React.Component{
    render() {
        return (
            <body>
                <Header/>
    <header className="container header">
        <main className="main">
            <div className="">
                <h1 className="main__title">Заказывайте вкусно в <span>Foodly</span></h1>
                <p className="main__text">Наша работа заключается в том, чтобы наполнить ваш желудок вкусной едой с быстрой и бесплатной доставкой</p>
                <Link to="/Menu" className="button button-order">Заказать</Link>
            </div>
            <div className="main__image">
                <img src={image2} alt="Тарелка с едой" />
            </div>
        </main>
    </header>

    <section className="top">
        <div className="container">
            <div className="top__header">
                <h3 className="top__title">Популярные блюда</h3>
                <div className="top__control">
                    <div className="top__control-item top__control-left"><img src={image3} /></div>
                    <div className="top__control-item top__control-right"><img src={image3} /></div>
                </div>
            </div>

            <div className="top__cards">
                <div className="top__cards-item">
                    <img src={image4} className="card_1" alt="Бургер" />
                    <div className="top__cards-item-text">
                        <h1>Бургер</h1>
                        <h2>500 <span>₽</span></h2>
                    </div>
                   
                    <div className="mark">
                        <h3>Доступно</h3>
                        <img src={image5} alt="" />
                    </div>
                    <div className="stars"><img src={image6} alt="" /></div>
                    <button className="button_plus">
                        <img src={image7} />
                    </button>
                </div>
                <div className="top__cards-item">
                    <img src={image8} className="card_1" alt="Бургер" />
                    <div className="top__cards-item-text">
                        <h1>Паста пенне</h1>
                        <h2>500 <span>₽</span></h2>
                    </div>
                    <div className="mark">
                        <h3>Доступно</h3>
                        <img src={image5} alt="" />
                    </div>
                    <div className="stars"><img src={image6} alt="" /></div>
                    <button className="button_plus">
                        <img src={image7} />
                    </button>
                </div>
                <div className="top__cards-item">
                    <img src={image10} className="card_1" alt="Бургер" />
                    <div className="top__cards-item-text">
                        <h1>Стейк</h1>
                        <h2>500 <span>₽</span></h2>
                    </div>
                   
                    <div className="mark">
                        <h3>Доступно</h3>
                        <img src={image5} alt="" />
                    </div>
                    <div className="stars"><img src={image6} alt="" /></div>
                    <button className="button_plus">
                        <img src={image7} />
                    </button>
                </div>
                <div className="top__cards-item">
                    <img src={image9} className="card_1" alt="Бургер" />
                    <div className="top__cards-item-text">
                        <h1>Панкейки</h1>
                        <h2>500 <span>₽</span></h2>
                    </div>
                   
                    <div className="mark">
                        <h3>Доступно</h3>
                        <img src={image5} alt="" />
                    </div>
                    <div className="stars"><img src={image6} alt="" /></div>
                    <button className="button_plus">
                        <img src={image7} />
                    </button>
                </div>
            </div>
        </div>
    </section>

<section className="about">
    <div className="about_text">
        <h3 className="about_title">Почему вы должны выбрать нас</h3>
        <h3 className="about_subtitle">Ваш любимый сервис <br/> по доставке еды</h3>
    </div>

    <div className="cards">
        <div className="about_cards">
            <img src={image11} className="about_photo" width="230px" height="230px" />
            <h3 className="cards_title">Легко Заказать</h3>
            <h4 className="cards_subtitle">Вам нужно всего несколько<br/> кликов для заказа еды</h4>
        </div>
        <div className="about_cards">
            <img src={image12} className="about_photo" width="244px" height="232px" />
            <h3 className="cards_title">Быстрая Доставка</h3>
            <h4 className="cards_subtitle">Доставка, которая всегда<br/> выполняется быстрее чем нужно</h4>
        </div>
        <div className="about_cards">
            <img src={image13} className="about_photo" width="287px" height="230px" />
            <h3 className="cards_title">Лучшее Качество</h3>    
            <h4 className="cards_subtitle">Для нас качество на<br/>первом месте</h4>
        </div>
    </div>
</section>
<footer>
    <div className="first_section">
        <h2 className="footer_number">+7 908-555-55-55</h2>
        <h2 className="footer_mail">foodly@gmail.com</h2>
    </div>

    <div className="second_section">
        <a href="#" className="logo_footer">
            <img src={image1} alt="Foodly-logo" className="logo__img_footer" />
            <p className="logo__text">Foodly</p>
        </a>
        <h2 className="footer_devis">Наша работа заключается в том,<br/> чтобы наполнить ваш желудок<br/> вкусной едой с быстрой и<br/> бесплатной доставкой</h2>
        <div className="socials">
            <img src={facebook} />
            <img src={twitter} />
            <img src={insta} />
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

export default Home;