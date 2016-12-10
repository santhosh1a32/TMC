class poolCtrl {
	constructor($state,poolService){
		this.$state = $state;
		this.poolService = poolService;
		this.poolInfo = {};
		
	}

	submitPoolInfo(){
		console.log("calling submit");
		this.poolService.sendPoolData(this.poolInfo).then(data => {
			console.log("service success");
		});
	}
}

poolCtrl.$inject = ['$state','poolService'];

export default poolCtrl;