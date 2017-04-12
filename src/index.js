import AppRouter from './routes';
import Backbone from 'backbone';
import ventaModel from './models/ventaModel'

const app = {};
app.Router = new AppRouter;
app.VentaModel = new ventaModel({title:'Hola mundo', completed: true});



Backbone.history.start();

/*get(path).then(response =>{
		console.log('Sucess');
		let dataRes = Object.assign(response.data);
		console.log(dataRes);
		document.getElementById('app').innerHTML = JSON.stringify(dataRes);
	}).catch(error =>{
		console.log(error);
		
	});*/
	




	
