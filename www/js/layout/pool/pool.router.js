function PoolRoutes($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('main.pool', {
			url: "/pool",
			templateUrl: 'js/layout/layout.html',
			controller: 'layoutCtrl',
			controllerAs: 'vm'
		})
}

export default PoolRoutes;