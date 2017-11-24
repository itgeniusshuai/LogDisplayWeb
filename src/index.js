import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import NoteAdd from './components/note/note_add'
import IndexRoute from './components/route/indexRoute';
import Home from './components/home/home'

ReactDOM.render(<Home parentDir='java'/>, document.getElementById('root'));
registerServiceWorker();
