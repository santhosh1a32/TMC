function LayoutRoutes($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('main', {
			url: "/main",
			templateUrl: 'js/layout/layout.html',
			controller: 'layoutCtrl',
			controllerAs: 'vm'
		})
}

export default LayoutRoutes;