'use strict'

import { core, object } from 'metal';
import Storage from 'zssport-storage';

class ModelUtil {
	/**
	 * Returns an Object if value isObject
	 * @param {number or Object} value
	 * @return {Object or undefined}
	 */
	static getObject(value) {
		var competition;

		if (core.isObject(value)) {
			ModelUtil.localStorage.setJSONItem(value.id.toString(), value);

			competition = value;
		}
		else if (core.isNumber(value)) {
			var object = ModelUtil.localStorage.getJSONItem(value.toString());

			if (object) {
				competition = object;
			}
		}
		
		return competition;
	}
};

ModelUtil.localStorage = new Storage(Storage.TYPE.LOCAL);

export default ModelUtil;