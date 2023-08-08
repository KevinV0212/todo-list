import {item, list, collection} from './todo.js'
import {uiHandler} from './ui.js'
import './style.css';
const content = document.querySelector('.content');
const handler = uiHandler(content);
handler.loadPage();
