
function httpGet(url,params,headers){
    fetch(url).then((data) => {data}).then( data => {
        alert(data)
    }).catch(
        (err) => {
            return err;
        }
    );
};