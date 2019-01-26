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
    
    var lsD = Object.assign([],list_deputats.mps);
    
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
    
    var lsD = Object.assign([],list_deputats.mps);
    
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
        
        $.get("db/deputat1/"+lsD[key].id+".json",function(json){
            var full_name = json.surname + " " + json.firstname + " " + json.patronymic;
            
            box_ls.append('<div class="list-group-item row">\n\
                    <div class="col-md-3 col-sm-12"  style="float: left;">\n\
                        <div class="image-holder">\n\
                            <img src="'+json.photo+'" alt="'+full_name+'" \n\
                            class="img-responsive img-circle">\n\
                        </div>\n\
                    </div>\n\
                    <div class="col-md-9 col-sm-12">\n\
                        <span class="name"><a href="http://itd.rada.gov.ua/mps/info/page/' + json.id + '" target="_blank">'+full_name +'</span></a><br/>\n\
                        <span class="name">'+json.short_info +'</span><br/>\n\
                    </div>\n\
                    <div class="clearfix" style="float: none;"></div>\n\
                    <div class="row">\n\
                        <div class="col-12 col-md-4"><canvas id="info_grafic_' + json.id + '_1"></canvas><a href="#">Запитати у дипутата де він був?</a></div>\n\
                        <div class="col-12 col-md-4"><canvas id="info_grafic_' + json.id + '_2"></canvas></div>\n\
                        <div class="col-12 col-md-4"><canvas id="info_grafic_' + json.id + '_3"></canvas><small></small>ОБІЦЯНКИ</div>\n\
                    <\div>\n\
                    <div class="col-12" style="margin: .3rem auto;">\n\
                        <a href="http://itd.rada.gov.ua/mps/info/page/' + json.id + '" target="_blank">\n\
                            <img src="./content/deputat_list/vr.png" alt="" style="width: 100%;">\n\
                        </a>\n\
                    </div>\n\
                    <script type="text/javascript">ChartVisiting("info_grafic_' + json.id + '_1",' + json.visiting.present + ',' + json.visiting.reasons_valide + ',' + json.visiting.reasons_unknown + ');</script>\n\
                    <script type="text/javascript">ChartVoting("info_grafic_' + json.id + '_2",' + 
                    json.voting.by + ',' + 
                    json.voting.no_vote + ',' + 
                    json.voting.against + ',' + 
                    json.voting.missing + ',' + 
                    json.voting.abstained + ');</script>\n\
                </div>');
        });
        
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

function ChartVisiting(canvas,q,w,e){
    new Chart(
            document.getElementById(canvas).getContext("2d"),         
            {
                "type":"doughnut",
                "data":
                        {
                            "labels":["присутній","відсутній з поважних причин","відсутній з невідомих причин"],
                            "datasets":[
                                {
                                    "label":"My First Dataset",
                                    "data":[q,w,e,],
                                    "backgroundColor":["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"]
                                }
                            ]
                        }
            }
    );
}

function ChartVoting(canvas,q,w,e,r,t){
    new Chart(
            document.getElementById(canvas).getContext("2d"),         
            {
                "type":"doughnut",
                "data":
                        {
                            "labels":["За","Не голосував","Проти","Відсутній","Утримався"],
                            "datasets":[
                                {
                                    "label":"My First Dataset",
                                    "data":[q,w,e,r,t],
                                    "backgroundColor":["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)","rgb(255, 0, 86)","rgb(0, 205, 86)"]
                                }
                            ]
                        }
            }
    );
}