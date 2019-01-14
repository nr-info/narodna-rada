//https://data.rada.gov.ua/open/data/meta.json

//https://data.rada.gov.ua/ogd/mps/skl8/mp-parties.txt
function mps_skl_mp_parties_txt(skl = 8,fun){
    return ___ajax('GET','https://data.rada.gov.ua/ogd/mps/skl8/mp-parties.txt',fun)
}

//https://data.rada.gov.ua/ogd/mps/skl8/mp-parties.csv
function mps_skl_mp_parties_csv(skl = 8,fun){
    //return ___ajax('GET','https://data.rada.gov.ua/ogd/mps/skl'+skl+'/mp-parties.txt',fun)
    return $get('db/deputat/mp-parties.csv',fun);
}

class DataRadaGovUa{
    
    
    
    constructor(ajax) {
        
        this.ajax = ajax;
        this.versin = "1.2";
        this.url_baze = "https://data.rada.gov.ua";
        this.mps_skl_all = new mps_skl_all(this.___ajaxA1,this.url_baze);
    }
    
    ___ajax(m,url, fun){
        $.ajax({
            crossDomain: true,
            type: m,
            url: url,
            beforeSend: function(xhr){xhr.withCredentials = true;},
            success: function(data, textStatus, request){fun(data);}         
        });
    }
    
    ___ajaxA1(path,name,format, fun){
        $.ajax({
            type: "GET",
            url: 'https://www.mediator-allegro.com.ua/index.php?route=nr/nr/get&u='+this.url_baze+path+name+"."+format,
            beforeSend: function(xhr){xhr.withCredentials = true;},
            success: function(data, textStatus, request){fun(data);}         
        });
    }
    

    
}
//
/**
 * Загальна інформація про народних депутатів України (за всі скликання)
 * @link https://data.rada.gov.ua/ogd/mps/data/meta.json
 */
class mps_skl_all
{
    
    constructor(ajax,url_baze) {
        
        this.ajax = ajax;
        this.url_baze = url_baze;
        this.versin = "1.2";
        
    }
    //https://data.rada.gov.ua/ogd/mps/data/meta.json
    CheckActual(){
        
    }
    
    /**
     * 
     * @param {string} format json or csv
     * @param {function} fun
     */
    mp_parties(format = "json" ,fun){
        //return ___ajax('GET','ogd/mps/skl'+skl+'/mp-parties.txt',fun)
        return this.ajax("/ogd/mps/data/","mps-ids",format,fun);
    }
    
    
    mps_contacts_map(format,fun){
        //return ___ajax('GET','ogd/mps/skl'+skl+'/mp-parties.txt',fun)
        return this.ajax("/ogd/mps/data/","mps-ids","json",fun);
    }
    mp_parties_csv(skl = 8,fun){
        //return ___ajax('GET','ogd/mps/skl'+skl+'/mp-parties.txt',fun)
        return this.ajax("/ogd/mps/data/","mps-ids","csv",fun);
    }
    
    

}
//drgu = new DataRadaGovUa();
//drgu.mps_skl_all.mp_parties();