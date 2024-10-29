document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.getElementById('image-container');
    const currentYearLabel = document.getElementById('current-year');
    const yearElements = document.querySelectorAll('.year');
    const rightPanel = document.querySelector('.right-panel');
  
    // Define figures with image, name, and title for each year
    const figureData = {};
  
    // Method to add figures to the data table
    function addFigure(name, title, imageFile, startDate, endDate) {
        for (let year = startDate; year <= endDate; year++) {
          if (!figureData[year]) {
            figureData[year] = [];
          }
          figureData[year].push({
            image: imageFile,
            name: name,
            title: title,
            endDate: endDate, // Store the end date for each figure
            startDate: startDate
          });
        }
      }

   
addFigure("Icel","King of Mercia","king2.png",515,535);
addFigure("Cnebba","King of Mercia","king2.png",535,554);
addFigure("Cynewald","King of Mercia","king2.png",554,584);
addFigure("Creoda","King of Mercia","creoda.jpg",584,593);
addFigure("Pybba","King of Mercia","king2.png",593,606);
addFigure("Cearl","King of Mercia","king2.png",606,626);
addFigure("Penda","King of Mercia","penda.jpg",626,655);
addFigure("Peada","King of Mercia","peada.jpg",653,656);
addFigure("Oswiu","King of Mercia","king2.png",655,658);
addFigure("Wulfhere","King of Mercia","wulfhere.png",658,675);
addFigure("Aethelred I","King of Mercia","king2.png",675,704);
addFigure("Coenred","King of Mercia","king2.png",704,709);
addFigure("Ceolred","King of Mercia","ceolred.jpg",709,716);
addFigure("Aethelbald","King of Mercia","aethelbald.jpg",716,757);
addFigure("Beornred","King of Mercia","king2.png",757,757);
addFigure("Offa","King of Mercia","offa.png",757,796);
addFigure("Ecgfrith","King of Mercia","ecgfrith2.png",787,796);
addFigure("Coenwulf","King of Mercia","coenwulf.png",796,821);
addFigure("Ceolwulf I","King of Mercia","ceolwulfi.png",821,823);
addFigure("Beornwulf","King of Mercia","beornwulf.png",823,826);
addFigure("Ludeca","King of Mercia","ludeca.png",826,827);
addFigure("Wiglaf","King of Mercia","wiglaf.jpg",827,829);
addFigure("Ecgberht","King of Mercia","ecgberht.jpg",829,830);
addFigure("Wiglaf","King of Mercia","wiglaf.jpg",830,839);
addFigure("Wigmund","King of Mercia","king2.png",839,840);
addFigure("Wigstan","King of Mercia","king2.png",840,840);
addFigure("Aelfflaed","Queen Regent of Mercia","angloqueen.png",840,840);
addFigure("Beorhtwulf","King of Mercia","beorhtwulf.jpg",840,852);
addFigure("Burgred","King of Mercia","burgred.jpg",852,874);
addFigure("Ceolwulf II","King of Mercia","ceolwulfii.jpg",874,883);
addFigure("Aethelred II","Lord of Mercia","king2.png",883,911);
addFigure("Aethelflaed","Lady of Mercia","aethelflaed.png",911,918);
addFigure("Aelfwynn","Lady of Mercia","angloqueen.png",918,918);
addFigure("Cerdic","King of the Gewissae","cerdic.jpg",519,534);
addFigure("Cynric","King of the Gewissae","king2.png",534,560);
addFigure("Ceawlin","King of the Gewissae","king2.png",560,591);
addFigure("Ceol","King of the Gewissae","king2.png",591,597);
addFigure("Ceolwulf","King of the Gewissae","king2.png",597,611);
addFigure("Cynegils","King of the Gewissae","cynegils.jpg",611,643);
addFigure("Cwichelm","Co-King of the Gewissae","king2.png",626,636);
addFigure("Cenwalh","King of the Gewissae","king2.png",643,645);
addFigure("Penda","King of the Gewissae","penda.jpg",645,648);
addFigure("Cenwalh","King of the Gewissae","king2.png",648,672);
addFigure("Seaxburh","King of the Gewissae","king2.png",672,674);
addFigure("Aescwine","King of the Gewissae","king2.png",674,676);
addFigure("Centwine","King of the Gewissae","king2.png",676,685);
addFigure("Caedwalla","King of Wessex","caedwalla.jpg",685,688);
addFigure("Ine","King of Wessex","ine.jpg",688,726);
addFigure("Aethelheard","King of Wessex","king2.png",726,740);
addFigure("Cuthred","King of Wessex","king2.png",740,756);
addFigure("Sigeberht","King of Wessex","king2.png",756,757);
addFigure("Cynewulf","King of Wessex","king2.png",757,786);
addFigure("Beorhtric","King of Wessex","beorhtric.jpg",786,802);
addFigure("Ecgberht","King of Wessex","ecgberht2.jpg",802,839);
addFigure("Aethelwulf","King of Wessex","aethelwulf.jpg",839,858);
addFigure("Aethelbald","King of Wessex","aethelbald2.jpg",858,860);
addFigure("Aethelberht","King of Wessex","aethelberht.jpg",860,865);
addFigure("Aethelred I","King of Wessex","aethelredi4.jpg",865,871);
addFigure("Alfred","King of Wessex","alfredthegreat.jpg",871,886);
addFigure("Alfred","King of the Angles and Saxons","alfredthegreat.jpg",886,899);
addFigure("Edward the Elder","King of the Angles and Saxons","edwardtheelder.jpg",899,924);
addFigure("Aelfweard","King of the Angles and Saxons","king2.png",924,924);
addFigure("Aethelstan","King of the English","aethelstan.jpg",924,939);
addFigure("Edmund I","King of the English","edmundi.jpg",939,946);
addFigure("Eadred","King of the English","eadred.jpg",946,955);
addFigure("Eadwig","King of the English","eadwig.jpg",955,959);
addFigure("Edgar the Peaceful","King of the English","edgarthepeaceful.jpg",959,975);
addFigure("St. Edward the Martyr","King of the English","edwardthemartyr.jpg",975,978);
addFigure("Aethelred the Unready","King of the English","aethelredtheunready.jpg",978,1013);
addFigure("Sweyn Forkbeard","King of the English","sweynforkbeard.jpg",1013,1014);
addFigure("Aethelred the Unready","King of the English","aethelredtheunready.jpg",1014,1016);
addFigure("Edmund Ironside","King of the English","edmundironside.jpg",1016,1016);
addFigure("Cnut","King of the English","cnutthegreat.jpg",1016,1035);
addFigure("Harold Harefoot","King of the English","haroldharefoot.jpg",1035,1040);
addFigure("Harthacnut","King of the English","harthacnut.jpg",1040,1042);
addFigure("Edward the Confessor","King of the English","edwardtheconfessor.jpg",1042,1066);
addFigure("Harold II","King of the English","haroldii.jpg",1066,1066);
addFigure("Edgar Aetheling","King of the English","edgaraetheling.jpg",1066,1066);
addFigure("William I","King of the English","williami.jpg",1066,1087);
addFigure("William II","King of the English","williamii.jpg",1087,1100);
addFigure("Henry I","King of the English","henryi.jpg",1100,1135);
addFigure("Stephen","King of the English","stephen.jpg",1135,1154);
addFigure("Matilda","Claimant","matilda.jpg",1141,1141);
addFigure("Henry II","King of the English","henryii.jpg",1154,1189);
addFigure("Richard I","King of the English","richardi.jpg",1189,1199);
addFigure("John","King of England","john.jpg",1199,1216);
addFigure("Henry III","King of England","henryiii.jpg",1216,1272);
addFigure("Edward I","King of England","edwardi.jpg",1272,1307);
addFigure("Edward II","King of England","edwardii.jpg",1307,1327);
addFigure("Edward III","King of England","edwardiii.jpg",1327,1377);
addFigure("Richard II","King of England","richardii.jpg",1377,1399);
addFigure("Henry IV","King of England","henryiv.jpg",1399,1413);
addFigure("Henry V","King of England","henryv.jpg",1413,1422);
addFigure("Henry VI","King of England","henryvi.jpg",1422,1461);
addFigure("Edward IV","King of England","edwardiv.jpg",1461,1470);
addFigure("Henry VI","King of England","henryvi.jpg",1470,1471);
addFigure("Edward IV","King of England","edwardiv.jpg",1471,1483);
addFigure("Edward V","King of England","edwardv.jpg",1483,1483);
addFigure("Richard III","King of England","richardiii.jpg",1483,1485);
addFigure("Henry VII","King of England","henryvii.jpg",1485,1509);
addFigure("Henry VIII","King of England","henryviii.jpg",1509,1547);
addFigure("Edward VI","King of England","edwardvi.jpg",1547,1553);
addFigure("Lady Jane Grey","Queen of England","ladyjanegrey.jpg",1553,1553);
addFigure("Mary I","Queen of England","maryi.jpg",1553,1558);
addFigure("Elizabeth I","Queen of England","elizabethi.jpg",1558,1603);
addFigure("James I","King of England","jamesi.jpg",1603,1625);
addFigure("Charles I","King of England","charlesi.jpg",1625,1649);
addFigure("Oliver Cromwell","Lord Protector","olivercromwell.jpg",1653,1658);
addFigure("Richard Cromwell","Lord Protector","richardcromwell.jpg",1658,1659);
addFigure("Charles II","King of England","charlesii.jpg",1660,1685);
addFigure("James II","King of England","jamesii.jpg",1685,1688);
addFigure("Mary II","Queen of England","maryii.jpg",1689,1694);
addFigure("William III","King of England","williamiii.jpg",1689,1702);
addFigure("Anne","Queen of England","anne.jpg",1702,1707);
  
addFigure("Ida","King of Bernicia","ida.jpg",547,559);
addFigure("Glappa","King of Bernicia","king2.png",559,560);
addFigure("Adda","King of Bernicia","king2.png",560,568);
addFigure("Aethelric","King of Bernicia","king2.png",568,572);
addFigure("Theodric","King of Bernicia","king2.png",572,579);
addFigure("Frithuwald","King of Bernicia","king2.png",579,585);
addFigure("Hussa","King of Bernicia","king2.png",585,592);
addFigure("Aethelfrith","King of Bernicia","king2.png",593,616);
addFigure("St. Edwin","King of Bernicia","edwin.jpg",616,632);
addFigure("Eanfrith","King of Bernicia","king2.png",632,633);
addFigure("St. Oswald","King of Bernicia","oswald.jpg",634,642);
addFigure("Oswiu","King of Bernicia","king2.png",642,653);
addFigure("Aella","King of Deira","king2.png",559,589);
addFigure("Aethelric","King of Deira","king2.png",589,604);
addFigure("Aethelfrith","King of Deira","king2.png",604,616);
addFigure("St. Edwin","King of Deira","edwin.jpg",616,632);
addFigure("Osric","King of Deira","king2.png",633,634);
addFigure("St. Oswald","King of Deira","oswald.jpg",633,642);
addFigure("Oswiu","King of Deira","king2.png",642,644);
addFigure("St. Oswine","King of Deira","oswine.jpg",644,651);
addFigure("Oethelwald","King of Deira","king2.png",651,654);
addFigure("Oswiu","King of Northumbria","king2.png",654,670);
addFigure("Ecgfrith","King of Northumbria","king2.png",670,685);
addFigure("Aldfrith","King of Northumbria","aldfrith.png",685,704);
addFigure("Eadwulf I","King of Northumbria","king2.png",704,705);
addFigure("Osred I","King of Northumbria","king2.png",705,716);
addFigure("Coenred","King of Northumbria","king2.png",716,718);
addFigure("Osric","King of Northumbria","king2.png",718,729);
addFigure("Ceolwulf","King of Northumbria","king2.png",729,738);
addFigure("Eadberht","King of Northumbria","king2.png",737,758);
addFigure("Oswulf","King of Northumbria","king2.png",758,759);
addFigure("Aethelwald Moll","King of Northumbria","aethelwaldmoll.png",759,765);
addFigure("Alhred","King of Northumbria","king2.png",765,774);
addFigure("Aethelred I","King of Northumbria","king2.png",774,779);
addFigure("Aelfwald I","King of Northumbria","aelfwaldi.png",779,788);
addFigure("Osred II","King of Northumbria","king2.png",788,790);
addFigure("Aethelred I","King of Northumbria","king2.png",790,796);
addFigure("Osbald","King of Northumbria","king2.png",796,796);
addFigure("Eardwulf","King of Northumbria","king2.png",796,806);
addFigure("Aelfwald II","King of Northumbria","aelfwaldii.png",806,808);
addFigure("Eardwulf","King of Northumbria","eardwulf2.jpg",808,810);
addFigure("Eanred","King of Northumbria","eanred2.png",810,841);
addFigure("Aethelred II","King of Northumbria","aethelredii.jpg",840,844);
addFigure("Raedwulf","King of Northumbria","raedwulf2.jpg",844,844);
addFigure("Aethelred II","King of Northumbria","aethelredii.jpg",844,848);
addFigure("Osberht","King of Northumbria","osberht.jpg",848,862);
addFigure("Aella","King of Northumbria","aella.jpg",862,867);
addFigure("Osberht","King of Northumbria","osberht.jpg",867,867);

// Example of how to use addFigure to add a figure
addFigure("Raedwald","King of East Anglia","raedwald.jpg",616,625);
addFigure("Eorpwald","King of East Anglia","king2.png",625,627);
addFigure("Sigeberht","King of East Anglia","king2.png",627,634);
addFigure("Ecgric","King of East Anglia","king2.png",630,641);
addFigure("Anna","King of East Anglia","king2.png",641,653);
addFigure("Aethelhere","King of East Anglia","king2.png",653,655);
addFigure("Aethelwold","King of East Anglia","king2.png",655,663);
addFigure("Ealdwulf","King of East Anglia","king2.png",663,713);
addFigure("Aelfwalf","King of East Anglia","king2.png",713,749);
addFigure("Beonna","King of East Anglia","king2.png",749,749);
addFigure("Alberht","King of East Anglia","king2.png",749,749);
addFigure("Aethlred I","King of East Anglia","king2.png",750,779);
addFigure("St. Aethelberht II","King of East Anglia","aethelberhtii.jpg",779,794);
addFigure("Offa","King of East Anglia","offa.png",787,787);
addFigure("Eadwald","King of East Anglia","eadwald.jpg",796,800);
addFigure("Aethelstan","King of East Anglia","aethelstan2.png",827,845);
addFigure("Aethelweard","King of East Anglia","aethelweard.png",845,855);
addFigure("St. Eadmund","King of East Anglia","eadmund.jpg",855,869);
addFigure("Oswald","King of East Anglia","king2.png",869,875);
addFigure("Aethelred II","King of East Anglia","aethelredii4.png",875,878);
addFigure("Guthrum","King of East Anglia","king2.png",878,890);
addFigure("Eohric","King of East Anglia","king2.png",890,902);
addFigure("Aethelwold","King of East Anglia","king2.png",902,902);
addFigure("Guthrum II","King of East Anglia","king2.png",902,918);
addFigure("Hengest","King of Kent","hengest.jpg",455,488);
addFigure("Horsa","King of Kent","horsa.jpg",455,455);
addFigure("Oisc","King of Kent","king2.png",488,512);
addFigure("Octa","King of Kent","king2.png",512,534);
addFigure("Eormenric","King of Kent","king2.png",534,590);
addFigure("Aethelberht I","King of Kent","aethelberhti.jpg",590,616);
addFigure("Eadbald","King of Kent","eadbald.jpg",616,640);
addFigure("Aethelwald","King of Kent","king2.png",640,640);
addFigure("Eorcenberht","King of Kent","king2.png",640,664);
addFigure("Eormenred","King of Kent","king2.png",664,664);
addFigure("Ecgberht I","King of Kent","king2.png",664,675);
addFigure("Hlothhere","King of Kent","king2.png",674,685);
addFigure("Eadric","King of Kent","king2.png",685,686);
addFigure("Mul","King of Kent","king2.png",686,687);
addFigure("Swaefheard","King of Kent","king2.png",687,692);
addFigure("Swaefberht","King of Kent","king2.png",689,690);
addFigure("Oswine","King of Kent","king2.png",689,693);
addFigure("Wihtred","King of Kent","king2.png",693,725);
addFigure("Alric","King of Kent","king2.png",725,725);
addFigure("Eadberht I","King of Kent","king2.png",725,748);
addFigure("Eadberht III","King of Kent","eadberhtiii.png",796,798);
addFigure("Aescwine","King of Essex","aescwine2.jpg",527,587);
addFigure("Sledd","King of Essex","king2.png",587,604);
addFigure("Saeberht","King of Essex","saeberht.jpg",604,616);
addFigure("Sexred","King of Essex","king2.png",616,623);
addFigure("Saeward","King of Essex","king2.png",616,623);
addFigure("Sigeberht the Little","King of Essex","king2.png",623,653);
addFigure("Sigeberht the Good","King of Essex","king2.png",653,660);
addFigure("Swithhelm","King of Essex","king2.png",660,664);
addFigure("Sighere","King of Essex","king2.png",664,683);
addFigure("Saebbi","King of Essex","king2.png",664,694);
addFigure("Sigeheard","King of Essex","king2.png",694,709);
addFigure("Swaefred","King of Essex","king2.png",695,709);
addFigure("Offa","King of Essex","king2.png",709,709);
addFigure("Saelred","King of Essex","king2.png",709,746);
addFigure("Swaefbert","King of Essex","king2.png",715,738);
addFigure("Swithred","King of Essex","king2.png",746,758);
addFigure("Sigeric","King of Essex","king2.png",758,798);
addFigure("Sigered","King of Essex","king2.png",798,812);


addFigure("Julius Caesar","Proconsul of Gaul","juliuscaesar.webp",-58,-47);
addFigure("Crassus","Consul","crassus.jpg",-55,-55);
addFigure("Pompey","Consul","pompey.jpg",-55,-55);
addFigure("Appius","Consul","romanaristocrat.webp",-54,-54);
addFigure("Ahenobarbus","Consul","romanaristocrat.webp",-54,-54);
addFigure("Augustus","Emperor","augustus.jpg",-27,14);
addFigure("Tiberius","Emperor","tiberius.jpg",14,37);
addFigure("Caligula","Emperor","caligula.jpg",37,41);
addFigure("Claudius","Emperor","claudius.jpg",41,54);
addFigure("Nero","Emperor","nero.jpg",54,68);
addFigure("Galba","Emperor","galba.jpg",68,69);
addFigure("Otho","Emperor","otho.jpg",69,69);
addFigure("Vitellius","Emperor","vitellius.jpg",69,69);
addFigure("Vespasian","Emperor","vespasian.jpg",69,79);
addFigure("Titus","Emperor","titus.jpg",79,81);
addFigure("Domitian","Emperor","domitian.jpg",81,96);
addFigure("Nerva","Emperor","nerva.jpg",96,98);
addFigure("Trajan","Emperor","trajan.jpg",98,117);
addFigure("Hadrian","Emperor","hadrian.jpg",117,138);
addFigure("Antoninus Pius","Emperor","antoninuspius.jpg",138,161);
addFigure("Marcus Aurelius","Emperor","marcusaurelius.jpg",161,180);
addFigure("Lucius Verus","Emperor","luciusverus.png",161,169);
addFigure("Commodus","Emperor","commodus.jpg",180,192);
addFigure("Pertinax","Emperor","pertinax.jpg",193,193);
addFigure("Didius Julianus","Emperor","didiusjulianus.jpg",193,193);
addFigure("Septimius Severus","Emperor","septimiusseverus.jpg",193,211);
addFigure("Caracalla","Emperor","caracalla.jpg",211,217);
addFigure("Geta","Emperor","geta.jpg",211,211);
addFigure("Macrinus","Emperor","macrinus.jpg",217,218);
addFigure("Elagabalus","Emperor","elagabalus.jpg",218,222);
addFigure("Severus Alexander","Emperor","severusalexander.jpg",222,235);
addFigure("Maximinus Thrax","Emperor","maximinusthrax.jpg",235,238);
addFigure("Gordian I","Emperor","gordiani.jpg",238,238);
addFigure("Gordian II","Emperor","gordianii.jpg",238,238);
addFigure("Pupienus","Emperor","pupienus.jpg",238,238);
addFigure("Balbinus","Emperor","balbinus.jpg",238,238);
addFigure("Gordian III","Emperor","gordianiii.jpg",238,244);
addFigure("Philip the Arab","Emperor","philipthearab.jpg",244,249);
addFigure("Decius","Emperor","decius.jpg",249,251);
addFigure("Trebonianus Gallus","Emperor","trebonianusgallus.jpg",251,253);
addFigure("Aemilianus","Emperor","aemilianus.jpg",253,253);
addFigure("Valerian","Emperor","valerian.jpg",253,260);
addFigure("Gallienus","Emperor","gallienus.jpg",253,268);
addFigure("Claudius II","Emperor","claudiusii.jpg",268,270);
addFigure("Quintillus","Emperor","quintillus.jpg",270,270);
addFigure("Aurelian","Emperor","aurelian.jpg",270,275);
addFigure("Postumus","Gallic Emperor","postumus.png",260,269);
addFigure("Tacitus","Emperor","tacitus.jpg",275,276);
addFigure("Florianus","Emperor","florianus.jpg",276,276);
addFigure("Probus","Emperor","probus.jpg",276,282);
addFigure("Carus","Emperor","carus.png",282,283);
addFigure("Carinus","Emperor","carinus.jpg",283,285);
addFigure("Numerian","Emperor","numerian.jpg",283,284);
addFigure("Diocletian","Emperor","diocletian.jpg",284,305);
addFigure("Maximian","Emperor","maximian.jpg",286,305);
addFigure("Galerius","Emperor","galerius.jpg",305,311);
addFigure("Constantius I","Emperor","constantiusi.jpg",305,306);
addFigure("Severus II","Emperor","severusii.jpg",306,307);
addFigure("Maxentius","Emperor","maxentius.jpg",306,312);
addFigure("Licinius","Emperor","licinius.jpg",308,324);
addFigure("Maximinus II","Emperor","maximinusii.jpg",310,313);
addFigure("Valerius Valens","Emperor","valeriusvalens.jpg",316,317);
addFigure("Martinian","Emperor","martinian.png",324,324);
addFigure("Constantine I","Emperor","constantinei.jpg",306,337);
addFigure("Constantine II","Emperor","constantineii.jpg",337,340);
addFigure("Constans I","Emperor","constansi.jpg",337,350);
addFigure("Constantius II","Emperor","constantiusii.jpg",337,361);
addFigure("Julian","Emperor","julian.jpg",361,363);
addFigure("Jovian","Emperor","jovian.jpg",363,364);
addFigure("Valentinian I","Emperor","valentiniani.jpg",364,375);
addFigure("Valens","Emperor","valens.png",364,378);
addFigure("Gratian","Emperor","gratian.jpg",375,383);
addFigure("Valentinian II","Emperor","valentinianii.jpg",388,392);
addFigure("Theodosius I","Emperor","theodosiusi.jpg",379,395);
addFigure("Arcadius","Emperor","arcadius.jpg",394,408);
addFigure("Honorius","Emperor","honorius.jpg",395,410);

addFigure("Stilicho","Magister Militum","stilicho.png",392,408);
addFigure("Alaric","King of the Visigoths","alaric.png",395,410);


addFigure("Augustine","Archbishop of Canterbury","augustine.jpg",597,605);
addFigure("Laurence","Archbishop of Canterbury","bishop.png",604,619);
addFigure("Mellitus","Archbishop of Canterbury","bishop.png",619,624);
addFigure("Justus","Archbishop of Canterbury","bishop.png",624,627);
addFigure("Honorius","Archbishop of Canterbury","bishop.png",627,653);
addFigure("Deusdedit","Archbishop of Canterbury","bishop.png",655,664);
addFigure("Wighard","Archbishop of Canterbury","bishop.png",666,668);
addFigure("Theodore","Archbishop of Canterbury","bishop.png",668,690);
addFigure("Berhtwald","Archbishop of Canterbury","bishop.png",693,731);
addFigure("Tatwine","Archbishop of Canterbury","bishop.png",731,734);
addFigure("Nothhelm","Archbishop of Canterbury","bishop.png",735,739);
addFigure("Cuthbert","Archbishop of Canterbury","bishop.png",740,760);
addFigure("Bregowine","Archbishop of Canterbury","bishop.png",761,764);
addFigure("Jænberht","Archbishop of Canterbury","bishop.png",765,792);
addFigure("Æthelhard","Archbishop of Canterbury","aethelhard.png",793,805);
addFigure("Wulfred","Archbishop of Canterbury","wulfred.png",805,832);
addFigure("Feologild","Archbishop of Canterbury","bishop.png",832,832);
addFigure("Ceolnoth","Archbishop of Canterbury","bishop.png",833,870);
addFigure("Æthelred","Archbishop of Canterbury","aethelredcanterbury.png",870,888);
addFigure("Plegmund","Archbishop of Canterbury","plegmund.jpg",890,923);
addFigure("Athelm","Archbishop of Canterbury","bishop.png",925,926);
addFigure("Wulfhelm","Archbishop of Canterbury","bishop.png",926,941);
addFigure("Oda","Archbishop of Canterbury","oda.jpg",941,958);
addFigure("Ælfsige","Archbishop of Canterbury","bishop.png",958,959);
addFigure("Byrhthelm","Archbishop of Canterbury","bishop.png",959,959);
addFigure("Dunstan","Archbishop of Canterbury","bishop.png",959,988);
addFigure("Æthelgar","Archbishop of Canterbury","bishop.png",988,990);
addFigure("Sigeric","Archbishop of Canterbury","bishop.png",990,994);
addFigure("Ælfric of Abingdon","Archbishop of Canterbury","bishop.png",995,1005);
addFigure("Ælfheah","Archbishop of Canterbury","bishop.png",1006,1012);
addFigure("Lyfing","Archbishop of Canterbury","bishop.png",1013,1020);
addFigure("Æthelnoth","Archbishop of Canterbury","bishop.png",1020,1038);
addFigure("Eadsige","Archbishop of Canterbury","bishop.png",1038,1050);
addFigure("Robert of Jumièges","Archbishop of Canterbury","bishop.png",1051,1052);
addFigure("Stigand","Archbishop of Canterbury","stigand.jpg",1052,1070);
addFigure("Lanfranc","Archbishop of Canterbury","lanfranc.jpg",1070,1089);
addFigure("Anselm","Archbishop of Canterbury","anselm.png",1093,1109);
addFigure("Ralph d'Escures","Archbishop of Canterbury","bishop.png",1114,1122);
addFigure("William de Corbeil","Archbishop of Canterbury","bishop.png",1123,1136);
addFigure("Theobald of Bec","Archbishop of Canterbury","bishop.png",1139,1161);
addFigure("Thomas Becket","Archbishop of Canterbury","thomasbecket.jpg",1162,1170);
addFigure("Richard","Archbishop of Canterbury","bishop.png",1174,1184);
addFigure("Baldwin of Forde","Archbishop of Canterbury","baldwinofforde.jpg",1184,1190);
addFigure("Hubert Walter","Archbishop of Canterbury","hubertwalter.jpg",1193,1205);
addFigure("Stephen Langton","Archbishop of Canterbury","stephenlangton.jpg",1207,1228);
addFigure("Richard le Grant","Archbishop of Canterbury","bishop.png",1229,1231);
addFigure("Edmund of Abingdon","Archbishop of Canterbury","edmundofabingdon.png",1234,1240);
addFigure("Robert Kilwardby","Archbishop of Canterbury","robertkilwardby.jpg",1273,1278);
addFigure("John Peckham","Archbishop of Canterbury","johnpeckham.jpg",1279,1292);
addFigure("Robert Winchelsey","Archbishop of Canterbury","bishop.png",1294,1313);
addFigure("Walter Reynolds","Archbishop of Canterbury","bishop.png",1313,1327);
addFigure("Simon Mepeham","Archbishop of Canterbury","simonmepeham.jpg",1328,1333);
addFigure("John de Stratford","Archbishop of Canterbury","johndestratford.png",1333,1348);
addFigure("Thomas Bradwardine","Archbishop of Canterbury","bishop.png",1349,1349);
addFigure("Simon Islip","Archbishop of Canterbury","bishop.png",1349,1366);
addFigure("Simon Langham","Archbishop of Canterbury","bishop.png",1366,1368);
addFigure("William Whittlesey","Archbishop of Canterbury","bishop.png",1368,1374);
addFigure("Simon Sudbury","Archbishop of Canterbury","simonsudbury.jpg",1375,1381);
addFigure("William Courtenay","Archbishop of Canterbury","bishop.png",1381,1396);
addFigure("Thomas Arundel","Archbishop of Canterbury","thomasarundel.jpg",1396,1397);
addFigure("Roger Walden","Archbishop of Canterbury","bishop.png",1397,1399);
addFigure("Thomas Arundel","Archbishop of Canterbury","thomasarundel.jpg",1399,1414);
addFigure("Henry Chichele","Archbishop of Canterbury","henrychichele.jpg",1414,1443);
addFigure("John Stafford","Archbishop of Canterbury","johnstafford.jpg",1443,1452);
addFigure("John Kemp","Archbishop of Canterbury","johnkemp.jpg",1452,1454);
addFigure("Thomas Bourchier","Archbishop of Canterbury","thomasbourchier.jpg",1454,1486);
addFigure("John Morton","Archbishop of Canterbury","johnmorton.jpg",1486,1500);
addFigure("Henry Deane","Archbishop of Canterbury","bishop.png",1501,1503);
addFigure("William Warham","Archbishop of Canterbury","williamwarham.jpg",1503,1532);
addFigure("Thomas Cranmer","Archbishop of Canterbury","thomascranmer.jpg",1533,1555);
addFigure("Reginald Pole","Archbishop of Canterbury","reginaldpole.jpg",1556,1558);


addFigure("Ecgbert","Archbishop of York","bishop.png",735,766);
addFigure("Æthelbert","Archbishop of York","bishop.png",767,780);
addFigure("Eanbald (I)","Archbishop of York","bishop.png",780,796);
addFigure("Eanbald (II)","Archbishop of York","bishop.png",796,808);
addFigure("Wulfsige","Archbishop of York","bishop.png",808,834);
addFigure("Wigmund","Archbishop of York","bishop.png",837,854);
addFigure("Wulfhere","Archbishop of York","bishop.png",854,896);
addFigure("Æthelbald","Archbishop of York","bishop.png",900,916);
addFigure("Hrotheweard","Archbishop of York","bishop.png",916,931);
addFigure("Wulfstan (I)","Archbishop of York","bishop.png",931,956);
addFigure("Oscytel","Archbishop of York","bishop.png",958,971);
addFigure("Edwald","Archbishop of York","bishop.png",971,971);
addFigure("Oswald","Archbishop of York","bishop.png",971,992);
addFigure("Ealdwulf","Archbishop of York","bishop.png",995,1002);
addFigure("Wulfstan (II)","Archbishop of York","bishop.png",1002,1023);
addFigure("Ælfric Puttoc","Archbishop of York","bishop.png",1023,1051);
addFigure("Cynesige","Archbishop of York","bishop.png",1051,1060);
addFigure("Ealdred","Archbishop of York","bishop.png",1061,1069);
addFigure("Thomas of Bayeux","Archbishop of York","bishop.png",1070,1100);
addFigure("Gerard","Archbishop of York","bishop.png",1100,1108);
addFigure("Thomas (II)","Archbishop of York","bishop.png",1109,1114);
addFigure("Thurstan","Archbishop of York","bishop.png",1119,1140);
addFigure("William (FitzHerbert)","Archbishop of York","bishop.png",1143,1147);
addFigure("Henry Murdac","Archbishop of York","bishop.png",1147,1153);
addFigure("William (FitzHerbert) (again)","Archbishop of York","bishop.png",1153,1154);
addFigure("Roger de Pont L'Évêque","Archbishop of York","rogerdepont.jpg",1154,1181);
addFigure("Geoffrey (Plantagenet)","Archbishop of York","bishop.png",1191,1212);
addFigure("Simon Langton","Archbishop of York","bishop.png",1215,1215);
addFigure("Walter de Gray","Archbishop of York","walterdegray.jpg",1216,1255);
addFigure("Sewal de Bovil","Archbishop of York","bishop.png",1256,1258);
addFigure("Godfrey Ludham","Archbishop of York","bishop.png",1258,1265);
addFigure("William Langton","Archbishop of York","bishop.png",1265,1265);
addFigure("Bonaventure","Archbishop of York","bonaventure.jpg",1265,1266);
addFigure("Walter Giffard","Archbishop of York","bishop.png",1266,1279);
addFigure("William de Wickwane","Archbishop of York","bishop.png",1279,1285);
addFigure("John le Romeyn","Archbishop of York","bishop.png",1286,1296);
addFigure("Henry of Newark","Archbishop of York","bishop.png",1298,1299);
addFigure("Thomas of Corbridge","Archbishop of York","bishop.png",1300,1304);
addFigure("William Greenfield","Archbishop of York","bishop.png",1306,1315);
addFigure("William Melton","Archbishop of York","williammelton.jpg",1317,1340);
addFigure("William Zouche","Archbishop of York","bishop.png",1342,1352);
addFigure("Cardinal John of Thoresby","Archbishop of York","bishop.png",1353,1373);
addFigure("Alexander Neville","Archbishop of York","bishop.png",1374,1388);
addFigure("Thomas Arundel","Archbishop of York","thomasarundel.jpg",1388,1396);
addFigure("Robert Waldby","Archbishop of York","bishop.png",1397,1398);
addFigure("Richard le Scrope","Archbishop of York","bishop.png",1398,1405);
addFigure("Thomas Langley","Archbishop of York","bishop.png",1405,1406);
addFigure("Robert Hallam","Archbishop of York","roberthallam.jpg",1406,1407);
addFigure("Henry Bowet","Archbishop of York","bishop.png",1407,1423);
addFigure("Philip Morgan","Archbishop of York","bishop.png",1423,1424);
addFigure("Richard Fleming","Archbishop of York","richardfleming.jpg",1424,1425);
addFigure("John Kemp","Archbishop of York","johnkemp.jpg",1426,1452);
addFigure("William Booth","Archbishop of York","bishop.png",1452,1464);
addFigure("George Neville","Archbishop of York","bishop.png",1465,1476);
addFigure("Lawrence Booth","Archbishop of York","bishop.png",1476,1480);
addFigure("Thomas Rotherham","Archbishop of York","thomasrotherham.jpg",1480,1500);
addFigure("Thomas Savage","Archbishop of York","thomassavage.jpg",1501,1507);
addFigure("Christopher Bainbridge","Archbishop of York","christopherbainbridge.jpg",1508,1514);
addFigure("Thomas Wolsey","Archbishop of York","thomaswolsey.jpg",1514,1530);


addFigure("Aulus Plautius","Governor of Britain","aulusplautius.jpg",43,47);
addFigure("Publius Ostorius Scapula","Governor of Britain","scapula.jpg",47,52);
addFigure("Aulus Didius Gallus","Governor of Britain","romanaristocrat.webp",52,57);
addFigure("Quintus Veranius","Governor of Britain","romanaristocrat.webp",57,57);
addFigure("Gaius Suetonius Paulinus","Governor of Britain","paulinus.jpg",58,62);
addFigure("Publius Petronius Turpilianus","Governor of Britain","romanaristocrat.webp",62,63);
addFigure("Marcus Trebellius Maximus","Governor of Britain","romanaristocrat.webp",63,69);
addFigure("Marcus Vettius Bolanus","Governor of Britain","romanaristocrat.webp",69,71);
addFigure("Quintus Petillius Cerialis","Governor of Britain","romanaristocrat.webp",71,74);
addFigure("Sextus Julius Frontinus","Governor of Britain","romanaristocrat.webp",74,78);
addFigure("Gnaeus Julius Agricola","Governor of Britain","agricola.jpg",78,85);
addFigure("unknown","Governor of Britain","unknown.jpg",85,87);
addFigure("Sallustius Lucullus","Governor of Britain","romanaristocrat.webp",87,89);
addFigure("Aulus Vicirius Proculus","Governor of Britain","romanaristocrat.webp",90,93);
addFigure("Publius Metilius Nepos","Governor of Britain","romanaristocrat.webp",94,97);
addFigure("Titus Avidius Quietus","Governor of Britain","romanaristocrat.webp",97,101);
addFigure("Lucius Neratius Marcellus","Governor of Britain","romanaristocrat.webp",101,103);
addFigure("unknown","Governor of Britain","unknown.jpg",103,115);
addFigure("Marcus Appius Bradua","Governor of Britain","romanaristocrat.webp",115,118);
addFigure("Quintus Pompeius Falco","Governor of Britain","romanaristocrat.webp",118,122);
addFigure("Aulus Platorius Nepos","Governor of Britain","romanaristocrat.webp",122,125);
addFigure("Lucius Trebius Germanus","Governor of Britain","romanaristocrat.webp",127,130);
addFigure("Sextus Julius Severus","Governor of Britain","romanaristocrat.webp",131,133);
addFigure("Publius Mummius Sisenna","Governor of Britain","romanaristocrat.webp",133,135);
addFigure("Quintus Lollius Urbicus","Governor of Britain","romanaristocrat.webp",138,144);
addFigure("Gnaeus Papirius Aelianus","Governor of Britain","romanaristocrat.webp",145,147);
addFigure("unknown","Governor of Britain","unknown.jpg",147,152);
addFigure("Titus Caesernius Statianus","Governor of Britain","statianus.jpg",153,153);
addFigure("Gnaeus Julius Verus","Governor of Britain","romanaristocrat.webp",154,158);
addFigure("unknown","Governor of Britain","unknown.jpg",158,161);
addFigure("Marcus Statius Priscus","Governor of Britain","romanaristocrat.webp",161,162);
addFigure("Sextus Calpurnius Agricola","Governor of Britain","romanaristocrat.webp",162,166);
addFigure("unknown","Governor of Britain","unknown.jpg",166,175);
addFigure("Quintus Antistius Adventus","Governor of Britain","romanaristocrat.webp",175,178);
addFigure("Lucius Ulpius Marcellus","Governor of Britain","romanaristocrat.webp",178,180);
addFigure("anonymous","Governor of Britain","unknown.jpg",180,180);
addFigure("Lucius Ulpius Marcellus","Governor of Britain","romanaristocrat.webp",180,184);
addFigure("Marcus Antius Crescens Calpurnianus","Acting Governor of Britain","romanaristocrat.webp",185,185);
addFigure("Publius Helvius Pertinax","Governor of Britain","pertinax.jpg",185,187);
addFigure("unknown","Governor of Britain","unknown.jpg",187,191);
addFigure("Decimus Clodius Albinus","Governor of Britain","clodiusalbinus.jpg",192,197);
addFigure("Virius Lupus","Governor of Britain","romanaristocrat.webp",197,200);
addFigure("Pollienus Auspex","Governor of Britain","romanaristocrat.webp",201,201);
addFigure("Marcus Antius Crescens Calpurnianus","Governor of Britain","romanaristocrat.webp",202,202);
addFigure("Gaius Valerius Pudens","Governor of Britain","romanaristocrat.webp",202,205);
addFigure("Lucius Alfenus Senecio","Governor of Britain","romanaristocrat.webp",205,207);
addFigure("Gaius Junius Faustinus Postumianus","Governor of Britain","romanaristocrat.webp",208,211);
addFigure("Tiberius Julius Pollienus Auspex","Governor of Britannia Superior","romanaristocrat.webp",223,226);
addFigure("Gaius Junius Faustinus Postumianus","Governor of Britannia Superior","romanaristocrat.webp",227,235);
addFigure("Titus Desticius Juba","Governor of Britannia Superior","romanaristocrat.webp",253,255);
addFigure("Gaius Julius Marcus","Governor of Britannia Inferior","romanaristocrat.webp",210,213);
addFigure("Marcus Antonius Gordianus","Governor of Britannia Inferior","gordiani.jpg",214,216);
addFigure("Modius Julius","Governor of Britannia Inferior","romanaristocrat.webp",217,219);
addFigure("Tiberius Claudius Paulinus","Governor of Britannia Inferior","romanaristocrat.webp",220,220);
addFigure("Marius Valerianus","Governor of Britannia Inferior","romanaristocrat.webp",221,222);
addFigure("Claudius Xenophon","Governor of Britannia Inferior","romanaristocrat.webp",223,224);
addFigure("Maximus","Governor of Britannia Inferior","romanaristocrat.webp",225,226);
addFigure("Claudius Apellinus","Governor of Britannia Inferior","romanaristocrat.webp",227,229);
addFigure("Calvisius Rufus","Governor of Britannia Inferior","romanaristocrat.webp",230,232);
addFigure("Valerius Crescens Fulvianus","Governor of Britannia Inferior","romanaristocrat.webp",233,235);
addFigure("Tuccianus","Governor of Britannia Inferior","romanaristocrat.webp",236,237);
addFigure("Maecilius Fuscus","Governor of Britannia Inferior","romanaristocrat.webp",238,241);
addFigure("Egnatius Lucillianus","Governor of Britannia Inferior","romanaristocrat.webp",243,244);
addFigure("Nonius Philippus","Governor of Britannia Inferior","romanaristocrat.webp",242,242);
addFigure("Octavius Sabinus","Governor of Britannia Inferior","romanaristocrat.webp",260,269);
addFigure("Pacatianus","Vicarius in Britain","romanaristocrat.webp",319,319);
addFigure("Flavius Martinus","Vicarius in Britain","romanaristocrat.webp",353,360);
addFigure("Alypius of Antioch","Vicarius in Britain","romanaristocrat.webp",361,363);
addFigure("Civilis","Vicarius in Britain","romanaristocrat.webp",364,369);
addFigure("Victorinus","Vicarius in Britain","romanaristocrat.webp",395,401);
addFigure("Chrysanthus","Vicarius in Britain","romanaristocrat.webp",402,406);
addFigure("Carausius","Rebel Emperor","carausius.png",286,293);
addFigure("Allectus","Rebel Emperor","allectus.png",293,296);
addFigure("Magnentius","Rebel Emperor","magnentius.png",350,353);
addFigure("Carausius II","Rebel Emperor","romanaristocrat.webp",354,358);
addFigure("Magnus Maximus","Rebel Emperor","magnusmaximus.png",383,388);
addFigure("Marcus","Rebel Emperor","romanaristocrat.webp",406,406);
addFigure("Gratian","Rebel Emperor","romanaristocrat.webp",407,407);
addFigure("Constantine III","Rebel Emperor","constantineiiibrit.png",407,410);
addFigure("Kenneth I MacAlpin","King of the Picts","pict.png",848,858);
addFigure("Donald I","King of the Picts","pict.png",858,862);
addFigure("Constantine I","King of the Picts","pict.png",862,877);
addFigure("Aed","King of the Picts","pict.png",877,878);
addFigure("Giric","King of the Picts","pict.png",878,889);
addFigure("Eochaid","King of the Picts","pict.png",878,889);
addFigure("Donald II","King of Scotland","pict.png",889,900);
addFigure("Constantine II","King of Scotland","pict.png",900,943);
addFigure("Malcolm I","King of Scotland","pict.png",943,954);
addFigure("Indulf","King of Scotland","pict.png",954,962);
addFigure("Dub","King of Scotland","pict.png",962,967);
addFigure("Cuilen","King of Scotland","pict.png",967,971);
addFigure("Amlaib","King of Scotland","pict.png",973,977);
addFigure("Kenneth II","King of Scotland","pict.png",971,995);
addFigure("Constantine III","King of Scotland","pict.png",995,997);
addFigure("Kenneth III","King of Scotland","pict.png",997,1005);
addFigure("Malcolm II","King of Scotland","pict.png",1005,1034);
addFigure("Duncan I","King of Scotland","pict.png",1034,1040);
addFigure("Macbeth","King of Scotland","pict.png",1040,1057);
addFigure("Lulach","King of Scotland","pict.png",1057,1058);
addFigure("Malcolm III","King of Scotland","pict.png",1058,1093);
addFigure("Donald III","King of Scotland","pict.png",1093,1097);
addFigure("Duncan II","King of Scotland","pict.png",1094,1094);
addFigure("Edgar","King of Scotland","pict.png",1097,1107);
addFigure("Alexander I","King of Scotland","pict.png",1107,1124);
addFigure("David I","King of Scotland","pict.png",1124,1153);
addFigure("Malcolm IV","King of Scotland","pict.png",1153,1165);
addFigure("William I","King of Scotland","pict.png",1165,1214);
addFigure("Alexander II","King of Scotland","pict.png",1214,1249);
addFigure("Alexander III","King of Scotland","pict.png",1249,1286);
addFigure("Margaret","Queen of Scotland","pict.png",1286,1290);
addFigure("John Balliol","King of Scotland","pict.png",1292,1296);
addFigure("Robert I","King of Scotland","pict.png",1306,1329);
addFigure("David II","King of Scotland","pict.png",1329,1371);
addFigure("Edward Balliol","King of Scotland","pict.png",1332,1356);
addFigure("Robert II","King of Scotland","pict.png",1371,1390);
addFigure("Robert III","King of Scotland","pict.png",1390,1406);
addFigure("James I","King of Scotland","pict.png",1406,1437);
addFigure("James II","King of Scotland","pict.png",1437,1460);
addFigure("James III","King of Scotland","pict.png",1460,1488);
addFigure("James IV","King of Scotland","pict.png",1488,1513);
addFigure("James V","King of Scotland","pict.png",1513,1542);
addFigure("Galam","King of the Picts","pict.png",550,555);
addFigure("Bridei I","King of the Picts","pict.png",554,584);
addFigure("Gartnait II","King of the Picts","pict.png",584,595);
addFigure("Nechtan II","King of the Picts","pict.png",595,616);
addFigure("Cinioch","King of the Picts","pict.png",616,631);
addFigure("Gartnait III","King of the Picts","pict.png",631,635);
addFigure("Bridei II","King of the Picts","pict.png",635,641);
addFigure("Talorc III","King of the Picts","pict.png",641,653);
addFigure("Talorgan I","King of the Picts","pict.png",653,657);
addFigure("Gartnait IV","King of the Picts","pict.png",657,663);
addFigure("Drest VI","King of the Picts","pict.png",663,672);
addFigure("Bridei III","King of the Picts","pict.png",672,693);
addFigure("Taran","King of the Picts","pict.png",693,697);
addFigure("Bridei IV","King of the Picts","pict.png",697,706);
addFigure("Nechtan III","King of the Picts","pict.png",706,724);
addFigure("Drest VII","King of the Picts","pict.png",724,726);
addFigure("Alpin I","King of the Picts","pict.png",726,728);
addFigure("Nechtan III","King of the Picts","pict.png",728,729);
addFigure("Oengus I","King of the Picts","pict.png",729,761);
addFigure("Talorgan II","King of the Picts","pict.png",736,750);
addFigure("Bridei V","King of the Picts","pict.png",761,763);
addFigure("Ciniod I","King of the Picts","pict.png",763,775);
addFigure("Alpin II","King of the Picts","pict.png",775,778);
addFigure("Talorc II","King of the Picts","pict.png",778,782);
addFigure("Drest VIII","King of the Picts","pict.png",782,783);
addFigure("Talorc III","King of the Picts","pict.png",783,785);
addFigure("Conall","King of the Picts","pict.png",785,789);
addFigure("Caustantin","King of the Picts","pict.png",789,820);
addFigure("Oengus II","King of the Picts","pict.png",820,834);
addFigure("Drest IX","King of the Picts","pict.png",834,837);
addFigure("Talorc IV","King of the Picts","pict.png",834,837);
addFigure("Eogan","King of the Picts","pict.png",837,839);
addFigure("Uurad","King of the Picts","pict.png",839,842);
addFigure("Bridei VI","King of the Picts","pict.png",842,843);
addFigure("Ciniod II","King of the Picts","pict.png",843,843);
addFigure("Bridei VII","King of the Picts","pict.png",843,845);
addFigure("Drest X","King of the Picts","pict.png",845,848);

addFigure("Cassivellaunus","Leader in Britain","cassivellaunus.jpg",-54,-54);
addFigure("Tasciovanus","Leader in Britain","tasciovanus.jpg",-20,9);
addFigure("Cunobeline","King of the Britons","cunobeline.png",9,40);
addFigure("Cogidubnus","Great King of the Britons","cogidubnus.jpg",40,43);
addFigure("Vortigern","King of the Britons","vortigern.png",440,452);
addFigure("Ambrosius Aurelianus","Leader of the Britons","ambrosiusaurelianus.jpg",479,485);
addFigure("Maelgwn","King among the Britons","maelgwn.jpg",525,547);
addFigure("Selyf","King of the Britons","welsh.png",605,613);
addFigure("Ceredig","King of the Britons","welsh.png",614,617);
addFigure("Cadwallon","King of the Britons","cadwallon.jpg",630,634);
addFigure("Idris","King of the Britons","welsh.png",635,635);
addFigure("Eugein I","King of the Britons","welsh.png",640,644);
addFigure("Cadwaladr","King among the Britons","cadwaladr.jpg",654,664);
addFigure("Ifor","Sovereign of the Britons","welsh.png",683,698);
addFigure("Rhodri Molwynog","King of the Britons","welsh.png",712,754);
addFigure("Cynan","King of the Britons","welsh.png",798,816);
addFigure("Merfyn","King of the Britons","welsh.png",825,844);
addFigure("Rhodri Mawr","King of the Britons","rhodrimawr.png",844,878);
addFigure("Anarawd","King of the Britons","welsh.png",878,916);
addFigure("Idwal","King of the Britons","welsh.png",916,942);
addFigure("Hywel Dda","King of the Britons","hyweldda.jpg",942,950);
addFigure("Dyfnwal","King of the Britons","welsh.png",950,970);
addFigure("Maredudd","King of the Britons","welsh.png",986,999);
addFigure("Llywelyn","King of the Britons","welsh.png",1018,1023);
addFigure("Iago","King of the Britons","welsh.png",1023,1039);
addFigure("Gruffydd","King of the Britons","welsh.png",1039,1063);
addFigure("Bleddyn","King of the Britons","welsh.png",1063,1075);
addFigure("Rhys","King of the Britons","welsh.png",1079,1093);
addFigure("Gruffudd","King of all the Welsh","gruffudd.jpg",1136,1137);
addFigure("Owain","King of Wales","owain.jpg",1137,1170);
addFigure("Geraint","King of Dumnonia","welsh.png",670,710);
addFigure("Cunedda","King of Gwynedd","cunedda.jpg",450,460);
addFigure("Einion","King of Gwynedd","welsh.png",470,480);
addFigure("Cuneglasus","King of Rhos","welsh.png",490,510);
addFigure("Owain Danwyn","King of Rhos","welsh.png",480,490);
addFigure("Cadwallon Lawhir","King of Gwynedd","welsh.png",500,534);
addFigure("Rhun Hir","King of Gwynedd","welsh.png",520,547);
addFigure("Beli","King of Gwynedd","welsh.png",580,599);
addFigure("Iago","King of Gwynedd","welsh.png",599,616);
addFigure("Cadfan","King of Gwynedd","welsh.png",616,625);
addFigure("Cadwallon","King of Gwynedd","cadwallon.jpg",625,634);
addFigure("Cadafael","King of Gwynedd","welsh.png",634,655);
addFigure("Cadwaladr","King of Gwynedd","cadwaladr.jpg",655,682);
addFigure("Idwal Iwrch","King of Gwynedd","welsh.png",682,720);
addFigure("Rhodri Molwynog","King of Gwynedd","welsh.png",720,754);
addFigure("Caradog","King of Gwynedd","welsh.png",754,798);
addFigure("Cynan","King of Gwynedd","welsh.png",798,816);
addFigure("Hywel","King of Gwynedd","welsh.png",816,825);
addFigure("Merfyn","King of Gwynedd","welsh.png",825,844);
addFigure("Rhodri Mawr","King of Gwynedd","rhodrimawr.png",844,878);



addFigure("Ecgberht I","King of Northumbria","king2.png",867,872);
addFigure("Ricsige","King of Northumbria","king2.png",872,875);
addFigure("Ecgberht II","King of Northumbria","king2.png",875,883);
addFigure("Halfdan Ragnarsson","King of Jorvik","halfdanragnarsson.jpg",875,877);
addFigure("Guthred","King of Jorvik","viking.png",883,895);
addFigure("Siefried","King of Jorvik","siefried.jpg",895,900);
addFigure("Cnut","King of Jorvik","cnutnorthumbria.jpg",900,905);
addFigure("Eadwulf II","King of Northumbria","king2.png",895,913);
addFigure("Halfdan","King of Jorvik","viking.png",902,910);
addFigure("Eowils","King of Jorvik","viking.png",902,910);
addFigure("Ealdred I","King of Northumbria","king2.png",913,933);
addFigure("Adulf mcEtulfe","King of Northumbria","king2.png",933,934);
addFigure("Osulf I","King of Northumbria","king2.png",947,954);
addFigure("Raegnald","King of Jorvik","viking.png",918,921);
addFigure("Sigtrygg","King of Jorvik","viking.png",921,927);
addFigure("Guthfrith","King of Jorvik","viking.png",927,927);
addFigure("Olaf Guthfrithson","King of Jorvik","viking.png",939,941);
addFigure("Olaf Sihtricson","King of Jorvik","olafsihtricsson.png",941,944);
addFigure("Sitric II","King of Jorvik","viking.png",942,942);
addFigure("Ragnall Guthfrithson","King of Jorvik","ragnallguthfrithson.jpg",943,944);
addFigure("Eric Bloodaxe","King of Jorvik","ericbloodaxe.jpg",947,948);
addFigure("Olaf Sihtricson","King of Jorvik","olafsihtricsson.png",949,952);
addFigure("Eric Bloodaxe","King of Jorvik","ericbloodaxe.jpg",952,954);


/*
addFigure("St. Peter","Bishop of Rome","peter.jpg",32,67);
addFigure("St. Linus","Bishop of Rome","linus.jpg",67,76);
addFigure("St. Anacletus","Bishop of Rome","anacletus.jpg",76,88);
addFigure("St. Clement I","Bishop of Rome","pope.png",88,97);
addFigure("St. Evaristus","Bishop of Rome","pope.png",97,105);
addFigure("St. Alexander I","Bishop of Rome","pope.png",105,115);
addFigure("St. Sixtus I","Bishop of Rome","pope.png",115,125);
addFigure("St. Telesphorus","Bishop of Rome","pope.png",125,136);
addFigure("St. Hyginus","Bishop of Rome","pope.png",136,140);
addFigure("St. Pius I","Bishop of Rome","pope.png",140,155);
addFigure("St. Anicetus","Bishop of Rome","pope.png",155,166);
addFigure("St. Soter","Bishop of Rome","pope.png",166,175);
addFigure("St. Eleutherius","Bishop of Rome","pope.png",175,189);
addFigure("St. Victor I","Bishop of Rome","pope.png",189,199);
addFigure("St. Zephyrinus","Bishop of Rome","pope.png",199,217);
addFigure("St. Callistus I","Bishop of Rome","pope.png",217,222);
addFigure("St. Urban I","Bishop of Rome","pope.png",222,230);
addFigure("St. Pontian","Bishop of Rome","pope.png",230,235);
addFigure("St. Anterus","Bishop of Rome","pope.png",235,236);
addFigure("St. Fabian","Bishop of Rome","pope.png",236,250);
addFigure("St. Cornelius","Bishop of Rome","pope.png",251,253);
addFigure("St. Lucius I","Bishop of Rome","pope.png",253,254);
addFigure("St. Stephen I","Bishop of Rome","pope.png",254,257);
addFigure("St. Sixtus II","Bishop of Rome","pope.png",257,258);
addFigure("St. Dionysius","Bishop of Rome","pope.png",260,268);
addFigure("St. Felix I","Bishop of Rome","pope.png",269,274);
addFigure("St. Eutychian","Bishop of Rome","pope.png",275,283);
addFigure("St. Caius","Bishop of Rome","pope.png",283,296);
addFigure("St. Marcellinus","Bishop of Rome","pope.png",296,304);
addFigure("St. Marcellus I","Bishop of Rome","pope.png",308,309);
addFigure("St. Eusebius","Bishop of Rome","pope.png",310,310);
addFigure("St. Miltiades","Bishop of Rome","pope.png",311,314);
addFigure("St. Sylvester I","Bishop of Rome","pope.png",314,335);
addFigure("St. Marcus","Bishop of Rome","pope.png",336,336);
*/
addFigure("St. Julius I","Bishop of Rome","juliusi.jpg",337,352);
addFigure("Liberius","Bishop of Rome","liberius.png",352,366);
addFigure("St. Damasus I","Bishop of Rome","damasusi.png",366,384);
addFigure("St. Siricius","Bishop of Rome","siricius.jpg",384,399);
addFigure("St. Anastasius I","Bishop of Rome","anastasiusi.jpg",399,401);
addFigure("St. Innocent I","Bishop of Rome","innocenti.jpg",401,417);
addFigure("St. Zosimus","Bishop of Rome","pope.png",417,418);
addFigure("St. Boniface I","Bishop of Rome","bonifacei.jpg",418,422);
addFigure("St. Celestine I","Bishop of Rome","pope.png",422,432);
addFigure("St. Sixtus III","Bishop of Rome","pope.png",432,440);
addFigure("St. Leo I","Pope","leoi.jpg",440,461);
addFigure("St. Hilarius","Pope","hilarius.jpg",461,468);
addFigure("St. Simplicius","Pope","simplicius.png",468,483);
addFigure("St. Felix III","Pope","pope.png",483,492);
addFigure("St. Gelasius I","Pope","pope.png",492,496);
addFigure("Anastasius II","Pope","pope.png",496,498);
addFigure("St. Symmachus","Pope","symmachus.png",498,514);
addFigure("St. Hormisdas","Pope","pope.png",514,523);
addFigure("St. John I","Pope","pope.png",523,526);
addFigure("St. Felix IV","Pope","felixiv.png",526,530);
addFigure("Boniface II","Pope","pope.png",530,532);
addFigure("John II","Pope","pope.png",533,535);
addFigure("St. Agapetus I","Pope","pope.png",535,536);
addFigure("St. Silverius","Pope","pope.png",536,537);
addFigure("Vigilius","Pope","pope.png",537,555);
addFigure("Pelagius I","Pope","pope.png",556,561);
addFigure("John III","Pope","pope.png",561,574);
addFigure("Benedict I","Pope","pope.png",575,579);
addFigure("Pelagius II","Pope","pope.png",579,590);
addFigure("St. Gregory I","Pope","gregory.jpg",590,604);
addFigure("Sabinian","Pope","pope.png",604,606);
addFigure("Boniface III","Pope","pope.png",607,607);
addFigure("St. Boniface IV","Pope","pope.png",608,615);
addFigure("St. Deusdedit","Pope","pope.png",615,618);
addFigure("Boniface V","Pope","pope.png",619,625);
addFigure("Honorius I","Pope","honoriusi.jpg",625,638);
addFigure("Severinus","Pope","pope.png",640,640);
addFigure("John IV","Pope","johniv.png",640,642);
addFigure("Theodore I","Pope","pope.png",642,649);
addFigure("St. Martin I","Pope","martini.jpg",649,655);
addFigure("St. Eugene I","Pope","pope.png",655,657);
addFigure("St. Vitalian","Pope","pope.png",657,672);
addFigure("Adeodatus","Pope","pope.png",672,676);
addFigure("Donus","Pope","pope.png",676,678);
addFigure("St. Agatho","Pope","agatho.jpg",678,681);
addFigure("St. Leo II","Pope","pope.png",682,683);
addFigure("St. Benedict II","Pope","pope.png",684,685);
addFigure("John V","Pope","pope.png",685,686);
addFigure("Conon","Pope","pope.png",686,687);
addFigure("St. Sergius I","Pope","pope.png",687,701);
addFigure("John VI","Pope","pope.png",701,705);
addFigure("John VII","Pope","johnvii.jpg",705,707);
addFigure("Sisinnius","Pope","pope.png",708,708);
addFigure("Constantine","Pope","pope.png",708,715);
addFigure("St. Gregory II","Pope","pope.png",715,731);
addFigure("St. Gregory III","Pope","gregoryiii.png",731,741);
addFigure("St. Zachary","Pope","zachary.jpg",741,752);
addFigure("Stephen II","Pope","pope.png",752,757);
addFigure("St. Paul I","Pope","pope.png",757,767);
addFigure("Stephen III","Pope","pope.png",767,772);
addFigure("Adrian I","Pope","pope.png",772,795);
addFigure("St. Leo III","Pope","leoiii.jpg",795,816);
addFigure("Stephen IV","Pope","pope.png",816,817);
addFigure("St. Paschal I","Pope","paschali.gif",817,824);
addFigure("Eugene II","Pope","pope.png",824,827);
addFigure("Valentine","Pope","pope.png",827,827);
addFigure("Gregory IV","Pope","gregoryiv.jpg",827,844);
addFigure("Sergius II","Pope","pope.png",844,847);
addFigure("St. Leo IV","Pope","leoiv.jpg",847,855);
addFigure("Benedict III","Pope","pope.png",855,858);
addFigure("St. Nicholas I","Pope","pope.png",858,867);
addFigure("Adrian II","Pope","pope.png",867,872);
addFigure("John VIII","Pope","johnviii.jpg",872,882);
addFigure("Marinus I","Pope","pope.png",882,884);
addFigure("St. Adrian III","Pope","pope.png",884,885);
addFigure("Stephen V","Pope","pope.png",885,891);
addFigure("Formosus","Pope","formosus.png",891,896);
addFigure("Boniface VI","Pope","pope.png",896,896);
addFigure("Stephen VI","Pope","stephenvi.png",896,897);
addFigure("Romanus","Pope","romanus.jpg",897,897);
addFigure("Theodore II","Pope","pope.png",897,897);
addFigure("John IX","Pope","pope.png",898,900);
addFigure("Benedict IV","Pope","pope.png",900,903);
addFigure("Leo V","Pope","pope.png",903,904);
addFigure("Sergius III","Pope","pope.png",904,911);
addFigure("Anastasius III","Pope","anastasiusiii.jpg",911,913);
addFigure("Lando","Pope","pope.png",913,914);
addFigure("John X","Pope","pope.png",914,928);
addFigure("Leo VI","Pope","pope.png",928,928);
addFigure("Stephen VIII","Pope","pope.png",929,931);
addFigure("John XI","Pope","pope.png",931,935);
addFigure("Leo VII","Pope","pope.png",936,939);
addFigure("Stephen IX","Pope","pope.png",939,942);
addFigure("Marinus II","Pope","pope.png",942,946);
addFigure("Agapetus II","Pope","agapetusii.jpg",946,955);
addFigure("John XII","Pope","johnxii.jpg",955,963);
addFigure("Leo VIII","Pope","leoviii.jpg",963,964);
addFigure("Benedict V","Pope","benedictv.jpg",964,964);
addFigure("John XIII","Pope","pope.png",965,972);
addFigure("Benedict VI","Pope","pope.png",973,974);
addFigure("Benedict VII","Pope","pope.png",974,983);
addFigure("John XIV","Pope","pope.png",983,984);
addFigure("John XV","Pope","pope.png",985,996);
addFigure("Gregory V","Pope","pope.png",996,999);
addFigure("Sylvester II","Pope","sylvesterii.jpg",999,1003);
addFigure("John XVII","Pope","pope.png",1003,1003);
addFigure("John XVIII","Pope","pope.png",1003,1009);
addFigure("Sergius IV","Pope","pope.png",1009,1012);
addFigure("Benedict VIII","Pope","pope.png",1012,1024);
addFigure("John XIX","Pope","johnxix.jpg",1024,1032);
addFigure("Benedict IX","Pope","pope.png",1032,1045);
addFigure("Sylvester III","Pope","pope.png",1045,1045);
//addFigure("Benedict IX","Pope","pope.png",1045,1045);
addFigure("Gregory VI","Pope","pope.png",1045,1046);
addFigure("Clement II","Pope","clementii.jpg",1046,1047);
addFigure("Benedict IX","Pope","pope.png",1047,1048);
addFigure("Damasus II","Pope","pope.png",1048,1048);
addFigure("St. Leo IX","Pope","leoix.jpg",1049,1054);
addFigure("Victor II","Pope","victorii.jpg",1055,1057);
addFigure("Stephen X","Pope","pope.png",1057,1058);
addFigure("Nicholas II","Pope","nicholasii.jpg",1058,1061);
addFigure("Alexander II","Pope","pope.png",1061,1073);
addFigure("St. Gregory VII","Pope","gregoryvii.jpg",1073,1085);
addFigure("Victor III","Pope","victoriii.jpg",1086,1087);
addFigure("Urban II","Pope","urbanii.png",1088,1099);
addFigure("Paschal II","Pope","paschalii.jpg",1099,1118);
addFigure("Gelasius II","Pope","gelasiusii.jpg",1118,1119);
addFigure("Callistus II","Pope","callistusii.jpg",1119,1124);
addFigure("Honorius II","Pope","honoriusii.jpg",1124,1130);
addFigure("Innocent II","Pope","innocentii.jpg",1130,1143);
addFigure("Celestine II","Pope","celestineii.jpg",1143,1144);
addFigure("Lucius II","Pope","pope.png",1144,1145);
addFigure("Eugene III","Pope","eugeneiii.jpg",1145,1153);
addFigure("Anastasius IV","Pope","anastasiusiv.png",1153,1154);
addFigure("Adrian IV","Pope","adrianiv.png",1154,1159);
addFigure("Alexander III","Pope","alexanderiii.jpg",1159,1181);
addFigure("Lucius III","Pope","luciusiii.jpg",1181,1185);
addFigure("Urban III","Pope","urbaniii.jpg",1185,1187);
addFigure("Gregory VIII","Pope","pope.png",1187,1187);
addFigure("Clement III","Pope","clementiii.jpg",1187,1191);
addFigure("Celestine III","Pope","celestineiii.png",1191,1198);
addFigure("Innocent III","Pope","innocentiii.jpg",1198,1216);
addFigure("Honorius III","Pope","honoriusiii.jpg",1216,1227);
addFigure("Gregory IX","Pope","gregoryix.jpg",1227,1241);
addFigure("Celestine IV","Pope","pope.png",1241,1241);
addFigure("Innocent IV","Pope","innocentiv.png",1243,1254);
addFigure("Alexander IV","Pope","pope.png",1254,1261);
addFigure("Urban IV","Pope","pope.png",1261,1264);
addFigure("Clement IV","Pope","clementiv.jpg",1265,1268);
addFigure("Gregory X","Pope","gregoryx.jpg",1271,1276);
addFigure("Innocent V","Pope","innocentv.jpg",1276,1276);
addFigure("Adrian V","Pope","adrianv.jpg",1276,1276);
addFigure("John XXI","Pope","johnxxi.png",1276,1277);
addFigure("Nicholas III","Pope","nicholasiii.jpg",1277,1280);
addFigure("Martin IV","Pope","martiniv.jpg",1281,1285);
addFigure("Honorius IV","Pope","honoriusiv.jpg",1285,1287);
addFigure("Nicholas IV","Pope","nicholasiv.jpg",1288,1292);
addFigure("St. Celestine V","Pope","celestinev.jpg",1294,1294);
addFigure("Boniface VIII","Pope","bonifaceviii.jpg",1294,1303);


addFigure("Blessed Benedict XI","Pope","pope.png",1303,1304);
addFigure("Clement V","Pope","pope.png",1305,1314);
addFigure("John XXII","Pope","pope.png",1316,1334);
addFigure("Benedict XII","Pope","pope.png",1334,1342);
addFigure("Clement VI","Pope","pope.png",1342,1352);
addFigure("Innocent VI","Pope","pope.png",1352,1362);
addFigure("Blessed Urban V","Pope","pope.png",1362,1370);
addFigure("Gregory XI","Pope","pope.png",1370,1378);
addFigure("Urban VI","Pope","pope.png",1378,1389);
addFigure("Boniface IX","Pope","pope.png",1389,1404);
addFigure("Innocent VII","Pope","pope.png",1404,1406);
addFigure("Gregory XII","Pope","pope.png",1406,1415);
addFigure("Martin V","Pope","pope.png",1417,1431);
addFigure("Eugene IV","Pope","pope.png",1431,1447);
addFigure("Nicholas V","Pope","pope.png",1447,1455);
addFigure("Callistus III","Pope","pope.png",1455,1458);
addFigure("Pius II","Pope","pope.png",1458,1464);
addFigure("Paul II","Pope","pope.png",1464,1471);
addFigure("Sixtus IV","Pope","pope.png",1471,1484);
addFigure("Innocent VIII","Pope","pope.png",1484,1492);
addFigure("Alexander VI","Pope","pope.png",1492,1503);
addFigure("Pius III","Pope","pope.png",1503,1503);
addFigure("Julius II","Pope","pope.png",1503,1513);
addFigure("Leo X","Pope","pope.png",1513,1521);
addFigure("Adrian VI","Pope","pope.png",1522,1523);
addFigure("Clement VII","Pope","pope.png",1523,1534);
addFigure("Paul III","Pope","pope.png",1534,1536);//1549);
/*
addFigure("Julius III","Pope","pope.png",1550,1555);
addFigure("Marcellus II","Pope","pope.png",1555,1555);
addFigure("Paul IV","Pope","pope.png",1555,1559);
addFigure("Pius IV","Pope","pope.png",1559,1565);
addFigure("St. Pius V","Pope","pope.png",1566,1572);
addFigure("Gregory XIII","Pope","pope.png",1572,1585);
addFigure("Sixtus V","Pope","pope.png",1585,1590);
addFigure("Urban VII","Pope","pope.png",1590,1590);
addFigure("Gregory XIV","Pope","pope.png",1590,1591);
addFigure("Innocent IX","Pope","pope.png",1591,1591);
addFigure("Clement VIII","Pope","pope.png",1592,1605);
addFigure("Leo XI","Pope","pope.png",1605,1605);
addFigure("Paul V","Pope","pope.png",1605,1621);
addFigure("Gregory XV","Pope","pope.png",1621,1623);
addFigure("Urban VIII","Pope","pope.png",1623,1644);
addFigure("Innocent X","Pope","pope.png",1644,1655);
addFigure("Alexander VII","Pope","pope.png",1655,1667);
addFigure("Clement IX","Pope","pope.png",1667,1669);
addFigure("Clement X","Pope","pope.png",1670,1676);
addFigure("Blessed Innocent XI","Pope","pope.png",1676,1689);
addFigure("Alexander VIII","Pope","pope.png",1689,1691);
addFigure("Innocent XII","Pope","pope.png",1691,1700);
addFigure("Clement XI","Pope","pope.png",1700,1721);
addFigure("Innocent XIII","Pope","pope.png",1721,1724);
addFigure("Benedict XIII","Pope","pope.png",1724,1730);
addFigure("Clement XII","Pope","pope.png",1730,1740);
addFigure("Benedict XIV","Pope","pope.png",1740,1758);
addFigure("Clement XIII","Pope","pope.png",1758,1769);
addFigure("Clement XIV","Pope","pope.png",1769,1774);
addFigure("Pius VI","Pope","pope.png",1775,1799);
addFigure("Pius VII","Pope","pope.png",1800,1823);
addFigure("Leo XII","Pope","pope.png",1823,1829);
addFigure("Pius VIII","Pope","pope.png",1829,1830);
addFigure("Gregory XVI","Pope","pope.png",1831,1846);
addFigure("Blessed Pius IX","Pope","pope.png",1846,1878);
addFigure("Leo XIII","Pope","pope.png",1878,1903);
addFigure("St. Pius X","Pope","pope.png",1903,1914);
addFigure("Benedict XV","Pope","pope.png",1914,1922);
addFigure("Pius XI","Pope","pope.png",1922,1939);
addFigure("Pius XII","Pope","pope.png",1939,1958);
addFigure("St. John XXIII","Pope","pope.png",1958,1963);
addFigure("St. Paul VI","Pope","pope.png",1963,1978);
addFigure("John Paul I","Pope","pope.png",1978,1978);
addFigure("St. John Paul II","Pope","pope.png",1978,2005);
addFigure("Benedict XVI","Pope","pope.png",2005,2013);*/


addFigure("Anne","Queen of Great Britain","anne.jpg",1707,1714);
addFigure("George I","King of Great Britain","georgei.jpg",1714,1727);
addFigure("George II","King of Great Britain","georgeii.jpg",1727,1760);
addFigure("George III","King of Great Britain","georgeiii.jpg",1760,1820);
addFigure("George IV","King of Great Britain","georgeiv.jpg",1820,1830);
addFigure("William IV","King of Great Britain","williamiv.jpg",1830,1837);
addFigure("Victoria","Queen of Great Britain","victoria.png",1837,1901);
addFigure("Edward VII","King of Great Britain","edwardvii.jpg",1901,1910);
addFigure("George V","King of Great Britain","georgev.jpg",1910,1936);
addFigure("Edward VIII","King of Great Britain","edwardviii.jpg",1936,1936);
addFigure("George VI","King of Great Britain","georgevi.png",1936,1952);
addFigure("Elizabeth II","Queen of Great Britain","elizabethii.jpg",1952,2022);
addFigure("Charles III","King of Great Britain","charlesiii.jpg",2022,2050);


addFigure("Hugh d'Avranches","Earl of Chester","hughdavranches.jpg",1071,1101);
addFigure("Odo of Bayeux","Earl of Kent","odoofbayeux.jpg",1067,1082);
addFigure("Waltheof","Earl of Northampton","waltheof.jpg",1072,1076);


addFigure("Matilda","Queen of England","matilda.jpg",1066,1083);

addFigure("Robert Curthose","Heir Apparent of Normandy","robertcurthose.png",1066,1087);
addFigure("Robert Curthose","Duke of Normandy","robertcurthose.png",1087,1106);


addFigure("Edgar Aetheling","Pretender to England","edgaraetheling.jpg",1067,1125);


addFigure("Sweyn II","King of Denmark","sweynii.webp",1047,1076);
addFigure("Harald III","King of Denmark","haraldiii.jpg",1076,1080);
addFigure("Cnut IV","King of Denmark","cnutiv.jpg",1080,1086);
addFigure("Ivar the Boneless","Viking Commander","viking.png",865,873);
addFigure("Harald Bluetooth","King of Denmark","haraldbluetooth.png",958,986);
addFigure("Sweyn Forkbeard","King of Denmark","sweynforkbeard.jpg",986,1014);
addFigure("Cnut","King of Denmark","cnutthegreat.jpg",1018,1035);
addFigure("Harthacnut","King of Denmark","harthacnut.jpg",1035,1042);



addFigure("Philip I","King of France","philipi.png",1066,1108);
addFigure("Louis VI","King of France","louisvi.png",1108,1137);
addFigure("Louis VII","King of France","louisvii.jpg",1137,1180);
addFigure("Philip II","King of France","philipii.png",1180,1223);
addFigure("Louis VIII","King of France","louisviii.png",1223,1226);
addFigure("St. Louis IX","King of France","louisix.jpg",1226,1270);
addFigure("Philip III","King of France","philipiii.jpg",1270,1285);
addFigure("Philip IV","King of France","philipiv.jpg",1285,1314);
addFigure("Louis X","King of France","louisx.png",1314,1316);
addFigure("John I","King of France","johnifrance.jpg",1316,1316);
addFigure("Philip V","King of France","philipv.jpg",1316,1322);
addFigure("Charles IV","King of France","charlesiv.jpg",1322,1328);
addFigure("Philip VI","King of France","philipvi.jpg",1328,1350);
addFigure("John II","King of France","johnii.jpg",1350,1364);
addFigure("Charles V","King of France","charlesv.jpg",1364,1380);
addFigure("Charles VI","King of France","charlesvi.jpg",1380,1422);
addFigure("Charles VII","King of France","charlesvii.jpg",1422,1461);

    // Function to find the closest year at the top of the viewport
    function getCurrentYear() {
      let currentYear = null;
      yearElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        // Check if the top of the element is near the top of the viewport (within 50 pixels)
        if (rect.top >= 0 && rect.top < 50) {
          currentYear = element.getAttribute('data-year');
        }
      });
      return currentYear;
    }
  
    // Function to format the year with AD or BC
    function formatYear(year) {
      return year < 0 ? `${Math.abs(year)} BC` : `${year} AD`;
    }
  
    function updateImages(year) {
        const imageContainer = document.getElementById('image-container');
        imageContainer.innerHTML = ''; // Clear previous images
      
        if (figureData[year]) {
          figureData[year].forEach((figure) => {
            const img = document.createElement('img');
            img.src = `images/${figure.image}`;
            img.alt = figure.name;
      
            const nameElem = document.createElement('div');
            nameElem.classList.add('figure-name');
            nameElem.textContent = figure.name;
      
            const titleElem = document.createElement('div');
            titleElem.classList.add('figure-title');
            titleElem.textContent = figure.title;
      
            const figureContainer = document.createElement('div');
            figureContainer.classList.add('figure-container');
            figureContainer.appendChild(img);
            figureContainer.appendChild(nameElem);
            figureContainer.appendChild(titleElem);
      
            // Add overlays based on whether it's the start or end year
            const isStartYear = parseInt(year) === figure.startDate;
            const isEndYear = parseInt(year) === figure.endDate;
      
            if (isStartYear) {
              const greenExclamation = document.createElement('div');
              greenExclamation.classList.add('green-exclamation');
              greenExclamation.textContent = '+';
              figureContainer.appendChild(greenExclamation);
            }
      
            if (isEndYear) {
              const redX = document.createElement('div');
              redX.classList.add('red-x');
              redX.textContent = '−';
              figureContainer.appendChild(redX);
            }
      
            imageContainer.appendChild(figureContainer);
          });
        }
      }
      
      
      
  
    // Function to update the year label
    function updateYearLabel(year) {
        const currentYearLabel = document.getElementById('current-year');
        const mapImage = document.getElementById('map-image');
      
        if (year) {
          currentYearLabel.textContent = `Year: ${formatYear(year)}`;
      
          // Update map image based on year
          if (year < -5800){
            mapImage.src = 'images/doggerlandmap.jpg';
          }
          else if (year < -325){
            mapImage.src = 'images/blankbritainmap.jpg';
          }
          else if (year < -56){
            mapImage.src = 'images/ptolemymap.webp';
          }
          else if (year < 40) {
            mapImage.src = 'images/preroman.gif';
          } else {
            mapImage.src = `images/maps/${year}.jpg`;
          }
        } else {
          currentYearLabel.textContent = "Year: --";
          mapImage.src = 'images/preroman.gif'; // Default to preroman map if no year is active
        }
      }
  
    // On scroll, check the closest year and update images and year label
    rightPanel.addEventListener('scroll', () => {
      const currentYear = getCurrentYear();
      if (currentYear) {
        updateImages(currentYear);
        updateYearLabel(currentYear);
      }
    });
  
    // Initial check to display the correct year and images when the page loads
    const initialYear = getCurrentYear();
    if (initialYear) {
      updateImages(initialYear);
      updateYearLabel(initialYear);
    }
  });
  