import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchBar from './components/Search'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <App/>
    </div>,

    document.getElementById('root'));
registerServiceWorker();
