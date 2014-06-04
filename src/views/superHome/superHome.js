define([
	"text!../../../../template/superHome.html",
	"mediator",
	"backbone",
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
			var viewModel = {
				firstName:ko.observable("sch"),
				lastName:ko.observable("kokare")
			};
			//console.log(viewModel.firstName);

			viewModel.fullName = ko.dependentObservable(function(){
				console.log(viewModel)
				return "amit kokare"+viewModel.firstName;
			},viewModel);

			ko.applyBindings(viewModel);
		}
	}
});