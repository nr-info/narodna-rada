function initialize() {
    var mapOptions = {zoom: 6,center: new google.maps.LatLng(48.625796,31.970637)};
    var map = new google.maps.Map(document.getElementById('map'),mapOptions);
    
    rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(49.261623,30),new google.maps.LatLng(49.171937,29.764999),new google.maps.LatLng(49.367211,29.498883),new google.maps.LatLng(49.42138,29.569443),new google.maps.LatLng(49.530549,29.568329),new google.maps.LatLng(49.565827,29.498604),new google.maps.LatLng(49.650895,29.447152),new google.maps.LatLng(49.707215,29.482495),new google.maps.LatLng(49.707215,29.41472),new google.maps.LatLng(49.794717,29.433605),new google.maps.LatLng(49.923051,29.726661),new google.maps.LatLng(50.088044,29.666106),new google.maps.LatLng(50.126381,29.741938),new google.maps.LatLng(50.406936,29.567496),new google.maps.LatLng(50.416663,29.42166),new google.maps.LatLng(50.490272,29.499998),new google.maps.LatLng(50.594709,29.475824),new google.maps.LatLng(50.703878,29.594438),new google.maps.LatLng(50.779989,29.486937),new google.maps.LatLng(50.949713,29.391106),new google.maps.LatLng(50.966657,29.466937),new google.maps.LatLng(51.066662,29.487772),new google.maps.LatLng(51.127483,29.304442),new google.maps.LatLng(51.240825,29.266941),new google.maps.LatLng(51.313877,29.391383),new google.maps.LatLng(51.386482,29.343362),new google.maps.LatLng(51.474524,29.542192),new google.maps.LatLng(51.519522,29.715802),new google.maps.LatLng(51.445663,29.799969),new google.maps.LatLng(51.498524,30.215774),new google.maps.LatLng(51.326858,30.376967),new google.maps.LatLng(51.260475,30.550117),new google.maps.LatLng(51.016385,30.511938),new google.maps.LatLng(51.001104,30.627488),new google.maps.LatLng(50.891661,30.654434),new google.maps.LatLng(50.851104,30.7761),new google.maps.LatLng(50.75444,30.741654),new google.maps.LatLng(50.766936,31.096099),new google.maps.LatLng(50.658881,31.213042),new google.maps.LatLng(50.586937,31.1786),new google.maps.LatLng(50.506943,31.323599),new google.maps.LatLng(50.516937,31.613875),new google.maps.LatLng(50.623877,31.841376),new google.maps.LatLng(50.528328,32.046935),new google.maps.LatLng(50.471657,31.969431),new google.maps.LatLng(50.407495,32.091367),new google.maps.LatLng(50.26777,32.10082),new google.maps.LatLng(50.168885,31.987765),new google.maps.LatLng(50.104997,31.853878),new google.maps.LatLng(50.022768,31.87249),new google.maps.LatLng(49.892771,31.763325),new google.maps.LatLng(49.84527,31.712208),new google.maps.LatLng(49.898333,31.590546),new google.maps.LatLng(49.838885,31.493879),new google.maps.LatLng(49.906382,31.429713),new google.maps.LatLng(49.856661,31.213603),new google.maps.LatLng(49.557497,31.156935),new google.maps.LatLng(49.341478,30.913391),new google.maps.LatLng(49.35,30.434715),new google.maps.LatLng(49.23138,30.385548),new google.maps.LatLng(49.331668,30.146382),new google.maps.LatLng(49.261669,30.00083)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r1">Киевская область (округа 90-98)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Киевская область (округа 90-98)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
    rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(52.107361,31.796806),new google.maps.LatLng(52.086277,31.948778),new google.maps.LatLng(52.025612,31.974082),new google.maps.LatLng(52.104442,32.296274),new google.maps.LatLng(52.144027,32.36783),new google.maps.LatLng(52.224498,32.330443),new google.maps.LatLng(52.252498,32.3935),new google.maps.LatLng(52.335108,32.388027),new google.maps.LatLng(52.243804,32.905498),new google.maps.LatLng(52.367389,33.183997),new google.maps.LatLng(52.364886,33.404497),new google.maps.LatLng(52.150878,33.320845),new google.maps.LatLng(52.052772,33.479429),new google.maps.LatLng(52.055548,33.374159),new google.maps.LatLng(51.944434,33.378324),new google.maps.LatLng(51.90499,33.1686),new google.maps.LatLng(51.804435,33.065825),new google.maps.LatLng(51.516663,33.189986),new google.maps.LatLng(51.509995,33.119156),new google.maps.LatLng(51.377487,33.123878),new google.maps.LatLng(51.380547,33.000833),new google.maps.LatLng(51.249162,33.072769),new google.maps.LatLng(51.096941,32.935547),new google.maps.LatLng(51.051104,33.21138),new google.maps.LatLng(50.905551,33.183328),new google.maps.LatLng(50.814717,33.119714),new google.maps.LatLng(50.737218,33.16916),new google.maps.LatLng(50.482496,33.018052),new google.maps.LatLng(50.358052,32.739161),new google.maps.LatLng(50.408887,32.341936),new google.maps.LatLng(50.321944,32.122493),new google.maps.LatLng(50.471662,31.969444),new google.maps.LatLng(50.546108,32.033611),new google.maps.LatLng(50.622768,31.860001),new google.maps.LatLng(50.508335,31.56778),new google.maps.LatLng(50.516666,31.283891),new google.maps.LatLng(50.58694,31.178614),new google.maps.LatLng(50.658884,31.213056),new google.maps.LatLng(50.764719,31.100004),new google.maps.LatLng(50.754443,30.741668),new google.maps.LatLng(50.851107,30.776114),new google.maps.LatLng(50.891664,30.654448),new google.maps.LatLng(51.001107,30.627502),new google.maps.LatLng(51.006386,30.516117),new google.maps.LatLng(51.221657,30.512506),new google.maps.LatLng(51.345222,30.671176),new google.maps.LatLng(51.42847,30.593149),new google.maps.LatLng(51.599749,30.519482),new google.maps.LatLng(51.831136,30.66737),new google.maps.LatLng(51.969887,30.899065),new google.maps.LatLng(52.073523,30.941399),new google.maps.LatLng(52.042468,31.280036),new google.maps.LatLng(52.141383,31.422121),new google.maps.LatLng(52.095385,31.747397)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r4">Черниговская область (округа 205-210)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Черниговская область (округа 205-210)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
                                                                        rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(50.541206,27.192265),new google.maps.LatLng(50.475822,27.309162),new google.maps.LatLng(50.377487,27.234719),new google.maps.LatLng(50.2211,27.489438),new google.maps.LatLng(50.253052,27.608609),new google.maps.LatLng(50.041107,27.666107),new google.maps.LatLng(50.008607,27.541664),new google.maps.LatLng(49.907213,27.541664),new google.maps.LatLng(49.794443,27.668052),new google.maps.LatLng(49.760073,27.867934),new google.maps.LatLng(49.680552,27.747214),new google.maps.LatLng(49.630824,27.816107),new google.maps.LatLng(49.496563,27.71797),new google.maps.LatLng(49.416387,27.839715),new google.maps.LatLng(49.376944,27.801107),new google.maps.LatLng(49.158888,27.890271),new google.maps.LatLng(49.124168,27.491101),new google.maps.LatLng(48.990281,27.376939),new google.maps.LatLng(48.770836,27.428879),new google.maps.LatLng(48.601396,27.343606),new google.maps.LatLng(48.618889,27.243604),new google.maps.LatLng(48.535005,26.875273),new google.maps.LatLng(48.605561,26.811942),new google.maps.LatLng(48.543893,26.764441),new google.maps.LatLng(48.59028,26.716384),new google.maps.LatLng(48.531947,26.724162),new google.maps.LatLng(48.543063,26.611664),new google.maps.LatLng(48.492504,26.708328),new google.maps.LatLng(48.501674,26.605831),new google.maps.LatLng(48.448056,26.577222),new google.maps.LatLng(48.531391,26.47944),new google.maps.LatLng(48.519908,26.386324),new google.maps.LatLng(48.676951,26.23583),new google.maps.LatLng(48.808893,26.266943),new google.maps.LatLng(48.953889,26.185553),new google.maps.LatLng(49.069168,26.23472),new google.maps.LatLng(49.220276,26.203608),new google.maps.LatLng(49.284171,26.261945),new google.maps.LatLng(49.508895,26.146665),new google.maps.LatLng(49.655272,26.255554),new google.maps.LatLng(49.771941,26.235828),new google.maps.LatLng(49.959722,26.148606),new google.maps.LatLng(49.995274,26.234161),new google.maps.LatLng(50.08694,26.203884),new google.maps.LatLng(50.106944,26.275828),new google.maps.LatLng(50.141665,26.203048),new google.maps.LatLng(50.295549,26.555274),new google.maps.LatLng(50.468599,26.740271),new google.maps.LatLng(50.586939,27.095273),new google.maps.LatLng(50.540553,27.184715)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r5">Хмельницкая область (округа 187-193)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Хмельницкая область (округа 187-193)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
    rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(48.723557,23.5327),new google.maps.LatLng(48.972213,23.574996),new google.maps.LatLng(49.091658,23.687773),new google.maps.LatLng(49.175825,24.419991),new google.maps.LatLng(49.233327,24.358606),new google.maps.LatLng(49.294994,24.366106),new google.maps.LatLng(49.306934,24.280276),new google.maps.LatLng(49.365824,24.423605),new google.maps.LatLng(49.402484,24.376384),new google.maps.LatLng(49.511934,24.430549),new google.maps.LatLng(49.524705,24.578883),new google.maps.LatLng(49.388879,24.804441),new google.maps.LatLng(49.218317,24.882493),new google.maps.LatLng(49.125818,24.856382),new google.maps.LatLng(49.106936,24.978604),new google.maps.LatLng(49.048877,24.982491),new google.maps.LatLng(49.049989,24.893048),new google.maps.LatLng(48.966655,24.984714),new google.maps.LatLng(48.943043,25.133326),new google.maps.LatLng(48.864713,25.152491),new google.maps.LatLng(48.928325,25.239431),new google.maps.LatLng(48.84332,25.21721),new google.maps.LatLng(48.833326,25.32749),new google.maps.LatLng(48.773604,25.25638),new google.maps.LatLng(48.858045,25.463876),new google.maps.LatLng(48.689986,25.652489),new google.maps.LatLng(48.628326,25.564157),new google.maps.LatLng(48.390275,25.584714),new google.maps.LatLng(48.380273,25.369435),new google.maps.LatLng(48.233881,25.140824),new google.maps.LatLng(48.1075,24.992486),new google.maps.LatLng(47.989168,24.926659),new google.maps.LatLng(47.836391,24.984989),new google.maps.LatLng(47.722336,24.910047),new google.maps.LatLng(47.964421,24.574097),new google.maps.LatLng(48.050831,24.64499),new google.maps.LatLng(48.151104,24.522767),new google.maps.LatLng(48.262218,24.501103),new google.maps.LatLng(48.389437,24.305269),new google.maps.LatLng(48.370547,24.146102),new google.maps.LatLng(48.530275,24.138325),new google.maps.LatLng(48.470545,23.91999),new google.maps.LatLng(48.641665,23.781106),new google.maps.LatLng(48.720544,23.552216)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r6">Ивано-Франковская область (округа 83-89)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Ивано-Франковская область (округа 83-89)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
    rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(45,35.400471),new google.maps.LatLng(44.947141,35.387501),new google.maps.LatLng(44.958863,35.2575),new google.maps.LatLng(44.793584,35.090637),new google.maps.LatLng(44.82325,34.776444),new google.maps.LatLng(44.7245,34.480447),new google.maps.LatLng(44.550973,34.343057),new google.maps.LatLng(44.431222,34.125891),new google.maps.LatLng(44.390722,33.744448),new google.maps.LatLng(44.500002,33.488254),new google.maps.LatLng(44.588834,33.381751),new google.maps.LatLng(44.625832,33.545252),new google.maps.LatLng(44.799251,33.534141),new google.maps.LatLng(44.912332,33.618255),new google.maps.LatLng(45.108526,33.547947),new google.maps.LatLng(45.196301,33.410142),new google.maps.LatLng(45.152581,33.2632),new google.maps.LatLng(45.325939,32.994115),new google.maps.LatLng(45.495857,33.257451),new google.maps.LatLng(45.359329,32.946478),new google.maps.LatLng(45.3288,32.987257),new google.maps.LatLng(45.369105,32.782367),new google.maps.LatLng(45.318385,32.650425),new google.maps.LatLng(45.395826,32.482926),new google.maps.LatLng(45.72741,33.13926),new google.maps.LatLng(45.807159,33.17712),new google.maps.LatLng(45.756493,33.246062),new google.maps.LatLng(45.893383,33.612505),new google.maps.LatLng(45.851825,33.690114),new google.maps.LatLng(45.911547,33.685839),new google.maps.LatLng(45.930186,33.76581),new google.maps.LatLng(45.951963,33.624091),new google.maps.LatLng(46.23219,33.641112),new google.maps.LatLng(46.231091,33.884726),new google.maps.LatLng(46.116085,34.12583),new google.maps.LatLng(46.183857,34.078612),new google.maps.LatLng(46.204152,34.13722),new google.maps.LatLng(46.170819,34.193051),new google.maps.LatLng(46.282483,34.161939),new google.maps.LatLng(46.09609,34.304441),new google.maps.LatLng(46.214421,34.316671),new google.maps.LatLng(46.139982,34.475819),new google.maps.LatLng(46.180264,34.55222),new google.maps.LatLng(46.091649,34.555554),new google.maps.LatLng(46.121357,34.476651),new google.maps.LatLng(46.032193,34.464995),new google.maps.LatLng(46.017759,34.402213),new google.maps.LatLng(45.957755,34.473602),new google.maps.LatLng(45.99137,34.577772),new google.maps.LatLng(46.165533,34.62583),new google.maps.LatLng(46.158906,34.815115),new google.maps.LatLng(45.672323,35.040422),new google.maps.LatLng(45.288602,35.491254),new google.maps.LatLng(45.331434,35.727338),new google.maps.LatLng(45.46763,35.834755),new google.maps.LatLng(45.367296,35.978253),new google.maps.LatLng(45.459046,36.131977),new google.maps.LatLng(45.476764,36.341918),new google.maps.LatLng(45.375987,36.647974),new google.maps.LatLng(45.351544,36.477504),new google.maps.LatLng(45.20849,36.403449),new google.maps.LatLng(45.101103,36.45531),new google.maps.LatLng(45.057715,36.373337),new google.maps.LatLng(45.000354,35.845033),new google.maps.LatLng(45.127936,35.56431),new google.maps.LatLng(45.066519,35.409338),new google.maps.LatLng(45.009631,35.422171)],
        strokeColor: '#42693d',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#42693d',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b>Оккупированные территории</b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Автономная республика Крым (округа 1-10)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
    rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(48.675529,25.633011),new google.maps.LatLng(48.627214,25.739436),new google.maps.LatLng(48.582498,25.934439),new google.maps.LatLng(48.645546,26.04833),new google.maps.LatLng(48.54361,26.085272),new google.maps.LatLng(48.612769,26.115549),new google.maps.LatLng(48.526939,26.164717),new google.maps.LatLng(48.53138,26.479437),new google.maps.LatLng(48.446656,26.582495),new google.maps.LatLng(48.501663,26.605828),new google.maps.LatLng(48.492493,26.708325),new google.maps.LatLng(48.543052,26.611661),new google.maps.LatLng(48.531936,26.724159),new google.maps.LatLng(48.590269,26.716381),new google.maps.LatLng(48.543882,26.764438),new google.maps.LatLng(48.60555,26.811939),new google.maps.LatLng(48.534994,26.87527),new google.maps.LatLng(48.618878,27.243601),new google.maps.LatLng(48.624158,27.38221),new google.maps.LatLng(48.463834,27.531199),new google.maps.LatLng(48.410639,27.381244),new google.maps.LatLng(48.448609,27.333994),new google.maps.LatLng(48.372888,27.242689),new google.maps.LatLng(48.438886,27.07269),new google.maps.LatLng(48.363385,26.98305),new google.maps.LatLng(48.422218,26.732466),new google.maps.LatLng(48.294914,26.817577),new google.maps.LatLng(48.336383,26.697439),new google.maps.LatLng(48.222132,26.577828),new google.maps.LatLng(48.187969,26.321829),new google.maps.LatLng(48.000053,26.199635),new google.maps.LatLng(47.945358,25.48711),new google.maps.LatLng(47.88319,25.235664),new google.maps.LatLng(47.725151,24.928105),new google.maps.LatLng(47.836383,24.984996),new google.maps.LatLng(47.98916,24.926666),new google.maps.LatLng(48.107492,24.992493),new google.maps.LatLng(48.233873,25.140831),new google.maps.LatLng(48.380265,25.369442),new google.maps.LatLng(48.390267,25.584721),new google.maps.LatLng(48.628318,25.564164),new google.maps.LatLng(48.670821,25.624719)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r8">Черновицкая область (округа 201-204)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Черновицкая область (округа 201-204)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
    rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(48.570927,30),new google.maps.LatLng(48.70388,29.854443),new google.maps.LatLng(48.7686,29.771111),new google.maps.LatLng(48.91249,29.718052),new google.maps.LatLng(48.94943,29.632218),new google.maps.LatLng(48.987493,29.678608),new google.maps.LatLng(49.049162,29.59472),new google.maps.LatLng(49.135548,29.714161),new google.maps.LatLng(49.213605,29.671108),new google.maps.LatLng(49.171376,29.870273),new google.maps.LatLng(49.272762,30.115271),new google.maps.LatLng(49.33166,30.146383),new google.maps.LatLng(49.229983,30.368883),new google.maps.LatLng(49.349993,30.434716),new google.maps.LatLng(49.341471,30.913392),new google.maps.LatLng(49.55749,31.156936),new google.maps.LatLng(49.851931,31.206657),new google.maps.LatLng(49.906375,31.429714),new google.maps.LatLng(49.838878,31.49388),new google.maps.LatLng(49.898326,31.590547),new google.maps.LatLng(49.845263,31.712209),new google.maps.LatLng(50.022761,31.872491),new google.maps.LatLng(50.168879,31.987766),new google.maps.LatLng(50.248873,32.003318),new google.maps.LatLng(50.154155,32.273871),new google.maps.LatLng(50.062762,32.250541),new google.maps.LatLng(49.968044,32.418594),new google.maps.LatLng(49.843876,32.386375),new google.maps.LatLng(49.703046,32.569434),new google.maps.LatLng(49.595823,32.752211),new google.maps.LatLng(49.478599,32.673041),new google.maps.LatLng(49.333878,32.789426),new google.maps.LatLng(49.18055,32.750539),new google.maps.LatLng(49.022491,32.856374),new google.maps.LatLng(48.959717,32.782758),new google.maps.LatLng(48.988602,32.683592),new google.maps.LatLng(48.926941,32.521369),new google.maps.LatLng(49.056655,32.454154),new google.maps.LatLng(49.090826,32.327765),new google.maps.LatLng(48.984992,32.146934),new google.maps.LatLng(48.909157,32.12915),new google.maps.LatLng(48.928879,32.021928),new google.maps.LatLng(48.855271,31.882211),new google.maps.LatLng(48.943047,31.732489),new google.maps.LatLng(48.927773,31.544716),new google.maps.LatLng(48.742768,31.428604),new google.maps.LatLng(48.7686,30.710548),new google.maps.LatLng(48.717766,30.601383),new google.maps.LatLng(48.621933,30.537774),new google.maps.LatLng(48.558885,30.568326),new google.maps.LatLng(48.57055,30.40416),new google.maps.LatLng(48.451936,30.113049),new google.maps.LatLng(48.457771,29.956659),new google.maps.LatLng(48.563323,30.008885)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r9">Черкасская область (округа 194-200)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Черкасская область (округа 194-200)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
    rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(49.006508,22.887575),new google.maps.LatLng(48.85444,22.989162),new google.maps.LatLng(48.87027,23.116939),new google.maps.LatLng(48.773323,23.209993),new google.maps.LatLng(48.641664,23.781106),new google.maps.LatLng(48.472215,23.915268),new google.maps.LatLng(48.530274,24.138325),new google.maps.LatLng(48.370546,24.146102),new google.maps.LatLng(48.370546,24.339159),new google.maps.LatLng(48.262218,24.501104),new google.maps.LatLng(48.151104,24.522768),new google.maps.LatLng(48.050831,24.644991),new google.maps.LatLng(47.964421,24.574098),new google.maps.LatLng(47.905892,24.234688),new google.maps.LatLng(47.997338,23.766439),new google.maps.LatLng(47.982755,23.479023),new google.maps.LatLng(48.118421,23.186634),new google.maps.LatLng(48.004922,23.099162),new google.maps.LatLng(48.017002,22.938885),new google.maps.LatLng(47.959062,22.905996),new google.maps.LatLng(48.043503,22.889496),new google.maps.LatLng(48.116642,22.831748),new google.maps.LatLng(48.092923,22.615136),new google.maps.LatLng(48.199865,22.584831),new google.maps.LatLng(48.243836,22.384332),new google.maps.LatLng(48.413391,22.27772),new google.maps.LatLng(48.381894,22.130362),new google.maps.LatLng(48.588448,22.178556),new google.maps.LatLng(48.699336,22.357056),new google.maps.LatLng(48.861282,22.394306),new google.maps.LatLng(49.077697,22.560111),new google.maps.LatLng(49.023616,22.840972)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r10">Закарпатская область (округа 68-73)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Закарпатская область (округа 68-73)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
    rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(51.623367,27.511995),new google.maps.LatLng(51.589916,27.736554),new google.maps.LatLng(51.466386,27.580551),new google.maps.LatLng(51.389994,27.60305),new google.maps.LatLng(51.439989,27.501111),new google.maps.LatLng(51.33388,27.506943),new google.maps.LatLng(51.30305,27.414163),new google.maps.LatLng(51.220547,27.447216),new google.maps.LatLng(50.992771,27.194997),new google.maps.LatLng(50.730549,27.273332),new google.maps.LatLng(50.58028,27.237497),new google.maps.LatLng(50.54121,27.192268),new google.maps.LatLng(50.58694,27.09528),new google.maps.LatLng(50.504169,26.811391),new google.maps.LatLng(50.29555,26.555281),new google.maps.LatLng(50.151104,26.234724),new google.maps.LatLng(50.264445,26.220835),new google.maps.LatLng(50.267214,25.956668),new google.maps.LatLng(50.165546,25.456111),new google.maps.LatLng(50.079167,25.455558),new google.maps.LatLng(50.012952,25.367516),new google.maps.LatLng(50.095548,25.195836),new google.maps.LatLng(50.283338,25.203058),new google.maps.LatLng(50.286664,25.06473),new google.maps.LatLng(50.368054,25.201394),new google.maps.LatLng(50.462497,25.089449),new google.maps.LatLng(50.499164,25.168616),new google.maps.LatLng(50.550548,25.133616),new google.maps.LatLng(50.543057,25.292783),new google.maps.LatLng(50.613056,25.285005),new google.maps.LatLng(50.611111,25.386116),new google.maps.LatLng(50.68111,25.357507),new google.maps.LatLng(50.70666,25.662781),new google.maps.LatLng(50.629993,25.831116),new google.maps.LatLng(50.793329,25.872226),new google.maps.LatLng(50.837213,26.006113),new google.maps.LatLng(50.91166,26.015559),new google.maps.LatLng(50.949997,25.973055),new google.maps.LatLng(50.977486,26.097223),new google.maps.LatLng(51.066383,26.041391),new google.maps.LatLng(51.072982,25.944188),new google.maps.LatLng(51.18138,26.060003),new google.maps.LatLng(51.322219,25.81278),new google.maps.LatLng(51.384162,25.828888),new google.maps.LatLng(51.348877,25.555),new google.maps.LatLng(51.524711,25.549446),new google.maps.LatLng(51.578604,25.60472),new google.maps.LatLng(51.620825,25.508614),new google.maps.LatLng(51.699713,25.508335),new google.maps.LatLng(51.891104,25.66722),new google.maps.LatLng(51.928342,25.553609),new google.maps.LatLng(51.925817,26.096284),new google.maps.LatLng(51.832,26.630613),new google.maps.LatLng(51.755553,26.922334),new google.maps.LatLng(51.78483,27.191834),new google.maps.LatLng(51.67433,27.273973),new google.maps.LatLng(51.629305,27.265307),new google.maps.LatLng(51.621886,27.506611)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r11">Ровенская область (округа 152-156)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Ровенская область (округа 152-156)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
    rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(51.928345,25.553606),new google.maps.LatLng(51.891107,25.667217),new google.maps.LatLng(51.699716,25.508332),new google.maps.LatLng(51.620828,25.508611),new google.maps.LatLng(51.578607,25.604717),new google.maps.LatLng(51.524714,25.549443),new google.maps.LatLng(51.34888,25.554997),new google.maps.LatLng(51.384165,25.828885),new google.maps.LatLng(51.322222,25.812777),new google.maps.LatLng(51.181383,26.06),new google.maps.LatLng(51.072985,25.944185),new google.maps.LatLng(51.066386,26.041388),new google.maps.LatLng(50.977489,26.09722),new google.maps.LatLng(50.95,25.973052),new google.maps.LatLng(50.911663,26.015556),new google.maps.LatLng(50.837216,26.00611),new google.maps.LatLng(50.793332,25.872223),new google.maps.LatLng(50.629996,25.831113),new google.maps.LatLng(50.706663,25.662778),new google.maps.LatLng(50.681113,25.357504),new google.maps.LatLng(50.611114,25.386113),new google.maps.LatLng(50.613059,25.285002),new google.maps.LatLng(50.54306,25.29278),new google.maps.LatLng(50.550551,25.133613),new google.maps.LatLng(50.499167,25.168613),new google.maps.LatLng(50.4625,25.089446),new google.maps.LatLng(50.368057,25.201391),new google.maps.LatLng(50.294762,25.063316),new google.maps.LatLng(50.370835,24.942779),new google.maps.LatLng(50.331674,24.765839),new google.maps.LatLng(50.43889,24.563893),new google.maps.LatLng(50.404444,24.508619),new google.maps.LatLng(50.469721,24.448614),new google.maps.LatLng(50.503061,24.537785),new google.maps.LatLng(50.544167,24.505285),new google.maps.LatLng(50.622311,24.105876),new google.maps.LatLng(50.800785,23.964786),new google.maps.LatLng(50.871148,24.150676),new google.maps.LatLng(50.955815,23.976564),new google.maps.LatLng(51.158729,23.866372),new google.maps.LatLng(51.314005,23.643315),new google.maps.LatLng(51.404452,23.706204),new google.maps.LatLng(51.496867,23.630843),new google.maps.LatLng(51.535226,23.688676),new google.maps.LatLng(51.629116,23.649648),new google.maps.LatLng(51.648873,23.879645),new google.maps.LatLng(51.581783,24.000678),new google.maps.LatLng(51.655276,24.223847),new google.maps.LatLng(51.785361,24.372903),new google.maps.LatLng(51.920866,24.394583),new google.maps.LatLng(51.91617,25.002643),new google.maps.LatLng(51.977198,25.280558),new google.maps.LatLng(51.928503,25.547447)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r12">Волынская область (округа 19-23)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Волынская область (округа 19-23)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
    rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(50.152283,26.233139),new google.maps.LatLng(50.106942,26.275829),new google.maps.LatLng(50.023607,26.192773),new google.maps.LatLng(49.998881,26.236108),new google.maps.LatLng(49.959721,26.148607),new google.maps.LatLng(49.77194,26.235829),new google.maps.LatLng(49.655271,26.255555),new google.maps.LatLng(49.508894,26.146666),new google.maps.LatLng(49.28417,26.261946),new google.maps.LatLng(49.220275,26.203609),new google.maps.LatLng(49.069167,26.234721),new google.maps.LatLng(48.953888,26.185554),new google.maps.LatLng(48.808892,26.266944),new google.maps.LatLng(48.67695,26.235831),new google.maps.LatLng(48.519907,26.386325),new google.maps.LatLng(48.526948,26.164722),new google.maps.LatLng(48.613617,26.109443),new google.maps.LatLng(48.543619,26.085277),new google.maps.LatLng(48.645555,26.048335),new google.maps.LatLng(48.582507,25.934444),new google.maps.LatLng(48.664164,25.804447),new google.maps.LatLng(48.627224,25.739441),new google.maps.LatLng(48.749171,25.636388),new google.maps.LatLng(48.861391,25.454706),new google.maps.LatLng(48.773615,25.256392),new google.maps.LatLng(48.833337,25.327502),new google.maps.LatLng(48.843331,25.217222),new google.maps.LatLng(48.928336,25.239443),new google.maps.LatLng(48.864724,25.152503),new google.maps.LatLng(48.943054,25.133338),new google.maps.LatLng(49.042502,24.895005),new google.maps.LatLng(49.048888,24.982502),new google.maps.LatLng(49.100553,24.98278),new google.maps.LatLng(49.119161,24.859725),new google.maps.LatLng(49.218328,24.882502),new google.maps.LatLng(49.491703,24.707023),new google.maps.LatLng(49.561665,24.727499),new google.maps.LatLng(49.722767,25.101114),new google.maps.LatLng(49.815547,25.087782),new google.maps.LatLng(49.876941,25.386946),new google.maps.LatLng(49.945543,25.434167),new google.maps.LatLng(50.036661,25.371668),new google.maps.LatLng(50.079164,25.455556),new google.maps.LatLng(50.165543,25.456109),new google.maps.LatLng(50.177772,25.80417),new google.maps.LatLng(50.267767,25.962498),new google.maps.LatLng(50.264441,26.220832),new google.maps.LatLng(50.155548,26.234721)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r13">Тернопольская область (округа 163-167)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Тернопольская область (округа 163-167)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
    rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(50.294754,25.063309),new google.maps.LatLng(50.283334,25.203048),new google.maps.LatLng(50.095544,25.195826),new google.maps.LatLng(49.977769,25.40777),new google.maps.LatLng(49.882769,25.392771),new google.maps.LatLng(49.815546,25.087774),new google.maps.LatLng(49.722766,25.101106),new google.maps.LatLng(49.561664,24.727491),new google.maps.LatLng(49.491702,24.707015),new google.maps.LatLng(49.511942,24.430549),new google.maps.LatLng(49.402492,24.376384),new google.maps.LatLng(49.365832,24.423605),new google.maps.LatLng(49.302777,24.279161),new google.maps.LatLng(49.295002,24.366105),new google.maps.LatLng(49.233335,24.358605),new google.maps.LatLng(49.175833,24.41999),new google.maps.LatLng(49.095831,23.694436),new google.maps.LatLng(48.972221,23.574995),new google.maps.LatLng(48.723565,23.532699),new google.maps.LatLng(48.77333,23.209995),new google.maps.LatLng(48.870277,23.116941),new google.maps.LatLng(48.854447,22.989164),new google.maps.LatLng(48.934722,22.891386),new google.maps.LatLng(49.095035,22.896031),new google.maps.LatLng(49.177283,22.71364),new google.maps.LatLng(49.290839,22.758557),new google.maps.LatLng(49.54181,22.667668),new google.maps.LatLng(49.695393,22.803334),new google.maps.LatLng(50.393395,23.731861),new google.maps.LatLng(50.446301,24.042777),new google.maps.LatLng(50.634213,24.116626),new google.maps.LatLng(50.576107,24.254165),new google.maps.LatLng(50.544163,24.505274),new google.maps.LatLng(50.503057,24.537774),new google.maps.LatLng(50.469717,24.448603),new google.maps.LatLng(50.40444,24.508608),new google.maps.LatLng(50.438886,24.563882),new google.maps.LatLng(50.342221,24.722768),new google.maps.LatLng(50.371662,24.936378),new google.maps.LatLng(50.310551,25.064995)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r14">Львовская область (округа 115-126)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Львовская область (округа 115-126)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
                                                                        rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(52.353268,33.411648),new google.maps.LatLng(52.319916,33.486973),new google.maps.LatLng(52.302307,33.545886),new google.maps.LatLng(52.3585,33.833887),new google.maps.LatLng(52.140167,34.129248),new google.maps.LatLng(52.023252,34.095388),new google.maps.LatLng(51.860529,34.257913),new google.maps.LatLng(51.825835,34.426222),new google.maps.LatLng(51.727252,34.438691),new google.maps.LatLng(51.66339,34.091638),new google.maps.LatLng(51.505115,34.302304),new google.maps.LatLng(51.405864,34.22447),new google.maps.LatLng(51.365921,34.338053),new google.maps.LatLng(51.25559,34.27358),new google.maps.LatLng(51.247117,34.656136),new google.maps.LatLng(51.175978,34.726136),new google.maps.LatLng(51.221868,35.128025),new google.maps.LatLng(51.050867,35.2153),new google.maps.LatLng(51.060476,35.416162),new google.maps.LatLng(51.001978,35.332354),new google.maps.LatLng(50.676814,35.503523),new google.maps.LatLng(50.655147,35.411994),new google.maps.LatLng(50.590759,35.408438),new google.maps.LatLng(50.378479,35.617911),new google.maps.LatLng(50.366578,35.714025),new google.maps.LatLng(50.330003,35.687205),new google.maps.LatLng(50.333374,35.396595),new google.maps.LatLng(50.168442,35.028431),new google.maps.LatLng(50.104721,34.473316),new google.maps.LatLng(50.197495,34.506099),new google.maps.LatLng(50.267501,34.371654),new google.maps.LatLng(50.435554,34.258045),new google.maps.LatLng(50.534727,34.246381),new google.maps.LatLng(50.468604,34.051657),new google.maps.LatLng(50.533888,33.893882),new google.maps.LatLng(50.507781,33.805267),new google.maps.LatLng(50.459168,33.729989),new google.maps.LatLng(50.53846,33.061388),new google.maps.LatLng(50.737221,33.169161),new google.maps.LatLng(50.81472,33.119715),new google.maps.LatLng(50.905554,33.183329),new google.maps.LatLng(51.051107,33.211381),new google.maps.LatLng(51.096944,32.935548),new google.maps.LatLng(51.249165,33.07277),new google.maps.LatLng(51.38055,33.000834),new google.maps.LatLng(51.37749,33.123879),new google.maps.LatLng(51.509998,33.119157),new google.maps.LatLng(51.516666,33.189987),new google.maps.LatLng(51.690546,33.156937),new google.maps.LatLng(51.79194,33.063325),new google.maps.LatLng(51.904992,33.168602),new google.maps.LatLng(51.944436,33.378326),new google.maps.LatLng(52.05555,33.374161),new google.maps.LatLng(52.052774,33.479431),new google.maps.LatLng(52.15088,33.320847),new google.maps.LatLng(52.344438,33.401656)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r15">Сумская область (округа 157-162)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Сумская область (округа 157-162)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
                                                                        rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(48.42482,30),new google.maps.LatLng(48.372766,29.942773),new google.maps.LatLng(48.438599,29.899999),new google.maps.LatLng(48.359162,29.784165),new google.maps.LatLng(48.269991,29.736383),new google.maps.LatLng(48.228328,29.788609),new google.maps.LatLng(48.176663,29.664997),new google.maps.LatLng(48.087217,29.68055),new google.maps.LatLng(48.084166,29.239994),new google.maps.LatLng(48.14861,29.095276),new google.maps.LatLng(48.009443,28.88083),new google.maps.LatLng(48.12167,28.854475),new google.maps.LatLng(48.172168,28.577171),new google.maps.LatLng(48.064144,28.496699),new google.maps.LatLng(48.17578,28.426365),new google.maps.LatLng(48.139529,28.312421),new google.maps.LatLng(48.24792,28.354393),new google.maps.LatLng(48.234921,28.097088),new google.maps.LatLng(48.312004,28.090728),new google.maps.LatLng(48.448506,27.79459),new google.maps.LatLng(48.471661,27.500006),new google.maps.LatLng(48.625546,27.36933),new google.maps.LatLng(48.770831,27.428888),new google.maps.LatLng(48.990276,27.376948),new google.maps.LatLng(49.126101,27.495),new google.maps.LatLng(49.154992,27.888612),new google.maps.LatLng(49.376939,27.801115),new google.maps.LatLng(49.416382,27.839723),new google.maps.LatLng(49.496558,27.717978),new google.maps.LatLng(49.539099,27.789705),new google.maps.LatLng(49.634993,27.816392),new google.maps.LatLng(49.677487,27.746111),new google.maps.LatLng(49.739713,27.807505),new google.maps.LatLng(49.791379,28.711946),new google.maps.LatLng(49.873874,28.911668),new google.maps.LatLng(49.739156,29.010282),new google.maps.LatLng(49.677771,28.946668),new google.maps.LatLng(49.593604,28.989998),new google.maps.LatLng(49.634993,29.516391),new google.maps.LatLng(49.530546,29.568332),new google.maps.LatLng(49.442488,29.571113),new google.maps.LatLng(49.363882,29.500279),new google.maps.LatLng(49.181105,29.714164),new google.maps.LatLng(49.028875,29.592224),new google.maps.LatLng(48.994155,29.67583),new google.maps.LatLng(48.949431,29.632221),new google.maps.LatLng(48.912491,29.718055),new google.maps.LatLng(48.771104,29.768058),new google.maps.LatLng(48.766939,29.856944),new google.maps.LatLng(48.698046,29.858611),new google.maps.LatLng(48.658885,29.95833),new google.maps.LatLng(48.533886,30.022223),new google.maps.LatLng(48.460828,29.954719),new google.maps.LatLng(48.454878,30.076227),new google.maps.LatLng(48.426108,30.010001)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r16">Винницкая область (округа 11-18)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Винницкая область (округа 11-18)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
                                                                        rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(51.386486,29.343363),new google.maps.LatLng(51.313881,29.391384),new google.maps.LatLng(51.240829,29.266942),new google.maps.LatLng(51.127487,29.304443),new google.maps.LatLng(51.066666,29.487773),new google.maps.LatLng(50.966661,29.466938),new google.maps.LatLng(50.949717,29.391107),new google.maps.LatLng(50.779993,29.486938),new google.maps.LatLng(50.703882,29.594439),new google.maps.LatLng(50.594713,29.475825),new google.maps.LatLng(50.490276,29.499999),new google.maps.LatLng(50.416667,29.421661),new google.maps.LatLng(50.40694,29.567497),new google.maps.LatLng(50.126385,29.741939),new google.maps.LatLng(50.088048,29.666107),new google.maps.LatLng(49.9325,29.73444),new google.maps.LatLng(49.794721,29.433606),new google.maps.LatLng(49.707219,29.414721),new google.maps.LatLng(49.69972,29.483885),new google.maps.LatLng(49.650899,29.447153),new google.maps.LatLng(49.583333,29.270278),new google.maps.LatLng(49.59361,28.989998),new google.maps.LatLng(49.677777,28.946668),new google.maps.LatLng(49.739162,29.010282),new google.maps.LatLng(49.87388,28.911668),new google.maps.LatLng(49.882493,28.831113),new google.maps.LatLng(49.790835,28.706109),new google.maps.LatLng(49.794442,27.668059),new google.maps.LatLng(49.914712,27.540283),new google.maps.LatLng(49.947487,27.581947),new google.maps.LatLng(50.008605,27.541672),new google.maps.LatLng(50.041105,27.666115),new google.maps.LatLng(50.25305,27.608617),new google.maps.LatLng(50.221098,27.489446),new google.maps.LatLng(50.386381,27.227503),new google.maps.LatLng(50.47582,27.309171),new google.maps.LatLng(50.539991,27.191949),new google.maps.LatLng(50.580274,27.237503),new google.maps.LatLng(50.730543,27.273338),new google.maps.LatLng(50.992765,27.195003),new google.maps.LatLng(51.220541,27.447222),new google.maps.LatLng(51.303044,27.414169),new google.maps.LatLng(51.333874,27.506949),new google.maps.LatLng(51.439983,27.501117),new google.maps.LatLng(51.389988,27.603056),new google.maps.LatLng(51.472758,27.585558),new google.maps.LatLng(51.474992,27.749921),new google.maps.LatLng(51.623326,27.86681),new google.maps.LatLng(51.56352,28.029559),new google.maps.LatLng(51.688077,28.280059),new google.maps.LatLng(51.632908,28.271363),new google.maps.LatLng(51.548161,28.394809),new google.maps.LatLng(51.566689,28.678585),new google.maps.LatLng(51.443468,28.677641),new google.maps.LatLng(51.4173,28.77314),new google.maps.LatLng(51.557494,28.833695),new google.maps.LatLng(51.64569,29.162556),new google.maps.LatLng(51.627136,29.22864),new google.maps.LatLng(51.391969,29.274749),new google.maps.LatLng(51.386026,29.341277)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r17">Житомирская область (округа 62-67)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Житомирская область (округа 62-67)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
                                                                        rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(46.488388,30),new google.maps.LatLng(46.542445,29.898946),new google.maps.LatLng(46.584082,29.969166),new google.maps.LatLng(46.828775,29.971722),new google.maps.LatLng(46.923777,29.728445),new google.maps.LatLng(46.953027,29.575418),new google.maps.LatLng(47.007912,29.633224),new google.maps.LatLng(47.113495,29.531557),new google.maps.LatLng(47.372634,29.585334),new google.maps.LatLng(47.310412,29.397919),new google.maps.LatLng(47.443274,29.334392),new google.maps.LatLng(47.472578,29.182226),new google.maps.LatLng(47.543409,29.132505),new google.maps.LatLng(47.643911,29.238726),new google.maps.LatLng(47.803327,29.279198),new google.maps.LatLng(47.800189,29.213727),new google.maps.LatLng(47.89408,29.261617),new google.maps.LatLng(48.004634,29.182088),new google.maps.LatLng(47.957858,29.088727),new google.maps.LatLng(48.01304,28.90093),new google.maps.LatLng(48.084985,29.049725),new google.maps.LatLng(48.134988,29.044167),new google.maps.LatLng(48.087205,29.680554),new google.maps.LatLng(48.179429,29.667778),new google.maps.LatLng(48.224151,29.933335),new google.maps.LatLng(48.141656,30.06667),new google.maps.LatLng(48.132233,30.295844),new google.maps.LatLng(48.089151,30.313055),new google.maps.LatLng(48.06193,30.204719),new google.maps.LatLng(47.996089,30.21583),new google.maps.LatLng(47.948024,30.297772),new google.maps.LatLng(47.796923,30.395271),new google.maps.LatLng(47.645259,30.417496),new google.maps.LatLng(47.586367,30.699714),new google.maps.LatLng(47.634433,30.784991),new google.maps.LatLng(47.550257,30.869441),new google.maps.LatLng(47.423045,30.828606),new google.maps.LatLng(47.279423,30.889164),new google.maps.LatLng(47.272213,31.154713),new google.maps.LatLng(47.179433,31.116384),new google.maps.LatLng(47.099988,31.306664),new google.maps.LatLng(46.974988,31.224996),new google.maps.LatLng(46.949422,31.02694),new google.maps.LatLng(46.819981,31.167214),new google.maps.LatLng(46.631577,31.188235),new google.maps.LatLng(46.539967,30.751085),new google.maps.LatLng(46.37636,30.748169),new google.maps.LatLng(46.07622,30.472113),new google.maps.LatLng(45.587359,29.727697),new google.maps.LatLng(45.678111,29.880558),new google.maps.LatLng(45.615695,29.740057),new google.maps.LatLng(45.808832,29.695336),new google.maps.LatLng(45.831609,29.638808),new google.maps.LatLng(45.567079,29.599809),new google.maps.LatLng(45.579359,29.717559),new google.maps.LatLng(45.481722,29.607587),new google.maps.LatLng(45.461416,29.758697),new google.maps.LatLng(45.235526,29.740893),new google.maps.LatLng(45.216915,29.675727),new google.maps.LatLng(45.343806,29.657423),new google.maps.LatLng(45.444082,29.429783),new google.maps.LatLng(45.359941,29.006977),new google.maps.LatLng(45.285556,28.946701),new google.maps.LatLng(45.333971,28.794507),new google.maps.LatLng(45.247442,28.795006),new google.maps.LatLng(45.229193,28.718534),new google.maps.LatLng(45.323636,28.354453),new google.maps.LatLng(45.466877,28.215114),new google.maps.LatLng(45.545607,28.310257),new google.maps.LatLng(45.500163,28.509146),new google.maps.LatLng(45.596826,28.546869),new google.maps.LatLng(45.712801,28.483813),new google.maps.LatLng(45.842355,28.787397),new google.maps.LatLng(45.977216,28.794201),new google.maps.LatLng(46.027188,28.991534),new google.maps.LatLng(46.106853,28.958146),new google.maps.LatLng(46.199603,29.058146),new google.maps.LatLng(46.280294,28.947422),new google.maps.LatLng(46.330881,28.992867),new google.maps.LatLng(46.461991,28.936812),new google.maps.LatLng(46.56332,29.242201),new google.maps.LatLng(46.383294,29.251893),new google.maps.LatLng(46.506351,29.350311),new google.maps.LatLng(46.432765,29.408671),new google.maps.LatLng(46.480903,29.488032),new google.maps.LatLng(46.362434,29.606476),new google.maps.LatLng(46.37057,29.700975),new google.maps.LatLng(46.431071,29.670642),new google.maps.LatLng(46.475179,29.754196),new google.maps.LatLng(46.364404,29.885556),new google.maps.LatLng(46.41604,30.135446),new google.maps.LatLng(46.487291,30.003224)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r18">Одесская область (округа 133-143)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Одесская область (округа 133-143)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
                                                                        rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(48.211636,30),new google.maps.LatLng(48.178048,29.881939),new google.maps.LatLng(48.269989,29.736382),new google.maps.LatLng(48.435821,29.891106),new google.maps.LatLng(48.373047,29.948604),new google.maps.LatLng(48.56916,30.39916),new google.maps.LatLng(48.558884,30.568327),new google.maps.LatLng(48.621932,30.537775),new google.maps.LatLng(48.717765,30.601384),new google.maps.LatLng(48.768599,30.710549),new google.maps.LatLng(48.721375,31.334161),new google.maps.LatLng(48.75222,31.458046),new google.maps.LatLng(48.927772,31.544716),new google.maps.LatLng(48.943046,31.732489),new google.maps.LatLng(48.85527,31.882211),new google.maps.LatLng(48.928878,32.021928),new google.maps.LatLng(48.909156,32.12915),new google.maps.LatLng(48.984991,32.146934),new google.maps.LatLng(49.091374,32.331931),new google.maps.LatLng(49.056654,32.454154),new google.maps.LatLng(48.92694,32.521369),new google.maps.LatLng(48.988601,32.683592),new google.maps.LatLng(48.959716,32.782758),new google.maps.LatLng(49.018882,32.856374),new google.maps.LatLng(49.180549,32.750539),new google.maps.LatLng(49.262374,32.788785),new google.maps.LatLng(49.04583,33.344983),new google.maps.LatLng(48.995544,33.296377),new google.maps.LatLng(48.936654,33.379979),new google.maps.LatLng(48.86583,33.672222),new google.maps.LatLng(48.866662,33.918041),new google.maps.LatLng(48.75583,33.824153),new google.maps.LatLng(48.808044,33.753315),new google.maps.LatLng(48.771936,33.553869),new google.maps.LatLng(48.668886,33.823041),new google.maps.LatLng(48.521381,33.438589),new google.maps.LatLng(48.231106,33.510815),new google.maps.LatLng(48.098881,33.266652),new google.maps.LatLng(48.173611,33.237203),new google.maps.LatLng(48.08444,33.218314),new google.maps.LatLng(48.065274,33.10971),new google.maps.LatLng(47.966451,33.035225),new google.maps.LatLng(48.046392,32.971923),new google.maps.LatLng(47.970533,32.695816),new google.maps.LatLng(47.799436,32.645814),new google.maps.LatLng(47.825558,32.263872),new google.maps.LatLng(47.747213,32.138872),new google.maps.LatLng(47.81249,32.014987),new google.maps.LatLng(47.794996,31.856376),new google.maps.LatLng(47.897488,31.861659),new google.maps.LatLng(48.023052,31.705826),new google.maps.LatLng(48.098332,31.75555),new google.maps.LatLng(48.120831,31.614437),new google.maps.LatLng(48.05444,31.501385),new google.maps.LatLng(48.116664,31.507769),new google.maps.LatLng(48.119159,31.255272),new google.maps.LatLng(48.211665,31.176102),new google.maps.LatLng(48.154994,30.897215),new google.maps.LatLng(48.131938,30.313052),new google.maps.LatLng(48.141666,30.066666),new google.maps.LatLng(48.208049,30.005834)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r19">Кировоградская область (округа 99-103)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Кировоградская область (округа 99-103)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
                                                                        rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(48.13224,30.295841),new google.maps.LatLng(48.154991,30.897216),new google.maps.LatLng(48.224159,31.058885),new google.maps.LatLng(48.210548,31.180548),new google.maps.LatLng(48.119156,31.255273),new google.maps.LatLng(48.118599,31.503605),new google.maps.LatLng(48.054436,31.501386),new google.maps.LatLng(48.120827,31.614438),new google.maps.LatLng(48.100273,31.751386),new google.maps.LatLng(48.046388,31.769714),new google.maps.LatLng(48.023049,31.705827),new google.maps.LatLng(47.897485,31.86166),new google.maps.LatLng(47.796656,31.85138),new google.maps.LatLng(47.812487,32.014988),new google.maps.LatLng(47.74721,32.127208),new google.maps.LatLng(47.825555,32.263873),new google.maps.LatLng(47.799433,32.645815),new google.maps.LatLng(47.968035,32.692208),new google.maps.LatLng(48.045832,32.977204),new google.maps.LatLng(47.89776,33.085534),new google.maps.LatLng(47.73054,33.092758),new google.maps.LatLng(47.70972,32.980812),new google.maps.LatLng(47.600269,32.988594),new google.maps.LatLng(47.52721,33.118309),new google.maps.LatLng(47.418325,33.129982),new google.maps.LatLng(47.45361,33.054428),new google.maps.LatLng(47.405827,33.026085),new google.maps.LatLng(47.361668,33.113593),new google.maps.LatLng(47.225636,33.138052),new google.maps.LatLng(47.190267,32.976362),new google.maps.LatLng(47.103331,32.913862),new google.maps.LatLng(47.015272,33.062748),new google.maps.LatLng(46.992216,32.949705),new google.maps.LatLng(46.932494,33.013043),new google.maps.LatLng(46.881112,32.803311),new google.maps.LatLng(46.850557,32.931362),new google.maps.LatLng(46.874993,32.536373),new google.maps.LatLng(46.733049,32.116641),new google.maps.LatLng(46.748898,31.934239),new google.maps.LatLng(46.878926,31.975071),new google.maps.LatLng(46.800007,31.877018),new google.maps.LatLng(46.649316,31.904461),new google.maps.LatLng(46.613481,31.804851),new google.maps.LatLng(46.632898,31.430268),new google.maps.LatLng(46.663064,31.504407),new google.maps.LatLng(46.851452,31.591433),new google.maps.LatLng(46.733705,31.507906),new google.maps.LatLng(46.813729,31.417268),new google.maps.LatLng(46.729535,31.490628),new google.maps.LatLng(46.625454,31.412545),new google.maps.LatLng(46.631588,31.188224),new google.maps.LatLng(46.819992,31.167203),new google.maps.LatLng(46.949433,31.026929),new google.maps.LatLng(46.974999,31.224985),new google.maps.LatLng(47.099999,31.306653),new google.maps.LatLng(47.179444,31.116373),new google.maps.LatLng(47.272224,31.154702),new google.maps.LatLng(47.279434,30.889153),new google.maps.LatLng(47.423056,30.828595),new google.maps.LatLng(47.550268,30.86943),new google.maps.LatLng(47.634444,30.78498),new google.maps.LatLng(47.586378,30.699703),new google.maps.LatLng(47.64527,30.417485),new google.maps.LatLng(47.796934,30.39526),new google.maps.LatLng(47.948035,30.297761),new google.maps.LatLng(47.9961,30.215819),new google.maps.LatLng(48.061941,30.204708),new google.maps.LatLng(48.089162,30.313044),new google.maps.LatLng(48.129437,30.297767)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r20">Николаевская область (округа 127-132)</a></b></div>',
        maxWidth: 600
    });
    rPolygon.infowindow.name = 'Николаевская область (округа 127-132)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
                                                                        rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(47.582848,33.08918),new google.maps.LatLng(47.493318,33.345261),new google.maps.LatLng(47.575555,33.573875),new google.maps.LatLng(47.484155,33.650269),new google.maps.LatLng(47.478411,34.203483),new google.maps.LatLng(47.269442,34.29888),new google.maps.LatLng(47.312204,34.510541),new google.maps.LatLng(47.269442,34.474431),new google.maps.LatLng(47.004992,34.562199),new google.maps.LatLng(46.839151,34.799428),new google.maps.LatLng(46.685549,34.63027),new google.maps.LatLng(46.666102,34.732198),new google.maps.LatLng(46.544161,34.763051),new google.maps.LatLng(46.498049,34.854702),new google.maps.LatLng(46.468043,35.033328),new google.maps.LatLng(46.294396,35.106807),new google.maps.LatLng(46.240922,34.895633),new google.maps.LatLng(46.139788,34.787543),new google.maps.LatLng(46.173613,34.640261),new google.maps.LatLng(45.991386,34.577761),new google.maps.LatLng(45.957771,34.473591),new google.maps.LatLng(46.017775,34.402202),new google.maps.LatLng(46.032209,34.464984),new google.maps.LatLng(46.121373,34.47664),new google.maps.LatLng(46.091665,34.555543),new google.maps.LatLng(46.18028,34.552209),new google.maps.LatLng(46.139998,34.475808),new google.maps.LatLng(46.214437,34.31666),new google.maps.LatLng(46.096106,34.30443),new google.maps.LatLng(46.282499,34.161928),new google.maps.LatLng(46.170835,34.19304),new google.maps.LatLng(46.204168,34.137209),new google.maps.LatLng(46.183873,34.078601),new google.maps.LatLng(46.116658,34.130809),new google.maps.LatLng(46.213613,33.957202),new google.maps.LatLng(46.23583,33.648868),new google.maps.LatLng(46.135267,33.646099),new google.maps.LatLng(46.12367,33.50694),new google.maps.LatLng(46.081979,33.572414),new google.maps.LatLng(46.081145,33.504162),new google.maps.LatLng(46.03487,33.512161),new google.maps.LatLng(46.119006,33.334138),new google.maps.LatLng(46.077923,33.290804),new google.maps.LatLng(46.139119,33.278972),new google.maps.LatLng(46.115037,33.199973),new google.maps.LatLng(46.222093,33.227915),new google.maps.LatLng(46.133898,33.141691),new google.maps.LatLng(46.116317,33.027194),new google.maps.LatLng(46.074539,32.531334),new google.maps.LatLng(46.137564,32.226167),new google.maps.LatLng(46.184007,32.238919),new google.maps.LatLng(46.300065,31.940391),new google.maps.LatLng(46.273344,31.780084),new google.maps.LatLng(46.326229,31.786418),new google.maps.LatLng(46.394619,32.065919),new google.maps.LatLng(46.484787,31.820362),new google.maps.LatLng(46.436983,31.708863),new google.maps.LatLng(46.575146,31.513893),new google.maps.LatLng(46.477258,32.412502),new google.maps.LatLng(46.489065,32.291031),new google.maps.LatLng(46.51473,32.351504),new google.maps.LatLng(46.592954,32.263057),new google.maps.LatLng(46.558896,32.139561),new google.maps.LatLng(46.726864,31.96532),new google.maps.LatLng(46.874992,32.53639),new google.maps.LatLng(46.823609,32.706655),new google.maps.LatLng(46.854163,32.939161),new google.maps.LatLng(46.88111,32.803328),new google.maps.LatLng(46.932492,33.01306),new google.maps.LatLng(46.992214,32.949722),new google.maps.LatLng(47.01527,33.062765),new google.maps.LatLng(47.103329,32.913879),new google.maps.LatLng(47.190265,32.976379),new google.maps.LatLng(47.225634,33.138069),new google.maps.LatLng(47.361666,33.11361),new google.maps.LatLng(47.405825,33.026102),new google.maps.LatLng(47.453608,33.054445),new google.maps.LatLng(47.418323,33.129999),new google.maps.LatLng(47.570269,33.086664)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r21">Херсонская область (округа 182-186)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Херсонская область (округа 182-186)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
                                                                        rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(50.538452,33.061386),new google.maps.LatLng(50.45916,33.729987),new google.maps.LatLng(50.507773,33.805265),new google.maps.LatLng(50.53388,33.89388),new google.maps.LatLng(50.468596,34.051655),new google.maps.LatLng(50.533049,34.251658),new google.maps.LatLng(50.435545,34.258043),new google.maps.LatLng(50.267492,34.371652),new google.maps.LatLng(50.197486,34.506097),new google.maps.LatLng(50.106658,34.468873),new google.maps.LatLng(50.14569,34.908088),new google.maps.LatLng(50.061661,34.918875),new google.maps.LatLng(49.934991,34.86193),new google.maps.LatLng(49.848162,35.174285),new google.maps.LatLng(49.679813,35.284322),new google.maps.LatLng(49.686983,35.422422),new google.maps.LatLng(49.562526,35.478826),new google.maps.LatLng(49.550602,35.385741),new google.maps.LatLng(49.496693,35.468543),new google.maps.LatLng(49.484242,35.321829),new google.maps.LatLng(49.395062,35.363218),new google.maps.LatLng(49.311483,35.263449),new google.maps.LatLng(49.306539,35.007316),new google.maps.LatLng(49.253615,34.951928),new google.maps.LatLng(49.163505,34.983887),new google.maps.LatLng(49.18222,34.825266),new google.maps.LatLng(49.077225,34.402766),new google.maps.LatLng(48.914162,34.273876),new google.maps.LatLng(48.781113,34.296939),new google.maps.LatLng(48.738892,34.221652),new google.maps.LatLng(48.917504,33.802769),new google.maps.LatLng(48.865837,33.67223),new google.maps.LatLng(48.936661,33.379987),new google.maps.LatLng(48.995551,33.296385),new google.maps.LatLng(49.045837,33.344991),new google.maps.LatLng(49.260001,32.791105),new google.maps.LatLng(49.474996,32.673605),new google.maps.LatLng(49.556661,32.760549),new google.maps.LatLng(49.667774,32.702215),new google.maps.LatLng(49.764445,32.566382),new google.maps.LatLng(49.819446,32.411101),new google.maps.LatLng(49.87694,32.36277),new google.maps.LatLng(49.96805,32.418602),new google.maps.LatLng(50.062768,32.250549),new google.maps.LatLng(50.154161,32.273879),new google.maps.LatLng(50.237495,32.06916),new google.maps.LatLng(50.350829,32.141936),new google.maps.LatLng(50.410269,32.369985),new google.maps.LatLng(50.358045,32.739157),new google.maps.LatLng(50.533605,33.061101)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r22">Полтавская область (округа 144-151)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Полтавская область (округа 144-151)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
                                                                        rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(48.625877,36.725227),new google.maps.LatLng(48.784995,36.693604),new google.maps.LatLng(48.754715,37.023605),new google.maps.LatLng(48.813881,37.014717),new google.maps.LatLng(48.825828,37.176383),new google.maps.LatLng(48.922492,37.313048),new google.maps.LatLng(48.975821,37.289161),new google.maps.LatLng(49.044715,37.358603),new google.maps.LatLng(49.14916,37.613051),new google.maps.LatLng(49.185675,37.499526),new google.maps.LatLng(49.22582,37.537497),new google.maps.LatLng(49.231656,37.858885),new google.maps.LatLng(49.202489,37.936102),new google.maps.LatLng(49.156095,37.890272),new google.maps.LatLng(49.150541,38.073323),new google.maps.LatLng(48.995268,38.076656),new google.maps.LatLng(48.953321,38.006939),new google.maps.LatLng(48.921584,38.209118),new google.maps.LatLng(48.834434,38.284992),new google.maps.LatLng(48.725821,38.266933),new google.maps.LatLng(48.667212,38.248326),new google.maps.LatLng(48.543884,38.259435),new google.maps.LatLng(48.446938,38.307491),new google.maps.LatLng(48.365273,38.478595),new google.maps.LatLng(48.27916,38.425822),new google.maps.LatLng(48.278329,38.569437),new google.maps.LatLng(48.17666,38.603318),new google.maps.LatLng(48.106942,38.822205),new google.maps.LatLng(48.021379,38.834419),new google.maps.LatLng(48.003054,39.037201),new google.maps.LatLng(47.914714,39.058029),new google.maps.LatLng(47.86504,39.037952),new google.maps.LatLng(47.862061,38.834744),new google.maps.LatLng(47.684144,38.764771),new google.maps.LatLng(47.566199,38.315439),new google.maps.LatLng(47.382675,38.301801),new google.maps.LatLng(47.313117,38.224409),new google.maps.LatLng(47.253037,38.334215),new google.maps.LatLng(47.228368,38.245883),new google.maps.LatLng(47.11537,38.234356),new google.maps.LatLng(47.025538,38.103939),new google.maps.LatLng(47.109122,38.092747),new google.maps.LatLng(47.096289,37.590523),new google.maps.LatLng(46.867454,37.310329),new google.maps.LatLng(46.950678,37.246857),new google.maps.LatLng(46.875258,37.038585),new google.maps.LatLng(46.924715,37.0061),new google.maps.LatLng(46.967775,37.118045),new google.maps.LatLng(47.026658,37.12276),new google.maps.LatLng(47.193056,36.853595),new google.maps.LatLng(47.20833,36.939417),new google.maps.LatLng(47.299729,36.914981),new google.maps.LatLng(47.368324,37.106097),new google.maps.LatLng(47.355003,37.186366),new google.maps.LatLng(47.459166,37.223871),new google.maps.LatLng(47.575278,36.948312),new google.maps.LatLng(47.602224,36.746935),new google.maps.LatLng(47.675267,36.750826),new google.maps.LatLng(47.883611,36.531091),new google.maps.LatLng(47.921375,36.63749),new google.maps.LatLng(47.966107,36.572489),new google.maps.LatLng(48.075558,36.580552),new google.maps.LatLng(48.035276,36.848595),new google.maps.LatLng(48.166669,36.868316),new google.maps.LatLng(48.189718,36.926375),new google.maps.LatLng(48.298055,36.904983),new google.maps.LatLng(48.325277,36.81137),new google.maps.LatLng(48.570554,36.889151),new google.maps.LatLng(48.528051,36.749991),new google.maps.LatLng(48.594716,36.793044),new google.maps.LatLng(48.623051,36.727478)],
        strokeColor: '#42693d',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#d480ff',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b>Зона АТО - <a href="https://www.rbc.ua/rus/vyboru2014/person/r23">Донецкая область (округа 41-61)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Донецкая область (округа 41-61)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});

                                                                        rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(47.478409,34.203484),new google.maps.LatLng(47.568885,34.582764),new google.maps.LatLng(47.523871,34.908042),new google.maps.LatLng(47.74694,34.946089),new google.maps.LatLng(47.828314,34.904425),new google.maps.LatLng(47.873869,34.808592),new google.maps.LatLng(47.947203,34.916653),new google.maps.LatLng(48.014439,34.812489),new google.maps.LatLng(48.11971,34.831105),new google.maps.LatLng(48.080549,34.937206),new google.maps.LatLng(48.130925,35.246417),new google.maps.LatLng(48.12721,35.673877),new google.maps.LatLng(48.060819,35.821924),new google.maps.LatLng(48.089428,35.9647),new google.maps.LatLng(48.046101,36.041924),new google.maps.LatLng(47.949712,36.056648),new google.maps.LatLng(47.939977,36.117752),new google.maps.LatLng(47.844434,36.076646),new google.maps.LatLng(47.844205,36.576187),new google.maps.LatLng(47.675259,36.750824),new google.maps.LatLng(47.602216,36.746933),new google.maps.LatLng(47.57527,36.94831),new google.maps.LatLng(47.459158,37.223869),new google.maps.LatLng(47.354995,37.186364),new google.maps.LatLng(47.368316,37.106095),new google.maps.LatLng(47.299721,36.914979),new google.maps.LatLng(47.208322,36.939415),new google.maps.LatLng(47.196939,36.855546),new google.maps.LatLng(47.02665,37.122758),new google.maps.LatLng(46.970544,37.121087),new google.maps.LatLng(46.928041,37.008875),new google.maps.LatLng(46.87525,37.038582),new google.maps.LatLng(46.819003,36.915078),new google.maps.LatLng(46.643974,36.795881),new google.maps.LatLng(46.630338,36.749105),new google.maps.LatLng(46.69695,36.827103),new google.maps.LatLng(46.75192,36.776521),new google.maps.LatLng(46.772561,36.608522),new google.maps.LatLng(46.709727,36.38627),new google.maps.LatLng(46.485728,36.110605),new google.maps.LatLng(46.549589,36.225244),new google.maps.LatLng(46.639532,36.245245),new google.maps.LatLng(46.656617,35.92155),new google.maps.LatLng(46.434255,35.45444),new google.maps.LatLng(46.142313,35.183078),new google.maps.LatLng(46.07984,34.999996),new google.maps.LatLng(46.18945,35.222327),new google.maps.LatLng(46.353284,35.357996),new google.maps.LatLng(46.345896,35.27144),new google.maps.LatLng(46.436116,35.277242),new google.maps.LatLng(46.500141,35.186858),new google.maps.LatLng(46.389782,35.214468),new google.maps.LatLng(46.296949,35.064151),new google.maps.LatLng(46.468044,35.033328),new google.maps.LatLng(46.49805,34.854702),new google.maps.LatLng(46.544162,34.763051),new google.maps.LatLng(46.663318,34.734708),new google.maps.LatLng(46.710818,34.626653),new google.maps.LatLng(46.862209,34.790272),new google.maps.LatLng(47.004993,34.562198),new google.maps.LatLng(47.269443,34.47443),new google.maps.LatLng(47.312205,34.51054),new google.maps.LatLng(47.269443,34.298879),new google.maps.LatLng(47.474712,34.206648)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r24">Запорожская область (округа 74-82)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Запорожская область (округа 74-82)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
                                                                        rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(49.973927,37.999039),new google.maps.LatLng(49.907417,38.042694),new google.maps.LatLng(49.931332,38.14661),new google.maps.LatLng(49.976001,38.21814),new google.maps.LatLng(50.068583,38.192612),new google.maps.LatLng(50.086138,38.328303),new google.maps.LatLng(49.989081,38.409361),new google.maps.LatLng(50.007914,38.700971),new google.maps.LatLng(49.940388,38.704246),new google.maps.LatLng(49.811085,38.946689),new google.maps.LatLng(49.881305,39.172938),new google.maps.LatLng(49.761638,39.28227),new google.maps.LatLng(49.739971,39.611661),new google.maps.LatLng(49.639946,39.642742),new google.maps.LatLng(49.563836,39.836379),new google.maps.LatLng(49.619415,40.142352),new google.maps.LatLng(49.563138,40.207381),new google.maps.LatLng(49.499669,40.067351),new google.maps.LatLng(49.243112,40.199628),new google.maps.LatLng(49.181001,40.033407),new google.maps.LatLng(49.052861,39.931685),new google.maps.LatLng(49.044641,39.669158),new google.maps.LatLng(48.895917,39.820379),new google.maps.LatLng(48.867002,40.070879),new google.maps.LatLng(48.794584,39.999991),new google.maps.LatLng(48.837777,39.800353),new google.maps.LatLng(48.619059,39.666549),new google.maps.LatLng(48.570808,39.850048),new google.maps.LatLng(48.370059,39.946022),new google.maps.LatLng(48.322087,39.850297),new google.maps.LatLng(48.315502,39.986355),new google.maps.LatLng(48.251088,40.018048),new google.maps.LatLng(48.049062,39.818936),new google.maps.LatLng(47.829755,39.747658),new google.maps.LatLng(47.877781,39.359274),new google.maps.LatLng(47.839642,39.110273),new google.maps.LatLng(47.865039,39.037954),new google.maps.LatLng(48.003054,39.037203),new google.maps.LatLng(48.021379,38.834421),new google.maps.LatLng(48.10444,38.825258),new google.maps.LatLng(48.17666,38.60332),new google.maps.LatLng(48.278329,38.569439),new google.maps.LatLng(48.27916,38.425824),new google.maps.LatLng(48.365273,38.478597),new google.maps.LatLng(48.446938,38.307493),new google.maps.LatLng(48.543884,38.259437),new google.maps.LatLng(48.667212,38.248328),new google.maps.LatLng(48.725821,38.266935),new google.maps.LatLng(48.834434,38.284994),new google.maps.LatLng(48.921584,38.20912),new google.maps.LatLng(48.953321,38.006941),new google.maps.LatLng(48.995268,38.076658),new google.maps.LatLng(49.150541,38.073325),new google.maps.LatLng(49.156095,37.890274),new google.maps.LatLng(49.202489,37.936104),new google.maps.LatLng(49.231785,37.847252),new google.maps.LatLng(49.289715,37.932495),new google.maps.LatLng(49.420268,37.856659),new google.maps.LatLng(49.521373,37.966385),new google.maps.LatLng(49.70888,38.001388),new google.maps.LatLng(49.723871,37.936653),new google.maps.LatLng(49.78499,38.048331),new google.maps.LatLng(49.843042,38.082769),new google.maps.LatLng(49.889986,38.028876)],
        strokeColor: '#42693d',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#d480ff',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b>Зона АТО - <a href="https://www.rbc.ua/rus/vyboru2014/person/r25">Луганская область (округа 104-114)</a></b></div>',
        maxWidth: 600
    });
    rPolygon.infowindow.name = 'Луганская область (округа 104-114)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});

    rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(50.145691,34.908096),new google.maps.LatLng(50.332253,35.391602),new google.maps.LatLng(50.318055,35.668883),new google.maps.LatLng(50.439335,35.824275),new google.maps.LatLng(50.450695,36.13072),new google.maps.LatLng(50.294029,36.315386),new google.maps.LatLng(50.334025,36.452833),new google.maps.LatLng(50.300361,36.594746),new google.maps.LatLng(50.232886,36.613247),new google.maps.LatLng(50.353747,36.931942),new google.maps.LatLng(50.441469,37.489329),new google.maps.LatLng(50.349028,37.501357),new google.maps.LatLng(50.302859,37.641494),new google.maps.LatLng(50.176917,37.652326),new google.maps.LatLng(50.04039,37.919523),new google.maps.LatLng(49.843048,38.082764),new google.maps.LatLng(49.784996,38.048326),new google.maps.LatLng(49.723877,37.936648),new google.maps.LatLng(49.653047,38.0011),new google.maps.LatLng(49.598879,37.94221),new google.maps.LatLng(49.420275,37.856654),new google.maps.LatLng(49.289722,37.93249),new google.maps.LatLng(49.206386,37.837764),new google.maps.LatLng(49.225825,37.537494),new google.maps.LatLng(49.18568,37.499523),new google.maps.LatLng(49.149165,37.613048),new google.maps.LatLng(49.04472,37.3586),new google.maps.LatLng(48.975826,37.289158),new google.maps.LatLng(48.922497,37.313045),new google.maps.LatLng(48.825833,37.17638),new google.maps.LatLng(48.813886,37.014714),new google.maps.LatLng(48.754171,37.018323),new google.maps.LatLng(48.788891,36.701383),new google.maps.LatLng(48.625882,36.725225),new google.maps.LatLng(48.649999,36.478323),new google.maps.LatLng(48.523611,36.291663),new google.maps.LatLng(48.631383,36.288604),new google.maps.LatLng(48.723049,36.131378),new google.maps.LatLng(48.768055,36.173325),new google.maps.LatLng(48.854168,35.958604),new google.maps.LatLng(48.900272,36.023881),new google.maps.LatLng(48.956102,35.991105),new google.maps.LatLng(48.972483,35.465754),new google.maps.LatLng(49.148142,35.168964),new google.maps.LatLng(49.163499,34.983897),new google.maps.LatLng(49.294159,34.989435),new google.maps.LatLng(49.319542,35.279016),new google.maps.LatLng(49.395057,35.363228),new google.maps.LatLng(49.480895,35.319062),new google.maps.LatLng(49.493636,35.465226),new google.maps.LatLng(49.550597,35.385751),new google.maps.LatLng(49.566413,35.478836),new google.maps.LatLng(49.686979,35.422432),new google.maps.LatLng(49.701756,35.236816),new google.maps.LatLng(49.848156,35.174295),new google.maps.LatLng(49.934985,34.86194),new google.maps.LatLng(50.061655,34.918885),new google.maps.LatLng(50.142762,34.909159)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r26">Харьковская область (округа 168-181)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Харьковская область (округа 168-181)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
                                                                        rPolygon = new google.maps.Polygon({
        paths: [new google.maps.LatLng(49.163498,34.983894),new google.maps.LatLng(49.148141,35.168961),new google.maps.LatLng(48.972482,35.465751),new google.maps.LatLng(48.956101,35.991102),new google.maps.LatLng(48.900271,36.023878),new google.maps.LatLng(48.854167,35.958601),new google.maps.LatLng(48.768054,36.173322),new google.maps.LatLng(48.723048,36.131375),new google.maps.LatLng(48.631382,36.288601),new google.maps.LatLng(48.52361,36.29166),new google.maps.LatLng(48.650547,36.483599),new google.maps.LatLng(48.604168,36.788043),new google.maps.LatLng(48.52805,36.749995),new google.maps.LatLng(48.579724,36.884158),new google.maps.LatLng(48.408604,36.80582),new google.maps.LatLng(48.315831,36.81554),new google.maps.LatLng(48.26389,36.914149),new google.maps.LatLng(48.185552,36.924708),new google.maps.LatLng(48.05972,36.888599),new google.maps.LatLng(48.075558,36.580555),new google.maps.LatLng(47.966107,36.572492),new google.maps.LatLng(47.921375,36.637493),new google.maps.LatLng(47.906652,36.533872),new google.maps.LatLng(47.844213,36.576191),new google.maps.LatLng(47.81027,36.293607),new google.maps.LatLng(47.844442,36.076651),new google.maps.LatLng(47.939985,36.117757),new google.maps.LatLng(47.94972,36.056653),new google.maps.LatLng(48.046109,36.041929),new google.maps.LatLng(48.091107,35.959707),new google.maps.LatLng(48.126103,35.686103),new google.maps.LatLng(48.078298,35.519446),new google.maps.LatLng(48.130933,35.246422),new google.maps.LatLng(48.12222,34.840272),new google.maps.LatLng(48.014447,34.812494),new google.maps.LatLng(47.947211,34.916658),new google.maps.LatLng(47.873877,34.808597),new google.maps.LatLng(47.828322,34.90443),new google.maps.LatLng(47.746948,34.946094),new google.maps.LatLng(47.523879,34.908047),new google.maps.LatLng(47.568893,34.582769),new google.maps.LatLng(47.475555,34.184157),new google.maps.LatLng(47.484161,33.650276),new google.maps.LatLng(47.575279,33.557221),new google.maps.LatLng(47.493324,33.345269),new google.maps.LatLng(47.59722,32.990548),new google.maps.LatLng(47.709723,32.980828),new google.maps.LatLng(47.730543,33.092774),new google.maps.LatLng(47.897763,33.08555),new google.maps.LatLng(47.920278,33.026988),new google.maps.LatLng(48.027219,33.05472),new google.maps.LatLng(48.08444,33.218332),new google.maps.LatLng(48.173611,33.237221),new google.maps.LatLng(48.098881,33.26667),new google.maps.LatLng(48.231106,33.510833),new google.maps.LatLng(48.521381,33.438607),new google.maps.LatLng(48.668886,33.823059),new google.maps.LatLng(48.721376,33.59778),new google.maps.LatLng(48.793611,33.579172),new google.maps.LatLng(48.75583,33.824173),new google.maps.LatLng(48.870164,33.916016),new google.maps.LatLng(48.738885,34.221665),new google.maps.LatLng(48.781106,34.296952),new google.maps.LatLng(48.914155,34.273889),new google.maps.LatLng(49.077218,34.402779),new google.maps.LatLng(49.176941,34.954444)],
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    
    rPolygon.infowindow = new google.maps.InfoWindow({
        content:'<div style="width:300px;"><b><a href="https://www.rbc.ua/rus/vyboru2014/person/r27">Днепропетровская область (округа 24-40)</a></b></div>',
        maxWidth: 600
    });
    
    rPolygon.infowindow.name = 'Днепропетровская область (округа 24-40)';
    rPolygon.setMap(map);
    google.maps.event.addListener(rPolygon, 'click', function (e) {var opened_info = new google.maps.InfoWindow();opened_info.close();if (opened_info.name != this.infowindow.name) {this.infowindow.setPosition(e.latLng);this.infowindow.open(map);opened_info = this.infowindow;}});
}