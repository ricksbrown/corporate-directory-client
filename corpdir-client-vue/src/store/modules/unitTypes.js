/*
 * vuex storage module for UnitTypes
 *
 * contains actions, getters and mutations
 */
import api from "../../api/unitType";
import * as types from "../mutation-types";

const state = {
	all: []
};

// getters
const getters = {
	allUnitTypes: state => state.all
};

// actions
const actions = {
	getAllUnitTypes: function({ commit }) {
		api.getAllUnitTypes().then(unitTypes => {
			commit(types.FETCH_UNITTYPES, { unitTypes });
		});
	},
	deleteUnitType ({ commit }, unitType) {
		if (unitType && unitType.id) {
			api.deleteUnitType(unitType).then(function() {
				commit(types.DELETE_UNITTYPE, unitType);
			});
		}
	},
	updateUnitType({ commit }, unitType) {
		if (unitType && unitType.id) {
			api.updateUnitType(unitType).then(function(newUnitType) {
				commit(types.UPDATE_UNITTYPE, newUnitType);
			});
		}
	},
	createUnitType({ commit }, unitType) {
		if (unitType && unitType.description) {
			api.createUnitType(unitType).then(function(newUnitType) {
				commit(types.CREATE_UNITTYPE, newUnitType);
			});
		}
	}
};

// mutations
const mutations = {
	[types.FETCH_UNITTYPES] (state, { unitTypes }) {
		state.all = unitTypes;
	},
	[types.DELETE_UNITTYPE] (state, unitType) {
		if (unitType && unitType.id) {
			state.all = state.all.filter(function (next) {
				return next.id !== unitType.id;
			});
		} else {
			console.error("Expected unitType but got", unitType);
		}
	},
	[types.UPDATE_UNITTYPE] (state, unitType) {
		if (unitType && unitType.id) {
			for (let i = 0; i < state.all.length; i++) {
				let next = state.all[i];
				if (next.id === unitType.id) {
					console.log("Updating unitType from/to", next, unitType);
					state.all.splice(i, 1, unitType);
					break;
				}
			}
		} else {
			console.error("Expected unitType but got", unitType);
		}
	},
	[types.CREATE_UNITTYPE] (state, unitType) {
		if (unitType && unitType.businessKey) {
			state.all.push(unitType);
		} else {
			console.error("Expected unitType but got", unitType);
		}
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
