import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import Presenter from './views';
import './assets/scss/main.scss';
import * as serviceWorker from './serviceWorker';

const Main = () => (
	<Provider store={store}>
		<BrowserRouter basename='/'>
			<Presenter />
		</BrowserRouter>
	</Provider>
);
const root = document.getElementById('root');
render(<Main />, root);

serviceWorker.unregister();
