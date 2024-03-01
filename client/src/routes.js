import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Bascket from './pages/Bascket';
import DevicePages from './pages/DevicePages';
import Shop from './pages/Shop';
import {
    ADMIN_ROUTE,
    BASCKET_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
} from './utils/consts';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: Admin,
    },
    {
        path: BASCKET_ROUTE,
        component: Bascket,
    },
];
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        component: Auth,
    },
    {
        path: SHOP_ROUTE,
        component: Shop,
    },
    {
        path: DEVICE_ROUTE + '/:id',
        component: DevicePages,
    },
];
