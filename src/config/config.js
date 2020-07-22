export const config = {
	handleGetUrl: () => {
		const url = {
			development: 'http://localhost:3000',
		};
		return url[this.handleGetEnvironment()];
	},
	handleGetEnvironment: () => 'development',
	handleGetEntryPointApi: (path) => `/node/api/${path}`,
};
