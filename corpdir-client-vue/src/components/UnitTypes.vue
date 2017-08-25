<template>
	<div>
		<!-- Example of using 3rd party component library -->
		<ui-autocomplete
			help="Select the Unit Type"
			label="Unit Type"
			name="unit_type"
			placeholder="Enter the Unit Type Code"
			:keys="{ label: 'description', value: 'businessKey', image: 'image' }"
			v-model="currentValue"
			:suggestions="unitTypes"
		></ui-autocomplete>

		<!-- Simple CRUD for UnitType -->
		<fieldset>
			<legend>Add new UnitType</legend>
			<label>Key<input name="businessKey" /></label>
			<label>Description<input name="description" /></label>
			<button
				@click="createUnitType">
				Create
			</button>
		</fieldset>
		<label></label>
		<ul>
			<li v-for="u in unitTypes">
				<label>ID <input
					readonly
					name="id"
					:value="u.id"/></label>
				<label>Key <input
					name="businessKey"
					:value="u.businessKey"
					@change="updateUnitType"/></label>
				<label>Description <input
					:data-id="u.id"
					name="description"
					:value="u.description"
					@change="updateUnitType"/></label>
				<button
					@click="deleteUnitType(u)">
					Delete
				</button>
			</li>
		</ul>
	</div>
</template>



<script>
	import { mapGetters } from 'vuex';
	import getAncestorOrSelf from '../util/getAncestorOrSelf';
	import formDataToEntity from '../util/formDataToEntity';

	function clearInputs(inputs) {
		Array.prototype.forEach.call(inputs, function(element) {
			element.value = "";
		});
	}

	export default {
		computed: mapGetters({
			unitTypes: 'allUnitTypes'
		}),
		methods: {
			deleteUnitType: function(unitType) {
				this.$store.dispatch('deleteUnitType', unitType);
			},
			updateUnitType: function(evt) {
				var target = evt.target,
					container = getAncestorOrSelf(target, "LI");
				if (container) {
					let inputs = container.querySelectorAll("input");
					let newUnitType = formDataToEntity(inputs);
					if (newUnitType.businessKey) {
						this.$store.dispatch('updateUnitType', newUnitType);
					} else {
						console.log('Cannot create unit type', newUnitType);
					}
				}
			},
			createUnitType: function(evt) {
				var target = evt.target,
					container = getAncestorOrSelf(target, "FIELDSET");
				if (container) {
					let inputs = container.querySelectorAll("input");
					let newUnitType = formDataToEntity(inputs);
					if (newUnitType.businessKey) {
						clearInputs(inputs);
						this.$store.dispatch('createUnitType', newUnitType);
					} else {
						console.log('Cannot create unit type', newUnitType);
					}
				}
			}
		},
		created () {
			this.$store.dispatch('getAllUnitTypes');
		},
		data() {
			return {
				currentValue: ''
			};
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
