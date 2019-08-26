import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Routers from './_router/index';
import { LocaleProvider, DatePicker, message } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import "./App.scss";

moment.locale('zh-cn');
/**
 * 入口文件
 * @export
 * @class App
 * @extends React.Component
 */
export default class App extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <Router>
        <div className="App">
        {Routers.map((item,index)=>{
          //此处可以执行其他业务逻辑
          //如：路由拦截
          return <Route exact key={index} path={item.path} component={item.component} />
        })}
        </div>
      </Router>
    );
  }
}
