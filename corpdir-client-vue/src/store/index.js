import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import unitTypes from './modules/unitTypes';

Vue.use(Vuex);

/*
	RB NOTE: it is absolutely critical to use VUEX in strict mode to avoid issues with two way binding directly mutating state.
	That said, it has some performance overhead, so turn off strict mode in production.
 */
export default new Vuex.Store({
	strict: true,
	actions,
	getters,
	modules: {
		unitTypes
	}
});
