import testView from './views/testView';
import ventasView from './views/ventasView';
import Backbone from 'backbone';

const AppRouter = Backbone.Router.extend({
  routes: {
	"*filter": "setFilter"
	
  },
  setFilter: function(params,id) {
    window.filter = params.trim() || '';
	console.log(window.filter);
	switch(window.filter){
		case 'venta':
			let ventas = new ventasView({el: '#app'});
			
			break;
		case 'xml2json':
			let test = new testView({el: '#app'});
			break;
		default:
			document.getElementById('app').innerHTML = '';
			break;
	}
  }
});

export default AppRouter;