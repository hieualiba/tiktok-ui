import routesConfig from '~/config/routes';

//Layouts
import { default as HeaderOnly } from '~/components/Layout/HeaderOnly/index';

import Home from '~/pages/Home/index';
import Following from '~/pages/Following/index';
import Profile from '~/pages/Profile/index';
import Upload from '~/pages/Upload/index';
import Search from '~/pages/Search';

//public routes
const publicRoutes = [
    {path: routesConfig.home, component: Home},
    {path: routesConfig.following, component: Following},
    {path: routesConfig.profile, component: Profile},
    {path: routesConfig.upload, component: Upload, layout : HeaderOnly},
    {path: routesConfig.search, component: Search, layout : null},
]

const privateRoutes = [
    
]

export { publicRoutes, privateRoutes }