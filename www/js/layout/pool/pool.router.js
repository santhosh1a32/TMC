function PoolRoutes($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('main.pool', {
			url: "/pool",
			templateUrl: 'js/pool/pool.html',
			controller: 'poolCtrl',
			controllerAs: 'vm'
		})
}

export default PoolRoutes;