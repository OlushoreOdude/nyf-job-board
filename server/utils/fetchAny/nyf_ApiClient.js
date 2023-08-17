import logger from "../logger";

import { createJsearchOptions } from "./rapidOptions";
import apiKeysLoader from "../apiKeysLoader";
const { rapidKey } = apiKeysLoader;
import { rapidHost } from "./rapidHosts";
import axios from "axios";

class Nfy_ApiClient {
	constructor() {
		this.apiKey = rapidKey;
		this.baseHeaders = {
			"Content-Type": "application/json",
			"X-RapidAPI-Key": this.apiKey,
		};
	}

	async makeRequest(url, options) {
		try {
			const response = await fetch(url, options);
			const data = await response.json();
			return data;
		} catch (error) {
			logger.error("API Request Error:", error);
			throw error;
		}
	}
	async makeRequestAxios(options) {
		try {

			const response = await axios(options);
			const data = await response.data;
			return data;
		} catch (error) {
			logger.error("API Request Error:", error);
			throw error;
		}
	}

	async searchJSearchAPI(routObj) {
    const { method, params } = createJsearchOptions(routObj);
		const jsearchOptions = {
			method: method,
			url: "https://jsearch.p.rapidapi.com/search",
			params: params,
			headers: { ...this.baseHeaders, "X-RapidAPI-Host": rapidHost.jsearch },
		};
		const dataObj = await this.makeRequestAxios(jsearchOptions);
		const { data } = dataObj;
		return data;

	}

	async searchArbeitNowAPI(routObj) {
    const { method } = createJsearchOptions(routObj);
		const arbeitNowOptions = {
			method: method,
			url: "https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api",
			headers: { ...this.baseHeaders, "X-RapidAPI-Host": rapidHost.arbitNow },
		};
const dataObj = await this.makeRequest(arbeitNowOptions.url, arbeitNowOptions);
const { data } = dataObj;
		return data;
	}
}

export default Nfy_ApiClient;