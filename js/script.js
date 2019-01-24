function setMenuItems(loc){
    loadContent(".info","content/"+loc+".html");
    return false;   
}
function loadContent(element, loc){
    $(element).load(loc);
}

function loadSelectRegione(elementName, jsonFile){
    $.getJSON('js/db/regione/'+jsonFile+'.json', function (json) {
        var element = $(elementName);
        element.empty();
        for (key in json.list) {
            element.append('<option value="'+json.list[key].id+'" selected>'+json.list[key].name+'</option>');        
        }
    });
}

function loadSelectR1(element){
    v = $(element).val();
    s = $(element).attr('data-s');
    if (s == 1) {
        loadSelectRegione("#regione","regione_"+v);
    } else if (s == 2) {
        v1 = $("#oblact").val();
        v2 = $("#regione").val();
        loadSelectRegione("#np","regione_"+v1+"_"+v2);
    }
    
}

function searchText(){
    
    let text = $("#deputat_search").val();
    
    if (!text || text=="...") {
        return 0;
    }else{
        _location.setUrlParameters("deputat_search",text);
        _location.delUrlParameters("oblact");
        _location.delUrlParameters("regione");
    }
    
    
    
    let key = 0;
    
    var lsD = Object.assign([],list_deputats);
    
    while (key<lsD.length) {
        let b1 = true;
        
        if(text == lsD[key].full_name) b1 = false;
        
        if (b1) {
            lsD.splice(key, 1);
        }else{
            key++;
        }
    }
    
    search(lsD);
    
}

function searchOkrug(){
    let v2 = $("#regione").val()*1;
    let ob = $("#oblact").val()*1;
    _location.setUrlParameters("oblact",ob);
    _location.setUrlParameters("regione",v2);
    
    _location.delUrlParameters("deputat_search");
    
    let key = 0;
    
    var lsD = Object.assign([],list_deputats);
    
    while (key<lsD.length) {
        let b1 = true;
        
        if(v2 == lsD[key].district_num) b1 = false;
        
        if (b1) {
            lsD.splice(key, 1);
        }else{
            key++;
        }
    }
    
    search(lsD);    
    
}

function search(lsD){
    
    var box_ls = $("#ls_deputat");
    box_ls.html("");
    
    for (let key in lsD) {

        let li1_files = "";

        box_ls.append('<div class="list-group-item row">\n\
                    <div class="col-md-3 col-sm-12"  style="float: left;">\n\
                        <div class="image-holder">\n\
                            <img src="'+lsD[key].photo+'" alt="'+lsD[key].full_name+'" \n\
                            class="img-responsive img-circle">\n\
                        </div>\n\
                    </div>\n\
                    <div class="col-md-9 col-sm-12">\n\
                        <span class="name"><a href="http://itd.rada.gov.ua/mps/info/page/' + lsD[key].id + '" target="_blank">'+lsD[key].full_name +'</span></a><br/>\n\
                        <span class="name">'+lsD[key].anketa_data +'</span><br/>\n\
                    </div>\n\
                    <div class="clearfix" style="float: none;"></div>\n\
                    <div class="col-12" style="margin: .3rem auto;">\n\
                        <a href="http://itd.rada.gov.ua/mps/info/page/' + lsD[key].id + '" target="_blank">\n\
                            <img src="./content/deputat_list/vr.png" alt="" style="width: 100%;">\n\
                        </a>\n\
                    </div>\n\
                    <!--div class="col-12">\n\
                        <Інфографіку додавати сюди>\n\
                        <div> Infographics should be placed here </div>\n\
                    <\div --!>\n\
                </div>');
    }
}

function show_map() {        
    $("#ls-maps div").hide();
    ob = $("#oblact").val();
    $("#img-map"+ob).show();
    var element = $("#regione");
    element.empty();
    
    
    ls = regioneJson.list[ob-1].okrug;
    element.append('<option>...</option>');
    for (key in ls) {
        element.append('<option value="'+ls[key]+'" selected>'+ls[key]+'</option>');  
    }
}

function LoadSelectOkrug() {  
    v1 = $("#oblact").val();
    $.getJSON('js/db/regione/'+jsonFile+'.json', function (json) {
        var element = $(elementName);
        element.empty();
        for (key in json.list) {
            element.append('<option value="'+json.list[key].id+'" selected>'+json.list[key].name+'</option>');        
        }
    });
}
