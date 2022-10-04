import config from '~/config';

//Layouts
import { default as HeaderOnly } from '~/components/Layout/HeaderOnly/index';

import Home from '~/pages/Home/index';
import Following from '~/pages/Following/index';
import Profile from '~/pages/Profile/index';
import Upload from '~/pages/Upload/index';
import Search from '~/pages/Search';

//public routes
const publicRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.following, component: Following},
    {path: config.routes.profile, component: Profile},
    {path: config.routes.upload, component: Upload, layout : HeaderOnly},
    {path: config.routes.search, component: Search, layout : null},
]

const privateRoutes = [
    
]

export { publicRoutes, privateRoutes }