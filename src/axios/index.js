import Jsonp from 'jsonp';
import { Promise } from 'core-js';

export default class Axios{
    static jsonp(options){
        return new Promise((resolve, reject)=>{
            Jsonp(options.url,{
                param:'callback'
            },function(err, response){
                // TODO
                console.log(response);
                if (response.status === 'success') {
                    resolve(response);
                }else{
                    reject(response.message);
                }
            })
        })
    }

}