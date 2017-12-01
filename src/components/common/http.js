
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
        let paramsArr = []
        for(let k in params){
            paramsArr.push(k+'='+JSON.stringify(params[k]))
        }
        let paramsStr = paramsArr.join('&')
        alert(paramsStr)
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            mode:'no-cors',
            body: paramsStr
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