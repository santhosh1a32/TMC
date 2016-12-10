class poolService{
	constructor($http){
		this.$http = $http;
	}

	sendPoolData(){
		var promise = this.$http.post("http://localhost:3000/api/postFeed", data).then(response=>{
			console.log(response.data);
			return response.data;
		}, error=>{
			return error;
		});
		return promise;
	}
}

poolService.$inject = ["$http"];

export default angular.module('poolService', [])
	.service('poolService', poolService)
	.name;