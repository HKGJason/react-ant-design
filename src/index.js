import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'
import { Layout, Menu, Icon } from 'antd';
import SiderDemo from './SiderDemo.js'
import {BrowserRouter as Router} from 'react-router-dom'



  
  ReactDOM.render(
  <Router><SiderDemo /></Router>
        , document.getElementById('root'));

  serviceWorker.unregister();
