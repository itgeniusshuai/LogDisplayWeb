
const httpUtils = {
    httpGet:function(url,callback,errCallBack,headers){
        fetch(url,{method: 'GET'}).then((data) => data.json).then( data => {
            callback(data)
        }).catch(
            (err) => {
              errCallBack(err)
            }
        );
    },
    httpPost:function(url,callback,errCallBack,params){
        let formData = new FormData()
        fetch(url,{body:params,method: 'POST'}).then((data) => data.json).then( data => {
            callback(data)
        }).catch(
            (err) => {
              errCallBack(err)
            }
        );
    }
}