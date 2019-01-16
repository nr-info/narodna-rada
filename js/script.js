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

function search(){
    let v2 = $("#regione").val();
    let text = $("#deputat_search").val();
    
    _location.setUrlParameters("regione",v2);
    
    //var url = 'https://data.rada.gov.ua/ogd/mps/skl8/mps-data.json';
    let url = 'db/deputat/mps-data.json';
    
    $.getJSON(url, function (json) {
        var lsD = json.mps
        let key = 0;
        while (key<lsD.length) {
            //console.info(lsD[key].id);
            let b1 = true;
            let b2 = true;
            if(v2){
                //console.info(v2+" -- "+lsD[key].district_num);
                if(v2 == lsD[key].district_num){
                    b1 = false;
                }
            }

            if(text){
                //console.info(text+" -- "+lsD[key].full_name);
                if(text == lsD[key].full_name){
                    b2 = false;
                }
            }
            if (b1 && b2) {
                lsD.splice(key, 1);
            }else{
                key++;
            }
        }
        
        var box_ls = $("#ls_deputat");
        box_ls.html("");
        for (let key in lsD) {
            
            let li1_files = "";
            
//            for (key1 in lsD[key].files) {
//                li1_files +=   '<a href="'+json.list[key].files[key].adress+'" download>\n\
//                                    <img src="/img/file/'+json.list[key].files[key].type+'.png" alt="'+json.list[key1].name+'" class="img-responsive img-circle" /></a>'
//            }
            // Інфографіку додавати сюди
            console.log(lsD[key])
            box_ls.append('<div class="list-group-item row">\n\
                        <div class="col-md-3 col-sm-12"  style="float: left;">\n\
                            <div class="image-holder">\n\
                                <img src="'+lsD[key].photo+'" alt="'+lsD[key].surname +" " +lsD[key].firstname +" " +lsD[key].patronymic+'" \n\
                                class="img-responsive img-circle">\n\
                            </div>\n\
                        </div>\n\
                        <div class="col-md-9 col-sm-12">\n\
                            <span class="name"><a href="?v=deputat&dep='+lsD[key].id+'">'+lsD[key].surname +" " +lsD[key].firstname +" " +lsD[key].patronymic+'</span></a><br/>\n\
                            <span class="name">'+lsD[key].obr_info +'</span><br/>\n\
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
            
    });
    
}

function show_map() {        
    $("#ls-maps div").hide();
    ob = $("#oblact").val();
    $("#img-map"+ob).show();
    var element = $("#regione");
    element.empty();
    
    _location.setUrlParameters("oblact",ob);
    ls = regioneJson.list[ob-1].okrug;
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
