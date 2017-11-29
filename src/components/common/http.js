
const httpUtils = {
    httpGet:function(url,callback,errCallBack,params,headers){
        fetch(url,{body:params,method: 'GET'}).then((data) => data.json).then( data => {
            callback(data)
        }).catch(
            (err) => {
              errCallBack(err)
            }
        );
    },
    httpPost:function(url,callback,errCallBack,params){
        fetch(url,{body:params,method: 'POST'}).then((data) => data.json).then( data => {
            callback(data)
        }).catch(
            (err) => {
              errCallBack(err)
            }
        );
    }
}