let mesEspañol = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

class MetodosPub{
	
	static groupBy(xs,key) {
		return xs.reduce(function(rv, x) {
			(rv[x[key]] = rv[x[key]] || []).push(x);
			return rv;
			}, {});
	};
	
	static sumaLista(obj,param){
		let resultado = {};
		for(let key in obj){
		 resultado[key] = obj[key].reduce(function(rv, x) {
			 return parseFloat(+rv + +x[param]).toFixed(2);;
			},0);
		}
		
		return resultado;
	};
	
	static promByMonth(obj){
		let resultado = {};
		
		for(let key in obj){
			let arrayFecha = key.split("/");
			let month = mesEspañol[new Date(arrayFecha[2],arrayFecha[1],arrayFecha[0]).getMonth()];
			if(!resultado.hasOwnProperty(month)){
				resultado[month] = +obj[key];
				resultado[month + 'contador'] = 1;
			}else{
				resultado[month] = +resultado[month] + +obj[key];
				resultado[month + 'contador'] = +resultado[month + 'contador'] + 1;
			}
		}
		
		for(let key in resultado){
			if(!key.includes('contador'))
				resultado[key] = parseFloat(+resultado[key] / +resultado[key+'contador']).toFixed(2);
			else
				delete resultado[key];
		}
		return resultado;
	};
	
	static orderByList(obj,order,quantity){
		let sortList = [];
		for(let key in obj)
			sortList.push([key,+obj[key]]);
		sortList.sort(function(a,b){
			if(order === 'less to more')
				return a[1]-b[1];
			else
				return b[1]-a[1];
		});
		return sortList.slice(0,quantity);
	};
	
	static groupByCount(xs){
		let areas = [];
		
		for(let key in xs){
			let child = xs[key];
			
			let chdi  = child['AREA_CODE'];
			let initGroup = Math.floor(+chdi/100) * 100;
			let endGroup  = +chdi%100 > 0 ? +initGroup + 100: +chdi%100; 
			let nomArea = initGroup + "-" +endGroup;
			
			if(areas.length > 0){
				let son = areas.find(function(val){
					return val['area'] == nomArea;
					});
					
				if(son === undefined){
					areas.push({ 'area':nomArea, 'cities':[child] });
				}else{
					son.cities.push(child);
				}
			
			}else
				areas.push({ 'area':nomArea, 'cities':[child] });
			
				
		}
		return areas;
	};
}


export default MetodosPub;