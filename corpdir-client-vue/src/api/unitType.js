/*
 * This module is responsible for interactions with the persistent storage of UnitTypes.
 *
 * Note that it:
    - is vanilla javascript
    - contains no UI code
    - is not framework specific
    - could be used anywhere
 */

const apiUrl = "http://localhost:8080/api/v1/unittypes";  // TODO externalize
const headers = {
	'Accept': 'application/json, text/plain, */*',
	'Content-Type': 'application/json'
};

export default {
	/**
	 * Fetches the full list of UnitTypes.
	 * @returns {Promise.<TResult>|*}
	 */
	getAllUnitTypes () {
		return callApi(apiUrl);
	},
	/**
	 * Deletes the given UnitType
	 * @param unitType The UnitType to delete
	 * @returns {Promise.<TResult>|*}
	 */
	deleteUnitType (unitType) {
		return callApi(apiUrl + "/" + unitType.businessKey, { method: 'DELETE' });
	},
	/**
	 * Update an existing UnitType
	 * @param unitType The new UnitType
	 * @returns {Promise.<TResult>|*}
	 */
	updateUnitType (unitType) {
		var payload = JSON.stringify(unitType);
		return callApi(apiUrl + "/" + unitType.businessKey, {
			method: 'PUT',
			body: payload });
	},
	/**
	 * Update a new UnitType
	 * @param unitType The new UnitType
	 * @returns {Promise.<TResult>|*}
	 */
	createUnitType (unitType) {
		var payload = JSON.stringify(unitType);
		return callApi(apiUrl, {
			method: 'POST',
			body: payload });
	}
};

/**
 * Helper for calling the web API.
 * @param url The restful URL.
 * @param args headers, method, body...
 * @returns {Promise.<TResult>|*}
 */
function callApi(url, args) {
	var fetchArgs = args || { headers };
	if (!fetchArgs.headers) {
		fetchArgs.headers = headers;
	}
	return fetch(url, fetchArgs).then(response => getPayload(response));
}

/**
 * Extracts the meaningful payload from the response.
 * @param response
 * @returns {Promise.<TResult>|*}
 */
function getPayload(response) {
	return response.text().then(function(txt) {
		var obj = JSON.parse(txt);
		if (obj && obj.data) {
			return obj.data;
		}
		return obj;
	});
}
