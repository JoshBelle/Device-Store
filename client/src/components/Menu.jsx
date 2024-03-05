import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <Link to=".">Главная</Link>
            <Link to="login">Войти</Link>
            <Link to="registration">регистрация</Link>
            <Link to="bascket">Корзина</Link>
            <Link to="device">Магазин</Link>
            <Link to="device/:id">Товар</Link>
        </>
    );
};

export default Menu;
