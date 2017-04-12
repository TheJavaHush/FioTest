import Backbone from 'backbone';

const ventaModel = Backbone.Model.extend({
	initialize: function(){
		this.on("change:resultado", function(model){
			alert('change resultado');
		})
	}
});

export default ventaModel;
	




	
