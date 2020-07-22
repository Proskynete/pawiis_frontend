const handlers = {
	handleGetUrl() {
		const url = {
			development: 'http://localhost:3000',
		};
		return url[this.handleGetEnvironment()];
	},
	handleGetEnvironment() {
		return 'development';
	},
	handleGetEntryPointApi(path) {
		return `/node/api${path}`;
	},
};

export const getUrl = (path) =>
	`${handlers.handleGetUrl()}${handlers.handleGetEntryPointApi(path)}`;
