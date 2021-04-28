import React from 'react';
import {render} from 'react-dom';

import App from './App';

render(<h1>Hello to React</h1>, document.getElementById('app'));

setTimeout(function () {
    render(<App/>, document.getElementById('app'));
}, 5000);

