import {item, list, collection} from './todo.js'
import {uiHandler} from './ui.js'

const content = document.querySelector('.content');
const handler = uiHandler(content);
handler.loadPage();
