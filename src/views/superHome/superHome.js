define([
	"text!../../../../template/superHome.html",
	"mediator",
	"less!../../../../../../../less/superHome"
],function(superHomeTemplate, mediator){
	var self;
	return function(){
		this.render = function() {
			self = this;
			$('.dataContent').html(superHomeTemplate);	
			self._addEvent();
		},
		this._addEvent = function(){
			function friend(name){
				//console.log(name);
				return {
					name:ko.observable(name),
				};
			}
			function classmate(name){
				console.log(name);
				return {
					name:ko.observable(name),
					removeClassmate: function(){
						console.log('dfsdf');
						viewModel.classmates.remove(this);
					}
				};
			}
			viewModel = {
				firstText:ko.observable("My"),
				lastText:ko.observable("Goddd"),
				firstName:"sonali",
				lastName:"kokare",
				friends:ko.observableArray([new friend('amit'), new friend('sachin'), new friend('bunty')]),
				addFriend: function(){
					this.friends.push(new friend("yogesh"))
				},
				classmates:ko.observableArray([new classmate('shri'), new classmate('prasad'), new classmate('ashwin')]),
				addClassmate: function(){
					this.classmates.push(new classmate("mangesh"))
				},
			};
			viewModel.jointText = ko.dependentObservable(function(){
				console.log(viewModel)
				return this.firstText()+"  "+this.lastText();
			},viewModel);
			viewModel.fullName = ko.dependentObservable(function(){
				console.log(viewModel)
				return this.firstName+"  "+this.lastName;
			},viewModel);

			ko.applyBindings(viewModel);
		}
	}
});