import HomeComponent from '../view/home/index'
import HotComponent from '../view/hot/index'
import ZhuanLanComponent from '../view/zhuanlan/index'
import LoginComponent from '../view/login/index'
/** 
 * 路由配置项
*/
export default [
    {path:'/',name:'home',component:HomeComponent},
    {path:'/hot',name:'hot',component:HotComponent},
    {path:'/zhuanlan',name:'zhuanlan',component:ZhuanLanComponent},
    {path:'/login',name:'login',component:LoginComponent}
]