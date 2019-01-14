class lacationLib{
    
    setUrlParameters(key,val,one = true){
        var baz = location.href.split("?");
        var baza = baz[0];
        if(baz.length == 2)
            var ar = baz[1].split("&");
        else
            var ar = [];

        var b = true;
        if(ar == undefined){
            ar =[];
        }else{
            if(one){
                for (var i = 0; i < ar.length; i++) {
                    var arV = ar[i].split("=");
                    if(arV.length == 2 ){
                        if(arV[0] == key){
                            ar[i] = key + "=" + val;
                            b = false;
                            break;
                        }
                    }
                }
            }else{
                var s = key + "=" + val;
                for (var i = 0; i < ar.length; i++) {
                    if(ar[i] == s){
                        b = false;
                        break;
                    }
                }
            }
        }
        if(b){        
            ar.push(key + "=" + val);
        }
        try {
            history.pushState(null, null,baza + "?" + ar.join("&"));
        } catch(e) {} 
    }

    delUrlParameters(key,one = true){
        var baz = location.href.split("?");
        var baza = baz[0];
        if(baz.length == 2)
            var ar = baz[1].split("&");
        else
            return;

        if(ar == undefined){
            return;
        }else{ 
            if(one){
                for (var i = 0; i < ar.length; i++) {
                    var arV = ar[i].split("=");
                    if(arV.length == 2 ){
                        if(arV[0] == key){
                            ar.splice(i,1);
                            break;
                        }
                    }
                }
            }else{
                key = encodeURI(key);
                for (var i = 0; i < ar.length; i++) {
                    if(ar[i] == key){
                        ar.splice(i,1);
                        break;
                    }
                }
            }
        }
        try {
            history.pushState(null, null,baza + "?" + ar.join("&"));
        } catch(e) {} 
    }

    getUrlParameters(key){
        var baz = location.href.split("?");
        if(baz.length == 2)
            var ar = baz[1].split("&");
        else
            return "";

        for (var i = 0; i < ar.length; i++) {
            var arV = ar[i].split("=");
            if(arV.length == 2 ){
                if(arV[0] == key){
                    return arV[1];
                }
            }
        }

    }

}
