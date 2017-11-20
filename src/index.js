import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import NoteAdd from './components/note/note_add'

ReactDOM.render(<NoteAdd parentDir='java'/>, document.getElementById('root'));
registerServiceWorker();
