//dbs组件方法
import fetch from 'api/fetch';
import {fetchJson} from 'api/fetch';
const debug = process.env.NODE_ENV !== 'production';
import {HOST} from 'api/config'


const login = function(data) {
 // console.log(debug)
  const url = (debug ? 'YDH':'') + '/login';
	return fetch({
    param:{data},
    url,
		method: 'POST',
		data: data
	})
};
const test = function(data) {
  const url ='YDH'+'/quotes_service/api/json_v2.php/CN_MarketData.getKLineData?symbol=sz000001&scale=5&ma=5&datalen=1023';
  return fetch({
    //param:{data},
    url,
    method: 'POST',
    data: data
  })
};



export { login,test };



