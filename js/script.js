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
    v2 = $("#regione").val();
    text = $("#deputat_search").val();
    console.info(text);
    //var url = 'https://data.rada.gov.ua/ogd/mps/skl8/mps-data.json';
    let url = 'db/deputat/mps-data.json';
    $.getJSON(url, function (json) {
        json = json.mps
        var lsD = json;
        if(v2 && text){
            for (let key in json) {
                b1 = true;
                b2 = true;
                if(v2){
                    console.info(1);
                    if(v2 == json[key].region_id){
                        b1 = false;
                    }
                }

                if(text){
                    if(text == json[key].full_name){
                        b2 = false;
                    }
                }
                if (b1 && b2) {
                    lsD.splice(key, 1);
                }     
            }
        }
        
        var box_ls = $("#ls_deputat");
        
        for (let key in lsD) {
            
            let li1_files = "";
            
//            for (key1 in lsD[key].files) {
//                li1_files +=   '<a href="'+json.list[key].files[key].adress+'" download>\n\
//                                    <img src="/img/file/'+json.list[key].files[key].type+'.png" alt="'+json.list[key1].name+'" class="img-responsive img-circle" /></a>'
//            }
            // Інфографіку додавати сюди
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
                        <div class="col-12">\n\
                            <!-- Інфографіку додавати сюди --!>\n\
                            <div> Infographics should be placed here </div>\n\
                        <\div>\n\
                    </div>');
        }
            
    });
    
}

