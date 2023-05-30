import React, { Component } from 'react';
import Header from "../pages/Header";
import '../menu.css';
import image7 from "./img/plus.svg";
import image5 from "./img/mark.svg";
import pizza_1 from "./img/pizza_1.png"
import pizza_2 from "./img/pizza_2.png"
import pizza_3 from "./img/pizza_3.png"
import pizza_4 from "./img/pizza_4.png"
import pizza_5 from "./img/pizza_5.png"
import pizza_6 from "./img/pizza_6.png"
import pizza_7 from "./img/pizza_7.png"
import pizza_8 from "./img/pizza_8.png"
import pizza_9 from "./img/pizza_9.png"
import icon_1 from "./img/icon_1.svg"
import icon_2 from "./img/icon_2.svg"
import icon_3 from "./img/icon_3.svg"
import icon_4 from "./img/icon_4.svg"
import icon_5 from "./img/icon_5.svg"
import icon_6 from "./img/icon_6.svg"
import icon_7 from "./img/icon_7.svg"
import mark_1 from "./img/mark_1.svg"
import facebook from "./img/facebook.svg";
import twitter from "./img/twitter.svg";
import insta from "./img/insta.svg";
import image1 from "./img/logo.svg";

export default class Contacts extends Component {
    render() {
        return(
                <body>
            <Header/>

    <div className="main_menu">


        <div className="filter">
            <h2>Меню</h2>
            <div className="filter_list">
                <button className="filter_button">
                <div className="filters filter_1">
                    <h3 className="filter_text filter_text_3">Пицца</h3>
                    <img src={icon_1} className="filter_icon"/>
                    <img src={mark_1} className="filter_mark"/>
                </div>
            </button>
            <button className="filter_button">
                <div className="filters filter_2">
                    <h3 className="filter_text">Бургеры</h3>
                    <img src={icon_2} className="filter_icon"/>
                    <img src={mark_1} className="filter_mark"/>
                </div>
            </button>
            <button className="filter_button">
                <div className="filters filter_2">
                    <h3 className="filter_text filter_text_2">Мясо</h3>
                    <img src={icon_3} className="filter_icon"/>
                    <img src={mark_1} className="filter_mark"/>
                </div>
            </button>
            <button className="filter_button">
                <div className="filters filter_2">
                    <h3 className="filter_text">Горячее</h3>
                    <img src={icon_4} className="filter_icon"/>
                    <img src={mark_1} className="filter_mark"/>
                </div>
            </button>
            <button className="filter_button">
                <div className="filters filter_2">
                    <h3 className="filter_text">Десерты</h3>
                    <img src={icon_5} className="filter_icon icon_5"/>
                    <img src={mark_1} className="filter_mark mark_5"/>
                </div>
            </button>
            <button className="filter_button">
                <div className="filters filter_2">
                    <h3 className="filter_text">Напитки</h3>
                    <img src={icon_6} className="filter_icon"/>
                    <img src={mark_1} className="filter_mark"/>
                </div>
            </button>
            <button className="filter_button">
                <div className="filters filter_2">
                    <h3 className="filter_text filter_text_4">Салаты</h3>
                    <img src={icon_7} className="filter_icon"/>
                    <img src={mark_1} className="filter_mark"/>
                </div>
            </button>
            </div>
        </div>
    <div className="menu">

        <div className="product product_1">
                <img src={pizza_1} className="menu_photo" alt="Бургер"/>
                <div className="menu_text">
                    <h1 className="menu_title">Пепперони</h1>
                    <h2 className="menu_price">990 <span>₽</span></h2>
                </div>
                <div>  
                    <h3 className="menu_subtitle">Пикантная пепперони, порция <br/> моцареллы, фирменный томатный <br/>соус</h3>
                </div>
                <div className="menu_mark">
                    <h3>Доступно</h3>
                    <img src={image5} alt=""/>
                </div>
                <div className="menu_stars"><img src="img/stars.svg" alt=""/></div>
                <button className="menu_button_plus"
                 data-sb-id-or-vendor-code="001"
                data-sb-product-name="Пепперони"
                data-sb-product-price="990"
                data-sb-product-quantity="1"
                data-sb-product-img="img/pizza_1.png">
                    <img src={image7}/>
                </button>
                <div className="product__quantity"></div>
        </div>
        
        <div className="product product_2">
            <img src={pizza_2} className="menu_photo" alt="Бургер"/>
            <div className="menu_text">
                <h1 className="menu_title">Итальянская</h1>
                <h2 className="menu_price">990 <span>₽</span></h2>
            </div>
            <div>  
                <h3 className="menu_subtitle">Шампиньоны, томаты, сладкий <br/>перец, красный лук, моцарелла,<br/> томатный соус, итальянские травы</h3>
            </div>
            <div className="menu_mark">
                <h3>Доступно</h3>
                <img src={image5} alt=""/>
            </div>
            <div className="menu_stars"><img src="img/stars.svg" alt=""/></div>
            <button className="menu_button_plus"
                 data-sb-id-or-vendor-code="002"
                data-sb-product-name="Итальянская"
                data-sb-product-price="990"
                data-sb-product-quantity="1"
                data-sb-product-img="img/pizza_2.png">
                    <img src={image7}/>
                </button>
                <div className="product__quantity"></div>
        </div>

        <div className="product product_3">
            <img src={pizza_3} className="menu_photo" alt="Бургер"/>
            <div className="menu_text">
                <h1 className="menu_title">Мясная</h1>
                <h2 className="menu_price">990 <span>₽</span></h2>
            </div>
            <div>  
                <h3 className="menu_subtitle">Цыпленок, ветчина, помидоры,<br/> моцарелла, фирменный томатный<br/> соус</h3>
            </div>
            <div className="menu_mark">
                <h3>Доступно</h3>
                <img src={image5} alt=""/>
            </div>
            <div className="menu_stars"><img src="img/stars.svg" alt=""/></div>
            <button className="menu_button_plus"
                 data-sb-id-or-vendor-code="003"
                data-sb-product-name="Мясная"
                data-sb-product-price="990"
                data-sb-product-quantity="1"
                data-sb-product-img="img/pizza_3.png">
                    <img src={image7}/>
                </button>
                <div className="product__quantity"></div>
        </div>

        <div className="product product_4">
            <img src={pizza_4} className="menu_photo" alt="Бургер"/>
            <div className="menu_text">
                <h1 className="menu_title">Грибная</h1>
                <h2 className="menu_price">990 <span>₽</span></h2>
            </div>
            <div>  
                <h3 className="menu_subtitle">Ветчина, шампиньоны, увеличенная<br/> порция моцареллы, фирменный<br/> томатный соус</h3>
            </div>
            <div className="menu_mark">
                <h3>Доступно</h3>
                <img src={image5} alt=""/>
            </div>
            <div className="menu_stars"><img src="img/stars.svg" alt=""/></div>
            <button className="menu_button_plus"
                 data-sb-id-or-vendor-code="004"
                data-sb-product-name="Грибная"
                data-sb-product-price="990"
                data-sb-product-quantity="1"
                data-sb-product-img="img/pizza_4.png">
                    <img src={image7}/>
                </button>
                <div className="product__quantity"></div>
        </div>

        <div className="product product_5">
            <img src={pizza_5} className="menu_photo" alt="Бургер"/>
            <div className="menu_text">
                <h1 className="menu_title">Чоризо</h1>
                <h2 className="menu_price">990 <span>₽</span></h2>
            </div>
            <div>  
                <h3 className="menu_subtitle">Фирменный томатный соус,<br/> моцарелла, острая чоризо, сладкий <br/>перец</h3>
            </div>
            <div className="menu_mark">
                <h3>Доступно</h3>
                <img src={image5} alt=""/>
            </div>
            <div className="menu_stars"><img src="img/stars.svg" alt=""/></div>
            <button className="menu_button_plus"
                 data-sb-id-or-vendor-code="005"
                data-sb-product-name="Чоризо"
                data-sb-product-price="990"
                data-sb-product-quantity="1"
                data-sb-product-img="img/pizza_5.png">
                    <img src={image7}/>
                </button>
                <div className="product__quantity"></div>
        </div>

        <div className="product product_6">
            <img src={pizza_6} className="menu_photo" alt="Бургер"/>
            <div className="menu_text">
                <h1 className="menu_title">Сырная</h1>
                <h2 className="menu_price">990 <span>₽</span></h2>
            </div>
            <div>  
                <h3 className="menu_subtitle">Моцарелла, сыры чеддер и <br/>пармезан, фирменный соус <br/>альфредо</h3>
            </div>
            <div className="menu_mark">
                <h3>Доступно</h3>
                <img src={image5} alt=""/>
            </div>
            <div className="menu_stars"><img src="img/stars.svg" alt=""/></div>
            <button className="menu_button_plus"
                 data-sb-id-or-vendor-code="006"
                data-sb-product-name="Сырная"
                data-sb-product-price="990"
                data-sb-product-quantity="1"
                data-sb-product-img="img/pizza_6.png">
                    <img src={image7}/>
                </button>
                <div className="product__quantity"></div>
        </div>

        <div className="product product_7">
            <img src={pizza_7} className="menu_photo" alt="Бургер"/>
            <div className="menu_text">
                <h1 className="menu_title">Маргарита</h1>
                <h2 className="menu_price">990 <span>₽</span></h2>
            </div>
            <div>  
                <h3 className="menu_subtitle">Увеличенная порция моцареллы,<br/> томаты, итальянские травы,<br/> фирменный томатный соус</h3>
            </div>
            <div className="menu_mark">
                <h3>Доступно</h3>
                <img src={image5} alt=""/>
            </div>
            <div className="menu_stars"><img src="img/stars.svg" alt=""/></div>
            <button className="menu_button_plus"
                 data-sb-id-or-vendor-code="007"
                data-sb-product-name="Маргарита"
                data-sb-product-price="990"
                data-sb-product-quantity="1"
                data-sb-product-img="img/pizza_7.png">
                    <img src={image7}/>
                </button>
                <div className="product__quantity"></div>

        </div>
        <div className="product product_8">
            <img src={pizza_8} className="menu_photo" alt="Бургер"/>
            <div className="menu_text">
                <h1 className="menu_title">Гавайская</h1>
                <h2 className="menu_price">990 <span>₽</span></h2>
            </div>
            <div>  
                <h3 className="menu_subtitle">Ветчина, ананасы, моцарелла,<br/> фирменный томатный соус</h3>
            </div>
            <div className="menu_mark">
                <h3>Доступно</h3>
                <img src={image5} alt=""/>
            </div>
            <div className="menu_stars"><img src="img/stars.svg" alt=""/></div>
            <button className="menu_button_plus"
                 data-sb-id-or-vendor-code="008"
                data-sb-product-name="Гавайская"
                data-sb-product-price="990"
                data-sb-product-quantity="1"
                data-sb-product-img="img/pizza_8.png">
                    <img src={image7}/>
                </button>
                <div className="product__quantity"></div>

        </div>
        <div className="product product_9">
            <img src={pizza_9} className="menu_photo" alt="Бургер"/>
            <div className="menu_text">
                <h1 className="menu_title">Цыпленок</h1>
                <h2 className="menu_price">990 <span>₽</span></h2>
            </div>
            <div>  
                <h3 className="menu_subtitle">Цыпленок, моцарелла, сыры чеддер<br/> и пармезан, сырный соус, томаты, <br/>фирменный соус альфредо, чеснок</h3>
            </div>
            <div className="menu_mark">
                <h3>Доступно</h3>
                <img src={image5} alt=""/>
            </div>
            <div className="menu_stars"><img src="img/stars.svg" alt=""/></div>
            <button className="menu_button_plus"
                 data-sb-id-or-vendor-code="009"
                data-sb-product-name="Цыпленок"
                data-sb-product-price="990"
                data-sb-product-quantity="1"
                data-sb-product-img="img/pizza_9.png">
                    <img src={image7}/>
                </button>
                <div className="product__quantity"></div>

        </div>
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
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

    <link rel="stylesheet" href="smartbasket/css/smartbasket.min.css"/>

<div className="smart-basket__wrapper"></div>

<script src="./smartbasket/js/smartbasket.min.js"></script>


    </body>

        )
    }

}