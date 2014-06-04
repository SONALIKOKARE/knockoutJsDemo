define([
	'mediator',
	'routie'
],function(mediator){
		
	mediator.subscribe("navigateTo", function(data, routiePath) {
		//console.log(data);
		routie(data);
	});
	mediator.subscribe("vModule", function(data) {
		//console.log(data);
		require(['../views/'+data+'/'+data],function(Data){
			var data = new Data();
			data.render();
		});
	});
	/*mediator.subscribe("vSubModule", function(data) {
		//console.log(data);
		require(['../views/'+data+'/'+data],function(Data){
			var data = new Data();
			data.render();
		});
	});*/
	mediator.subscribe("openReadModal", function(data) {
		//console.log(data);
		require(['../views/readModal'],function(Modal){
			var modal = new Modal({'categoryListBooks':data,'currentPage':data});
			modal.render();
		});
	});

	routie({
		'': function() {
			mediator.publish("vModule",'superHome');
		},
		'superHome': function() {
			mediator.publish("vModule",'superHome');
		}
	});
});
