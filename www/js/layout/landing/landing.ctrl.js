class landingCtrl {
	constructor($state, landingService){
		this.postObj = {
			userId: "2208",
			name: "Vikrant Kumar",
			info: this.feed,
			date: new Date()
		};

		this.$state = $state;

		this.landingService = landingService;
		this.getFeedData();

		this.showPostTab = true;
		this.showPoolTab = false;
	}

	postFeed(){
		this.postObj.info = this.feed;
		console.log(this.postObj);
		this.landingService.postFeed(this.postObj).then(data =>{
			console.log(data);
			this.getFeedData();
			this.feed = null;
		});
	}

	getFeedData(){
		this.landingService.getFeedData().then(data=>{
			this.posts = data.reverse();
			console.log(this.posts);
		})
	}

	showPost(){
		this.showPostTab = true;
		this.showPoolTab = false;
	}

	showPool(){
		this.showPostTab = false;
		this.showPoolTab = true;
	}

	getLikeClass(tab){
		switch(tab){
			case "around": 
				if(this.showPostTab){
					return "active";
				}
				else{
					return " "
				}
			case "pool": 
				if(this.showPoolTab){
					return "active";
				}
				else{
					return " "
				}
		}
	}

	addPool(){
		this.$state.go('pool');
	}
}

landingCtrl.$inject = ['$state', 'landingService'];

export default landingCtrl;