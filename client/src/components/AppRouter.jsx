import { Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import RedirectRoutes from '../utils/routes/RedirectRoutes';
import { useContext } from 'react';
import { Context } from '..';

const AppRouter = () => {
    const { user } = useContext(Context);
    console.log(user);
    return (
        <Routes>
            {user &&
                authRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<RedirectRoutes />} />
        </Routes>
    );
};

export default AppRouter;
