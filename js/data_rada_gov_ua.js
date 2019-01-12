function ___ajax(m,url, fun){
    $.ajax({
        headers: { "Access-Control-Allow-Origin": "*"},
        type: m,
        url: url,
        beforeSend: function(xhr){xhr.withCredentials = true;},
        success: function(data, textStatus, request){fun(data);}         
    });
}

//https://data.rada.gov.ua/ogd/mps/skl8/mp-parties.txt
function mps_skl_mp_parties_txt(skl = 8,fun){
    return ___ajax('GET','https://data.rada.gov.ua/ogd/mps/skl8/mp-parties.txt',fun)
}