import Backbone from 'backbone';
import ProductosApi from './../api/index';
import ventaModel from './../models/ventaModel';
import Metodos from './../api/metodosPublicos';


const VentasView = Backbone.View.extend({
  
  initialize: function () {
	this.listaVenta = new ventaModel();
	ProductosApi.getVentas().then(response =>{
					console.log('Sucess');
					let data = Object.assign(response.data);
					
					let ventasC = Metodos.groupBy(data,'city');				
					let sumaValor  = Metodos.sumaLista(ventasC,'rate');
					let listaCitMay = Metodos.orderByList(sumaValor,'',5).filter(function(city){ return city[0] != "";});
					
					let ventasM = Metodos.groupBy(data,'date');
					let sumMesVenta = Metodos.sumaLista(ventasM,'rate');
					let promMesVenta = Metodos.promByMonth(sumMesVenta);
					
					let ventasClientes = Metodos.groupBy(data,'customer');
					let sumaClientes = Metodos.sumaLista(ventasClientes,'rate');
					let listaCliBajos = Metodos.orderByList(sumaClientes,'less to more',5);
					
					
					this.render(
					"Las 5 ciudades con Mayor venta de a&ntilde;o:<br>"+ listaCitMay.join("<br>")+"<br>"+
					"<br>Total de ventas  que no tienen ciudades: "+sumaValor[""]+"<br>"+
					"<br>Promedio venta por mes:<br>"+ mostrarTxt(promMesVenta) + "<br>"+
					"<br>Los 5 clientes con Menores ventas:<br>" + listaCliBajos.join("<br>")
							
					);
				}).catch(error =>{
					console.log(error);
		
				});
	
	this.render("Cargando...");
  },
  render: function (mgs) {
	
	this.$el.html(mgs);
    
  }
});


function mostrarTxt(obj){
	let txt = '';
	for(let key in obj)
		txt = txt + " " + key + ":" + obj[key];
	return txt;
}	


export default VentasView;