import {get} from 'axios';

let path = 'https://forms.na1.netsuite.com/app/site/hosting/scriptlet.nl?script=408&deploy=1&compid=3803303&h=768e554d1169907e8957',
	conf = {
		headers: {
			'X-Parse-Application-Id': 'app',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET'
			
		}
	};


	
class ProductosApi{
	
	static getVentas() {
		return get(path);
	};
	
	
	
}
	
export default ProductosApi;