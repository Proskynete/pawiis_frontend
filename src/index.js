import React from 'react';
import { render } from 'react-dom';
import App from './app';

import * as serviceWorker from './serviceWorker';

const rootElement = document.querySelector('#root');
render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	rootElement
);

serviceWorker.unregister();
