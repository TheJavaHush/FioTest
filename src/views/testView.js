import Backbone from 'backbone';
import XmlApi from './../api/apiXml';
import ParseString from 'xml2js';
import MetodosPub from './../api/metodosPublicos';

const TestView = Backbone.View.extend({
  initialize: function () {
		XmlApi.postXml('LA').then(response =>{
			let dataXml = response.data;
			let dataJson = {};
			console.log(dataXml);
			ParseString.parseString(dataXml, function(err,result){
				dataJson = Object.assign(result);
			
			});
			dataJson = dataJson.NewDataSet.Table;
					
			let formtaJson = MetodosPub.groupBy(dataJson,'ZIP');
			
			let jsonVar = {};
			for(let key in formtaJson){
				formtaJson[key].forEach(function(data){
					let jsonChild = {};
					for(let u in data){
						jsonChild[u] = data[u].join();
					}
					delete jsonChild['ZIP'];
					jsonVar[key] = jsonChild;
				});
			};
			
			console.log(JSON.stringify(jsonVar));
			let resultado = MetodosPub.groupByCount(jsonVar);
			this.render(JSON.stringify(resultado));
			
		}).catch(error =>{
			console.log(error);
		});
	
    this.render("Cargando...");
  },
  render: function (msg) {
    this.$el.html(msg);
  }
});

 

export default TestView;