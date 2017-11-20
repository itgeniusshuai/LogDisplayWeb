
const httpUtils = {
    httpGet:function(url,callback,errCallBack,params,headers){
        fetch(url).then((data) => data.json).then( data => {
            callback(data)
        }).catch(
            (err) => {
              errCallBack(err)
            }
        );
    }
}