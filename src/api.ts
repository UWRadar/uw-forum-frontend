import ServerConfig from "./ServerConfig";

export const getNotificationsAPI = () => {
	const api = ServerConfig.SERVER_URL + ServerConfig.GET_NOTIFICATION;
	console.log(api);
	return fetch(api, {
		method: "GET",
	});
};
