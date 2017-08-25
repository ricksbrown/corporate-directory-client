import Vue from 'vue';
import Router from 'vue-router';
import UnitTypes from '@/components/UnitTypes';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'UnitTypes',
			component: UnitTypes
		}
	]
});
