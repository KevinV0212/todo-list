import {item, list} from './todo.js'
const test = item('title', 'desc', 'date', 'priority');
console.log(test);

const testList = list('name');
testList.addItem(test);
console.log(testList.items);
testList.deleteItem('title');
console.log(testList.items);