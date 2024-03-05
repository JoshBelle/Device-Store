import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import '../index.css';
import { Context } from '../index';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { MAIN_ROUTE } from '../utils/constant';
import { observe } from 'mobx';

const NavBar = observe(() => {
    const { user } = useContext(Context);

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to={MAIN_ROUTE}>
                    YourStore{' '}
                </NavLink>
                {user.isAuth ? (
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={'outline-light'}>Админ панель</Button>
                        <Button variant={'outline-light'}>Войти</Button>
                    </Nav>
                ) : (
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button
                            variant={'outline-light'}
                            onClick={() => user.setIsAuth(true)}
                        >
                            Авторизация
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});

export default NavBar;
