<template>
	<div id="app">
		<h1>Corporate Directory Admin</h1>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
	};
</script>

<style>
	*, *::before, *::after {
		box-sizing: border-box;
	}

	html {
		font-size: 100%;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
