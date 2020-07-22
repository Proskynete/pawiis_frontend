import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Presenter from './views';

import * as serviceWorker from './serviceWorker';

const Main = () => (
	<BrowserRouter basename='/'>
		<Presenter />
	</BrowserRouter>
);
const root = document.getElementById('root');
render(<Main />, root);

serviceWorker.unregister();
