(this.webpackJsonptournroute=this.webpackJsonptournroute||[]).push([[0],{101:function(e,a,t){e.exports=t(110)},106:function(e,a,t){},107:function(e,a,t){},108:function(e,a,t){},109:function(e,a,t){},110:function(e,a,t){"use strict";t.r(a);var i=t(2),n=t.n(i),o=t(83),r=t.n(o),s=(t(106),t(107),t(108),t(109),t(51)),c=t(52),l=t(74),d=t(72),h=t(58),u=t(117),m=t(85),f=t(84),p=t(71),y=t(8),M=t(115),g=t(119),b=t(118),S=t(116),v=t(73),P=t(79),w=t(120),C=function(e){Object(l.a)(t,e);var a=Object(d.a)(t);function t(e){var i;return Object(s.a)(this,t),(i=a.call(this,e))._map=null,i.url_osrm_nearest="//router.project-osrm.org/nearest/v1/foot/",i.url_osrm_route="//router.project-osrm.org/route/v1/foot/",i.icon_url="https://openlayers.org/en/v4.6.5/examples/data/icon.png",i.state={height:300,center:[10.6,49.6]},i.getBounds=i.getBounds.bind(Object(h.a)(i)),i.updateDimensions=i.updateDimensions.bind(Object(h.a)(i)),i}return Object(c.a)(t,[{key:"updateDimensions",value:function(){var e=this;this.setState({height:this.getBounds().height},(function(){try{e._map.setSize([e.getBounds().width,e.getBounds().height])}catch(a){}}))}},{key:"getBounds",value:function(){var e=300,a=400;try{e=3*(a=this._mapEl.clientWidth)/4}catch(t){}return{width:a,height:e}}},{key:"setCoors",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._map.getView().setCenter(Object(y.d)(e)),a&&this._map.getView().setZoom(a)}},{key:"setPoints",value:function(e){var a=this;this._map.addLayer(new M.a({id:"route",source:new b.a({features:e.reverse().map((function(e){var t=new f.a({geometry:new p.a(Object(y.d)(e)),name:"New Marker"}),i=new P.b({image:new w.a({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",src:a.icon_url})});return t.setStyle(i),t}))})}))}},{key:"setRoute",value:function(e){var a=this,t=e.map((function(e){return Object(y.l)(e).join()})).join(";");console.log("[setRoute]",t),fetch(this.url_osrm_route+t).then((function(e){return e.json()})).then((function(e){"Ok"===e.code?console.log(e):console.warn("[E][OLMap] Error on ".concat(a.url_osrm_route+t," request."))}))}},{key:"removeLayer",value:function(e){var a=this;this._map.getLayers().forEach((function(t){try{t.get("id")===e&&a._map.removeLayer(t)}catch(i){}}))}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions),this.updateDimensions(),this._map=new u.a({target:"map",layers:[new g.a({id:"map",source:new S.a({url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",projection:"EPSG:3857"})})],controls:Object(v.a)({rotate:!1}),view:new m.a({projection:"EPSG:3857",center:Object(y.d)(this.state.center),zoom:4})})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e=this,a={width:"100%",height:this.state.height,backgroundColor:"#cccccc"};return n.a.createElement("div",null,n.a.createElement("div",{id:"map",style:a,ref:function(a){e._mapEl=a}}))}}]),t}(n.a.Component),A=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"filter",value:function(e,a,t){return e.filter((function(e){return e[a]===t}))}},{key:"getById",value:function(e,a){var t=this.filter(e,"id",a);return t.length>0?t[0]:{}}},{key:"parseCoors",value:function(e){return e.split(",").map((function(e){return parseFloat(e)})).reverse()}}]),e}(),E=[{id:1,name:"Italy"},{id:2,name:"France"}],I=[{id:1,country:1,name:"Rome",description:"Rome is the capital city and a special comune of Italy (named Comune di Roma Capitale) as well as the capital of the Lazio region.",coordinates:"41.883333, 12.5"},{id:2,country:1,name:"Milan",description:"Milan is a city in northern Italy, capital of Lombardy, and the second-most populous city in Italy after Rome.",coordinates:"45.466944, 9.19"},{id:3,country:2,name:"Paris",description:"Paris is the capital and most populous city of France, with an estimated population of 2,150,271 residents as of 2020, in an area of 105 square kilometres (41 square miles).",coordinates:"48.856613, 2.352222"}],T=[{id:1,city:1,description:"The Papal Basilica of Saint Peter in the Vatican, or simply Saint Peter's Basilica, is a church built in the Renaissance style located in Vatican City, the papal enclave which is within the city of Rome.",coordinates:"41.902222, 12.453333",name:"St. Peter's Basilica",schedule:"Mon - Sat        7:00 AM - 6:30 PM\nSun        Closed"},{id:2,city:1,description:"The Cathedral of the Most Holy Savior and of Saints John the Baptist and the Evangelist in the Lateran, also known as the Papal Archbasilica of Saint John Lateran, Saint John Lateran, or the Lateran Basilica, is the cathedral church of the Diocese of Rome in the city of Rome, and serves as the seat of the Roman.",coordinates:"41.885833, 12.505556",name:"Archbasilica of St. John Lateran",schedule:"Mon - Sun        7:00 AM - 6:30 PM"},{id:3,city:1,description:"The Basilica of Saint Mary Major, or church of Santa Maria Maggiore, is a Papal major basilica and the largest Catholic Marian church in Rome, Italy.",coordinates:"41.8975, 12.498611",name:"Santa Maria Maggiore",schedule:"Mon - Sun        9:00 AM - 6:45 PM"},{id:4,city:1,description:"The Papal Basilica of Saint Paul Outside the Walls, commonly known as Saint Paul's Outside the Walls, is one of Rome's four ancient, papal, major basilicas, along with the basilicas of Saint John in the Lateran, Saint Peter's, and Saint Mary Major.",coordinates:"41.858611, 12.477222",name:"Basilica of Saint Paul Outside the Walls",schedule:"Mon - Sat        7:00 AM - 6:30 PM\nSun        Closed"},{id:5,city:1,description:'The Basilica Papale di San Lorenzo fuori le mura is a Roman Catholic papal minor basilica and parish church, located in Rome, Italy. The Basilica is one of the Seven Pilgrim Churches of Rome and one of the five former "patriarchal basilicas", each of which was assigned to the care of a Latin Church patriarchate.',coordinates:"41.9025, 12.520556",name:"San Lorenzo fuori le Mura",schedule:"Mon - Sun        7:00 AM - 12:00 PM; 4:00 PM - 7:00 PM"},{id:6,city:1,description:"Sant'Andrea della Valle is one of the three great 17th century preaching churches (the others being the Ges\xf9 and the Chiesa Nuova) built by Counter-Reformation religious orders in the Centro Storico. It is also a titular church, and a minor basilica.",coordinates:"41.895833, 12.474444",name:"Church of Sant'Andrea della Valle",schedule:"Mon - Sun        7:30 AM - 7:30 PM"},{id:7,city:1,description:"The Basilica of Santa Maria in Trastevere; English: Our Lady in Trastevere is a titular minor basilica in the Trastevere district of Rome, and one of the oldest churches of Rome. The basic floor plan and wall structure of the church date back to the 340s, and much of the structure to 1140-43.",coordinates:"41.889444, 12.469722",name:"Santa Maria in Trastevere",schedule:"Mon - Sun        7:30 AM - 9:00 PM"},{id:8,city:1,description:"The church's name derives from the fact that the first Christian church structure on the site was built directly over (Italian: sopra) the ruins or foundations of a temple dedicated to the Egyptian goddess Isis, which had been erroneously ascribed to the Greco-Roman goddess Minerva (possibly due to interpretatio romana).",coordinates:"41.898056, 12.478333",name:"Santa Maria sopra Minerva",schedule:"Mon - Sun        7:00 AM - 8:00 PM"},{id:9,city:1,description:"The Sistine Chapel is a chapel in the Apostolic Palace, the official residence of the pope, in Vatican City. Originally known as the Cappella Magna ('Great Chapel'), the chapel takes its name from Pope Sixtus IV, who restored it between 1473 and 1481.",coordinates:"41.903056, 12.454444",name:"Sistine Chapel",schedule:"Mon - Thu        10:00 AM - 8:00 PM\nFri - Sat        10:00 AM - 10:00 PM\nSun        Closed"},{id:10,city:1,description:"The Great Synagogue of Rome (Italian: Tempio Maggiore di Roma) is the largest synagogue in Rome.",coordinates:"41.892103, 12.478003",name:"Great Synagogue of Rome",schedule:"Mon - Thu        10:00 AM - 5:00 PM\nFri        9:00 AM - 2:00 PM\nSat - Sun        Closed"},{id:11,city:1,description:"The Trevi Fountain is a fountain in the Trevi district in Rome, Italy, designed by Italian architect Nicola Salvi and completed by Giuseppe Pannini and several others. Standing 26.3 metres high and 49.15 metres wide, it is the largest Baroque fountain in the city and one of the most famous fountains in the world.",coordinates:"41.900833, 12.483056",name:"Trevi Fountain",schedule:"Mon - Sat        24 hours\nSun        Closed"},{id:12,city:1,description:"The Fontana dell'Acqua Felice, also called the Fountain of Moses, is a monumental fountain located in the Quirinale District of Rome, Italy. It marked the terminus of the Acqua Felice aqueduct restored by Pope Sixtus V. It was designed by Domenico Fontana and built in 1585-88.",coordinates:"41.904217, 12.493739",name:"Fontana dell'Acqua Felice",schedule:"Mon - Sun        24 hours"},{id:13,city:1,description:"The Fontana dell'Acqua Paola also known as Il Fontanone is a monumental fountain located on the Janiculum Hill, near the church of San Pietro in Montorio, in Rome, Italy. It was built in 1612 to mark the end of the Acqua Paola aqueduct, restored by Pope Paul V, and took its name from him. It was the first major fountain on the right bank of the River Tiber.",coordinates:"41.88875, 12.464167",name:"Fontana dell'Acqua Paola",schedule:"Mon - Sun        24 hours"},{id:14,city:1,description:"Built of travertine limestone, tuff (volcanic rock), and brick-faced concrete, it was the largest amphitheatre ever built at the time and held 50,000 to 80,000 spectators. The Colosseum is situated just east of the Roman Forum. Construction began under the emperor Vespasian in AD 72 and was completed in AD 80 under his successor and heir, Titus. Further modifications were made during the reign of Domitian (81\u201396).",coordinates:"41.8902, 12.4924",name:"Colosseum",schedule:"Mon - Sun        8:30 AM - 7:00 PM"},{id:15,city:1,description:"The Roman Forum, also known by its Latin name Forum Romanum (Italian: Foro Romano), is a rectangular forum (plaza) surrounded by the ruins of several important ancient government buildings at the center of the city of Rome.",coordinates:"41.8922, 12.4852",name:"Roman Forum",schedule:"Mon - Sun        10:30 AM - 7:15 PM"},{id:16,city:1,description:"The Roman Pantheon is the most preserved and influential building of ancient Rome. It is a Roman temple dedicated to all the gods of pagan Rome. As the brick stamps on the side of the building reveal it was built and dedicated between A.D 118 and 125.",coordinates:"41.8986, 12.4768",name:"Pantheon",schedule:"Mon - Sat        9:00 AM - 6:30 PM\nSun        9:00 AM - 1:00 PM"},{id:17,city:1,description:"",coordinates:"",name:"All Saints' Church",schedule:""},{id:18,city:1,description:'The Basilica of the Holy Cross in Jerusalem or Basilica di Santa Croce in Gerusalemme, is a Roman Catholic minor basilica and titular church in rione Esquilino, Rome, Italy. It is one of the Seven Pilgrim Churches of Rome. According to tradition, the basilica was consecrated circa 325 to house the relics of the Passion of Jesus Christ brought to Rome from the Holy Land by Empress St. Helena, mother of Roman Emperor Constantine I. At that time, the Basilica\'s floor was covered with soil from Jerusalem, thus acquiring the title in Hierusalem; it is not dedicated to the Holy Cross which is in Jerusalem, but the Basilica itself is "in Jerusalem" in the sense that a "piece" of Jerusalem was moved to Rome for its foundation.',coordinates:"41.887778, 12.516389",name:"Santa Croce in Gerusalemme",schedule:"Mon - Sat        7:00 AM - 12:45 PM; 3:30 PM - 7:30 PM\nSun        7:30 AM - 12:45 PM; 3:30 PM - 7:30 PM"},{id:19,city:1,description:"San Sebastiano fuori le mura (Saint Sebastian outside the walls), or San Sebastiano ad Catacumbas (Saint Sebastian at the Catacombs), is a basilica in Rome, central Italy. Up to the Great Jubilee of 2000, San Sebastiano was one of the Seven Pilgrim Churches of Rome, and many pilgrims still favor the traditional list.",coordinates:"41.855556, 12.515556",name:"San Sebastiano fuori le mura",schedule:"Mon - Sun        7:00 AM - 6:30 PM"},{id:20,city:1,description:"Santuario della Madonna del Divino Amore or the shrine of Our Lady of Divine Love is a Roman Catholic shrine outside of Rome dedicated to the Blessed Virgin Mary that consists of two churches: an old church built in 1745 and a new church added to the sanctuary in 1999. The church was included by Pope John Paul II in the pilgrimage of Seven Pilgrim Churches of Rome during the Holy Year 2000.",coordinates:"41.77875, 12.543861",name:"Santuario della Madonna del Divino Amore",schedule:"Mon - Sun        7:00 AM - 8:00 PM"},{id:21,city:1,description:"San Pietro in Vincoli (Saint Peter in Chains) is a Roman Catholic titular church and minor basilica in Rome, Italy, best known for being the home of Michelangelo's statue of Moses, part of the tomb of Pope Julius II.",coordinates:"41.893872, 12.493069",name:"San Pietro in Vincoli",schedule:"Mon - Sun        8:00 AM - 12:30 PM; 3:00 PM - 7:00 PM"},{id:22,city:1,description:"The Basilica of Saint Sabina is a historic church on the Aventine Hill in Rome, Italy. It is a titular minor basilica and mother church of the Roman Catholic Order of Preachers, better known as the Dominicans. Santa Sabina is the oldest extant Roman basilica in Rome that preserves its original colonnaded rectangular plan and architectural style. Its decorations have been restored to their original restrained design.",coordinates:"41.884444, 12.479722",name:"Santa Sabina",schedule:"Mon - Sun        8:15 AM - 12:30 PM; 3:30 PM - 6:00 PM"},{id:23,city:1,description:"The Basilica of Saint Mary in Cosmedin is a minor basilica church in Rome, Italy. It is located in the rione of Ripa. According to Byzantine historian Andrew Ekonomou, the church was founded in the 6th century during the Byzantine rule of the city and was placed in the centre of the Greek community in Rome. The church was dedicated to the Virgin Mary, who was greatly adored as Theotokos (Mother of God) in contemporary Constantinople. The name 'Cosmedin' came from the Latinization of the Greek word \u03ba\u03bf\u03c3\u03bc\u03af\u03b4\u03b9\u03bf\u03bd (cosmidion) that derives from the Greek word \u03ba\u03cc\u03c3\u03bc\u03bf\u03c2, which means pure or elegant.",coordinates:"41.888056, 12.481667",name:"Santa Maria in Cosmedin",schedule:"Mon - Sun        9:30 AM - 6:00 PM"},{id:24,city:1,description:"The Basilica of Saint Praxedes, commonly known in Italian as Santa Prassede, is an ancient titular church and minor basilica located near the papal basilica of Saint Mary Major. The church incorporates mosaic decoration that marks it among the oldest churches in Rome.",coordinates:"41.896111, 12.498611",name:"Santa Prassede",schedule:"Mon - Sat        10:00 AM - 12:00 PM; 4:00 PM - 6:00 PM\nSun        10:00 AM - 11:00 PM; 4:00 PM - 6:00 PM"},{id:25,city:1,description:"San Giorgio in Velabro is a church in Rome, Italy, devoted to St. George. According to the founding legend of Rome, the church was built where Roman history began: it is here that the she-wolf found Romulus and Remus. The ancient Arcus Argentariorum is attached to the side of the church's fa\xe7ade.",coordinates:"41.889531, 12.483136",name:"San Giorgio in Velabro",schedule:"Mon        Closed\nTue        10:00 AM - 12:30 PM; 4:00 PM - 6:30 PM\nWed - The        Closed\nFri - Sat        10:00 AM - 12:30 PM; 4:00 PM - 6:30 PM\nSun        Closed"},{id:26,city:1,description:"The Basilica of Saint Clement is a Roman Catholic minor basilica dedicated to Pope Clement I located in Rome, Italy. Archaeologically speaking, the structure is a three-tiered complex of buildings: (1) the present basilica built just before the year 1100 during the height of the Middle Ages; (2) beneath the present basilica is a 4th-century basilica that had been converted out of the home of a Roman nobleman, part of which had in the 1st century briefly served as an early church, and the basement of which had in the 2nd century briefly served as a mithraeum; (3) the home of the Roman nobleman had been built on the foundations of republican era villa and warehouse that had been destroyed in the Great Fire of 64 AD.",coordinates:"41.889444, 12.4975",name:"San Clemente al Laterano",schedule:"Mon - Fri        9:00 AM - 12:30 PM; 3:00 PM - 6:00 PM\nSat - Sun        12:00 PM - 6:00 PM"},{id:27,city:2,description:"Milan Cathedral is the cathedral church of Milan, Lombardy, Italy. Dedicated to the Nativity of St Mary (Santa Maria Nascente), it is the seat of the Archbishop of Milan, currently Archbishop Mario Delpini. The cathedral took nearly six centuries to complete: construction began in 1386, and the final details were completed in 1965. It is the largest church in Italy\u2014the larger St. Peter's Basilica is in the State of Vatican City, a sovereign nation\u2014and the second largest in Europe and the fourth largest in the world.",coordinates:"45.464167, 9.191389",name:"Milan Cathedral",schedule:"Mon - Sun        9:00 AM - 7:00 PM"},{id:28,city:2,description:"The Galleria Vittorio Emanuele II is Italy's oldest active shopping mall and a major landmark of Milan, Italy. Housed within a four-story double arcade in the center of town, the Galleria is named after Victor Emmanuel II, the first king of the Kingdom of Italy. It was designed in 1861 and built by architect Giuseppe Mengoni between 1865 and 1877.",coordinates:"45.465556, 9.19",name:"Galleria Vittorio Emanuele II",schedule:"Mon - Sun        24 hours"},{id:29,city:2,description:"Sforza Castle is in Milan, northern Italy. It was built in the 15th century by Francesco Sforza, Duke of Milan, on the remnants of a 14th-century fortification. Later renovated and enlarged, in the 16th and 17th centuries it was one of the largest citadels in Europe. Extensively rebuilt by Luca Beltrami in 1891\u20131905, it now houses several of the city's museums and art collections.",coordinates:"45.47, 9.178611",name:"Sforza Castle",schedule:"Mon - Sun        7:00 AM - 7:30 PM"},{id:30,city:2,description:"La Scala is an opera house in Milan, Italy. The theatre was inaugurated on 3 August 1778 and was originally known as the Nuovo Regio Ducale Teatro alla Scala (New Royal-Ducal Theatre alla Scala). The premiere performance was Antonio Salieri's Europa riconosciuta.",coordinates:"45.4675, 9.189167",name:"La Scala",schedule:"Mon - Sun        9:00 AM - 5:30 PM"},{id:31,city:2,description:'Santa Maria delle Grazie ("Holy Mary of Grace") is a church and Dominican convent in Milan, northern Italy, and a UNESCO World Heritage Site. The church contains the mural of The Last Supper by Leonardo da Vinci, which is in the refectory of the convent.',coordinates:"45.465833, 9.171111",name:"Santa Maria delle Grazie",schedule:"Mon        Closed\nTue - Sun        8:15 AM - 7:00 AM"},{id:32,city:2,description:'The Pinacoteca di Brera ("Brera Art Gallery") is the main public gallery for paintings in Milan, Italy. It contains one of the foremost collections of Italian paintings, an outgrowth of the cultural program of the Brera Academy, which shares the site in the Palazzo Brera.',coordinates:"45.471944, 9.188056",name:"Pinacoteca di Brera",schedule:"Mon       Closed\nTue - Sun        9:30 AM - 6:30 AM"},{id:33,city:2,description:"The Basilica of Sant'Ambrogio (official name: Basilica romana minore collegiata abbaziale prepositurale di Sant'Ambrogio) is a church in the centre of Milan, northern Italy.",coordinates:"45.462425, 9.175806",name:"Basilica of Sant'Ambrogio",schedule:"Mon - Sat        10:00 AM - 12:00 PM\nMon - Sat        2:30 PM - 6:00 PM\nSun        3:00 PM - 5:00 PM"},{id:34,city:2,description:"The neoclassical Arco della Pace, or \u201cArch of Peace\u201d, is a triumphant arch located at Porta Sempione, one of Milan\u2019s many city gates. The arch was built under Napoleon\u2019s rule of the short-lived Italian Republic (1802\u20131805) to echo the Arc du Triomphe in Paris.",coordinates:"45.475833, 9.1725",name:"Arco della Pace",schedule:"Mon - Sun        24 hours"},{id:35,city:2,description:'Museo Nazionale Scienza e Tecnologia "Leonardo da Vinci" in Milan is the largest science and technology museum in Italy, and is dedicated to Italian painter and scientist Leonardo da Vinci. It was opened on 5 February 1953 and inaugurated by the prime minister of Italy, Alcide De Gasperi.',coordinates:"45.462283, 9.17175",name:"Museo Nazionale Scienza e Tecnologia Leonardo da Vinci",schedule:"Mon - Wed        Closed\nThe        3:00 PM - 9:00 PM\nFri        Closed\nSat - Sun        10:00 AM - 7:00 PM"},{id:36,city:2,description:"The Basilica of San Lorenzo Maggiore is a church in Milan, northern Italy. Located within the city's ring of canals, it was originally built in Roman times and subsequently rebuilt several times over a number of centuries. It is close to the mediaeval Ticino gate and is one of the oldest churches in Milan. It is near the city park called Basilicas Park, which includes both the Basilica of San Lorenzo and the Basilica of Sant'Eustorgio, as well as the Roman Colonne di San Lorenzo.",coordinates:"45.458333, 9.181944",name:"Basilica of San Lorenzo",schedule:"Mon - Sat        8:00 AM - 6:30 PM\nSan        9:00 AM - 7:00 PM"},{id:37,city:3,description:"The Basilica of the Sacred Heart of Paris, commonly known as Sacr\xe9-C\u0153ur Basilica and often simply Sacr\xe9-C\u0153ur, is a Roman Catholic church and minor basilica, dedicated to the Sacred Heart of Jesus, in Paris, France. A popular landmark and the second most visited monument in Paris, the basilica stands at the summit of the butte Montmartre, the highest point in the city.",coordinates:"48.886694, 2.343",name:"Basilica of the Sacr\xe9 C\u0153ur",schedule:"Mon - Sun        8:30 AM - 8:00 PM"},{id:38,city:3,description:"The Cemetery of Montmartre (French: Cimeti\xe8re de Montmartre) is a cemetery in the 18th arrondissement of Paris, France, that dates to the early 19th century. Officially known as the Cimiti\xe8re du Nord, it is the third largest necropolis in Paris, after the P\xe8re Lachaise Cemetery and the Montparnasse Cemetery.",coordinates:"48.887778, 2.330278",name:"The Montmartre Cemetery",schedule:"Mon - Fri        08:00 AM - 18:00 PM\nSat        08:30 AM - 18:00 PM\nSun        09:00 AM - 18:00 PM"},{id:39,city:3,description:"Notre-Dame de Paris, also called Notre-Dame Cathedral, cathedral church in Paris. It is the most famous of the Gothic cathedrals of the Middle Ages and is distinguished for its size, antiquity, and architectural interest. Notre-Dame de Paris, France.",coordinates:"48.853, 2.3498",name:"Notre-Dame de Paris",schedule:"Mon - Fri       8:00 AM - 18:45 PM\nSat - Sun        08:00 AM - 19:45 PM"},{id:40,city:3,description:"P\xe8re Lachaise Cemetery is the largest cemetery in Paris, France (44 hectares or 110 acres). With more than 3.5 million visitors annually, it is the most visited necropolis in the world. The P\xe8re Lachaise is located in the 20th arrondissement and was the first garden cemetery, as well as the first municipal cemetery in Paris.",coordinates:"48.86, 2.396",name:"P\xe8re Lachaise Cemetery",schedule:"Mon - Sat       8:00 AM - 6:00 PM\nSun        09:00 AM - 6:00 PM"},{id:41,city:3,description:"The Sainte-Chapelle is a royal chapel in the Gothic style, within the medieval Palais de la Cit\xe9, the residence of the Kings of France until the 14th century, on the \xcele de la Cit\xe9 in the River Seine in Paris, France.",coordinates:"48.855278, 2.345",name:"Sainte-Chapelle",schedule:"Mon - Sun       9:30 AM - 6:00 PM"},{id:42,city:3,description:"The Church of St Eustache, Paris (French: L\u2019\xe9glise Saint-Eustache) is a church in the 1st arrondissement of Paris. The present building was built between 1532 and 1632.\nSituated near the site of Paris' medieval marketplace (Les Halles) and rue Montorgueil, Saint-Eustache exemplifies a mixture of multiple architectural styles: its structure is Gothic while its interior decoration and other details are Renaissance and classical.",coordinates:"48.863333, 2.345",name:"Church of St Eustache",schedule:"Mon - Fri       9:30 AM - 7:00 PM\nSat        10:00 AM - 7:15 PM\nSun        9:00 AM - 7:15 PM"},{id:43,city:3,description:"The Centre Pompidou, also known as the Pompidou Centre in English, is a complex building in the Beaubourg area of the 4th arrondissement of Paris, near Les Halles, rue Montorgueil, and the Marais. It was designed in the style of high-tech architecture by the architectural team of Richard Rogers, Su Rogers, Renzo Piano, along with Gianfranco Franchini.",coordinates:"48.860653, 2.352411",name:"Centre Pompidou",schedule:"Mon       11:00 AM - 9:00 PM\nTue       Closed\nWed - Sun        11:00 AM - 9:00 PM"},{id:44,city:3,description:"The Louvre, or the Louvre Museum, is the world's largest art museum and a historic monument in Paris, France. A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement (district or ward). Approximately 38,000 objects from prehistory to the 21st century are exhibited over an area of 72,735 square meters (782,910 square feet).[4] In 2019, the Louvre received 9.6 million visitors, making it the most visited museum in the world.",coordinates:"48.861111, 2.336389",name:"Louvre",schedule:"Mon       9:00 AM - 6:00 PM\nTue       Closed\nWed - Sun        9:00 AM - 6:00 PM"},{id:45,city:3,description:"The Mus\xe9e d'Orsay is a museum in Paris, France, on the Left Bank of the Seine. It is housed in the former Gare d'Orsay, a Beaux-Arts railway station built between 1898 and 1900. The museum holds mainly French art dating from 1848 to 1914, including paintings, sculptures, furniture, and photography. It houses the largest collection of Impressionist and post-Impressionist masterpieces in the world, by painters including Monet, Manet, Degas, Renoir, C\xe9zanne, Seurat, Sisley, Gauguin, and Van Gogh.",coordinates:"48.86, 2.326389",name:"Mus\xe9e d'Orsay",schedule:"Mon       Closed\nTue - Wed       9:30 AM - 6:00 PM\nThu       9:30 AM - 9:45 PM\nFri - Sun        9:30 AM - 6:00 PM"},{id:46,city:3,description:"The Arc de Triomphe de l'\xc9toile is one of the most famous monuments in Paris, France, standing at the western end of the Champs-\xc9lys\xe9es at the centre of Place Charles de Gaulle, formerly named Place de l'\xc9toile\u2014the \xe9toile or \"star\" of the juncture formed by its twelve radiating avenues.",coordinates:"48.8738, 2.295",name:"Arc de Triomphe",schedule:"Mon - Sun        24 hours"},{id:47,city:3,description:"The Conciergerie is a building in Paris, France, located on the west of the \xcele de la Cit\xe9, formerly a prison but presently used mostly for law courts. It was part of the former royal palace, the Palais de la Cit\xe9, which consisted of the Conciergerie, Palais de Justice and the Sainte-Chapelle. Hundreds of prisoners during the French Revolution were taken from the Conciergerie to be executed by guillotine at a number of locations around Paris.",coordinates:"48.856389, 2.345556",name:"Conciergerie",schedule:"Mon - Sun       9:30 AM - 6:00 PM"},{id:48,city:3,description:"The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. Constructed from 1887 to 1889 as the entrance to the 1889 World's Fair, it was initially criticised by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognisable structures in the world.[3] The Eiffel Tower is the most-visited paid monument in the world; 6.91 million people ascended it in 2015.",coordinates:"48.858222, 2.2945",name:"Eiffel Tower",schedule:"Mon - Sun       9:00 AM - 12:45 AM"},{id:49,city:3,description:"The Grand Palais des Champs-\xc9lys\xe9es, commonly known as the Grand Palais, is a large historic site, exhibition hall and museum complex located at the Champs-\xc9lys\xe9es in the 8th arrondissement of Paris, France. Construction of the Grand Palais began in 1897 following the demolition of the Palais de l'Industrie (Palace of Industry) as part of the preparation works for the Universal Exposition of 1900, which also included the creation of the adjacent Petit Palais and Pont Alexandre III.",coordinates:"48.866142, 2.312498",name:"Grand Palais",schedule:"Mon       10:00 AM - 6:00 PM\nTue       Closed\nWed - Sun        10:00 AM - 6:00 PM"},{id:50,city:3,description:"Les Invalides, formally the H\xf4tel national des Invalides (The National Residence of the Invalids), or also as H\xf4tel des Invalides, is a complex of buildings in the 7th arrondissement of Paris, France, containing museums and monuments, all relating to the military history of France, as well as a hospital and a retirement home for war veterans, the building's original purpose.",coordinates:"48.855, 2.3125",name:"Les Invalides",schedule:"Mon - Sun       10:00 AM - 5:00 PM"},{id:51,city:3,description:"The Grand Synagogue of Paris, generally known as Synagogue de la Victoire or Grande Synagogue de la Victoire, is situated at 44, Rue de la Victoire, in the 9th arrondissement. It also serves as the official seat of the chief rabbi of Paris.",coordinates:"48.8756, 2.33639",name:"Grand Synagogue of Paris",schedule:"Mon       9:00 AM - 12:00 PM\nTue - Wed        Closed\nThu       9:00 AM - 10:30 AM\nFri - Sun        Closed"},{id:52,city:3,description:'The Palais Garnier or Op\xe9ra Garnier, is a 1,979-seat opera house at the Place de l\'Op\xe9ra in the 9th arrondissement of Paris, France. It was built for the Paris Opera from 1861 to 1875 at the behest of Emperor Napoleon III. Initially referred to as "le nouvel Op\xe9ra de Paris" (the new Paris Opera), it soon became known as the Palais Garnier, "in acknowledgment of its extraordinary opulence" and the architect Charles Garnier\'s plans and designs, which are representative of the Napoleon III style.',coordinates:"48.871944, 2.331667",name:"Palais Garnier",schedule:"Mon - Sun       10:00 AM - 6:30 PM"},{id:53,city:3,description:"All Saints' Church is an active English-speaking chaplaincy of the Church of England's Diocese in Europe - a part of the Anglican Communion - in Rome, Italy. The church building is a Gothic revival red-brick construction, situated in the Via del Babuino, about 100 meters from the Spanish Steps.",coordinates:"41.9083, 12.4789",name:"All Saints' Church",schedule:"Mon - Sat       9:00 AM - 3:00 PM\nSun        8:00 AM - 1:00 PM"}],R=[{id:1,country:1,city:1,name:"\u041c\u0430\u0440\u0448\u0440\u0443\u0442 \u043f\u043e \u0414\u0440\u0435\u0432\u043d\u0435\u043c\u0443 \u0420\u0438\u043c\u0430",places:[14,15,16]},{id:2,country:2,city:3,name:"\u041c\u0430\u0440\u0448\u0440\u0443\u0442 \u043f\u043e \u0445\u0440\u0430\u043c\u0430\u043c \u041f\u0430\u0440\u0438\u0436\u0430",places:[39,41,42,51,37]}],k=function(e){Object(l.a)(t,e);var a=Object(d.a)(t);function t(e){var i;return Object(s.a)(this,t),(i=a.call(this,e))._map=null,i.state={tab:"routes",country:"Countries",city:"Cities",listCities:I,listPlaces:T,listRoutes:R,mapCenter:[10.6,49.6]},i}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"sb-topnav navbar navbar-expand navbar-dark bg-dark py-1"},n.a.createElement("div",{className:"container"},n.a.createElement("h6",{className:"navbar-brand font-weight-bolder mb-0"},"Tour & Route"))),n.a.createElement("div",{className:"ux-gradient"}),n.a.createElement("div",{className:"container px-md-0 mb-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-md-7 pt-4"},n.a.createElement("ul",{className:"nav nav-tabs"},n.a.createElement("li",{className:"nav-item mr-1",onClick:function(){e.setState({tab:"countries"})}},n.a.createElement("span",{className:"nav-link ".concat("countries"===this.state.tab?"active":"")},this.state.country)),n.a.createElement("li",{className:"nav-item mr-1",onClick:function(){e.setState({tab:"cities"})}},n.a.createElement("span",{className:"nav-link ".concat("cities"===this.state.tab?"active":"")},this.state.city)),n.a.createElement("li",{className:"nav-item mr-1",onClick:function(){e.setState({tab:"places"})}},n.a.createElement("span",{className:"nav-link ".concat("places"===this.state.tab?"active":"")},"Places")),n.a.createElement("li",{className:"nav-item mr-1",onClick:function(){e.setState({tab:"routes"})}},n.a.createElement("span",{className:"nav-link ".concat("routes"===this.state.tab?"active":"")},"Routes"))),"countries"===this.state.tab&&n.a.createElement("div",{className:"row mt-3"},E.map((function(a){return n.a.createElement("div",{className:"col-12 col-md-6 col-lg-4 mt-3",key:"country-".concat(a.id),onClick:function(){e.setState({tab:"cities",city:"Cities",country:a.name,listCities:A.filter(I,"country",a.id),listRoutes:A.filter(R,"country",a.id)})}},n.a.createElement("div",{className:"card bg-primary text-white ux-cursor-pointer"},n.a.createElement("div",{className:"card-body py-3 px-3 "},n.a.createElement("div",{className:"d-flex align-items-center justify-content-between"},n.a.createElement("h4",{className:"m-0 font-weight-bolder"},a.name),n.a.createElement("div",{className:"small text-right"},A.filter(I,"country",a.id).map((function(e){return n.a.createElement("div",{key:"country-city-".concat(e.id)},e.name)}))))),n.a.createElement("div",{className:"card-footer py-2 px-3 bg-primary d-flex align-items-center justify-content-between"},n.a.createElement("span",{className:"small stretched-link"},"View Cities"),n.a.createElement("div",{className:"small"},n.a.createElement("i",{className:"fa fa-arrow-circle-right"})))))}))),"cities"===this.state.tab&&n.a.createElement("div",{className:"row mt-3"},this.state.listCities.map((function(a){return n.a.createElement("div",{className:"col-12 col-md-6 col-lg-4 mt-3",key:"city-".concat(a.id),onClick:function(){e.setState({tab:"places",city:a.name,mapCenter:A.parseCoors(a.coordinates),listPlaces:A.filter(T,"city",a.id),listRoutes:A.filter(R,"city",a.id)},(function(){e._map.setCoors(e.state.mapCenter,9)}))}},n.a.createElement("div",{className:"card bg-success text-white ux-cursor-pointer"},n.a.createElement("div",{className:"card-body py-3 px-3 "},n.a.createElement("div",{className:"d-flex align-items-center justify-content-between"},n.a.createElement("h4",{className:"m-0 font-weight-bolder"},a.name),n.a.createElement("h6",{className:"m-0 font-weight-bolder"},A.getById(E,a.country).name))),n.a.createElement("div",{className:"card-footer py-2 px-3 bg-success d-flex align-items-center justify-content-between"},n.a.createElement("span",{className:"small stretched-link"},"View Places"),n.a.createElement("div",{className:"small"},n.a.createElement("i",{className:"fa fa-arrow-circle-right"})))))}))),"places"===this.state.tab&&n.a.createElement("div",{className:"row mt-3"},this.state.listPlaces.map((function(a){var t=A.getById(I,a.city),i=A.getById(E,t.country);return n.a.createElement("div",{className:"col-12 mt-3",key:"place-".concat(a.id),onClick:function(){e._map.removeLayer("points"),e._map.setPoints([A.parseCoors(a.coordinates)]),e._map.setCoors(A.parseCoors(a.coordinates),15)}},n.a.createElement("div",{className:"card ux-place-card ux-cursor-pointer"},n.a.createElement("div",{className:"card-header"},n.a.createElement("div",{className:"d-flex align-items-end justify-content-between"},n.a.createElement("h5",{className:"m-0 font-weight-bolder"},a.name),n.a.createElement("h6",{className:"m-0 font-weight-bolder"},t.name,", ",i.name))),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"m-0"},a.description))))}))),"routes"===this.state.tab&&n.a.createElement("div",{className:"row mt-3"},this.state.listRoutes.map((function(a){var t=A.getById(I,a.city),i=A.getById(E,a.country),o=a.places.map((function(e){var a=A.getById(T,e);return A.parseCoors(a.coordinates)}));return n.a.createElement("div",{className:"col-12 mt-3",key:"route-".concat(a.id)},n.a.createElement("div",{className:"card ux-cursor-pointer"},n.a.createElement("div",{className:"card-header bg-primary text-white",onClick:function(){e._map.removeLayer("points"),e._map.setPoints(o),e._map.setRoute(o),e._map.setCoors(A.parseCoors(t.coordinates),12)}},n.a.createElement("div",{className:"d-flex align-items-end justify-content-between"},n.a.createElement("h5",{className:"m-0 font-weight-bolder"},a.name),n.a.createElement("h6",{className:"m-0 font-weight-bolder"},t.name,", ",i.name))),n.a.createElement("div",{className:"card-body pt-2"},n.a.createElement("div",{className:"row"},a.places.map((function(a){var t=A.getById(T,a);return n.a.createElement("div",{className:"ux-route-item col-12 py-2",key:"route-place-".concat(t.id),onClick:function(){e._map.removeLayer("points"),e._map.setPoints(o),e._map.setRoute(o),e._map.setCoors(A.parseCoors(t.coordinates),15)}},n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{className:"mr-3"},n.a.createElement("i",{className:"fa fa-circle text-primary"})),n.a.createElement("div",{className:"card ux-place-card ux-cursor-pointer"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h5",{className:"m-0 font-weight-bolder"},t.name)),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"small mb-2"},t.description),n.a.createElement("p",{className:"small mb-0"},t.schedule)))))}))))))})))),n.a.createElement("div",{className:"col-12 col-md-5"},n.a.createElement("div",{className:"sticky-top pt-4"},n.a.createElement("div",{className:"card shadow"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h6",{className:"m-0 font-weight-bold"},"Map view")),n.a.createElement("div",{className:"card-body p-0"},n.a.createElement(C,{ref:function(a){e._map=a},center:this.state.mapCenter}))))))))}}]),t}(n.a.Component);var N=function(){return n.a.createElement(k,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.9a829149.chunk.js.map