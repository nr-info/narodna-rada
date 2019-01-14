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
    
    _location.setUrlParameters("regione",v2);
    
    //var url = 'https://data.rada.gov.ua/ogd/mps/skl8/mps-data.json';
    let url = 'db/deputat/mps-data.json';
    
    $.getJSON(url, function (json) {
        var lsD = json.mps
        let key = 0;
        while (key<lsD.length) {
            //console.info(lsD[key].id);
            b1 = true;
            b2 = true;
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

var Piechart = function(options){
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
    
    
 
    this.draw = function(){
        var total_value = 0;
        var color_index = 0;
        for (var categ in this.options.data){
            var val = this.options.data[categ];
            total_value += val;
        }
        
        
 
        var start_angle = 0;
        for (categ in this.options.data){
            val = this.options.data[categ];
            var slice_angle = 2 * Math.PI * val / total_value;
 
            this.drawPieSlice(
                this.ctx,
                this.canvas.width/2,
                this.canvas.height/2,
                Math.min(this.canvas.width/2,this.canvas.height/2),
                start_angle,
                start_angle+slice_angle,
                this.colors[color_index%this.colors.length]
            );
 
            start_angle += slice_angle;
            color_index++;
        }
        if (this.options.legend){
            color_index = 0;
            var legendHTML = "";
            for (categ in this.options.data){
                legendHTML += "<div><span style='display:inline-block;width:20px;background-color:"+this.colors[color_index++]+";'>&nbsp;</span> "+categ+"</div>";
            }
            this.options.legend.innerHTML = legendHTML;
        }
 
    }
}

