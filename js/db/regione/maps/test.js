function ARK(){
    $.ajaxSetup({async:false});
    var osmL = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {maxZoom: 25,minZoom: 5,
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>, <a href="#win_form">АІТС ДРВ</a>'});

    var googleHybridLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
        maxZoom: 25,minZoom: 5,
        subdomains:['mt0','mt1','mt2','mt3'],
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>, <a href="#win_form">АІТС ДРВ</a>'
    });

    var map = L.map('mapid',{dragging:!L.Browser.mobile, touchZoom:L.Browser.mobile,layers:[osmL]});
    var baseLayers = {
        "Звичайна": osmL,
        "Супутникова": googleHybridLayer
      };
    L.control.layers(baseLayers).addTo(map);

    //map.doubleClickZoom.disable(); 
    //map.scrollWheelZoom.disable();

    var district_boundary, l;

      district_boundary = new L.geoJson(null, {
      onEachFeature : onEachFeature,
      style: style
      });

      district_boundary.addTo(map);



      function style(feature) {



        if (feature.properties.color){

          return {
            fillColor: '#1689E7',
            weight: 1,
            opacity: 1,
            color: 'black',
            dashArray: '0',
            fillOpacity: 0.9
          };
        }
        else{
            return {
            fillColor: '#000000',
            weight: 3,
            color: 'black',
            dashArray: '0',
            fillOpacity: 0.3
          };
        };


      }

      function onEachFeature(feature, layer) {
        layer.on({
          mouseover: onPolyOver,
          mouseout: onPolyOut

        });
        if (feature.properties.id==0){
        L.marker([49.8,30.4],{icon:new L.DivIcon({className:'marker-cluster',html:'<div><i style="background:white;color:black;font-weight:600;font-size:11px;border-radius:100%;padding:5px;word-wrap: normal">'+feature.properties.color+'</div></i>'})}).addTo(map)
        }
        else {L.marker(layer.getBounds().getCenter(),{icon:new L.DivIcon({className:'marker-cluster',html:'<div><i style="background:white;color:black;font-weight:600;font-size:11px;border-radius:100%;padding:5px;word-wrap: normal">'+feature.properties.id+'</div></i>'})}).addTo(map)}
      }



    // distr polygon: on mouse over 
    function onPolyOver(evt) {
    evt.target.setStyle({
        fillColor: '#ff0000', 
        weight: 2,
        color: '#008000',
        dashArray: '0',
        fillOpacity: 0.3});

    infoBox.update(evt.target.feature.properties.name);
    infoBox.show();   
    } 

    function onMapclick(evt){
    window.open(evt.target.feature.properties.win_url);
    }
    map.on('click',onMapclick);

    // distr polygon: on mouse out
    function onPolyOut(evt) {
     district_boundary.resetStyle(evt.target);     
     infoBox.hide();
    }

    var infoBox = L.control();
     infoBox.onAdd = function (map) {
         this._div = L.DomUtil.create('div','info'); 
         this.update();
         return this._div;
     };
     infoBox.update = function (InfoText) {   
      this._div.innerHTML = InfoText;
     };
     infoBox.hide = function () {   
      $(this._div).hide();
     };
     infoBox.show = function () {   
      $(this._div).show();
     };
     infoBox.addTo(map);
    infoBox.hide();

    function getColor(d) {
        return d == 23 ? '#800026' :
               d == 21 ? '#BD0026' :
               d == 18 ? '#E31A1C' :
               d == 12 ? '#FC4E2A' :
               d == 7  ? '#FD8D3C' :
               d == 5  ? '#FEB24C' :
               d == 1  ? '#FED976' :
               d == 26  ? '#F0A4D3' :
               d == 32  ? '#0E2671' :
               d == 35  ? '#4B1FA0' :
               d == 44  ? '#4714EA' :
               d == 46  ? '#B06C5D' :
               d == 48  ? '#9B2FC1' :
               d == 51  ? '#F3458F' :
               d == 56  ? '#609C6C' :
               d == 59  ? '#EA170E' :
               d == 61  ? '#A2FFF7' :
               d == 53  ? '#A2FFF7' :
               d == 63  ? '#7A67C9' :
               d == 65  ? '#6308DF' :
               d == 71  ? '#50515B' :
               d == 73  ? '#EDBBE4' :
               d == 74  ? '#80892E' :
               d == 80  ? '#7818AC' :
               d == 85  ? '#46311C' :
               d == 14  ? '#42AC16' :
               d == 53  ? '#E4EBF6' :
               d == 68  ? '#1689E7' :
                          '#FFEDA0';
    }


      $.ajax({
      dataType: "json",
      url: "gis$core.Gis_Okrug_Poly?p_id100=1&ts="+Math.random(),

      success: function(data) {
       $(data.features).each(function(key, data) {
            l=district_boundary.addData(data);      
        });
      }
      }).error(function() {});  



    var bounds=district_boundary.getBounds();
    //if(bounds.isValid())
    map.fitBounds(bounds); 
}