import {post} from 'axios';
import qs from 'qs'

let path = 'http://www.webservicex.net/uszip.asmx/GetInfoByState',
	conf = {
		headers: {
			'X-Parse-Application-Id': 'app',
			'Content-Type': 'text/x-www-form-urlencoded',
			
			
		}
	};
	
class XmlApi{
	
	static postXml(state) {
		return post(path,qs.stringify({
			USState: state
		}));
	};
	
	
	
};

	
export default XmlApi;