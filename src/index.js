import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Favicon from 'react-favicon'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<div>
<Favicon url={'https://images.pexels.com/photos/922511/pexels-photo-922511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}/>
<App />
</div>, document.getElementById('root'));
registerServiceWorker();
