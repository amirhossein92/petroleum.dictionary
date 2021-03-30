import {onSearch, onInputChanged} from './form/index.js';

window.onSearch = (e) =>{
    e.preventDefault();
    onSearch(e);
}
window.onInputChanged = (e) =>{
    onInputChanged(e);
}