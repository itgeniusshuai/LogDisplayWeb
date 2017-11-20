import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import NoteAdd from './components/note/note_add'
import IndexRoute from './components/route/indexRoute'

ReactDOM.render(<IndexRoute parentDir='java'/>, document.getElementById('root'));
registerServiceWorker();
