import Admin from './pages/Admin';
import Bascket from './pages/Bascket';
import DevicePages from './pages/DevicePages';
import LogIn from './pages/LogIn';
import Main from './pages/Main';
import Registration from './pages/Registration';
import Shop from './pages/Shop';
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    REGISTRATION_ROUTE,
} from './utils/constant';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
    {
        path: BASKET_ROUTE,
        Component: Bascket,
    },
];
export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main,
    },
    {
        path: LOGIN_ROUTE,
        Component: LogIn,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration,
    },
    {
        path: DEVICE_ROUTE,
        Component: Shop,
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePages,
    },
];
