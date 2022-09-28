//Layouts
import { default as HeaderOnly } from '~/components/Layout/HeaderOnly/index';

import Home from '~/pages/Home/index';
import Following from '~/pages/Following/index';
import Profile from '~/pages/Profile/index';
import Upload from '~/pages/Upload/index';

//public routes
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload, layout : HeaderOnly},
]

const privateRoutes = [
    
]

export { publicRoutes, privateRoutes }