import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from './components/loader';
import App from './views';
import store from './store';

import './assets/scss/main.scss';
import * as serviceWorker from './serviceWorker';

const Main = () => (
	<Suspense fallback={<Loader />}>
		<Provider store={store}>
			<BrowserRouter basename='/'>
				<App />
			</BrowserRouter>
		</Provider>
	</Suspense>
);
const root = document.getElementById('root');
render(<Main />, root);

serviceWorker.unregister();
