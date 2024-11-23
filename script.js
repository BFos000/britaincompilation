document.addEventListener("DOMContentLoaded", () => {
  const imageContainer = document.getElementById('image-container');
  const currentYearLabel = document.getElementById('current-year');
  const yearElements = document.querySelectorAll('.year');
  const rightPanel = document.querySelector('.right-panel');

  
  const relations = []; // Array to store relations for family tree
  const figures = new Map(); // Just for family tree - Keyed by a unique identifier (e.g., name + image)

  // Define figures with image, name, and title for each year
  const figureData = {}; 

  // Method to add figures to the data table
  function addFigure(name, title, imageFile, startDate, endDate, priorityOverride = null) {
    // Loop through the range of years the figure is active
    for (let year = startDate; year <= endDate; year++) {
      if (!figureData[year]) {
        figureData[year] = [];
      }
  
      // Add the figure with optional priority override
      figureData[year].push({
        name: name,
        title: title,
        image: imageFile,
        startDate: startDate,
        endDate: endDate,
        priorityOverride: priorityOverride // Store the priority override, if any
      });
    }
  }


// Function to find a figure in figureData by name
function findFigureByName(name) {
for (const year in figureData) {
  for (const figure of figureData[year]) {
    if (figure.name === name) return figure;
  }
}
return null;
}

function addRelation(name1, image1, name2, image2, year, type) {
 // if (type == "spouse")
 //   return;
  // Create or retrieve figure1
  const key1 = `${name1}-${image1}`;
  let figure1 = figures.get(key1);
  if (!figure1) {
    figure1 = { name: name1, image: image1 };
    figures.set(key1, figure1);
  }

  // Create or retrieve figure2
  const key2 = `${name2}-${image2}`;
  let figure2 = figures.get(key2);
  if (!figure2) {
    figure2 = { name: name2, image: image2 };
    figures.set(key2, figure2);
  }

  // Add the relationship to the relations array
  relations.push({ figure1, figure2, year, type });
}


      //const photoElement = document.getElementById('photo');
     // const photoCaptionElement = document.getElementById('photo-caption');
    

      const titlesWithRegnalYears = [
    "Archbishop of Canterbury",
"Archbishop of Rouen",
"Archbishop of York",
"Co-King of the Gewissae",
"Eastern Roman Emperor",
"Gallic Emperor",
"Great King of the Britons",
"High King of Ireland",
"Holy Roman Emperor",
"Holy Roman Empress Consort",
"King among the Britons",
"King of all the Welsh",
"King of Bernicia",
"King of Deira",
"King of Denmark",
"King of Dumnonia",
"King of East Anglia",
"King of England",
"King of Essex",
"King of France",
"King of Germany",
"King of Great Britain",
"King of Gwrtheyrnion",
"King of Gwynedd",
"King of Jorvik",
"King of Kent",
"King of Mercia",
"King of Northumbria",
"King of Norway",
"King of Powys",
"King of Rhos",
"King of Scotland",
"King of the Angles and Saxons",
"King of the Britons",
"King of the English",
"King of the Franks",
"King of the Gewissae",
"Queen of the Gewissae",
"King of the Picts",
"King of the Visigoths",
"King of Wales",
"King of Wessex",
"Lady of the English",
"Lord Protector",
"Lord Treasurer of England",
"Pope",
"Prime Minister",
"Prince of Powys",
"Prince of Wales",
"Queen of England",
"Queen of Great Britain",
"Queen of Scotland",
"Queen Regent of Mercia",
"Rebel Emperor",
"Regent Queen of France",
"Roman Emperor",
"Roman Emperor in Nicaea",
"Sovereign of the Britons",
"Western Roman Emperor",
"Latin Emperor in Constantinople",
"Latin Empress in Constantinople",
      ];



      const titlePriorities = {
        "Roman Emperor": 1,
        "Proconsul of Gaul": 2, // caesar
        "Western Roman Emperor": 2,
        "Eastern Roman Emperor": 4,
        "Consul": 3,
        "King of England": 3,
        "King of Great Britain": 4,
        "Queen of England": 5,
        "Queen of Great Britain": 6,
        "King of the Angles and Saxons": 7,
        "King of the English": 8,
        "Lady of the English": 9,
        "Lord Protector": 10,
        "Great King of the Britons": 11,
        "Sovereign of the Britons": 14,
        "Junior King of England": 15,
        "Prime Minister": 16,
        "Gallic Emperor": 17,
        "King of Wessex": 18,
        "King of Mercia": 19,
        "Lady of Mercia": 20,
        "Queen Regent of Mercia": 21,
        "King of the Gewissae": 22,
        "Queen of the Gewissae": 22,
        "Co-King of the Gewissae": 23,
        "King of Northumbria": 24,
        "King of Bernicia": 25,
        "King of Deira": 26,
        "King of Jorvik": 27,
        "King of East Anglia": 29,
        "King of Essex": 30,
        "King of Kent": 31,
        "Governor of Britain": 35,
        "Governor of Britannia Inferior": 36,
        "Governor of Britannia Superior": 37,
        "Queen Consort of England": 38,
        "Heir Apparent to England": 39,
        "Queen Mother of England": 40,
        "Son of Henry II": 41,
        "Regent of England": 42,
        "King of Scotland": 43,
        "Queen of Scotland": 44,
        "King of Wales": 45,
        "Prince of Wales": 46,
        "King of all the Welsh": 47,
        "King of Gwrtheyrnion": 48,
        "King among the Britons": 49,
        "King of the Britons": 49,
        "King of Dumnonia": 49,
        "Leader in Britain": 49,
        "Leader of the Britons": 49,
        "King of Gwynedd": 49,
        "King of Powys": 50,
        "Prince of Powys": 51,
        "King of Rhos": 52,
        "King of the Picts": 53,
        "High King of Ireland": 54,
        "Lord of Meath": 55,
        "Lord of Mercia": 56,
        "Lord of Ulster": 57,
        "First Lord of the Treasury": 58,
        "Chief Justiciar of England": 59,
        "Lord High Steward of England": 60,
        "Royal Steward in England": 61,
        "Lord Chancellor of England": 62,
        "Lord Marshal of England": 63,
        "Lord Treasurer of England": 64,
        "Keeper of the Great Seal": 65,
        "Rebel Emperor": 66,
        "Usurper Eastern Roman Emperor": 67,
        "Usurper Western Roman Emperor": 68,
        "Vicarius in Britain": 69,
        "Claimant to England": 70,
        "Pretender to England": 71,
        "Magister Militum": 72,
        "Acting Governor of Britain": 73,
        "Archbishop of Canterbury": 74,
        "Archbishop of York": 75,
        "Claimant": 76,
        "Deposed King of Laighin": 77,
        "Duchess of Brittany": 78,
        "Duke of Aquitaine": 79,
        "Duke of Brittany": 80,
        "Duke of Normandy": 81,
        "Legate of Legio II Augusta": 82,
        "Legate of Legio IX Hispania": 83,
        "Legate of Legio VI Victrix": 84,
        "Legate of Legio XIV Gemina": 85,
        "Legate of Legio XX Valeria Victrix": 86,
        "Marshal of the Army of God and the Holy Church": 87,
        "Peasant Leader": 88,
        "Count of Anjou": 89,
        "Count of Blois": 90,
        "Count of Meulan": 91,
        "Count of Mortain": 92,
        "Count of Nantes": 93,
        "Count of the Cotentin": 94,
        "Ealdorman of East Anglia": 95,
        "Ealdorman of Mercia": 96,
        "Ealdorman of Northumbria": 97,
        "Earl of Albermarle": 98,
        "Earl of Chester": 99,
        "Earl of Cornwall, brother of Henry III": 100,
        "Earl of East Anglia": 101,
        "Earl of Essex": 102,
        "Earl of Gloucester": 103,
        "Earl of Hampshire": 104,
        "Earl of Hereford": 105,
        "Earl of Herefordshire": 106,
        "Earl of Kent": 107,
        "Earl of Mercia": 108,
        "Earl of Norfolk": 109,
        "Earl of Northampton": 110,
        "Earl of Northumbria": 111,
        "Earl of Shrewsbury": 112,
        "Earl of Surrey": 113,
        "Earl of Wessex": 114,
        "Viking Commander": 115,
        "Countess of Flanders": 116,
        "Jure Uxoris Count of Flanders": 117,
        "Knight": 118,
        "Nobleman in England": 119,
        "Archbishop of Rouen": 120,
        "Claimant of Normandy": 121,
        "Heir Apparent to Normandy": 122,
        "Papal Legate": 123,
        "Bishop of Norwich": 124,
        "Bishop of Salisbury": 125,
        "Bishop of Winchester": 126,
        "Pope": 127,
        "Bishop of Rome": 128,
        "King of Denmark": 130,
        "King of Norway": 131,
        "King of France": 132,
        "Regent Queen of France": 133,
        "Holy Roman Emperor": 134,
        "Holy Roman Empress Consort": 135,
        "King of Germany": 136,
        "King of the Franks": 137,
        "King of the Visigoths": 138,
        "Heir Apparent to France": 139,
        "Queen Mother of Denmark": 140,
        "Regent of the Franks": 141,
        "Roman Emperor in Nicaea": 142,
        "Latin Emperor in Constantinople": 143,
        "Latin Emperess in Constantinople": 144,
      };
      

      const timeBasedRelevance = [
        {
          title: "Roman Emperor",
          relevanceChanges: [
            { until: 410, priority: 1 }, // Most important until 410
            { after: 410, priority: 142 }  // Less relevant after 410
          ]
        },
        {
          title: "Western Roman Emperor",
          relevanceChanges: [
            { until: 410, priority: 2 }, // Most important until 410
            { after: 410, priority: 144 }  // Less relevant after 410
          ]
        },
        {
          title: "Eastern Roman Emperor",
          relevanceChanges: [
            { until: 410, priority: 2 }, // Most important until 410
            { after: 410, priority: 145 }  // Less relevant after 410
          ]
        },
        {
          title: "Usurper Western Roman Emperor",
          relevanceChanges: [
            { until: 410, priority: 66 }, // Most important until 410
            { after: 410, priority: 160 }  // Less relevant after 410
          ]
        },
        {
          title: "Usurper Eastern Roman Emperor",
          relevanceChanges: [
            { until: 410, priority: 67 }, // Most important until 410
            { after: 410, priority: 170 }  // Less relevant after 410
          ]
        }
        // Add more overrides for other titles as needed
      ];



      // Define captions and filenames for photos
      const photoCaptions = [
        { year: -500000, filename: 'boxgrovehandaxes.jpg', caption: 'Boxgrove Handaxes' },
        { year: -100000, filename: 'thorscave.jpg', caption: "Thor's Cave - Inhabited from paleolithic until Roman times" },
        { year: -10500, filename: 'robinhoodcavehorse.jpg', caption: 'Robin Hood Cave Horse' },
        { year: -9000, filename: 'starcarrpendant.jpg', caption: 'Star Carr Pendant' },
        { year: -7600, filename: 'howickhouse.jpg', caption: 'Reconstruction of the Howick House' },
        //{ year: -4500, filename: 'neolithichouse.jpg', caption: 'Neolithic house in Skara Brae, Scotland' },
        { year: -4400, filename: 'duddofive.jpg', caption: 'The Duddo Five Stones in Northumberland' },
        { year: -3810, filename: 'sweettrack.jpeg', caption: 'Replica of the Sweet Track' },
        { year: -3100, filename: 'belasknap.jpg', caption: 'Belas Knap - long barrow near Cheltenham' },
        { year: -3000, filename: 'stonehenge.jpg', caption: 'Stonehenge' },
        //{ year: -2400, filename: 'silbury.jpg', caption: 'Silbury Hill - Artifical chalk mound' },
        { year: -2400, filename: 'newgrange.jpg', caption: 'Newgrange, near Meath in Ireland' },
        { year: -2150, filename: 'burtonagnes.jpg', caption: 'The Burton Agnes Drum' },
        { year: -1250, filename: 'ringlemere.jpg', caption: 'The Ringlemere Gold Cup' },
        { year: -1100, filename: 'moldcape.jpg', caption: 'Gold cape from Mold in Wales' },
        { year: -1800, filename: 'grimesgraves.jpg', caption: 'The Grimes Graves flint mine' },
        { year: -600, filename: 'maidencastle.jpg', caption: 'Maiden Castle Hillfort' },
        { year: -350, filename: 'batterseashield.jpg', caption: 'Battersea Celtic Shield' },
        { year: -325, filename: 'massalianboat.webp', caption: 'Massalian-style boat reconstruction' },
        { year: -200, filename: 'wandsworthshield.png', caption: 'Wandsworth Shield' },
        { year: -150, filename: 'britishcamp.jpg', caption: 'British Camp Hillfort' },
        { year: -100, filename: 'brochmousa.jpg', caption: 'The Broch of Mousa, in Scotland' },
        { year: -65, filename: 'celticcoins.jpeg', caption: 'Celtic coins found in Britain' },
        { year: -55, filename: 'romansarrive.jpg', caption: 'The Romans arrive near Ebbsfleet' },
        { year: -54, filename: 'britonsfight.jpg', caption: 'The Britons contend with the Romans' },
        { year: -50, filename: 'stanwick.jpg', caption: 'Remains of fortifications in Stanwick' },
        { year: 10, filename: 'preroman.jpg', caption: 'Life in pre-Roman Britain' },
        { year: 41, filename: 'preroman2.jpg', caption: 'Life in pre-Roman Britain' },
        { year: 43, filename: 'claudiusarrives.jpg', caption: 'Emperor Claudius arrives in Britain' },
        { year: 50, filename: 'romaninvasion.png', caption: 'Roman Invasion of Britain' },
        { year: 65, filename: 'chesteramph.jpg', caption: 'Chester Roman Amphitheatre' },
        { year: 85, filename: 'vindolanda.jpg', caption: 'Vindolanda Roman Fort' },
        { year: 122, filename: 'hadrianswall.jpg', caption: "Hadrian's Wall" },
        { year: 142, filename: 'antoninewall.jpg', caption: "Antonine Wall" },
        { year: 200, filename: 'cirencestertheatre.jpg', caption: "Roman Theatre in Cirenchester" },
        { year: 250, filename: 'chedworth.jpg', caption: "Mosaic Floor at Chedworth Roman Villa" },
        { year: 300, filename: 'londonwall.jpg', caption: "Roman Walls in London" },
        { year: 350, filename: 'arbeia.jpg', caption: "Reconstruction of Roman Fort at Arbeia" },
        { year: 400, filename: 'honoriuschicken.webp', caption: "Honorius feeding his chickens" },
        { year: 410, filename: 'alaric.webp', caption: "The Sack of Rome" },
        { year: 420, filename: 'pictsraid.webp', caption: "Pictish Raid" },
        { year: 441, filename: 'vortigern.jpg', caption: "Vortigern speaks with Merlin in Arthurian legend" },
        { year: 451, filename: 'hengisthorsa.jpg', caption: "Hengist and Horsa arrive in Britain" },
        { year: 470, filename: 'cunedda.webp', caption: "Warriors in Britain" },          
        { year: 480, filename: 'ambrosius.jpg', caption: "Ambrosius Aurelianus leads the Britons" },
        { year: 493, filename: 'liddington.jpg', caption: "Liddington Hillfort, potential site of the Battle of Bath-hill" },
        { year: 520, filename: 'maelgwncastle.webp', caption: "Deganwy Castle - Traditionally believed to be the castle of Maelgwn Gwynedd" },
        { year: 597, filename: 'augustineaethelberht.jpg', caption: "Augustine preaches to Aethelberht" },
        { year: 869, filename: 'edmundmartyred.jpg', caption: "Edmund is martyred by the Danes" },
        { year: 1067, filename: 'william1067.jpg', caption: "William at court" },
        { year: 1100, filename: 'williamrufusdeath.jpg', caption: "William Rufus' hunting accident" },
        { year: 1120, filename: 'whiteship.jpg', caption: "The White Ship Disaster" },
        { year: 1153, filename: 'stephenandhenry.jpg', caption: "Stephen and Henry negotiate" },
        { year: 1170, filename: 'becketdeath.jpg', caption: "The murder of Thomas Becket" },
        { year: 1194, filename: 'richardforgivesjohn.jpg', caption: "Richard pardons John" },
        { year: 1199, filename: 'richarddies.jpg', caption: "Richard on his deathbed" },
        { year: 1214, filename: 'baronsswear.jpg', caption: "The Barons swear to reduce John's power" },
        { year: 1215, filename: 'magnacarta.jpg', caption: "The Barons force John to sign the Magna Carta" },
        { year: 1232, filename: 'hubertdeburghtaken.jpg', caption: "Hubert de Burgh is siezed" },
        
        // Add more entries as needed
      ];
    


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
addFigure("Matilda","Lady of the English","matilda2.png",1141,1148);
//addFigure("Matilda","Claimant","matilda.jpg",1141,1141);
addFigure("Henry FitzEmpress","Claimant to England","henryii.jpg",1148,1154,40);
addFigure("Henry II","King of the English","henryii.jpg",1154,1189);
addFigure("Richard I","King of the English","richardi.png",1189,1199);
addFigure("John","King of England","john.png",1199,1216);
addFigure("Henry III","King of England","henryiii.png",1216,1272);
addFigure("Edward I","King of England","edwardi.jpg",1272,1307);
addFigure("Edward II","King of England","edwardii.jpg",1307,1327);
addFigure("Edward III","King of England","edwardiii.png",1327,1377);
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

addFigure("William Marshal","Regent of England","williammarshal.png",1216,1219);
addFigure("Hubert de Burgh","Regent of England","hubertdeburgh.png",1219,1227);


 
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
addFigure("Seaxburh","Queen of the Gewissae","angloqueen.png",672,674);
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
addFigure("Augustus","Roman Emperor","augustus.jpg",-27,14);
addFigure("Tiberius","Roman Emperor","tiberius.jpg",14,37);
addFigure("Caligula","Roman Emperor","caligula.jpg",37,41);
addFigure("Claudius","Roman Emperor","claudius.jpg",41,54);
addFigure("Nero","Roman Emperor","nero.jpg",54,68);
addFigure("Galba","Roman Emperor","galba.jpg",68,69);
addFigure("Otho","Roman Emperor","otho.jpg",69,69);
addFigure("Vitellius","Roman Emperor","vitellius.jpg",69,69);
addFigure("Vespasian","Roman Emperor","vespasian.jpg",69,79);
addFigure("Titus","Roman Emperor","titus.jpg",79,81);
addFigure("Domitian","Roman Emperor","domitian.jpg",81,96);
addFigure("Nerva","Roman Emperor","nerva.jpg",96,98);
addFigure("Trajan","Roman Emperor","trajan.jpg",98,117);
addFigure("Hadrian","Roman Emperor","hadrian.jpg",117,138);
addFigure("Antoninus Pius","Roman Emperor","antoninuspius.jpg",138,161);
addFigure("Marcus Aurelius","Roman Emperor","marcusaurelius.jpg",161,180);
addFigure("Lucius Verus","Roman Emperor","luciusverus.png",161,169);
addFigure("Commodus","Roman Emperor","commodus.jpg",180,192);
addFigure("Pertinax","Roman Emperor","pertinax.jpg",193,193);
addFigure("Didius Julianus","Roman Emperor","didiusjulianus.jpg",193,193);
addFigure("Septimius Severus","Roman Emperor","septimiusseverus.jpg",193,211);
addFigure("Caracalla","Roman Emperor","caracalla.jpg",211,217);
addFigure("Geta","Roman Emperor","geta.jpg",211,211);
addFigure("Macrinus","Roman Emperor","macrinus.jpg",217,218);
addFigure("Elagabalus","Roman Emperor","elagabalus.jpg",218,222);
addFigure("Severus Alexander","Roman Emperor","severusalexander.jpg",222,235);
addFigure("Maximinus Thrax","Roman Emperor","maximinusthrax.jpg",235,238);
addFigure("Gordian I","Roman Emperor","gordiani.jpg",238,238);
addFigure("Gordian II","Roman Emperor","gordianii.jpg",238,238);
addFigure("Pupienus","Roman Emperor","pupienus.jpg",238,238);
addFigure("Balbinus","Roman Emperor","balbinus.jpg",238,238);
addFigure("Gordian III","Roman Emperor","gordianiii.jpg",238,244);
addFigure("Philip the Arab","Roman Emperor","philipthearab.jpg",244,249);
addFigure("Decius","Roman Emperor","decius.jpg",249,251);
addFigure("Trebonianus Gallus","Roman Emperor","trebonianusgallus.jpg",251,253);
addFigure("Aemilianus","Roman Emperor","aemilianus.jpg",253,253);
addFigure("Valerian","Roman Emperor","valerian.jpg",253,260);
addFigure("Gallienus","Roman Emperor","gallienus.jpg",253,268);
addFigure("Claudius II","Roman Emperor","claudiusii.jpg",268,270);
addFigure("Quintillus","Roman Emperor","quintillus.jpg",270,270);
addFigure("Aurelian","Roman Emperor","aurelian.jpg",270,275);
addFigure("Postumus","Gallic Emperor","postumus.png",260,269);
addFigure("Tacitus","Roman Emperor","tacitus.jpg",275,276);
addFigure("Florianus","Roman Emperor","florianus.jpg",276,276);
addFigure("Probus","Roman Emperor","probus.jpg",276,282);
addFigure("Carus","Roman Emperor","carus.png",282,283);
addFigure("Carinus","Roman Emperor","carinus.jpg",283,285);
addFigure("Numerian","Roman Emperor","numerian.jpg",283,284);
addFigure("Diocletian","Roman Emperor","diocletian.jpg",284,305);
addFigure("Maximian","Roman Emperor","maximian.jpg",286,305);
addFigure("Galerius","Roman Emperor","galerius.jpg",305,311);
addFigure("Constantius I","Roman Emperor","constantiusi.jpg",305,306);
addFigure("Severus II","Roman Emperor","severusii.jpg",306,307);
addFigure("Maxentius","Roman Emperor","maxentius.jpg",306,312);
addFigure("Licinius","Roman Emperor","licinius.jpg",308,324);
addFigure("Maximinus II","Roman Emperor","maximinusii.jpg",310,313);
addFigure("Valerius Valens","Roman Emperor","valeriusvalens.png",316,317);
addFigure("Martinian","Roman Emperor","martinian.png",324,324);
addFigure("Constantine I","Roman Emperor","constantinei.jpg",306,337);
addFigure("Constantine II","Roman Emperor","constantineii.jpg",337,340);
addFigure("Constans I","Roman Emperor","constansi.jpg",337,350);
addFigure("Constantius II","Roman Emperor","constantiusii.jpg",337,361);
addFigure("Julian","Roman Emperor","julian.jpg",361,363);
addFigure("Jovian","Roman Emperor","jovian.jpg",363,364);
addFigure("Valentinian I","Roman Emperor","valentiniani.jpg",364,375);
addFigure("Valens","Roman Emperor","valens.png",364,378);
addFigure("Gratian","Roman Emperor","gratian.jpg",375,383);
addFigure("Valentinian II","Roman Emperor","valentinianii.jpg",388,392);
addFigure("Theodosius I","Roman Emperor","theodosiusi.jpg",379,395);
addFigure("Arcadius","Eastern Roman Emperor","arcadius.jpg",394,408);
addFigure("Honorius","Roman Emperor","honorius.jpg",395,423);

addFigure("Stilicho","Magister Militum","stilicho.png",392,408);
addFigure("Alaric","King of the Visigoths","alaric.png",395,410);

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
addFigure("Kenneth I MacAlpin","King of the Picts","kennethmacalpin.jpg",848,858);
addFigure("Donald I","King of the Picts","domnallmacailpin.jpg",858,862);
addFigure("Constantine I","King of the Picts","causantin.png",862,877);
addFigure("Aed","King of the Picts","aed.jpg",877,878);
addFigure("Giric","King of the Picts","giric.jpg",878,889);
addFigure("Eochaid","King of the Picts","pict.png",878,889);
addFigure("Donald II","King of Scotland","donaldii.jpg",889,900);
addFigure("Constantine II","King of Scotland","causantinii.jpg",900,943);
addFigure("Malcolm I","King of Scotland","malcolm.jpg",943,954);
addFigure("Indulf","King of Scotland","indulf.jpg",954,962);
addFigure("Dub","King of Scotland","dub.jpg",962,967);
addFigure("Cuilen","King of Scotland","cuilen.jpg",967,971);
addFigure("Amlaib","King of Scotland","pict.png",973,977);
addFigure("Kenneth II","King of Scotland","kennethii.jpg",971,995);
addFigure("Constantine III","King of Scotland","causantiniii.jpg",995,997);
addFigure("Kenneth III","King of Scotland","pict.png",997,1005);
addFigure("Malcolm II","King of Scotland","malcolmii.jpg",1005,1034);
addFigure("Duncan I","King of Scotland","duncan.jpg",1034,1040);
addFigure("Macbeth","King of Scotland","macbeth.png",1040,1057);
addFigure("Lulach","King of Scotland","lulach.png",1057,1058);
addFigure("Malcolm III","King of Scotland","malcolmiii.png",1058,1093);
addFigure("Donald III","King of Scotland","donaldiii.jpg",1093,1097);
addFigure("Duncan II","King of Scotland","duncanii.jpg",1094,1094);
addFigure("Edgar","King of Scotland","edgar.jpg",1097,1107);
addFigure("Alexander I","King of Scotland","alexander.jpg",1107,1124);
addFigure("David I","King of Scotland","david.jpg",1124,1153);
addFigure("Malcolm IV","King of Scotland","malcolmiv.jpg",1153,1165);
addFigure("William I","King of Scotland","williamscotland.png",1165,1214);
addFigure("Alexander II","King of Scotland","alexanderii.jpg",1214,1249);
addFigure("Alexander III","King of Scotland","alexanderiii.png",1249,1286);
addFigure("Margaret","Queen of Scotland","margaretscotland.jpg",1286,1290);
addFigure("John Balliol","King of Scotland","johnballiol.png",1292,1296);
addFigure("Robert I the Bruce","King of Scotland","robertthebruce.jpg",1306,1329);
addFigure("David II","King of Scotland","davidii.png",1329,1371);
addFigure("Edward Balliol","King of Scotland","edwardballiol.png",1332,1356);
addFigure("Robert II","King of Scotland","robertiiscotland.png",1371,1390);
addFigure("Robert III","King of Scotland","robertiiiscotland.png",1390,1406);
addFigure("James I","King of Scotland","jamesiscotland.jpg",1406,1437);
addFigure("James II","King of Scotland","jamesiiscotland.png",1437,1460);
addFigure("James III","King of Scotland","jamesiii.jpg",1460,1488);
addFigure("James IV","King of Scotland","jamesiv.jpg",1488,1513);
addFigure("James V","King of Scotland","jamesv.jpg",1513,1542);
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
//addFigure("Vortigern","King of the Britons","vortigern.png",440,452);
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
addFigure("Anarawd ap Rhodri","King of the Britons","anarawd.png",878,916);
addFigure("Idwal","King of the Britons","welsh.png",916,942);
addFigure("Hywel Dda","King of the Britons","hyweldda.jpg",942,950);
addFigure("Dyfnwal","King of the Britons","welsh.png",950,970);
addFigure("Maredudd","King of the Britons","welsh.png",986,999);
addFigure("Llywelyn","King of the Britons","welsh.png",1018,1023);
addFigure("Iago","King of the Britons","welsh.png",1023,1039);
addFigure("Gruffydd","King of the Britons","welsh.png",1039,1063);
//addFigure("Bleddyn","King of the Britons","welsh.png",1063,1075);
addFigure("Rhys","King of the Britons","welsh.png",1079,1093);
//addFigure("Gruffudd","King of all the Welsh","gruffudd.jpg",1136,1137);
//addFigure("Owain","King of Wales","owain.jpg",1137,1170);
addFigure("Geraint","King of Dumnonia","welsh.png",670,710);
//addFigure("Cunedda","King of Gwynedd","cunedda.jpg",450,460);
//addFigure("Einion","King of Gwynedd","welsh.png",470,480);
addFigure("Cuneglasus","King of Rhos","welsh.png",490,510);
addFigure("Owain Danwyn","King of Rhos","welsh.png",480,490);
//addFigure("Cadwallon Lawhir","King of Gwynedd","welsh.png",500,534);
//addFigure("Rhun Hir","King of Gwynedd","welsh.png",520,547);
//addFigure("Beli","King of Gwynedd","welsh.png",580,599);
//addFigure("Iago","King of Gwynedd","welsh.png",599,616);
//addFigure("Cadfan","King of Gwynedd","welsh.png",616,625);
//addFigure("Cadwallon","King of Gwynedd","cadwallon.jpg",625,634);
//addFigure("Cadafael","King of Gwynedd","welsh.png",634,655);
//addFigure("Cadwaladr","King of Gwynedd","cadwaladr.jpg",655,682);
//addFigure("Idwal Iwrch","King of Gwynedd","welsh.png",682,720);
//addFigure("Rhodri Molwynog","King of Gwynedd","welsh.png",720,754);
//addFigure("Caradog","King of Gwynedd","welsh.png",754,798);
//addFigure("Cynan","King of Gwynedd","welsh.png",798,816);
//addFigure("Hywel","King of Gwynedd","welsh.png",816,825);
//addFigure("Merfyn","King of Gwynedd","welsh.png",825,844);
//addFigure("Rhodri Mawr","King of Gwynedd","rhodrimawr.png",844,878);

addFigure("Cunedda","King of Gwynedd","cunedda.jpg",450,460);
addFigure("Einion Yrth ap Cunedda","King of Gwynedd","welsh.png",470,480);
addFigure("Cadwallon Lawhir ap Einion","King of Gwynedd","welsh.png",500,534);
addFigure("Maelgwn Gwynedd","King of Gwynedd","maelgwn.jpg",520,547);
addFigure("Rhun Hir ap Maelgwn","King of Gwynedd","welsh.png",547,580);
addFigure("Beli ap Rhun","King of Gwynedd","welsh.png",580,599);
addFigure("Iago ap Beli","King of Gwynedd","welsh.png",599,616);
addFigure("Cadfan ap Iago","King of Gwynedd","welsh.png",616,625);
addFigure("Cadwallon ap Cadfan","King of Gwynedd","cadwallon.jpg",625,634);
addFigure("Cadafael","King of Gwynedd","welsh.png",634,655);
addFigure("Cadwalladr","King of Gwynedd","welsh.png",655,682);
addFigure("Idwal Iwrch","King of Gwynedd","welsh.png",682,720);
addFigure("Rhodri Molwynog","King of Gwynedd","welsh.png",720,754);
addFigure("Caradog ap Meirion","King of Gwynedd","welsh.png",754,798);
addFigure("Cynan Dindaethwy","King of Gwynedd","welsh.png",798,816);
addFigure("Hywel ap Caradog","King of Gwynedd","welsh.png",816,825);
addFigure("Merfyn Frych","King of Gwynedd","welsh.png",825,844);
addFigure("Rhodri Mawr","King of Gwynedd","rhodrimawr.png",844,878);
addFigure("Anarawd ap Rhodri","King of Gwynedd","anarawd.png",878,916);
addFigure("Idwal Foel","King of Gwynedd","welsh.png",916,942);
addFigure("Hywel Dda","King of Gwynedd","hyweldda.jpg",942,950);
addFigure("Iago ab Idwal","King of Gwynedd","welsh.png",950,979);
addFigure("Ieuaf ab Idwal","King of Gwynedd","welsh.png",979,985);
addFigure("Hywel ap leuaf","King of Gwynedd","welsh.png",985,986);
addFigure("Carwallon ab leauaf","King of Gwynedd","welsh.png",986,999);
addFigure("Cynan ap Hywel","King of Gwynedd","welsh.png",999,1005);
addFigure("Aeddan ap Blegywryd","King of Gwynedd","welsh.png",1005,1018);
addFigure("Llywelyn ap Seisyll","King of Gwynedd","welsh.png",1018,1023);
addFigure("Iago ab Idwal ap Meurig","King of Gwynedd","welsh.png",1023,1039);
addFigure("Gruffudd ap Llywelyn","King of Gwynedd","welsh.png",1039,1063);
addFigure("Bleddyn ap Cynfyn","King of Gwynedd","welsh.png",1063,1075);
addFigure("Trahaearn ap Caradog","King of Gwynedd","welsh.png",1075,1081);
addFigure("Gruffudd ap Cynan","King of Gwynedd","gruffyddapcynan.png",1081,1137);
addFigure("Owain Gwynedd","King of Gwynedd","owain.jpg",1137,1170);
addFigure("Hywel ab Owain Gwynedd","King of Gwynedd","welsh.png",1170,1170);
addFigure("Dafydd ab Owain Gwynedd","King of Gwynedd","welsh.png",1170,1195);
addFigure("Llywelyn ab Iorwerth","Prince of Wales","llywelynabiorwerth.png",1195,1240);
addFigure("Dafydd ap Llywelyn","Prince of Wales","dafyddapllywelyn.png",1240,1246);
addFigure("Owain Goch ap Gruffydd","Prince of Wales","welsh.png",1246,1255);
addFigure("Llywelyn ap Gruffudd","Prince of Wales","llywelynapgruffudd.png",1246,1272);
addFigure("Dafydd ap Gruffydd","Prince of Wales","welsh.png",1272,1283);
addFigure("Vortigern / Gwrtheyrn","King of Gwrtheyrnion","vortigern.png",425,450);
addFigure("Cadeyern Fendigaid","King of Powys","welsh.png",430,447);
addFigure("Cadell Ddyrnllwg","King of Powys","welsh.png",447,460);
addFigure("Rhyddfedd Frych","King of Powys","welsh.png",475,485);
addFigure("Cyngen Glodrydd","King of Powys","welsh.png",495,505);
addFigure("Pasgen ap Cyngen","King of Powys","welsh.png",525,535);
addFigure("Morgan ap Pasgen","King of Powys","welsh.png",535,545);
addFigure("Brochwel Ysgithrog","King of Powys","welsh.png",545,555);
addFigure("Cynan Garwyn","King of Powys","welsh.png",600,610);
addFigure("Selyf ap Cynan","King of Powys","welsh.png",610,613);
addFigure("Manwgan ap Selyf","King of Powys","welsh.png",613,613);
addFigure("Eiludd Powys","King of Powys","welsh.png",613,630);
addFigure("Beli ap Eiludd","King of Powys","welsh.png",650,660);
addFigure("Gwylog ap Beli","King of Powys","welsh.png",695,725);
addFigure("Belisedd ap Gwylog","King of Powys","welsh.png",725,755);
addFigure("Brochfael ap Elisedd","King of Powys","welsh.png",755,773);
addFigure("Cadell ap Brochfael","King of Powys","welsh.png",773,808);
addFigure("Cyngen ap Cadell","King of Powys","welsh.png",808,854);
addFigure("Rhodri Mawr","King of Powys","rhodrimawr.png",854,878);
addFigure("Merfyn ap Rhodri","King of Powys","welsh.png",878,900);
addFigure("Llywelyn ap Merfyn","King of Powys","welsh.png",900,942);
addFigure("Hywel Dda","King of Powys","hyweldda.jpg",942,950);
addFigure("Owain ap Hywel","King of Powys","welsh.png",950,986);
addFigure("Maredudd ap Owain","King of Powys","welsh.png",986,999);
addFigure("Llywelyn ap Seisyll","King of Powys","welsh.png",999,1023);
addFigure("Rhydderch ap Iestyn","King of Powys","welsh.png",1023,1033);
addFigure("Iago ap Idwal","King of Powys","welsh.png",1033,1039);
addFigure("Gruffydd ap Llywelyn","King of Powys","welsh.png",1039,1063);
addFigure("Bleddyn ap Cynfyn","King of Powys","welsh.png",1063,1075);
addFigure("Iorwerth ap Bleddyn","Prince of Powys","welsh.png",1075,1103);
addFigure("Cadwgan ap Bleddyn","Prince of Powys","welsh.png",1075,1111);
addFigure("Owain ap Cadwgan","Prince of Powys","welsh.png",1111,1116);
addFigure("Maredudd ap Belddyn","Prince of Powys","welsh.png",1116,1132);
addFigure("Madog ap Maredudd","Prince of Powys","welsh.png",1132,1160);

// addFigure("Caradoc","King of Dumnonia","welsh.png",290,305);
// addFigure("Donault","King of Dumnonia","welsh.png",305,340);
// addFigure("Conan Meriadoc","King of Dumnonia","conanmeriadoc.png",340,387);
// addFigure("Gadeon ap Conan","King of Dumnonia","welsh.png",387,390);
// addFigure("Guoremor ap Gadeon","King of Dumnonia","welsh.png",387,400);
// addFigure("Tutwal ap Guoremor","King of Dumnonia","welsh.png",400,410);
addFigure("Conomor ap Tutwal","King of Dumnonia","welsh.png",410,435);
addFigure("Constantine Corneu","King of Dumnonia","welsh.png",435,443);
addFigure("Erbin ap Constantine","King of Dumnonia","welsh.png",443,480);
addFigure("Geraint Llyngesic","King of Dumnonia","geraint.png",480,514);
addFigure("Cado ap Gerren","King of Dumnonia","welsh.png",514,530);
addFigure("Custennin ap Cado","King of Dumnonia","welsh.png",530,560);
addFigure("Gerren rac Denau","King of Dumnonia","welsh.png",560,598);


addFigure("Mael Sechnaill max Maele Ruanaid","High King of Ireland","irishking.png",846,860);
addFigure("Aed Findliath","High King of Ireland","irishking.png",877,914);
addFigure("Flann Sinna","High King of Ireland","irishking.png",915,917);
addFigure("Niall Glundub","High King of Ireland","irishking.png",918,942);
addFigure("Donnchard Donn","High King of Ireland","irishking.png",943,954);
addFigure("Congalach Cnogba","High King of Ireland","irishking.png",955,978);
addFigure("Domnall ua Neill","High King of Ireland","irishking.png",989,1002);
addFigure("Mael Sechnaill mac Domnaill","High King of Ireland","mael.png",1002,1014);
addFigure("Brian Boruma","High King of Ireland","brianboru.jpg",1014,1022);
addFigure("Muirchertach Ua Briain","High King of Ireland","muirchertach.jpg",1101,1119);
addFigure("Toirdelbach Ua Conchobair","High King of Ireland","irishking.png",1119,1156);
addFigure("Muirchertach Mac Lochlainn","High King of Ireland","irishking.png",1156,1166);
addFigure("Ruaidri Ua Conchobair","High King of Ireland","ruaidri.jpg",1166,1198);

addFigure("Diarmait Mac Murchada","Deposed King of Laighin","diarmait.jpg",1167,1171);
addFigure("John de Courcy","Lord of Ulster","johndecourcy.jpg",1177,1219);
addFigure("Hugh de Lacy","Lord of Meath","hughdelacy.jpg",1172,1186);


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


addFigure("Robert Walpole","First Lord of the Treasury","robertwalpole.jpg",1721,1742);
addFigure("Spencer Compton","First Lord of the Treasury","spencercompton.jpg",1742,1743);
addFigure("Henry Pelham","First Lord of the Treasury","henrypelham.jpg",1743,1754);
addFigure("Thomas Pelham-Holles","First Lord of the Treasury","thomaspelham.jpg",1754,1756);
addFigure("William Cavendish","First Lord of the Treasury","williamcavendish.jpg",1756,1757);
addFigure("Thomas Pelham-Holles","First Lord of the Treasury","thomaspelham.jpg",1757,1762);
addFigure("John Stuart","First Lord of the Treasury","johnstuart.jpg",1762,1763);
addFigure("George Grenville","First Lord of the Treasury","georgegrenville.jpg",1763,1765);
addFigure("Charles Watson-Wentworth","First Lord of the Treasury","charleswatson.jpg",1765,1766);
addFigure("William Pitt the Elder","First Lord of the Treasury","pittelder.jpg",1766,1768);
addFigure("Augustus FitzRoy","First Lord of the Treasury","augustusfitzroy.jpg",1768,1770);
addFigure("Frederick North","First Lord of the Treasury","fredericknorth.jpg",1770,1782);
addFigure("Charles Watson-Wentworth","First Lord of the Treasury","charleswatson.jpg",1782,1782);
addFigure("William Petty","First Lord of the Treasury","williampetty.jpg",1782,1783);
addFigure("William Cavendish-Bentinck","First Lord of the Treasury","williamcavendish2.jpg",1783,1783);
addFigure("William Pitt the Younger","First Lord of the Treasury","pittyounger.jpg",1783,1801);
addFigure("Henry Addington","First Lord of the Treasury","henryaddington.jpg",1801,1804);
addFigure("William Pitt the Younger","First Lord of the Treasury","pittyounger.jpg",1804,1806);
addFigure("William Grenville","First Lord of the Treasury","williamgrenville.jpg",1806,1807);
addFigure("William Cavendish-Bentinck","First Lord of the Treasury","williamcavendish2.jpg",1807,1809);
addFigure("Spencer Perceval","First Lord of the Treasury","spencerperceval.jpg",1809,1812);
addFigure("Robert Jenkinson","First Lord of the Treasury","robertjenkinson.jpg",1812,1827);
addFigure("George Canning","First Lord of the Treasury","georgecanning.jpg",1827,1827);
addFigure("Frederick John Robinson","First Lord of the Treasury","frederickrobinson.jpg",1827,1828);
addFigure("Arthur Wellesley","First Lord of the Treasury","arthurwellesley.png",1828,1830);
addFigure("Charles Grey","First Lord of the Treasury","charlesgrey.jpg",1830,1834);
addFigure("William Lamb","First Lord of the Treasury","williamlamb.jpg",1834,1834);
addFigure("Arthur Wellesley","First Lord of the Treasury","arthurwellesley.png",1834,1834);
addFigure("Robert Peel","First Lord of the Treasury","robertpeel.jpg",1834,1835);
addFigure("William Lamb","First Lord of the Treasury","williamlamb.jpg",1835,1841);
addFigure("Robert Peel","First Lord of the Treasury","robertpeel.jpg",1841,1846);
addFigure("John Russell","First Lord of the Treasury","johnrussell.jpg",1846,1852);
addFigure("Edward Smith-Stanley","First Lord of the Treasury","edwardsmithstanley.jpg",1852,1852);
addFigure("George Hamilton-Gordon","First Lord of the Treasury","georgehamiltongordon.jpg",1852,1855);
addFigure("Henry John Temple","First Lord of the Treasury","henryjohntemple.jpg",1855,1858);
addFigure("Edward Smith-Stanley","First Lord of the Treasury","edwardsmithstanley.jpg",1858,1859);
addFigure("Henry John Temple","First Lord of the Treasury","henryjohntemple.jpg",1859,1865);
addFigure("John Russell","First Lord of the Treasury","johnrussell.jpg",1865,1866);
addFigure("Edward Smith-Stanley","First Lord of the Treasury","edwardsmithstanley.jpg",1866,1868);
addFigure("Benjamin Disraeli","First Lord of the Treasury","benjamindisraeli.jpg",1868,1868);
addFigure("William Ewart Gladstone","First Lord of the Treasury","williamewart.jpg",1868,1874);
addFigure("Benjamin Disraeli","First Lord of the Treasury","benjamindisraeli.jpg",1874,1880);
addFigure("William Ewart Gladstone","First Lord of the Treasury","williamewart.jpg",1880,1885);
addFigure("Robert Gascoyne-Cecil","First Lord of the Treasury","robertcecil.jpg",1885,1886);
addFigure("William Ewart Gladstone","First Lord of the Treasury","williamewart.jpg",1886,1886);
addFigure("Robert Gascoyne-Cecil","First Lord of the Treasury","robertcecil.jpg",1886,1892);
addFigure("William Ewart Gladstone","First Lord of the Treasury","williamewart.jpg",1892,1894);
addFigure("Archibald Primrose","First Lord of the Treasury","archibaldprimrose.jpg",1894,1895);
addFigure("Robert Gascoyne-Cecil","First Lord of the Treasury","robertcecil.jpg",1895,1902);
addFigure("Arthur Balfour","Prime Minister","arthurbalfour.jpg",1902,1905);
addFigure("Henry Campbell-Bannerman","Prime Minister","henrybannerman.jpg",1905,1908);
addFigure("H. H. Asquith","Prime Minister","hhaquith.jpg",1908,1916);
addFigure("David Lloyd George","Prime Minister","davidgeorge.jpg",1916,1922);
addFigure("Bonar Law","Prime Minister","bonarlaw.jpg",1922,1923);
addFigure("Stanley Baldwin","Prime Minister","stanleybaldwin.jpg",1923,1924);
addFigure("Ramsay MacDonald","Prime Minister","ramsaymacdonald.jpg",1924,1924);
addFigure("Stanley Baldwin","Prime Minister","stanleybaldwin.jpg",1924,1929);
addFigure("Ramsay MacDonald","Prime Minister","ramsaymacdonald.jpg",1929,1935);
addFigure("Stanley Baldwin","Prime Minister","stanleybaldwin.jpg",1935,1937);
addFigure("Neville Chamberlain","Prime Minister","nevillechamberlain.jpg",1937,1940);
addFigure("Winston Churchill","Prime Minister","winstonchurchill.jpg",1940,1945);
addFigure("Clement Attlee","Prime Minister","clementattlee.jpg",1945,1951);
addFigure("Winston Churchill","Prime Minister","winstonchurchill.jpg",1951,1955);
addFigure("Anthony Eden","Prime Minister","anthonyeden.jpg",1955,1957);
addFigure("Harold Macmillan","Prime Minister","haroldmacmillan.jpg",1957,1963);
addFigure("Alec Douglas-Home","Prime Minister","alecdouglas.jpg",1963,1964);
addFigure("Harold Wilson","Prime Minister","haroldwilson.jpg",1964,1970);
addFigure("Edward Heath","Prime Minister","edwardheath.jpg",1970,1974);
addFigure("Harold Wilson","Prime Minister","haroldwilson.jpg",1974,1976);
addFigure("James Callaghan","Prime Minister","jamescallaghan.jpg",1976,1979);
addFigure("Margaret Thatcher","Prime Minister","margaretthatcher.jpg",1979,1990);
addFigure("John Major","Prime Minister","johnmajor.jpg",1990,1997);
addFigure("Tony Blair","Prime Minister","tonyblair.jpg",1997,2007);
addFigure("Gordon Brown","Prime Minister","gordonbrown.jpg",2007,2010);
addFigure("David Cameron","Prime Minister","davidcameron.jpg",2010,2016);
addFigure("Theresa May","Prime Minister","theresamay.jpg",2016,2019);
addFigure("Boris Johnson","Prime Minister","borisjohnson.jpg",2019,2022);
addFigure("Liz Truss","Prime Minister","liztruss.jpg",2022,2022);
addFigure("Rishi Sunak","Prime Minister","rishisunak.jpg",2022,2024);
addFigure("Keir Starmer","Prime Minister","keirstarmer.webp",2024,2030);


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
addFigure("St. Edmund of Abingdon","Archbishop of Canterbury","edmundofabingdon.png",1234,1240);
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
addFigure("John Stafford","Archbishop of Canterbury","johnstafford.png",1443,1452);
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
addFigure("Walter de Gray","Archbishop of York","walterdegray.png",1215,1255);
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
addFigure("Thomas Savage","Archbishop of York","thomassavage.png",1501,1507);
addFigure("Christopher Bainbridge","Archbishop of York","christopherbainbridge.jpg",1508,1514);
addFigure("Thomas Wolsey","Archbishop of York","thomaswolsey.jpg",1514,1530);





addFigure("Aethelstan","Ealdorman of East Anglia","ealdorman.png",932,956);
addFigure("Aethelwald","Ealdorman of East Anglia","ealdorman.png",956,962);
addFigure("Aethelwine","Ealdorman of East Anglia","ealdorman.png",962,992);
addFigure("Ulfcytel Snillingr","Ealdorman of East Anglia","ealdorman.png",1004,1016);
addFigure("Thorkell the Tall","Earl of East Anglia","viking.png",1017,1021);
addFigure("Osgod Clapa","Earl of East Anglia","viking.png",1026,1044);
addFigure("Harold Godwinson","Earl of East Anglia","haroldii.jpg",1044,1051);
addFigure("Aelfgar","Earl of East Anglia","aelfgar.png",1051,1052);
addFigure("Harold Godwinson","Earl of East Anglia","haroldii.jpg",1052,1053);
addFigure("Aelfgar","Earl of East Anglia","aelfgar.png",1053,1057);
addFigure("Gyrth","Earl of East Anglia","gyrth.png",1057,1066);
addFigure("Ralf de Gael","Earl of East Anglia","ralphdegael.png",1069,1075);

addFigure("Godwin","Earl of Wessex","ealdorman.png",1018,1053);
addFigure("Harold Godwinson","Earl of Wessex","haroldii.jpg",1053,1065);

addFigure("Aelfhere","Ealdorman of Mercia","ealdorman.png",957,983);
addFigure("Aelfric Cild","Ealdorman of Mercia","ealdorman.png",983,985);
addFigure("Wulfric Spot","Ealdorman of Mercia","wulfricspot.jpg",986,1004);
addFigure("Eadric Streona","Ealdorman of Mercia","ealdorman.png",1007,1017);
addFigure("Leofwine","Ealdorman of Mercia","ealdorman.png",1017,1032);
addFigure("Leofric","Earl of Mercia","leofric.png",1032,1057);
//addFigure("Lady Godiva","Wife of Leofric","godiva.png",1043,1057);
addFigure("Aelfgar","Earl of Mercia","aelfgar.png",1057,1062);
addFigure("Eadwine","Earl of Mercia","ealdorman.png",1062,1071);

addFigure("Aelfric","Earl of Hampshire","ealdorman.png",982,1016);
addFigure("Sweyn Godwinson","Earl of Herefordshire","ealdorman.png",1043,1051);

addFigure("Oslac","Ealdorman of Northumbria","ealdorman.png",963,975);
addFigure("Thored","Earl of Northumbria","viking.png",979,992);
addFigure("Aelfhelm","Ealdorman of Northumbria","ealdorman.png",994,1006);
addFigure("Uhtred","Ealdorman of Northumbria","ealdorman.png",1006,1016);
addFigure("Eirikr Hakonarson","Earl of Northumbria","viking.png",1016,1033);
addFigure("Siward","Earl of Northumbria","viking.png",1033,1055);
addFigure("Tostig Godwinson","Ealdorman of Northumbria","ealdorman.png",1055,1065);
addFigure("Morcar","Earl of Northumbria","ealdorman.png",1065,1068);



addFigure("Hugh d'Avranches","Earl of Chester","hughdavranches.jpg",1071,1101);
addFigure("Odo of Bayeux","Earl of Kent","odoofbayeux.jpg",1067,1082);
addFigure("Odo of Bayeux","Earl of Kent","odoofbayeux.jpg",1087,1088);
addFigure("Waltheof","Earl of Northampton","waltheof.jpg",1065,1068);
addFigure("Waltheof","Earl of Northumbria","waltheof.jpg",1069,1076);
addFigure("Robert de Mowbray","Earl of Northumbria","robertdemowbray.png",1086,1095);
addFigure("Robert de Mowbray","Earl of Northumbria","robertdemowbray.png",1086,1095);



addFigure("Edgar Aetheling","Pretender to England","edgaraetheling.jpg",1067,1125);
addFigure("William FitzOsbern","Earl of Hereford","normanearl.png",1067,1071);
addFigure("Robert de Belleme","Earl of Shrewsbury","normanearl.png",1079,1112);
//addFigure("Roger of Salisbury","Bishop of Salisbury","rogerofsalisbury.png",1102,1119); // not true end
addFigure("William de Warenne","Earl of Surrey","normannoble.png",1088,1138);
addFigure("William Adelin","Heir Apparent to England","williamadelin.jpg",1115,1120);
addFigure("Richard d'Avranches","Earl of Chester","richarddavranches.png",1101,1120);
addFigure("Theobald IV","Count of Blois","theobaldiv.jpg",1102,1152);
addFigure("Stephen","Count of Mortain","stephen.jpg",1115,1135);
addFigure("Fulk V","Count of Anjou","fulkv.jpg",1106,1129);
addFigure("Geoffrey V","Count of Anjou","geoffreyv.jpg",1129,1151);
addFigure("Robert of Caen","Earl of Gloucester","robertofcaen.jpg",1121,1147);
addFigure("Richard Strongbow","Nobleman in England","richardstrongbow.jpg",1168,1176);
addFigure("Richard","Duke of Aquitaine","richardi.png",1171,1189,40);
addFigure("Geoffrey","Duke of Brittany","geoffreyiiofbrittany.jpg",1181,1186,40);
addFigure("Arthur","Duke of Brittany","arthur.jpg",1196,1203);
addFigure("Constance","Duchess of Brittany","angloqueen.png",1166,1201);
addFigure("John Lackland","Count of Mortain","john.png",1189,1199);


addFigure("Ralph Flambard","Chief Justiciar of England","normannoble.png",1088,1100);
addFigure("Roger of Salisbury","Chief Justiciar of England","rogerofsalisbury.png",1120,1139);
addFigure("Hugh Bigod","Royal Steward in England","normannoble.png",1120,1157);
addFigure("Hugh Bigod","Earl of Norfolk","normannoble.png",1157,1177);
addFigure("William Martel","Royal Steward in England","normannoble.png",1130,1153);
addFigure("Geoffrey de Mandeville","Earl of Essex","normanearl.png",1129,1144);
addFigure("Ranulf de Gernon","Earl of Chester","normanearl.png",1128,1153);
addFigure("Thomas Becket","Lord Chancellor of England","thomasbecket.jpg",1155,1162);
addFigure("Richard of Ely","Lord Treasurer of England","bishop.png",1156,1196);
addFigure("Henry the Younger","Junior King of England","henrytheyoungking.jpg",1170,1183);
addFigure("William of Ely","Lord Treasurer of England","bishop.png",1196,1215);
addFigure("William de Longchamp","Chief Justiciar of England","bishop.png",1189,1191);
addFigure("William Marshal","Lord Marshal of England","williammarshal.png",1194,1216);
addFigure("Richard Marshal","Lord Marshal of England","richardmarshal.png",1231,1234);
addFigure("Gilbert Marshal","Lord Marshal of England","gilbertmarshal.png",1234,1241);

addFigure("Waleran de Beaumont","Count of Meulan","walerandebeaumont.jpg",1120,1151);

addFigure("Richard de Lucy","Chief Justiciar of England","normannoble.png",1154,1179);
addFigure("Roger de Beaumont","Chief Justiciar of England","normannoble.png",1154,1168);
addFigure("Geoffrey Fitz Peter","Chief Justiciar of England","normannoble.png",1198,1213);


addFigure("Hubert de Burgh","Chief Justiciar of England","hubertdeburgh.png",1215,1219);
addFigure("Hubert de Burgh","Chief Justiciar of England","hubertdeburgh.png",1227,1232);

addFigure("Walter de Gray","Lord Chancellor of England","walterdegray.png",1205,1214);
addFigure("Richard Marsh / Marisco","Lord Chancellor of England","richardmarsh.png",1214,1226);
addFigure("Ralph Neville","Lord Chancellor of England","bishop.png",1226,1240);
addFigure("Richard le Gras","Lord Chancellor of England","bishop.png",1240,1242);
addFigure("Ralph Neville","Lord Chancellor of England","bishop.png",1242,1244);
addFigure("Silvester de Everdon","Keeper of the Great Seal","bishop.png",1244,1246);
addFigure("John Maunsell","Keeper of the Great Seal","judge.png",1246,1247);
addFigure("John Lexington","Keeper of the Great Seal","normannoble.png",1247,1248);
addFigure("John Maunsell","Keeper of the Great Seal","normannoble.png",1248,1249);
addFigure("John Lexington","Keeper of the Great Seal","normannoble.png",1249,1253);
addFigure("Eleanor of Provence","Keeper of the Great Seal","eleanorprovence.jpg",1253,1254);
addFigure("William of Kilkenny","Keeper of the Great Seal","williamkilkenny.png",1254,1255);
addFigure("Henry Wingham","Lord Chancellor of England","bishop.png",1255,1260);
addFigure("Nicholas of Ely","Lord Chancellor of England","bishop.png",1260,1261);
addFigure("Walter de Merton","Lord Chancellor of England","walterdemerton.jpg",1261,1263);
addFigure("Nicholas of Ely","Lord Chancellor of England","bishop.png",1263,1263);
addFigure("John Chishull","Lord Chancellor of England","bishop.png",1263,1264);
addFigure("Thomas Cantilupe","Lord Chancellor of England","thomascantilupe.png",1264,1265);
addFigure("Ralph Sandwich","Keeper of the Great Seal","normannoble.png",1265,1265);
addFigure("Walter Giffard","Lord Chancellor of England","bishop.png",1265,1266);
addFigure("Godfrey Giffard","Lord Chancellor of England","bishop.png",1266,1268);
addFigure("John Chishull","Lord Chancellor of England","bishop.png",1268,1269);
addFigure("Richard Middleton","Lord Chancellor of England","bishop.png",1269,1272);
addFigure("Walter de Merton","Lord Chancellor of England","walterdemerton.jpg",1272,1274);
addFigure("Robert Burnell","Lord Chancellor of England","bishop.png",1274,1292);
addFigure("Thomas Bek","Keeper of the Great Seal","bishop.png",1279,1279);
addFigure("John Langton","Lord Chancellor of England","bishop.png",1292,1302);
addFigure("William Greenfield","Lord Chancellor of England","bishop.png",1302,1305);
addFigure("William Hamilton","Lord Chancellor of England","bishop.png",1305,1307);
addFigure("Ralph Baldock","Lord Chancellor of England","bishop.png",1307,1307);
addFigure("John Langton","Lord Chancellor of England","bishop.png",1307,1310);
addFigure("Walter Reynolds","Lord Chancellor of England","bishop.png",1310,1314);
addFigure("John Sandale","Lord Chancellor of England","bishop.png",1314,1318);
addFigure("John Hotham","Lord Chancellor of England","bishop.png",1318,1320);
addFigure("John Salmon","Lord Chancellor of England","bishop.png",1320,1323);
addFigure("Robert Baldock","Lord Chancellor of England","bishop.png",1323,1326);
addFigure("William Ayermin","Lord Chancellor of England","bishop.png",1326,1327);
addFigure("John Hotham","Lord Chancellor of England","bishop.png",1327,1328);
addFigure("Henry Burghersh","Lord Chancellor of England","bishop.png",1328,1330);
addFigure("John de Stratford","Lord Chancellor of England","johndestratford.png",1330,1334);
addFigure("Richard Bury","Lord Chancellor of England","richardofbury.png",1334,1335);
addFigure("John de Stratford","Lord Chancellor of England","johndestratford.png",1335,1337);
addFigure("Robert de Stratford","Lord Chancellor of England","robertstratford.png",1337,1338);
addFigure("Richard Bintworth","Lord Chancellor of England","bishop.png",1338,1339);
addFigure("John de Stratford","Lord Chancellor of England","johndestratford.png",1340,1340);
addFigure("Robert de Stratford","Lord Chancellor of England","robertstratford.png",1340,1340);
addFigure("Robert Bourchier","Lord Chancellor of England","normannoble.png",1340,1341);
addFigure("Robert Parning","Lord Chancellor of England","normannoble.png",1341,1343);
addFigure("Robert Sadington","Lord Chancellor of England","normannoble.png",1343,1345);
addFigure("John de Ufford","Lord Chancellor of England","bishop.png",1345,1349);
addFigure("John Thoresby","Lord Chancellor of England","bishop.png",1349,1356);
addFigure("William Edington","Lord Chancellor of England","williamedington.png",1356,1363);
addFigure("Simon Langham","Lord Chancellor of England","bishop.png",1363,1367);
addFigure("William of Wykeham","Lord Chancellor of England","williamwykeham.jpg",1367,1371);
addFigure("Robert Thorpe","Lord Chancellor of England","normannoble.png",1371,1372);
addFigure("John Knyvet","Lord Chancellor of England","normannoble.png",1372,1377);
addFigure("Adam Houghton","Lord Chancellor of England","bishop.png",1377,1378);
addFigure("Lord Scrope of Bolton","Lord Chancellor of England","normannoble.png",1378,1380);
addFigure("Simon Sudbury","Lord Chancellor of England","simonsudbury.jpg",1380,1381);
addFigure("Hugh Segrave","Keeper of the Great Seal","normannoble.png",1381,1381);
addFigure("William Courtenay","Lord Chancellor of England","bishop.png",1381,1381);
addFigure("Lord Scrope of Bolton","Lord Chancellor of England","normannoble.png",1381,1382);
addFigure("Robert Braybrooke","Lord Chancellor of England","bishop.png",1382,1383);
addFigure("Lord de la Pole","Lord Chancellor of England","normannoble.png",1383,1386);
addFigure("Thomas Arundel","Lord Chancellor of England","thomasarundel.jpg",1386,1389);
addFigure("William of Wykeham","Lord Chancellor of England","bishop.png",1389,1391);
addFigure("Thomas Arundel","Lord Chancellor of England","thomasarundel.jpg",1391,1396);
addFigure("Edmund Stafford","Lord Chancellor of England","bishop.png",1396,1399);
addFigure("Thomas Arundel","Lord Chancellor of England","thomasarundel.jpg",1399,1399);
addFigure("Robert de Beaumont","Lord High Steward of England","robertdebeaumont.png",1154,1168);
addFigure("Robert de Beaumont II","Lord High Steward of England","normannoble.png",1168,1190);
addFigure("Robert de Beaumont III","Lord High Steward of England","normannoble.png",1190,1204);
addFigure("Simon IV de Montfort","Lord High Steward of England","simondemontfort.gif",1206,1218);
addFigure("Simon V de Montfort","Lord High Steward of England","simondemontfort5.png",1239,1265);
addFigure("Edward Longshanks","Lord High Steward of England","edwardi.jpg",1267,1274,40);
addFigure("Edmund Crouchback","Lord High Steward of England","edmundcrouchback.jpg",1274,1296);
addFigure("Thomas of Lancaster","Lord High Steward of England","thomaslancaster.png",1296,1322);
addFigure("Henry of Lancaster","Lord High Steward of England","normannoble.png",1324,1345);
addFigure("Henry of Grosmont","Lord High Steward of England","henrygrosmont.png",1345,1361);
addFigure("John of Gaunt","Lord High Steward of England","johnofgaunt.jpg",1362,1399);
addFigure("Henry Bolingbroke","Lord High Steward of England","henryiv.jpg",1399,1399);
addFigure("Thomas of Lancaster","Lord High Steward of England","thomaslancaster2.png",1399,1421);



addFigure("Stephen de Segrave","Chief Justiciar of England","normannoble.png",1232,1234);


addFigure("Matilda","Heir Apparent to England","matilda2.png",1127,1135);
addFigure("Matilda","Claimant to England","matilda2.png",1135,1141,40);


addFigure("Robert FitzWalter","Marshal of the Army of God and the Holy Church","robertfitzwalter.png",1215,1235);


addFigure("Walter de Coutances","Archbishop of Rouen","bishop.png",1184,1207);

addFigure("Matilda of Flanders","Queen Consort of England","matilda.jpg",1066,1083);
addFigure("Emma of Normandy","Queen Consort of England","emmaofnormandy.jpg",1002,1013);
addFigure("Emma of Normandy","Queen Consort of England","emmaofnormandy.jpg",1017,1035);
addFigure("Emma of Normandy","Queen Mother of Denmark","emmaofnormandy.jpg",1036,1039);
addFigure("Emma of Normandy","Queen Mother of England","emmaofnormandy.jpg",1040,1052);
addFigure("Matilda of Scotland","Queen Consort of England","matilda3.jpg",1100,1118);
addFigure("Eleanor of Aquitaine","Queen Consort of England","eleanorofaquitaine.png",1154,1189);
addFigure("Eleanor of Aquitaine","Queen Mother of England","eleanorofaquitaine.png",1189,1204);
addFigure("Eleanor of Provence","Queen Consort of England","eleanorofprovence.jpg",1236,1272);

addFigure("Henry","Son of Henry II","henrytheyoungking.jpg",1155,1170, 40);
addFigure("Richard","Son of Henry II","richardi.png",1157,1171, 40);
addFigure("Geoffrey","Son of Henry II","geoffreyiiofbrittany.jpg",1158,1181, 40);
addFigure("John Lackland","Son of Henry II","john.png",1166,1189, 40);
addFigure("Edward Longshanks","Heir Apparent to England","edwardi.jpg",1239,1249);
addFigure("Edward Longshanks","Duke of Gascony","edwardi.jpg",1249,1267, 40);


addFigure("Pandulf","Papal Legate","pandulf.png",1211,1215);
addFigure("Pandulf","Bishop of Norwich","pandulf.png",1215,1226);
addFigure("Otto of Tonengo","Papal Legate","ottotonego.png",1225,1226);
addFigure("Otto of Tonengo","Papal Legate","ottotonego.png",1237,1240);

addFigure("Rollo","Duke of Normandy","rollo.jpg",911,928);
addFigure("William Longsword","Duke of Normandy","williaminormandy.png",927,942);
addFigure("Richard I","Duke of Normandy","richardinormandy.png",942,996);
addFigure("Richard II","Duke of Normandy","richardiinormandy.png",996,1026);
addFigure("Richard III","Duke of Normandy","richardiiinormandy.png",1026,1027);
addFigure("Robert I","Duke of Normandy","robertinormandy.png",1027,1035);
addFigure("William II","Duke of Normandy","williami.jpg",1036,1066);
addFigure("Henry","Count of the Cotentin","henryi.jpg",1088,1091);
addFigure("William Clito","Claimant of Normandy","williamclito.jpg",1106,1128);

addFigure("Falkasius","Knight","knight.png",1215,1225);
addFigure("William d'Albemarle","Earl of Albermarle","knight.png",1213,1242);
addFigure("Richard Siward","Knight","knight.png",1229,1248);
addFigure("Hubert de Burgh","Earl of Kent","hubertdeburgh.png",1232,1243);


//addFigure("Joan of Constantinople","Countess of Flanders","joanflanders.jpg",1205,1244);
//addFigure("Fernando of Portugal","Jure Uxoris Count of Flanders","fernandoportugal.png",1212,1233);


addFigure("Robert Curthose","Heir Apparent to Normandy","robertcurthose.png",1066,1087, 40);
addFigure("Robert Curthose","Duke of Normandy","robertcurthose.png",1087,1106);
addFigure("William Rufus","Son of William I","williamii.jpg",1066,1087,40);
addFigure("Henry Beauclerc","Son of William I","henryi.jpg",1068,1100,40);

addFigure("Geoffrey FitzEmpress","Count of Nantes","henryii.jpg",1156,1158);


addFigure("William FitzOsbert","Peasant Leader","normannoble.png",1196,1196);
addFigure("Henry of Winchester","Son of John","henryiii.png",1207,1216,40);
addFigure("Richard of Cornwall","Son of John","richardcornwall.jpg",1209,1225,40);
addFigure("Richard of Cornwall","Earl of Cornwall","richardcornwall.jpg",1225,1257,40);
addFigure("Richard of Cornwall","King of Germany","richardcornwall.jpg",1257,1272,40);
addFigure("Ralf de Blondeville","Earl of Chester","ranulfchester.jpg",1181,1232);
addFigure("Simon V de Montfort","Earl of Liecester","simondemontfort5.png",1236,1239);

addFigure("Peter des Roches","Bishop of Winchester","peterdesroches.jpg",1205,1238);



addFigure("Titus Flavius Vespasianus","Legate of Legio II Augusta","vespasian.jpg",42,47);
addFigure("Aulus Larcius Priscus","Legate of Legio II Augusta","legate.png",97,105);
addFigure("Aulus Claudius Charax","Legate of Legio II Augusta","legate.png",141,144);
addFigure("Fronto Aemilianus Calpurnius Rufilianus","Legate of Legio II Augusta","legate.png",169,180);
addFigure("Quintus Aurelius Polus Terentianus","Legate of Legio II Augusta","legate.png",185,190);
addFigure("Vitulasius Laetinianus","Legate of Legio II Augusta","legate.png",253,259);
addFigure("Marcus Pompeius Macrinus Neos Theophanes","Legate of Legio VI Victrix","legate.png",100,110);
addFigure("Publius Tullius Varro","Legate of Legio VI Victrix","legate.png",118,118);
addFigure("Lucius Valerius Propinquus","Legate of Legio VI Victrix","propinquus.png",119,122);
addFigure("Lucius Minicius Natalis Quadronius Verus","Legate of Legio VI Victrix","legate.png",131,131);
addFigure("Quintus Antonius Isauricus","Legate of Legio VI Victrix","legate.png",132,140);
addFigure("Publicus Mummius Sisenna Rutilianus","Legate of Legio VI Victrix","legate.png",130,130);
addFigure("Lucius Junius Victorinus Flavius Caelianus","Legate of Legio VI Victrix","legate.png",150,154);
addFigure("Quintus Camurius Numisius Junior","Legate of Legio VI Victrix","legate.png",155,158);
addFigure("Claudius Hieronymianus","Legate of Legio VI Victrix","legate.png",198,205);
addFigure("Publius Cornelius Lentulus Scipio","Legate of Legio IX Hispania","legate.png",20,24);
addFigure("Caesius Nasica","Legate of Legio IX Hispania","legate.png",49,51);
addFigure("Quintus Petillius Cerialis","Legate of Legio IX Hispania","legate.png",59,61);
addFigure("Gaius Caristanius Fronto","Legate of Legio IX Hispania","legate.png",76,79);
addFigure("Lucius Aninius Sextius Florentinus","Legate of Legio IX Hispania","legate.png",118,123);
addFigure("Fabius Priscus","Legate of Legio XIV Gemina","legate.png",68,72);
addFigure("Marcus Roscius Coelius","Legate of Legio XX Valeria Victrix","legate.png",69,70);
addFigure("Gnaeus Julius Agricola","Legate of Legio XX Valeria Victrix","agricola.jpg",70,73);
addFigure("Lucius Pomponius Mamilianus","Legate of Legio XX Valeria Victrix","legate.png",90,93);
addFigure("Marcus Aemilius Papus","Legate of Legio XX Valeria Victrix","legate.png",126,130);
addFigure("Gaius Curtius Justus","Legate of Legio XX Valeria Victrix","legate.png",140,145);
addFigure("Lucius Cestius Gallus","Legate of Legio XX Valeria Victrix","legate.png",165,175);



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


addFigure("Blessed Benedict XI","Pope","benedictxi.jpg",1303,1304);
addFigure("Clement V","Pope","clementv.jpg",1305,1314);
addFigure("John XXII","Pope","johnxxii.jpg",1316,1334);
addFigure("Benedict XII","Pope","benedictxii.jpg",1334,1342);
addFigure("Clement VI","Pope","clementvi.jpg",1342,1352);
addFigure("Innocent VI","Pope","innocentvi.jpg",1352,1362);
addFigure("Blessed Urban V","Pope","urbanv.jpg",1362,1370);
addFigure("Gregory XI","Pope","gregoryxi.png",1370,1378);
addFigure("Urban VI","Pope","urbanvi.jpg",1378,1389);
addFigure("Boniface IX","Pope","bonifaceix.jpg",1389,1404);
addFigure("Innocent VII","Pope","innocentvii.jpg",1404,1406);
addFigure("Gregory XII","Pope","gregoryxii.jpg",1406,1415);
addFigure("Martin V","Pope","martinv.jpg",1417,1431);
addFigure("Eugene IV","Pope","eugeneiv.jpg",1431,1447);
addFigure("Nicholas V","Pope","nicholasv.jpg",1447,1455);
addFigure("Callistus III","Pope","callixtusiii.jpg",1455,1458);
addFigure("Pius II","Pope","piusii.jpg",1458,1464);
addFigure("Paul II","Pope","paulii.jpg",1464,1471);
addFigure("Sixtus IV","Pope","sixtusiv.jpg",1471,1484);
addFigure("Innocent VIII","Pope","innocentviii.jpg",1484,1492);
addFigure("Alexander VI","Pope","alexandervi.jpg",1492,1503);
addFigure("Pius III","Pope","piusiii.jpg",1503,1503);
addFigure("Julius II","Pope","juliusii.jpg",1503,1513);
addFigure("Leo X","Pope","leox.jpg",1513,1521);
addFigure("Adrian VI","Pope","adrianvi.jpg",1522,1523);
addFigure("Clement VII","Pope","clementvii.jpg",1523,1534);
addFigure("Paul III","Pope","pauliii.jpg",1534,1536);//1549);
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







addFigure("Harald Hadrada","King of Norway","haraldhadrada.png",1047,1066);
addFigure("Sweyn II","King of Denmark","sweynii.webp",1047,1076);
addFigure("Harald III","King of Denmark","haraldiii.jpg",1076,1080);
addFigure("Cnut IV","King of Denmark","cnutiv.jpg",1080,1086);
addFigure("Ivar the Boneless","Viking Commander","viking.png",865,873);
addFigure("Harald Bluetooth","King of Denmark","haraldbluetooth.png",958,986);
addFigure("Sweyn Forkbeard","King of Denmark","sweynforkbeard.jpg",986,1014);
addFigure("Cnut","King of Denmark","cnutthegreat.jpg",1018,1035);
addFigure("Harthacnut","King of Denmark","harthacnut.jpg",1035,1042);




//addFigure("Charles VII","King of the","charlesvii.jpg",1422,1461);


addFigure("Hugh Capet","King of France","hughcapet.png",987,996);
addFigure("Robert II","King of France","robertii.png",996,1031);
addFigure("Henry I","King of France","henryi.png",1031,1060);
addFigure("Philip I","King of France","philipi.png",1060,1108);
addFigure("Louis VI","King of France","louisvi.png",1108,1137);
addFigure("Louis VII","King of France","louisvii.jpg",1137,1180);
addFigure("Philip II Augustus","King of France","philipii.png",1180,1223);
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

addFigure("Louis","Heir Apparent to France","louisviii.png",1200,1223);
addFigure("Blanche","Regent Queen of France","blanche.jpg",1226,1234);


addFigure("Clovis I","King of the Franks","clovis.png",509,511);
addFigure("Chlothar I","King of the Franks","chlothari.png",558,561);
addFigure("Dagobert I","King of the Franks","dagoberti.png",632,634);
addFigure("Chlothar III","King of the Franks","chlothariii.png",662,663);
addFigure("Childeric II","King of the Franks","childericii.png",673,675);
addFigure("Theuderic III","King of the Franks","theudericiii.jpg",679,691);
addFigure("Clovis IV","King of the Franks","frankishking.png",691,695);
addFigure("Childebert IV","King of the Franks","childerbertiii.jpg",695,711);
addFigure("Dagobert III","King of the Franks","dagobertiii.jpg",711,715);
addFigure("Chilperic II","King of the Franks","chilpericii.png",715,721);
addFigure("Theuderic IV","King of the Franks","frankishking.png",721,737);
addFigure("Charles Martel","Regent of the Franks","charlesmartel.png",737,741);
addFigure("Childeric III","King of the Franks","childericiii.jpg",743,751);
addFigure("Pepin","King of the Franks","pepin.png",751,768);
addFigure("Charlemagne","King of the Franks","charlemagne.avif",771,800);
addFigure("Charlemagne","Holy Roman Emperor","charlemagne.avif",800,814);
addFigure("Louis I","Holy Roman Emperor","louisi.png",813,840);
addFigure("Lothair I","Holy Roman Emperor","lothairi.jpg",840,855);
addFigure("Louis II","Holy Roman Emperor","louisii.png",855,875);
addFigure("Charles II","Holy Roman Emperor","charlesiihre.jpg",875,877);
addFigure("Charles III","Holy Roman Emperor","charlesthefat.jpg",881,888);
addFigure("Guy","Holy Roman Emperor","guy.jpg",891,894);
addFigure("Lambert","Holy Roman Emperor","lambert.jpg",892,898);
addFigure("Arnulf","Holy Roman Emperor","arnulf.jpg",896,899);
addFigure("Louis III","Holy Roman Emperor","louisiiihre.png",901,905);
addFigure("Berengar","Holy Roman Emperor","berengar.jpg",915,924);
addFigure("Otto I","Holy Roman Emperor","ottoi.jpg",962,973);
addFigure("Otto II","Holy Roman Emperor","ottoii.jpg",967,983);
addFigure("Otto III","Holy Roman Emperor","ottoiii.jpg",996,1002);
addFigure("Henry II","Holy Roman Emperor","henryiihre.jpg",1014,1024);
addFigure("Conrad II","Holy Roman Emperor","conradii.png",1027,1039);
addFigure("Henry III","Holy Roman Emperor","henryiiihre.jpg",1046,1056);
addFigure("Henry IV","Holy Roman Emperor","henryivhre.jpg",1084,1106);
addFigure("Henry V","Holy Roman Emperor","henryvhre.jpg",1107,1125);
addFigure("Lothair II","Holy Roman Emperor","lothairii.jpg",1133,1137);
addFigure("Frederick I","Holy Roman Emperor","fredericki.jpg",1138,1190);
addFigure("Henry VI","Holy Roman Emperor","henryvihre.jpg",1191,1197);
addFigure("Otto IV","Holy Roman Emperor","ottoiv.jpg",1209,1215);
addFigure("Frederick II","Holy Roman Emperor","frederickii.jpg",1220,1250);
addFigure("Henry VII","Holy Roman Emperor","henryviihre.jpg",1312,1313);
addFigure("Louis IV","Holy Roman Emperor","louisivhre.jpg",1328,1347);
addFigure("Charles IV","Holy Roman Emperor","charlesivhre.jpg",1355,1378);
addFigure("Sigismund","Holy Roman Emperor","sigismund.jpg",1433,1437);
addFigure("Frederick III","Holy Roman Emperor","frederickiii.png",1452,1493);
addFigure("Maximilian I","Holy Roman Emperor","maximiliani.png",1508,1519);
addFigure("Charles V","Holy Roman Emperor","charlesvhre.jpg",1519,1556);
addFigure("Ferdinand I","Holy Roman Emperor","ferdinandi.png",1556,1564);
addFigure("Maximilian II","Holy Roman Emperor","maximilianii.jpg",1564,1576);
addFigure("Rudolf II","Holy Roman Emperor","rudolfii.png",1576,1612);
addFigure("Matthias","Holy Roman Emperor","matthias.png",1612,1619);
addFigure("Ferdinand II","Holy Roman Emperor","ferdinandii.jpg",1619,1637);
addFigure("Ferdinand III","Holy Roman Emperor","ferdinandiii.jpg",1637,1657);
addFigure("Leopold I","Holy Roman Emperor","leopoldi.png",1658,1705);

addFigure("Otto I","King of Germany","ottoi.jpg",936,962);
addFigure("Otto II","King of Germany","ottoii.jpg",961,967);
addFigure("Otto III","King of Germany","ottoiii.jpg",983,996);
addFigure("Henry II","King of Germany","henryiihre.jpg",1002,1014);
addFigure("Conrad II","King of Germany","conradii.png",1024,1027);
addFigure("Henry III","King of Germany","henryiiihre.jpg",1028,1046);
addFigure("Henry IV","King of Germany","henryivhre.jpg",1054,1084);
addFigure("Henry V","King of Germany","henryvhre.jpg",1099,1107);
addFigure("Lothair II","King of Germany","lothairii.jpg",1125,1133);
addFigure("Frederick I","King of Germany","fredericki.jpg",1152,1155);
addFigure("Henry VI","King of Germany","henryvihre.jpg",1169,1191);
addFigure("Otto IV","King of Germany","ottoiv.jpg",1198,1209);
addFigure("Frederick II","King of Germany","frederickii.jpg",1212,1220);
addFigure("Henry VII","King of Germany","henryviihre.jpg",1308,1312);
addFigure("Louis IV","King of Germany","louisivhre.jpg",1314,1328);
addFigure("Charles IV","King of Germany","charlesivhre.jpg",1346,1355);
addFigure("Sigismund","King of Germany","sigismund.jpg",1410,1433);
addFigure("Frederick III","King of Germany","frederickiii.png",1440,1452);
addFigure("Maximilian I","King of Germany","maximiliani.png",1486,1508);
addFigure("Ferdinand I","King of Germany","ferdinandi.png",1531,1556);
addFigure("Maximilian II","King of Germany","maximilianii.jpg",1562,1564);
addFigure("Rudolf II","King of Germany","rudolfii.png",1575,1576);
addFigure("Ferdinand III","King of Germany","ferdinandiii.jpg",1636,1637);

addFigure("Matilda","Holy Roman Empress Consort","matilda2.png",1110,1125);


addFigure("Theodosius II","Eastern Roman Emperor","theodosiusii.jpg",408,450);
addFigure("Priscus Attalus","Western Roman Emperor","priscusattalus.png",409,410);
addFigure("Constantius III","Western Roman Emperor","constantiusiii.jpg",421,421);
addFigure("Johannes","Usurper Western Roman Emperor","johannes.png",423,425);
addFigure("Valentinian III","Western Roman Emperor","valentinianiii.jpg",425,455);
addFigure("Marcian","Eastern Roman Emperor","marcian.png",450,457);
addFigure("Petronius Maximus","Western Roman Emperor","petroniusmaximus.png",455,455);
addFigure("Avitus","Western Roman Emperor","avitus.jpg",455,456);
addFigure("Majorian","Western Roman Emperor","majorian.jpg",457,461);
addFigure("Libius Severus","Western Roman Emperor","libiusseverus.jpg",461,465);
addFigure("Anthemius","Western Roman Emperor","anthemius.png",467,472);
addFigure("Olybrius","Western Roman Emperor","olybrius.jpg",472,472);
addFigure("Glycerius","Western Roman Emperor","glycerius.jpg",473,474);
addFigure("Julius Nepos","Western Roman Emperor","juliusnepos.png",474,475);
addFigure("Romulus Augustulus","Western Roman Emperor","romulusaugustulus.jpg",475,476);
addFigure("Leo I","Eastern Roman Emperor","leoibyz.jpg",457,474);
addFigure("Leo II","Eastern Roman Emperor","leoiibyz.png",474,474);
addFigure("Zeno","Eastern Roman Emperor","zeno.png",474,475);
addFigure("Basiliscus","Usurper Eastern Roman Emperor","basiliscus.png",475,476);
addFigure("Zeno","Roman Emperor","zeno.png",476,491);
addFigure("Anastasius I","Roman Emperor","anastasiusibyz.jpg",491,518);
addFigure("Justin I","Roman Emperor","justini.jpg",518,527);
addFigure("Justinian I","Roman Emperor","justiniani.webp",527,565);
addFigure("Justin II","Roman Emperor","justinii.jpg",565,578);
addFigure("Tiberius II Constantine","Roman Emperor","tiberiusii.jpg",578,582);
addFigure("Maurice","Roman Emperor","maurice.jpg",582,602);
addFigure("Phocas","Roman Emperor","phocas.png",602,610);
addFigure("Heraclius","Roman Emperor","heraclius.jpg",610,641);
addFigure("Heraclius Constantine","Roman Emperor","heracliusconstantine.jpg",641,641);
addFigure("Heraclonas","Roman Emperor","heraclonas.png",641,641);
addFigure("Constans II","Roman Emperor","constansii.jpg",641,668);
addFigure("Constantine IV","Roman Emperor","constantineiv.png",668,685);
addFigure("Justinian II","Roman Emperor","justinianii.png",685,695);
addFigure("Leontius","Roman Emperor","leontius.png",695,698);
addFigure("Tiberius III","Roman Emperor","tiberiusiii.png",698,705);
addFigure("Justinian II","Roman Emperor","justinianii.png",705,711);
addFigure("Philippicus","Roman Emperor","philippicus.png",711,713);
addFigure("Anastasius II","Roman Emperor","anastasiusii.jpg",713,715);
addFigure("Theodosius III","Roman Emperor","theodosiusiii.png",715,717);
addFigure("Leo III","Roman Emperor","leoiiibyz.png",717,741);
addFigure("Constantine V","Roman Emperor","constantinev.png",741,775);
addFigure("Leo IV","Roman Emperor","leoivbyz.jpg",775,780);
addFigure("Constantine VI","Roman Emperor","constantinevi.png",780,797);
addFigure("Irene","Roman Emperor","irene.png",797,802);
addFigure("Nikephoros I","Roman Emperor","nikephorosi.png",802,811);
addFigure("Staurakios","Roman Emperor","staurakios.png",811,811);
addFigure("Michael I","Roman Emperor","michaeli.png",811,813);
addFigure("Leo V","Roman Emperor","leov.jpg",813,820);
addFigure("Michael II","Roman Emperor","michaelii.jpg",820,829);
addFigure("Theophilos","Roman Emperor","theophilos.jpg",829,842);
addFigure("Michael III","Roman Emperor","michaeliii.jpg",842,867);
addFigure("Basil I","Roman Emperor","basili.png",867,886);
addFigure("Leo VI","Roman Emperor","leovi.png",886,912);
addFigure("Alexander","Roman Emperor","alexanderbyz.jpg",912,913);
addFigure("Constantine VII","Roman Emperor","constantinevii.jpg",913,959);
addFigure("Romanos II","Roman Emperor","romanosii.png",959,963);
addFigure("Nikephoros II Phokas","Roman Emperor","nikephorosii.jpg",963,969);
addFigure("John I Tzimiskes","Roman Emperor","johnibyz.png",969,976);
addFigure("Basil II","Roman Emperor","basilii.png",976,1025);
addFigure("Constantine VIII","Roman Emperor","constantineviii.jpg",1025,1028);
addFigure("Romanos III Argyros","Roman Emperor","romanosiii.png",1028,1034);
addFigure("Michael IV","Roman Emperor","michaeliv.jpg",1034,1041);
addFigure("Michael V","Roman Emperor","michaelv.jpg",1041,1042);
addFigure("Zoe Porphyrogenita","Roman Emperor","zoeporph.jpg",1042,1042);
addFigure("Constantine IX","Roman Emperor","constantineix.jpg",1042,1055);
addFigure("Theodora Porphyrogenita","Roman Emperor","theodoraporph.jpg",1055,1056);
addFigure("Michael VI","Roman Emperor","michaelvi.png",1056,1057);
addFigure("Isaac I Komnenos","Roman Emperor","isaaci.png",1057,1059);
addFigure("Constantine X Doukas","Roman Emperor","constantinex.jpg",1059,1067);
addFigure("Romanos IV Diogenes","Roman Emperor","romanosiv.png",1068,1071);
addFigure("Michael VII Doukas","Roman Emperor","michaelvii.png",1071,1078);
addFigure("Nikephoros III Botaneiates","Roman Emperor","nikephorosiii.jpg",1078,1081);
addFigure("Alexios I Komnenos","Roman Emperor","alexiosi.jpg",1081,1118);
addFigure("John II Komnenos","Roman Emperor","johniibyz.jpg",1118,1143);
addFigure("Manuel I Komnenos","Roman Emperor","manueli.jpg",1143,1180);
addFigure("Alexios II Komnenos","Roman Emperor","alexiosii.png",1180,1183);
addFigure("Andronikos I Komnenos","Roman Emperor","andronikos.png",1183,1185);
addFigure("Isaac II Angelos","Roman Emperor","isaacii.png",1185,1195);
addFigure("Alexios III Angelos","Roman Emperor","alexiosiii.png",1195,1203);
addFigure("Alexios IV Angelos","Roman Emperor","alexiosiv.png",1203,1204);
addFigure("Isaac II Angelos","Roman Emperor","isaacii.png",1203,1204);
addFigure("Alexios V Doukas","Roman Emperor","alexiosv.png",1204,1204);
addFigure("Theodore I Laskaris","Roman Emperor in Nicaea","theodorei.png",1205,1221);
addFigure("John III Vatatzes","Roman Emperor in Nicaea","johniiibyz.png",1221,1254);
addFigure("Theodore II Laskaris","Roman Emperor in Nicaea","theodoreii.jpg",1254,1258);
addFigure("John IV Laskaris","Roman Emperor in Nicaea","johnivbyz.png",1258,1261);
addFigure("Michael VIII Palaiologos","Roman Emperor","michaelviii.png",1259,1282);
addFigure("Andronikos II Palaiologos","Roman Emperor","andronikosii.jpg",1282,1328);
addFigure("Andronikos III Palaiologos","Roman Emperor","andronikosiii.jpg",1328,1341);
addFigure("John V Palaiologos","Roman Emperor","johnvbyz.jpg",1341,1391);
addFigure("John VI Kantakouzenos","Roman Emperor","johnvi.jpg",1347,1354);
addFigure("Andronikos IV Palaiologos","Roman Emperor","andronikosivbyz.png",1376,1379);
addFigure("Andronikos IV Palaiologos","Roman Emperor","andronikosivbyz.png",1381,1385);
addFigure("John VII Palaiologos","Roman Emperor","johnviibyz.png",1390,1390);
addFigure("John VII Palaiologos","Roman Emperor","johnviibyz.png",1403,1408);
addFigure("Manuel II Palaiologos","Roman Emperor","manuelii.jpg",1391,1425);
addFigure("John VIII Palaiologos","Roman Emperor","johnviiibyz.jpg",1425,1448);
addFigure("Constantine XI Palaiologos","Roman Emperor","constantinexi.jpg",1449,1453);

addFigure("Baldwin I","Latin Emperor in Constantinople","baldwinilatin.jpg",1204,1205);
addFigure("Henry","Latin Emperor in Constantinople","henryofflanders.jpg",1205,1216);
addFigure("Peter","Latin Emperor in Constantinople","peteriicourtenay.jpg",1216,1217);
addFigure("Yolanda","Latin Empress in Constantinople","yolanda.jpg",1217,1219);
addFigure("Robert","Latin Emperor in Constantinople","robertlatin.jpg",1219,1228);
addFigure("Baldwin II","Latin Emperor in Constantinople","baldwiniilatin.jpg",1228,1261);






//// RELATIONS

addRelation("G. Julius Caesar","unknown.jpg", "Julia Minor","unknown.jpg", -101, "child");
addRelation("G. Julius Caesar","unknown.jpg", "Julius Caesar","juliuscaesar.webp", -100, "child");
addRelation("Julia Minor","unknown.jpg","Atia","unknown.jpg", -85, "child");
addRelation("Atia","unknown.jpg", "Augustus","augustus.jpg",-63, "child");
addRelation("Livia Drusilla","unknown.jpg", "Augustus","augustus.jpg",-42, "spouse");
addRelation("Livia Drusilla","unknown.jpg", "Tiberius","tiberius.jpg",-42, "child");
addRelation("Livia Drusilla","unknown.jpg", "Drusus","unknown.jpg",-38, "child");
addRelation("Drusus","unknown.jpg","Claudius","claudius.jpg", -10, "child");
addRelation("Drusus","unknown.jpg","Germanicus","unknown.jpg", -16, "child");
addRelation("Germanicus","unknown.jpg","Caligula","caligula.jpg", -16, "child");
addRelation("Germanicus","unknown.jpg","Agrippina","unknown.jpg", -15, "child");
addRelation("Agrippina","unknown.jpg","Nero","nero.jpg", 37, "child");

addRelation("Vistilia","unknown.jpg","M. Caesonia","unknown.jpg", 6, "child");
addRelation("Vistilia","unknown.jpg","G. D. Corbulo","unknown.jpg", 7, "child");
addRelation("M. Caesonia","unknown.jpg","Caligula","caligula.jpg", 39, "spouse");
addRelation("G. D. Corbulo","unknown.jpg","D. Longina","unknown.jpg", 53, "child");

addRelation("Vespasian","vespasian.jpg","Domitian","domitian.jpg", 51, "child");
addRelation("Vespasian","vespasian.jpg","Titus","titus.jpg", 39, "child");
addRelation("Domitian","domitian.jpg","D. Longina","unknown.jpg", 71, "spouse");

//addRelation("QMB. Sura","unknown.jpg","Marcia","unknown.jpg", 33, "child");
//addRelation("QMB. Sura","unknown.jpg","M. Furnilla","unknown.jpg", 33, "child");
//addRelation("M. Furnilla","unknown.jpg","Titus","titus.jpg", 63, "spouse");
//addRelation("Marcia","unknown.jpg", "Trajan", "trajan.jpg", 53, "child");

addRelation("Unknown", "unknown.jpg", "M. U. Traianus", "unknown.jpg", 30, "child");
addRelation("Unknown", "unknown.jpg", "Ulpia", "unknown.jpg", 30, "child");

addRelation("Ulpia", "unknown.jpg", "P. A. Hadrianus", 50, "child");
addRelation("P. A. Hadrianus","unknown.jpg","Hadrian", "hadrian.jpg",  76, "child");
addRelation("Hadrian", "hadrian.jpg", "V. Sabina","unknown.jpg", 80, "spouse");

addRelation("M. U. Traianus", "unknown.jpg", "Trajan", "trajan.jpg", 53, "child");
addRelation("M. U. Traianus", "unknown.jpg", "U. Marciana", "unknown.jpg", 48, "child");
addRelation("U. Marciana", "unknown.jpg", "S. Matidia", "unknown.jpg", 68, "child");
addRelation("S. Matidia", "unknown.jpg","V. Sabina", "unknown.jpg",  80, "child");
addRelation("S. Matidia", "unknown.jpg","R. Faustina", "unknown.jpg",  87, "child");

addRelation("R. Faustina", "unknown.jpg", "M. A. Verus","unknown.jpg", 100, "child");
addRelation("R. Faustina", "unknown.jpg", "Faustina Elder","unknown.jpg", 100, "child");
addRelation("Faustina Elder","unknown.jpg", "Faustina Younger","unknown.jpg", 125, "child");
addRelation("Faustina Elder","unknown.jpg", "Antoninus","unknown.jpg", 110, "spouse");

addRelation( "M. A. Verus","unknown.jpg","Marcus Aurelius","marcusaurelius.jpg", 121, "child");
addRelation( "Faustina Younger","unknown.jpg","Marcus Aurelius","marcusaurelius.jpg", 145, "spouse");
addRelation("Marcus Aurelius","marcusaurelius.jpg", "Commodus","commodus.jpg", 161, "child");
addRelation("Marcus Aurelius","marcusaurelius.jpg", "Lucilla","unknown.jpg", 148, "child");
addRelation("Lucilla","unknown.jpg", "Lucius Verus","luciusverus.png", 164, "spouse");

addRelation("J. Bassianus","unknown.jpg", "J. Maesa","unknown.jpg", 165, "child");
addRelation("J. Bassianus","unknown.jpg", "J. Domna","unknown.jpg", 160, "child");
addRelation("J. Domna","luciusverus.png", "Septimius Severus","septimiusseverus.jpg", 187, "spouse");
addRelation("Septimius Severus","septimiusseverus.jpg", "Caracalla","caracalla.jpg", 188, "child");
addRelation("Septimius Severus","septimiusseverus.jpg", "Geta","geta.jpg", 189, "child");

addRelation("J. Maesa","unknown.jpg", "J. Soaemias","unknown.jpg", 180, "child");
addRelation("J. Maesa","unknown.jpg", "J. A. Mamaea","unknown.jpg", 180, "child");
addRelation("J. Soaemias","unknown.jpg","Elagabalus","elagabalus.jpg",  203, "child");
addRelation("J. A. Mamaea","unknown.jpg","Severus Alexander","severusalexander.jpg",  208, "child");

addRelation("Diocletian", "diocletian.jpg", "G. Valeria", "unknown.jpg", 273, "child");
addRelation( "G. Valeria", "unknown.jpg", "Galerius", "galerius.jpg", 293, "spouse");
addRelation("Galerius", "galerius.jpg", "V. Maximilla", "unknown.jpg", 273, "child");

addRelation("Maximian", "maximian.jpg", "Maxentius", "maxentius.jpg", 278, "child");
addRelation("Maximian", "maximian.jpg", "Fausta", "unknown.jpg", 289, "child");

addRelation("V. Maximilla", "unknown.jpg", "Maxentius", "maxentius.jpg", 293, "spouse");

addRelation("Maximian", "maximian.jpg", "Eutropia", "unknown.jpg", 295, "spouse");
addRelation("Eutropia", "unknown.jpg", "M. Theodora", "unknown.jpg", 275, "child");
addRelation( "M. Theodora", "unknown.jpg", "Constantius I", "constantiusi.jpg",293, "spouse");
addRelation( "Constantius I", "constantiusi.jpg","Constantine I", "constantinei.jpg",272, "child");
addRelation( "Constantius I", "constantiusi.jpg","J. Constantius", "unknown.jpg",295, "child");
addRelation( "J. Constantius", "unknown.jpg","Julian", "julian.jpg", 331, "child");
addRelation("Fausta", "unknown.jpg","Constantine I", "constantinei.jpg",  307, "spouse");

addRelation("Constantine I", "constantinei.jpg","Constantine II", "constantineii.jpg", 316, "child");
addRelation("Constantine I", "constantinei.jpg","Constantius II", "constantiusii.jpg", 317, "child");
addRelation("Constantine I", "constantinei.jpg","Constans I", "constansi.jpg", 323, "child");
addRelation("Constantius II", "constantiusii.jpg","Constantia", "unknown.jpg", 362, "child");

addRelation("G. Funarius", "unknown.jpg","Valentinian I", "valentiniani.jpg", 321, "child");
addRelation("G. Funarius", "unknown.jpg","Valens", "valens.png", 328, "child");
addRelation("Valentinian I", "valentiniani.jpg","Gratian", "gratian.jpg",  359, "child");
addRelation("Valentinian I", "valentiniani.jpg","Valentinian II", "valentinianii.jpg",  371, "child");
addRelation("Valentinian I", "valentiniani.jpg","Galla", "unknown.jpg",  360, "child");
addRelation("Constantia", "unknown.jpg","Gratian", "gratian.jpg", 374, "spouse");
addRelation("Galla", "unknown.jpg", "Theodosius I", "theodosiusi.jpg", 387, "spouse");

addRelation("Theodosius I", "theodosiusi.jpg", "Honorius", "honorius.jpg", 384, "child");
addRelation("Theodosius I", "theodosiusi.jpg", "Arcadius", "arcadius.jpg", 377, "child");
addRelation("Arcadius", "arcadius.jpg","Theodosius II", "theodosiusii.jpg",  401, "child");


// Wessex

addRelation("Cerdic", "cerdic.jpg", "Cynric", "king2.png", 480, "child");
addRelation("Cynric", "king2.png","Ceawlin", "king2.png",  520, "child");
addRelation("Ceawlin", "king2.png", "Cuthwine", "unknown.jpg", 565, "child");
addRelation("Cuthwine", "unknown.jpg", "Cedda", "unknown.jpg", 590, "child");
addRelation("Cuthwine", "unknown.jpg", "Cuthwulf", "unknown.jpg", 592, "child");

addRelation("Cedda", "unknown.jpg", "Cenberht", "unknown.jpg", 620, "child");
addRelation("Cenberht", "unknown.jpg","Caedwalla", "caedwalla.jpg", 659, "child");

addRelation("Cuthwulf", "unknown.jpg","Ceolwald", "unknown.jpg",  620, "child");
addRelation("Ceolwald", "unknown.jpg", "Cenred", "unknown.jpg", 645, "child");
addRelation("Cenred", "unknown.jpg", "Ine", "ine.jpg", 670, "child");

addRelation("Cynric", "king2.png","Cutha", "unknown.jpg",  520, "child");
addRelation("Cutha", "unknown.jpg", "Ceol", "king2.png", 560, "child");
addRelation("Cutha", "unknown.jpg", "Ceolwulf", "king2.png", 565, "child");
addRelation("Ceol", "king2.png", "Cynegils", "cynegils.jpg", 590, "child");
addRelation("Cynegils", "cynegils.jpg", "Cwichelm", "king2.png", 610, "child");
addRelation("Cynegils", "cynegils.jpg", "Centwine", "king2.png", 625, "child");
addRelation("Cynegils", "cynegils.jpg", "Cenwalh", "king2.png", 620, "child");
addRelation("Cenwalh", "king2.png", "Seaxburh", "angloqueen.png", 650, "spouse");

addRelation("Cynric", "king2.png","Ceolwulf ", "unknown.jpg",  521, "child");
addRelation("Ceolwulf ", "unknown.jpg","Cuthgils", "unknown.jpg",  550, "child");
addRelation("Cuthgils", "unknown.jpg", "Cenferth", "unknown.jpg", 580, "child");
addRelation("Cenferth", "unknown.jpg","Cenfus", "king2.png",  605, "child");
addRelation("Cenfus", "king2.png", "Aescwine", "king2.png", 630, "child");

addRelation("Cuthwine", "unknown.jpg", "Cuthwulf", "unknown.jpg", 592, "child");
addRelation("Cuthwulf", "unknown.jpg", "Ceolwald", "unknown.jpg",615, "child");
addRelation("Ceolwald", "unknown.jpg","Cenred", "unknown.jpg", 640, "child");
addRelation("Cenred", "unknown.jpg", "Ingild", "unknown.jpg",665, "child");
addRelation("Ingild", "unknown.jpg","Eoppa", "unknown.jpg", 690, "child");
addRelation("Eoppa", "unknown.jpg","Eafa", "unknown.jpg", 715, "child");
addRelation("Eafa", "unknown.jpg","Ealhmund", "king2.png", 745, "child");
addRelation("Ealhmund", "king2.png", "Ecgberht", "ecgberht.jpg",770, "child");
addRelation("Ecgberht", "ecgberht.jpg","Aethelwulf", "aethelwulf.jpg", 795, "child");
addRelation("Aethelwulf", "aethelwulf.jpg","Aethelbald", "aethelbald2.jpg", 831, "child");
addRelation("Aethelwulf", "aethelwulf.jpg","Aethelberht", "aethelberht.jpg", 835, "child");
addRelation("Aethelwulf", "aethelwulf.jpg","Aethelred I", "aethelredi4.jpg", 847, "child");
addRelation("Aethelwulf", "aethelwulf.jpg","Alfred", "alfredthegreat.jpg", 848, "child");

// England

addRelation("Alfred", "alfredthegreat.jpg", "Edward the Elder", "edwardtheelder.jpg",874, "child");
addRelation("Edward the Elder", "edwardtheelder.jpg","Aethelstan", "aethelstan.jpg", 893, "child");
addRelation("Edward the Elder", "edwardtheelder.jpg","Edmund I", "edmundi.jpg", 921, "child");
addRelation("Edward the Elder", "edwardtheelder.jpg","Eadred", "eadred.jpg", 923, "child");
addRelation("Edmund I", "edmundi.jpg","Eadwig", "eadwig.jpg", 940, "child");
addRelation("Edmund I", "edmundi.jpg","Edgar I", "edgarthepeaceful.jpg", 943, "child");
addRelation("Edgar I", "edgarthepeaceful.jpg","Edward the Martyr", "edwardthemartyr.jpg", 962, "child");
addRelation("Edgar I", "edgarthepeaceful.jpg","Aethelred", "aethelredtheunready.jpg", 966, "child");
addRelation("Aethelred", "aethelredtheunready.jpg","Edward the Confessor", "edwardtheconfessor.jpg", 1003, "child");
addRelation("Aethelred", "aethelredtheunready.jpg","Edmund II", "edmundironside.jpg", 990, "child");
addRelation("Edmund II", "edmundironside.jpg", "Edward the Exile", "unknown.jpg", 1016, "child");
addRelation("Edward the Exile", "unknown.jpg", "Edgar Aetheling", "edgaraetheling.jpg", 1051, "child");
addRelation("Edward the Exile", "unknown.jpg", "St. Margaret", "unknown.jpg", 1045, "child");
addRelation("St. Margaret", "unknown.jpg", "Malcolm III", "malcolmiii.png", 1070, "spouse");
addRelation("Malcolm III", "malcolmiii.png","Matilda ", "matilda3.jpg", 1080, "child");

addRelation("Richard I", "richardinormandy.png","Richard II", "richardiinormandy.png", 963, "child");
addRelation("Richard I", "richardinormandy.png","Emma", "emmaofnormandy.jpg", 985, "child");
addRelation("Richard II", "richardiinormandy.png", "Robert I", "robertinormandy.png",1000, "child");

addRelation("Sweyn Forkbeard", "sweynforkbeard.jpg", "Cnut", "cnutthegreat.jpg", 985, "child");
addRelation("Aethelred", "aethelredtheunready.jpg", "Emma", "emmaofnormandy.jpg", 1002, "spouse");
addRelation("Emma", "emmaofnormandy.jpg", "Cnut", "cnutthegreat.jpg", 1017, "spouse");
addRelation("Cnut", "cnutthegreat.jpg","Harthacnut", "harthacnut.jpg", 1018, "child");
addRelation("Cnut", "cnutthegreat.jpg","Harold I", "haroldharefoot.jpg", 1018, "child");

// Normandy
addRelation("Robert I", "robertinormandy.png","William I","williami.jpg", 1028, "child");
addRelation("William I","williami.jpg", "Henry I", "henryi.jpg",1068, "child");
addRelation("Matilda ", "matilda3.jpg", "Henry I", "henryi.jpg",1100, "spouse");
addRelation("William I","williami.jpg", "Robert Curthose", "robertcurthose.png",1054, "child");
addRelation("William I","williami.jpg", "William II", "williamii.jpg",1056, "child");
addRelation("William I","williami.jpg", "Adela", "unknown.jpg",1067, "child");
addRelation("Adela", "unknown.jpg","Stephen Henry","unknown.jpg", 1080, "spouse");
addRelation("Adela", "unknown.jpg","Stephen","stephen.jpg", 1092, "child");
addRelation("Robert Curthose", "robertcurthose.png","William Clito","williamclito.jpg", 1102, "child");

addRelation("Henry I", "henryi.jpg","William Adelin","williamadelin.jpg", 1103, "child");
addRelation("Henry I", "henryi.jpg","Matilda","matilda2.png", 1102, "child");
addRelation("Geoffrey V", "geoffreyv.jpg","Matilda","matilda2.png", 1128, "spouse");
addRelation("Henry V ", "henryvhre.jpg","Matilda","matilda2.png", 1110, "spouse");

// Plantagenet
addRelation("Matilda","matilda2.png","Henry II", "henryii.jpg", 1133, "child");
addRelation("Henry II", "henryii.jpg","Henry","henrytheyoungking.jpg", 1155, "child");
addRelation("Henry II", "henryii.jpg","John","john.png", 1166, "child");
addRelation("Henry II", "henryii.jpg","Richard I","richardi.png", 1157, "child");
addRelation("Henry II", "henryii.jpg","Geoffrey II","geoffreyiiofbrittany.jpg", 1158, "child");
addRelation("John","john.png", "Henry III", "henryiii.png",1207, "child");
addRelation("John","john.png", "Richard", "richardcornwall.jpg",1209, "child");
addRelation("Geoffrey II","geoffreyiiofbrittany.jpg", "Arthur I", "arthur.jpg",1187, "child");
//addRelation("John","john.png", "Joan", "unknown.jpg",1210, "child");
//addRelation("John","john.png", "Isabella", "unknown.jpg",1214, "child");
//addRelation("Joan", "unknown.jpg","Alexander II","alexanderii.jpg", 1221, "spouse");
//addRelation("Isabella", "unknown.jpg","Frederick II","frederickii.jpg", 1235, "spouse");
//addRelation("Alexander II","alexanderii.jpg","Alexander III", "alexanderiiiscotland.png", 1241, "child");

addRelation("Henry III", "henryiii.png","Edward I","edwardi.jpg", 1239, "child");
addRelation("Henry III", "henryiii.png","Edmund Crouchback","edmundcrouchback.jpg", 1245, "child");

//addRelation("Phillip III","philipiii.jpg", "Margaret", "unknown.jpg",  1279, "child");
//addRelation("Edward I","edwardi.jpg", "Margaret", "unknown.jpg",  1299, "spouse");
addRelation("Edward I","edwardi.jpg", "Edward II", "edwardii.jpg",  1284, "child");
addRelation("Edward II","edwardii.jpg", "Edward III", "edwardiii.png",  1312, "child");
addRelation("Edward III","edwardii.jpg", "Edward of Woodstock", "edwardofwoodstock.png",  1330, "child");
addRelation("Edward of Woodstock", "edwardofwoodstock.png",  "Richard II", "richardii.jpg",1367, "child");
addRelation("Edward III","edwardii.jpg", "John of Gaunt", "johnofgaunt.jpg",  1340, "child");
addRelation("Edward III","edwardii.jpg", "Edmund of Langley", "edmundoflangley.png",  1341, "child");
addRelation("Edmund of Langley", "edmundoflangley.png", "Richard of Conisburgh","unknown.jpg", 1375, "child");
addRelation("Anne Mortimer", "unknown.jpg", "Richard of Conisburgh","unknown.jpg", 1408, "spouse");
//addRelation("Edward III","edwardii.jpg", "Lionel of Antwerp", "lionelofantwerp.jpg",  1338, "child");
//addRelation("Lionel of Antwerp", "lionelofantwerp.jpg","Philippa of Clarence","unknown.jpg", 1355, "child");
//addRelation("Philippa of Clarence","unknown.jpg", "Roger Mortimer", "unknown.jpg",1374, "child");
//addRelation("Roger Mortimer", "unknown.jpg", "Anne Mortimer", "unknown.jpg",1390, "child");

// York and Lancaster
addRelation("John of Gaunt", "johnofgaunt.jpg","Henry IV","henryiv.jpg",   1366, "child");
addRelation("Henry IV","henryiv.jpg","Henry V", "henryv.jpg",   1386, "child");
addRelation("Henry V","henryv.jpg","Henry VI", "henryvi.jpg",   1421, "child");

addRelation("Richard of Conisburgh","unknown.jpg", "Richard of York", "unknown.jpg", 1411, "child");
addRelation("Richard of York", "unknown.jpg", "Richard of Conisburgh","unknown.jpg", 1411, "child");
addRelation("Richard of York", "unknown.jpg", "Richard III","richardiii.jpg", 1452, "child");
addRelation("Richard of York", "unknown.jpg", "Edward IV","edwardiv.jpg", 1442, "child");
addRelation("Edward IV","edwardiv.jpg","Edward V","edwardv.jpg", 1470, "child");
addRelation("Edward IV","edwardiv.jpg","Elizabeth of York","unknown.jpg", 1466, "child");

addRelation("John of Gaunt", "johnofgaunt.jpg","John Beaufort ","unknown.jpg",   1373, "child");
addRelation("John Beaufort ","unknown.jpg","John Beaufort  ","unknown.jpg",   1404, "child");
addRelation("John Beaufort  ","unknown.jpg", "Margaret Beaufort","unknown.jpg",  1443, "child");
addRelation("Margaret Beaufort","unknown.jpg",  "Henry VII","henryvii.jpg",  1457, "child");
addRelation("Margaret Beaufort","unknown.jpg",  "Edmund Tudor","unknown.jpg",  1455, "spouse");

// Tudor

addRelation("Henry VII","henryvii.jpg","Henry VIII","henryviii.jpg",  1491, "child");
addRelation("Henry VIII","henryviii.jpg", "Mary I","maryi.jpg", 1516, "child");
addRelation("Henry VIII","henryviii.jpg", "Elizabeth I","elizabethi.jpg", 1533, "child");
addRelation("Henry VIII","henryviii.jpg", "Edward VI","edwardvi.jpg", 1537, "child");

addRelation("Henry VII","henryvii.jpg","Mary Tudor","unknown.jpg", 1496, "child");
addRelation("Mary Tudor","unknown.jpg", "Frances Grey","unknown.jpg",1517, "child");
addRelation("Frances Grey","unknown.jpg","Jane Grey","ladyjanegrey.jpg", 1536, "child");

addRelation("Henry VII","henryvii.jpg","Margaret Tudor","unknown.jpg",  1489, "child");
//addRelation("Margaret Tudor","unknown.jpg","Margaret Douglas","unknown.jpg",1515, "child");
//addRelation("Margaret Douglas","unknown.jpg","Henry Stuart","unknown.jpg",1545, "child");


addRelation("Margaret Tudor","unknown.jpg","James V","jamesv.jpg",1512, "child");
addRelation("James V","jamesv.jpg","Mary I","maryscots.jpg",1552, "child");
//addRelation("Henry Stuart","unknown.jpg","Mary I","maryscots.jpg",1565, "spouse");

addRelation("Mary I","maryscots.jpg","James I","jamesi.jpg",1566, "child");
addRelation("James I","jamesi.jpg","Charles I", "charlesi.jpg",1600, "child");
addRelation("Charles I", "charlesi.jpg","Charles II","charlesii.jpg",1630, "child");
addRelation("Charles I", "charlesi.jpg","Mary ","unknown.jpg",1631, "child");
addRelation("Charles I", "charlesi.jpg","James II","jamesii.jpg",1633, "child");
addRelation("James II","jamesii.jpg","Mary II", "maryii.jpg",1662, "child");
addRelation("James II","jamesii.jpg","Anne", "anne.jpg",1665, "child");
addRelation("Mary ","unknown.jpg","William III", "williamiii.jpg",1650, "child");

addRelation("James I","jamesi.jpg","Elizabeth Stuart", "unknown.jpg",1596, "child");
addRelation("Elizabeth Stuart", "unknown.jpg","Sophia","unknown.jpg",1630, "child");
addRelation("Sophia","unknown.jpg","George I", "georgei.jpg",1660, "child");
addRelation("George I", "georgei.jpg","George II","georgeii.jpg",1683, "child");
addRelation("George II","georgeii.jpg","Frederick", "unknown.jpg",1707, "child");
addRelation("Frederick", "unknown.jpg","George III","georgeiii.jpg",1738, "child");
addRelation("George III","georgeiii.jpg","George IV","georgeiv.jpg",1762, "child");
addRelation("George III","georgeiii.jpg","William IV","williamiv.jpg",1765, "child");
addRelation("George III","georgeiii.jpg","Edward ","unknown.jpg",1767, "child");
addRelation("Edward ","unknown.jpg","Victoria","victoria.png",1819, "child");
addRelation("Victoria","victoria.png","Edward VII","edwardvii.jpg",1841, "child");
addRelation("Edward VII","edwardvii.jpg","George V","georgev.jpg",1865, "child");
addRelation("George V","georgev.jpg","Edward VIII","edwardviii.jpg",1894, "child");
addRelation("George V","georgev.jpg","George VI","georgevi.png",1895, "child");
addRelation("George VI","georgevi.png","Elizabeth II","elizabethii.jpg",1926, "child");
addRelation("Elizabeth II","elizabethii.jpg","Charles III","charlesiii.jpg",1948, "child");


function DFSRelations(currentYear){
  let order = []
  const { nodes, edges } = buildGraph(currentYear);
  let rpre = {}
  nodes.forEach((n)=>{n.parent = null;n.spouse = null; n.visited = false; n.children = [];rpre[n.id]=n;});
  edges.forEach((e)=>{
    if (e.type == "spouse"){
      rpre[e.target].spouse = rpre[e.source];
      rpre[e.source].spouse = rpre[e.target];
    }
   
    else  if (e.type == "child"){
      rpre[e.target].parent = rpre[e.source];
      rpre[e.source].children.push(rpre[e.target]);
    }
  });

  const relations = rpre;

  function DFSInner(node){
    node.visited = true;
    order.push(node);
    if (node.spouse != null && !node.spouse.visited){
      DFSInner(node.spouse);
    }
    node.children.forEach((c)=>{
      if (!c.visited){
        DFSInner(c);
      }
    });
  }

  let found = false;
  do{
    found = false;
    for (let key in relations) {
      let r = relations[key];
      if (!r.visited && r.parent == null){
          found = true;
          DFSInner(r);
          break;
      }
    }
  } while (found);


  return { nodes: Array.from(order.values()), edges };
}


function calculateRegnalYear(startYear, currentYear) {
const regnalYear = currentYear - startYear + 1;

// Function to determine the correct ordinal suffix
const suffix = (n) => {
  if (n % 100 >= 11 && n % 100 <= 13) return 'th'; // Special case for 11th, 12th, 13th
  switch (n % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};

return `(${regnalYear}${suffix(regnalYear)} Year)`;
}

function getTitlePriority(title, currentYear) {
// Check if there are time-based overrides for the title
const relevanceOverride = timeBasedRelevance.find((item) => item.title === title);
if (relevanceOverride) {
  for (const change of relevanceOverride.relevanceChanges) {
    if (change.until && currentYear <= change.until) {
      return change.priority;
    }
    if (change.after && currentYear > change.after) {
      return change.priority;
    }
  }
}
// Return default priority if no time-based override applies
return titlePriorities[title] || 100; // Default priority for unspecified titles
}

// Function to get the priority of a figure
function getFigurePriority(figure, currentYear) {
// Use the priority override if it exists
if (figure.priorityOverride !== null) {
  return figure.priorityOverride;
}

// Otherwise, use title-based or time-based priority
return getTitlePriority(figure.title, currentYear);
}


// Find the most recent photo before the given year
function findMostRecentPhoto(year) {
const sortedPhotos = photoCaptions.sort((a, b) => b.year - a.year);
for (let photo of sortedPhotos) {
  if (photo.year <= year) {
    return photo;
  }
}
return null; // No suitable photo found
}

// Get relations and figures as of the current year
function getRelationsByYear(currentYear) {
return relations.filter((relation) => relation.year <= currentYear && relation.year >= currentYear-100);
}

// Build a tree structure as of the current year
function buildTree(currentYear) {
const validRelations = getRelationsByYear(currentYear);
const tree = new Map();

validRelations.forEach(({ figure1, figure2, type }) => {
  if (!tree.has(figure1.name)) tree.set(figure1.name, { figure: figure1, children: [] });
  if (!tree.has(figure2.name)) tree.set(figure2.name, { figure: figure2, children: [] });

  if (type === "child") {
    tree.get(figure1.name).children.push(tree.get(figure2.name));
  }
});

// Find the root figures (those with no parent)
const childrenSet = new Set(validRelations.map((rel) => rel.figure2.name));
const roots = Array.from(tree.values()).filter(({ figure }) => !childrenSet.has(figure.name));

return roots;
}





function renderFamilyTree(currentYear) {
  const { nodes, edges } = DFSRelations(currentYear);//buildGraph(currentYear);

  // Clear the previous graph
  const graphContainer = d3.select("#family-tree");

// Get the actual dimensions of the container
const containerNode = graphContainer.node(); // Get the DOM node
const { width, height } = containerNode.getBoundingClientRect(); // Extract width and height

  graphContainer.selectAll("*").remove();


  // Set up dimensions
 // const width = 400;
  //const height = 500;


  // Create an SVG container
  const svg = graphContainer
    .append("svg")
    .attr("width", width)
    .attr("height", height);

 
  // Draw edges (links)
  const link = svg
    .selectAll(".link")
    .data(edges)
    .enter()
    .append("line")
    .attr("class", "link")
    .attr("stroke", (d) => (d.type === "spouse" ? "#00bfff" : "#ccc")) // Blue for spouses
    .attr("stroke-width", 2);

// Draw nodes (group container)
const node = svg
  .selectAll(".node")
  .data(nodes)
  .enter()
  .append("g")
  .attr("class", "node");

// Add circles for clarity (if needed for clipping or styling)
/*node
  .append("circle")
  .attr("r", 20)
  .attr("fill", "transparent") // Make transparent, since images cover the circle
  .attr("stroke", "transparent") // Optional: keep the stroke transparent
  .attr("stroke-width", 0);*/

// Add images to nodes
node
  .append("foreignObject") // Allows CSS-based styling on images
  .attr("x", -25) // Align to the center
  .attr("y", -25) // Align to the center
  .attr("width", 50) // Match the circle width
  .attr("height", 50) // Match the circle height
  .append("xhtml:div") // Add an HTML container inside the SVG
  .style("width", "45px")
  .style("height", "45px")
  //.style("border-radius", "50%") // Makes the image circular
  //.style("border", "3px solid gold") // Gold border for the circular frame
  .style("overflow", "hidden") // Ensures image doesn't spill outside the circle
  .style("display", "block")
  .style("margin", "0 auto")
  .append("img") // Add the actual image
  .attr("src", (d) => `images/${d.image}`)
  //.style("width", "50px") // Image width
  //.style("height", "50px") // Image height
  //.style("object-fit", "cover") // Ensure the image fills the circle without distortion
  //.style("object-position", "top"); // Align the image content to the top


  function shrinkToFit(selection) {
    selection.each(function () {
      const textElement = d3.select(this);
      let textWidth = this.getBBox().width; // Get the current text width
      const maxWidth = 50; // Maximum allowed width
  
      // Reduce font size until the text fits within the maximum width
      while (textWidth > maxWidth) {
        const currentFontSize = parseFloat(textElement.style("font-size"));
        if (currentFontSize <= 8) break; // Stop shrinking if the font size is too small
        textElement.style("font-size", `${currentFontSize - 1}px`);
        textWidth = this.getBBox().width; // Update text width
      }
    });
  }

// Add names to nodes
node
  .append("text")
  .attr("dy", 35) // Position text below the node
  .attr("text-anchor", "middle")
 // .attr("border", "1px solid black")
  .attr("stroke", "#000") // Black border around the text
  .attr("stroke-width", 5) // Thickness of the border
  .attr("paint-order", "stroke fill") // Ensures the stroke is rendered under the fill
  .attr("fill", "#fff") // White text
  .text((d) => d.name)
  .call(shrinkToFit); // Dynamically shrink text to fit

// Ensure text renders on top of links
node.raise();


function runSim(fixedY){
// Fix vertical position (y-coordinate) based on generation
let count = 0;
nodes.forEach((node) => {
  count++;
  if (fixedY){
  node.fy = 50 + node.generation*70; // Constant vertical position
  }
  else{
    node.fy = null;
  }
  node.fx = null;//50 + node.generation*70; // Constant vertical position
  node.x = count * 10;
});
 // Create a force simulation
   const simulation = d3
   .forceSimulation(nodes)
   // Link force: Minimizes the distance between connected nodes
   .force(
     "link",
     d3
       .forceLink(edges)
       .id((d) => d.id)
       .distance(20) // Shorter for spouses, longer for parent-child
       .strength(1) // Very strong links
   )
   // Charge force: Repels nodes to prevent overlap
   .force("charge", d3.forceManyBody().strength(-200)) // Negative for repulsion
   // Collision force: Prevents nodes from overlapping
   .force("collision", d3.forceCollide(30)) // Radius of 30px
   // Vertical force: Align parent-child nodes vertically
   .force( "vertical", d3.forceY((d) => height - (d.generation + 1) * 100).strength(1))
   // Horizontal force: Keep nodes close but allow free horizontal positioning
   .force("horizontal", d3.forceX(width / 2).strength(0.05)) // Gentle centering force
   // Custom force to align nodes towards the average x position of their children
   //.force("childAverage", createChildAveragingForce(edges))
   .force("bounds", boundingForce(width))

  //.force("spouseAlignment", spouseAlignmentForce(edges))
  
  //.force("siblingAlignment", siblingAlignmentForce(edges));
   //.force("untangle", untanglingForce(edges));
 
 /**
  * Creates a custom force to nudge nodes towards the average x position of their children.
  * @param {Array} edges - The array of edges connecting the nodes.
  * @returns {Function} - The custom force function.
  */
 function createChildAveragingForce(edges) {
   return (alpha) => {
     nodes.forEach((node) => {
       // Find children of this node
       const children = edges
         .filter((edge) => edge.type === "child" && edge.source.id === node.id)
         .map((edge) => edge.target);

       if (children.length > 0) {
         // Calculate the average x position of children
         const avgX = children.reduce((sum, child) => sum + child.x, 0) / children.length;
 
         // Nudge the node toward the average x position
         node.vx += (avgX - node.x) * alpha * 2; // Adjust alpha multiplier for strength
       }
     });
   };
 }

 function boundingForce(width) {
  const margin = 20; // Add a small margin to prevent clipping
  return (alpha) => {
    nodes.forEach((node) => {
      // Push nodes back if they go out of bounds
      if (node.x < margin) {
        node.vx += (margin - node.x) * alpha * 2; // Strong push back on the left
      } else if (node.x > width - margin) {
        node.vx += (width - margin - node.x) * alpha * 2; // Strong push back on the right
      }
    });
  };
}

function spouseAlignmentForce(edges) {
  return (alpha) => {
    // Loop through all spouse relationships
    edges
      .filter((edge) => edge.type === "spouse")
      .forEach(({ source, target }) => {
        const dx = target.x - source.x;
        const distance = Math.abs(dx);

        // Desired distance between spouses
        const desiredDistance = 10; // Adjust as needed

        if (distance !== desiredDistance) {
          // Adjust velocities to bring spouses closer together
          const adjustment = (distance - desiredDistance) * alpha * 3; // Adjust alpha multiplier for strength

          if (dx > 0) {
            source.vx += adjustment; // Push source to the right
            target.vx -= adjustment; // Push target to the left
          } else {
            source.vx -= adjustment; // Push source to the left
            target.vx += adjustment; // Push target to the right
          }
        }
      });
  };
}

/**
 * Creates a custom force to bring siblings closer together and weakly repel non-siblings.
 * @param {Array} edges - The array of edges in the graph.
 * @returns {Function} - The custom force function.
 */
function siblingAlignmentForce(edges) {
  return (alpha) => {
    const siblingGroups = new Map();

    // Group nodes by shared parents
    edges
      .filter((edge) => edge.type === "child")
      .forEach(({ source, target }) => {
        if (!siblingGroups.has(source.id)) {
          siblingGroups.set(source.id, []);
        }
        siblingGroups.get(source.id).push(target);
      });

    // Apply sibling forces
    siblingGroups.forEach((siblings) => {
      for (let i = 0; i < siblings.length; i++) {
        for (let j = i + 1; j < siblings.length; j++) {
          const node1 = siblings[i];
          const node2 = siblings[j];

          const dx = node2.x - node1.x;
          const distance = Math.abs(dx);
          const desiredDistance = 30; // Desired distance between siblings

          // Pull siblings closer together if they're too far apart
          if (distance > desiredDistance) {
            const adjustment = (distance - desiredDistance) * alpha * 3; // Adjust alpha multiplier for strength
            if (dx > 0) {
              node1.vx += adjustment; // Push node1 to the right
              node2.vx -= adjustment; // Push node2 to the left
            } else {
              node1.vx -= adjustment; // Push node1 to the left
              node2.vx += adjustment; // Push node2 to the right
            }
          }
        }
      }
    });

    // // Weakly repel non-siblings
    // nodes.forEach((node1) => {
    //   nodes.forEach((node2) => {
    //     if (node1 !== node2) {
    //       const dx = node2.x - node1.x;
    //       const dy = node2.y - node1.y;
    //       const distance = Math.sqrt(dx * dx + dy * dy) || 1;

    //       if (distance < 100) {
    //         const force = (alpha * 10) / distance; // Weak repulsion
    //         node1.vx -= (dx / distance) * force;
    //         node1.vy -= (dy / distance) * force;
    //         node2.vx += (dx / distance) * force;
    //         node2.vy += (dy / distance) * force;
    //       }
    //     }
    //   });
    // });
  };
}


// Pre-simulate layout for a fixed number of ticks
const PRE_SIMULATION_TICKS = 300; // Adjust this number for more or fewer ticks
for (let i = 0; i < PRE_SIMULATION_TICKS; i++) {
  simulation.tick();
}
    

// Manually position nodes and links after pre-simulation
link
.attr("x1", (d) => d.source.x)
.attr("y1", (d) => d.source.y)
.attr("x2", (d) => d.target.x)
.attr("y2", (d) => d.target.y);
node.attr("transform", (d) => `translate(${d.x},${d.y})`);

  // Stop the simulation
  simulation.stop();
}

runSim(true);
runSim(false);
runSim(true);
}



function buildGraph(currentYear) {
  const validRelations = getRelationsByYear(currentYear);
  const nodes = new Map();
  const edges = [];

  // Create nodes
  validRelations.forEach(({ figure1, figure2, type }) => {
    if (!nodes.has(figure1.name)) {
      nodes.set(figure1.name, {
        id: figure1.name,
        name: figure1.name,
        image: figure1.image,
        generation: null, // Initialize generation as null
      });
    }
    if (!nodes.has(figure2.name)) {
      nodes.set(figure2.name, {
        id: figure2.name,
        name: figure2.name,
        image: figure2.image,
        generation: null, // Initialize generation as null
      });
    }

    // Add edges
    if (type === "child") {
      edges.push({ source: figure1.name, target: figure2.name, type: "child" });
    } else if (type === "spouse") {
      edges.push({ source: figure1.name, target: figure2.name, type: "spouse" });
    }
  });

  // Helper function to calculate generations recursively
  function calculateGeneration(node, parentGeneration) {
    // If the generation is already set, skip to avoid recalculating
    if (node.generation !== null) {
      return;
    }

    // Set the generation based on the parent
    node.generation = parentGeneration + 1;

    // Propagate to children
    edges
      .filter((edge) => edge.type === "child" && edge.source === node.id)
      .forEach((edge) => {
        const childNode = nodes.get(edge.target);
        calculateGeneration(childNode, node.generation);
      });

    // Align spouses to the same generation
    edges
      .filter((edge) => edge.type === "spouse" && (edge.source === node.id || edge.target === node.id))
      .forEach((edge) => {
        const spouseId = edge.source === node.id ? edge.target : edge.source;
        const spouseNode = nodes.get(spouseId);

        // Ensure the spouse aligns with this node's generation
        if (spouseNode.generation == null)
          spouseNode.generation = node.generation;

        // Recursively propagate to any children from the spouse
        edges
          .filter((childEdge) => childEdge.type === "child" && childEdge.source === spouseId)
          .forEach((childEdge) => {
            const childNode = nodes.get(childEdge.target);
            calculateGeneration(childNode, spouseNode.generation);
          });
      });
  }

  // Start generation calculation from top-level nodes
  gencounts = []
  nodes.forEach((node) => {
    if (node.generation === null) {
      calculateGeneration(node, -1); // Top-level nodes start at generation 0
      if (gencounts[node.generation] == null){
        gencounts[node.generation] = 0
      }
      gencounts[node.generation] = gencounts[node.generation]+1;
      //node.fx = gencounts[node.generation] * 50;
    }
  });

  return { nodes: Array.from(nodes.values()), edges };
}




// Function to update the family tree display
function updateFamilyTree(currentYear) {
  renderFamilyTree(currentYear);
  return;
const treeContainer = document.getElementById("family-tree");
treeContainer.innerHTML = ""; // Clear previous tree

const roots = buildTree(currentYear);

// Helper function to render a single node
const renderNode = (node) => {
  const memberDiv = document.createElement("div");
  memberDiv.classList.add("tree-member");

  const img = document.createElement("img");
  img.src = `images/${node.figure.image}`;
  img.alt = node.figure.name;

  const nameDiv = document.createElement("div");
  nameDiv.textContent = node.figure.name;

  memberDiv.appendChild(img);
  memberDiv.appendChild(nameDiv);

  return memberDiv;
};

// Helper function to render a generation
const renderGeneration = (generationNodes) => {
  const genDiv = document.createElement("div");
  genDiv.classList.add("tree-generation");
  generationNodes.forEach((node) => {
    const nodeDiv = renderNode(node);
    genDiv.appendChild(nodeDiv);
  });
  return genDiv;
};

// Recursively render the tree
const renderTree = (nodes, container) => {
  const generationContainer = renderGeneration(nodes);
  container.appendChild(generationContainer);

  // Recursively render children
  nodes.forEach((node) => {
    if (node.children.length > 0) {
      renderTree(node.children, container);
    }
  });
};

// Render the tree starting from the roots
roots.forEach((root) => {
  renderTree([root], treeContainer);
});
}

// Update tree and map when the current year changes
function updateView(currentYear) {
updateFamilyTree(currentYear);
}


// Function to update the photo box based on the current year
function updatePhotoBox(year) {
  return
  /*const recentPhoto = findMostRecentPhoto(year);
  if (recentPhoto) {
    const photoPath = `photos/${recentPhoto.filename}`;
    photoElement.src = photoPath;
    photoCaptionElement.textContent = recentPhoto.caption;
    photoElement.alt = recentPhoto.caption; // Add alt text for accessibility
  } else {
    // No photo found, clear the photo box
    photoElement.src = '';
    photoCaptionElement.textContent = '';
  }*/
}


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
        // Sort figures by priority based on the current year
          const sortedFigures = figureData[year].sort((a, b) => {
            const priorityA = getFigurePriority(a, year);
            const priorityB = getFigurePriority(b, year);
            return priorityA - priorityB;
          });

          // Generate the sorted portraits
          sortedFigures.forEach((figure) => {
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
    
 // Check if the figure's title requires a regnal year
 if (titlesWithRegnalYears.includes(figure.title)) {
  const regnalYearElem = document.createElement('div');
  regnalYearElem.classList.add('figure-regnal-year');
  regnalYearElem.textContent = calculateRegnalYear(figure.startDate, year);
  figureContainer.appendChild(regnalYearElem);
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
      updateView(currentYear);
    }
  });

  // Initial check to display the correct year and images when the page loads
  const initialYear = 2024;
  if (initialYear) {
    updateImages(initialYear);
    updateYearLabel(initialYear);
  }



// Set up Intersection Observer to observe each year element
const observerOptions = {
  root: rightPanel, // Observe within the scrollable right panel
  rootMargin: '-20% 0px -80% 0px', // Trigger when the element is 20% down from the top of the viewport
  threshold: 0 // Trigger as soon as any part of the element meets the 20% threshold
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const year = entry.target.getAttribute('data-year');
      updateYearLabel(year);
      updateImages(year);
      updatePhotoBox(year);
    }
  });
}, observerOptions);

// Observe each year element
yearElements.forEach((yearElement) => {
  observer.observe(yearElement);
});
});
