import ServerConfig from "./ServerConfig";

const typeList = ["今日最新", "租房", "吃瓜", "学习", "华大课友"];

function fetchJson(input: RequestInfo | URL, init?: RequestInit | undefined) {
	return fetch(input, init).then((res) => {
		return res.json();
	});
}

export const getPosts = (typeSelected: number) => {
	const url = ServerConfig.SERVER_URL + ServerConfig.GET_POST_BY_TYPE +
		typeList[typeSelected];
	return fetchJson(url);
};

export const getTrendy = () => {
	const url = ServerConfig.SERVER_URL + ServerConfig.GET_TRENDY;
	return fetchJson(url);
};
