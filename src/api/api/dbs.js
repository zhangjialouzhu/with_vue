//dbs组件方法
import fetch from 'api/fetch';
import {fetchJson} from 'api/fetch';
const debug = process.env.NODE_ENV !== 'production';
import {HOST} from 'api/config'


const getIndex = function(data) {
  const url = (debug ? 'ESData':'') + '/getIndexs';
  return fetch({
		url,
		method: 'POST',
		data: data
	})
};

const getData = function(data) {
  const url = (debug ? 'ESData':'') + '/getData';
  return fetch({
    params:{data},
    url,
    method: 'POST',
    data: data
  })
};
const showRecord = function(data) {
  const url = (debug ? 'ESData':'') + '/showRecord';

  return fetch({
    params:{data},
    url,
    method: 'POST',
    data: data
  })
};
const showPageRecord = function(data) {
  const url = (debug ? 'ESData':'') + '/showPageRecord';

  return fetch({
    params:{data},
    url,
    method: 'POST',
    data: data
  })
};


export { getIndex,getData,showRecord,showPageRecord };



