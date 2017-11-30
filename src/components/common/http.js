
const HttpUtils = {
    httpGet:function(url,callback,errCallBack,headers){
        fetch(url,{method: 'GET'}).then((data) => data.json()).then( data => {
            callback(data)
        }).catch(
            (err) => {
              errCallBack(err)
            }
        );
    },
    httpPost:function(url,params,callback,errCallBack){
        let formData = new FormData();  
        formData.append("id",'23');  
        formData.append("password","admin123");  
        fetch(url,{method: 'POST',body:'id=3',mode : 'cors', 
        }).then((data) => data.json()).then( data => {
            callback(data)
        }).catch(
            (err) => {
              errCallBack(err)
            }
        );
    }
}

export default HttpUtils;