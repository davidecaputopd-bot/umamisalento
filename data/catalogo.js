/* =========================================================================
   UMAMI — Catalogo dimostrativo (fase 3)
   Fonte: API pubblica WooCommerce Store di umamisalento.it, letta in fase 0
   dalla copia isolata. Nomi, prezzi, descrizioni e allergeni sono quelli
   del sito, NON corretti a mano (le anomalie sono elencate in README/fase 3).
   In integrazione questo file sparisce: i dati arrivano da WooCommerce.
   Formato prodotto: [nome, prezzo, prezzo_pieno_se_in_offerta|0, descrizione, [allergeni]]
   "*" nel nome = surgelato all'origine (legenda del sito).
   ========================================================================= */
window.UMAMI_CATALOGO = [
  { id: "uramaki-special", nome: "Uramaki special", nota: "8 pezzi", luogo: "Leverano", p: [
    ["Spicy Salmon Roll", 10, 0, "Con dentro: avocado, cetriolo, spalmabile Fuori: tartare di salmone condita con mayo piccante, lime, mandorle", [3,4,6,7,8,11]],
    ["Viola Roll", 12, 0, "Con dentro: avocado, cetriolo, spalmabile Fuori: tartare di gambero rosso condita al lime", [2,7,11]],
    ["Flambe’ Roll", 12, 0, "Con dentro: salmone, avocado, spalmabile Fuori: salmone flambato, mayo e lamelle di mandorla", [3,4,7,8,11]],
    ["Arcobaleno Roll", 12, 0, "Con dentro: gambero fritto nel panko, avocado, spalmabile Fuori: fette di salmone, tonno, avocado", [2,4,6,7,11]],
    ["Ebiten Special Roll", 12, 0, "Con dentro: gambero fritto nel panko, avocado, spalmabile Fuori: fettine di salmone crudo, kataifi, teriyaki", [1,2,4,6,7,11]],
    ["Spicy Double Tuna", 14, 0, "Con dentro: tartare di tonno condita con salsa piccante Fuori: avocado, tartare di tonno piccante", [4,6,11]],
    ["Leverano Roll", 13, 0, "Riso al Negroamaro Con dentro: sgombro in tempura. Fuori: melanzana affumicata,", [1,4,11,12]],
    ["Umami Roll", 13, 0, "Riso cotto nella bisque di gambero Con dentro: gambero fritto nel panko, avocado, spalmabile Fuori: tartare di gambero rosso al lime", [1,2,7,8,9,11,12]],
    ["Grilled Roll", 12, 0, "Con dentro: gambero fritto nel panko, avocado, spalmabile Fuori: fette di tonno scottato, maionese al wasabi e lamelle di mandorla", [1,2,4,6,7,8,11]],
    ["Candy Roll", 12, 0, "Con dentro: avocado, cetriolo, spalmabile Fuori: tartare di scampo e lime", [2,7,11]]
  ]},
  { id: "uramaki-classici", nome: "Uramaki classici", nota: "8 pezzi", luogo: "Salento", p: [
    ["Super Salmon", 10, 0, "Con dentro: salmone 70gr", [4]],
    ["Salmon Roll", 8, 0, "Con salmone, avocado, spalmabile", [4,7,11]],
    ["Tuna Roll", 8, 0, "Con tonno, cetriolo, spalmabile", [4,7,11]],
    ["Crab Roll", 7, 0, "Con dentro: crab stick, lattuga, erba cipollina Fuori: spalmabile, teriyaki, crispy", [1,2,4,7,11]],
    ["Ebiten Roll", 8, 0, "Con dentro: gambero fritto nel panko, spalmabili e avocado – Fuori: salsa teryiaki", [1,2,7,11]],
    ["Crispy Salmon", 9, 0, "Con dentro: salmone, avocado, spalmabile Fuori: mayo piccante, teriyaki, cipolla fritta", [1,3,4,6,7,11]],
    ["Crispy Tuna", 9, 0, "Con dentro: tonno, cetriolo, spalmabili Fuori: mayo piccante, teriyaki, cipolla fritta", [1,3,4,6,7,11]]
  ]},
  { id: "vegetariani", nome: "I vegetariani", nota: "8 pezzi", luogo: "Salento", p: [
    ["Salento Roll", 9, 0, "Con dentro: : melanzana arrosto fuori: formaggio spalmabile, pomodoro secco e timo", [1,6,7,11]],
    ["Girl Power", 8, 0, "Riso alla barbabietola Con dentro: : peperone, avocado, lattuga, spalmabile. Fuori: maionese e cipolla croccante", [1,3,6,7,11]],
    ["Green Roll", 8, 0, "Con dentro: : lattuga, peperone e avocado Fuori: salsa guacamole e kataifi", [1,6,11]]
  ]},
  { id: "non-crudi", nome: "I non crudi", nota: "8 pezzi", luogo: "Salento", p: [
    ["Wasabi Roll", 9, 0, "Con dentro: avocado, cetriolo, spalmabile Fuori: tartare di gambero cotto condita con mayo al wasabi, erba cipollina", [2,3,7,11]],
    ["Tempura Roll", 9, 0, "Con dentro: salmone in tempura Fuori: maionese alla barbabietola e cipolla croccante", [1,3,4,6,7,11]],
    ["Premium Roll", 13, 0, "Uramaki fritto nel panko Con dentro: salmone, avocado, spalmabile Fuori: mayo piccante, salsa thai e goma wakame", [1,4,6,7,11]],
    ["Maki Fritto Tonno", 11, 0, "Uramaki fritto nel panko Con dentro: tonno, cetriolo, spalmabile", [1,4,7,11]]
  ]},
  { id: "hosomaki", nome: "Hosomaki", nota: "8 pezzi", luogo: "Salento", p: [
    ["Hosomaki Salmone", 6, 0, "", [4]],
    ["Hosomaki Tonno", 6, 0, "", [4]],
    ["Hosomaki Veg", 5, 0, "Hosomaki con avocado e peperone", []],
    ["Hosomaki Granchio", 4.5, 0, "", [1,2,4]],
    ["Hosomaki Gambero Cotto", 6, 0, "", [1,2]],
    ["Hosomaki Fritto Con Mayo Piccante", 8, 0, "Con salmone o tonno", [1,3,4]],
    ["Hosomaki Special", 10, 0, "Hosomaki al salmone fritto in tempura Fuori tartare di salmone e teriyaki", [1,4,6]]
  ]},
  { id: "sashimi", nome: "Sashimi", nota: "3 pezzi", luogo: "Salento", p: [
    ["Sashimi Salmone", 5.5, 0, "", [4]],
    ["Sashimi Tonno", 5.5, 0, "", [4]]
  ]},
  { id: "nigiri", nome: "Nigiri", nota: "2 pezzi", luogo: "Salento", p: [
    ["Nigiri Salmone", 3, 0, "", [4]],
    ["Nigiri Tonno", 3, 0, "", [4]]
  ]},
  { id: "tartare", nome: "Tartare", nota: "", luogo: "Salento", p: [
    ["Tartare Di Gambero Rosso*", 13, 0, "Tartare di gambero rosso al lime, con avocado– 80 g", [2,8,9]],
    ["Tartare Di Salmone", 10, 0, "Salmone condito con teriyaki e sesamo su base di avocado- 120 g", [4,6,11]],
    ["Tartare Salmone Special", 12.5, 0, "Salmone,con guacamole e kataifi – 120 g", [1,4,6,8]],
    ["Tartare Di Tonno", 10, 0, "Tonno condito con lime e sesamo accompagnato da cetriolo – 120 g", [4,11]],
    ["Tartare Tonno Special", 12.5, 0, "Tonno condito con battuto di capperi e acciughe, crema di peperone, pomodo secco e tarallo croccante – 120 g", [1,4]]
  ]},
  { id: "poke", nome: "Poke", nota: "", luogo: "Porto Selvaggio", p: [
    ["Poke Personalizzato", 8, 0, "Crea il tuo poke combinando gli ingredienti che preferisci, Scegli il cereale base, 1 porzione principale, massimo 5 contorni, 1 parte croccante, infine scegli la salsa.", []],
    ["Porto Selvaggio", 13, 0, "Salmone, avocado,edamame,wakame, cipolla fritta", [1,4,6,11]],
    ["Santa Caterina", 13, 0, "Tonno al lime, cetriolo, edamame, cavolo viola marinato, pomodoro secco,lamelle di mandorla", [4,8,11]],
    ["La Strea", 10, 0, "VEG – Ceci, edamame, carote, melanzana fritta, peperone arrostito, cipolla in agrodolce ,olive nere.", [1,6]],
    ["San Foca", 13, 0, "Gambero fritto nel panko, edamame,zucchina marinata,pomodoro secco, carote, anacardi", [1,2,6,8]],
    ["Porto Badisco", 10, 0, "Pollo fritto nel panko, grana, rucola, salsa caesar, pomodorini, olive nere,", [1,3,7]],
    ["Sant’Andrea", 11, 0, "Filetto di sgombro, melanzana fritta, pomodorini, cipolla in agrodolce, cicoriella selvatica e lamelle di mandorle", [1,2,11]]
  ]},
  { id: "bao", nome: "Bao buns", nota: "", luogo: "Salento", p: [
    ["Veg Bao Buns", 7, 0, "Soffici paninetti cotti al vapore, ripieni di cavolo cappuccio marinato e guacamole 3pz 1,6", []],
    ["Bao Buns Salmon", 12, 0, "Soffici paninetti cotti al vapore, ripieni di salmone, guacamole e cipolla fritta 3pz", [1,4,6,7]],
    ["Bao Buns Pulled Pork", 9, 0, "Soffici paninetti cotti al vapore, ripieni di pulled pork e cavolo viola marinato 3pz", [1,7]]
  ]},
  { id: "gyoza", nome: "Gyoza", nota: "", luogo: "Salento", p: [
    ["Gyoza Melanzane", 5, 0, "Ravioli ripieni di melanzane 3pz", []],
    ["Mix Gyoza", 10, 0, "Ravioli misti (verdure, maiale, pollo e verdure) 6pz", [1,6,9,11]],
    ["Gyoza Di Manzo", 6, 0, "Ravioli ripieni di manzo 3pz", [1,6,9,11]],
    ["Gyoza Di Maiale", 6, 0, "Ravioli ripieni di carne di maiale 3pz", [1,6,9,11]],
    ["Gyoza Pollo* E Verdure", 5, 0, "Ravioli ripieni di pollo* e verdure 3pz", [1,6,9,11]]
  ]},
  { id: "sfizierie", nome: "Sfizierie", nota: "", luogo: "Salento", p: [
    ["Takoyaki *", 7, 0, "6 pz Soffice pastella ripiena di polpo tipica giapponese, con maionese, salsa takoyaki e katsuobushi ( tonno essiccato)", [1,4,6,14]],
    ["Polpette Di Polpo", 7.5, 0, "10 pz", [1,4]],
    ["Polpette Di Salmone", 10, 0, "Con 1 salsa a scelta – 10 pz", [1,4]],
    ["Involtini Primavera Classic", 5.5, 0, "Involtini artigianali a base di cavolo cappuccio – 3 pz", [1,6,9,11]],
    ["Involtini Primavera Umami", 2.5, 0, "Artigianali con salmone o tonno e rucola – 1 pz", [1,4]],
    ["Chele Di Granchio *", 5, 0, "5 pz", [1,2,4,14]],
    ["Gamberoni In Tempura", 6.5, 0, "3 pz", [1,2]],
    ["Goma Wakame *", 4.5, 0, "Alghe condite con aceto, aromi e semi di sesamo", [11]],
    ["Edamame *", 3.5, 0, "Baccelli di soia", []]
  ]},
  { id: "primi", nome: "Primi e gastronomia", nota: "", luogo: "Salento", p: [
    ["Katsu Curry", 12, 0, "Croccante cotoletta fritta di maiale , accompagnata da riso bianco e salsa al curry e latte di cocco.", [1,6,9,10,11]],
    ["Riso Saltato", 12, 0, "Riso saltato con uovo, verdure e salmone", [1,3,4,6]],
    ["Udon Con Verdure E Straccetti Di Manzo", 13, 0, "Spaghetti tipici della cucina giapponese di farina di grano duro, con straccetti di manzo, uovo e verdure miste", [1,3,6,9]],
    ["Spaghetti Di Soia Con Verdure E Gamberi", 10, 0, "", [1,2,9,11]],
    ["Spaghetti Di Soia Con Verdure", 8, 0, "", [1,9,11]]
  ]},
  { id: "dolci", nome: "Dolci", nota: "", luogo: "Leverano", p: [
    ["Bao Dolci Al Vapore *", 5, 0, "Soffici bao dolci ripieni con crema o cioccolato, serviti con latte condensato – 2 pezzi", [1,3,7]],
    ["Mochi Artigianali", 2, 0, "Gusti misti – 1 pezzo Prodotti nel laboratorio di Umami", []],
    ["Mochi Gelato *", 5, 0, "Gusti misti – 2 pezzi", []],
    ["Spring Rolls Con Nutella", 2, 0, "1 pezzo", []],
    ["Tortino Al Cioccolato", 4.5, 0, "1 pezzo", []]
  ]},
  { id: "bevande", nome: "Bevande", nota: "", luogo: "Leverano", p: [
    ["Acqua Naturale", 1, 0, "0,50 L", []],
    ["Acqua Frizzante", 1, 0, "0,50 L", []],
    ["Coca Cola", 2, 0, "0,33 L", []],
    ["Fanta", 2, 0, "0,33 L", []],
    ["Lemon Soda", 2, 0, "0,33 L", []],
    ["Ramune Soda", 3, 4, "Tipica gassosa Giapponese. Gusti disponili: -Fragola -Mirtillo 0,20 L", []],
    ["Mogu Mogu Passion Fruit", 2.5, 3, "Bevanda Thailandese, a base di succo di frutta (passion fruit) e acqua, con pezzetti di gelatina di cocco Vari gusti 0,32 L", []],
    ["Mogu Mogu Mango", 2.5, 3, "Bevanda Thailandese, a base di succo di frutta (mango) e acqua, con pezzetti di gelatina di cocco Vari gusti 0,32 L", []],
    ["Mogu Mogu Mirtillo", 2.5, 0, "Bevanda Thailandese, a base di succo di frutta (mirtillo) e acqua, con pezzetti di gelatina di cocco Vari gusti 0,32 L", []],
    ["Mogu Mogu Fragola", 2.5, 0, "Bevanda Thailandese, a base di succo di frutta (fragola) e acqua, con pezzetti di gelatina di cocco Vari gusti 0,32 L", []]
  ]},
  { id: "birre", nome: "Birre", nota: "", luogo: "Leverano", p: [
    ["Sapporo 33cl", 5, 0, "4.7% 0,33 L", []],
    ["Sapporo 50cl", 5, 0, "4.7% 0,50 L", []],
    ["Kirin Ichiban", 5, 0, "5.0% 0,33 L", []],
    ["San Miguel", 4, 0, "5.4% – Senza glutine 0,33 L", []],
    ["Guinness Draught Stouth", 4, 0, "4.2% 0,33 L", []],
    ["Lucky Brews Franz", 5, 0, "6.3% 0,40 L", []],
    ["Lucky Brews Dunkel", 5, 0, "6.3% 0,40 L", []],
    ["Lucky Brews Eddy", 5, 0, "7.7% 0,33 L", []],
    ["Bjørne Beer Doppio Malto", 5, 0, "8.3% 0,33 L", []],
    ["Heineken", 2.5, 0, "5.0% 0,33 L", []],
    ["Beck’S", 2.5, 0, "5.0% 0,33 L", []]
  ]},
  { id: "vini", nome: "Vini e bollicine", nota: "75 cl", luogo: "Leverano", p: [
    ["Leverano Chardonnay Vecchia Torre", 11, 0, "CHARDONNAY 75cl – 12%", []],
    ["Kreos Negroamaro Igp", 11, 0, "CASTELLO MONACI 75cl – 12.5%", []],
    ["Frassanito Primitivo Igp", 11, 0, "CENTOVIGNALI 75cl – 12.5%", []],
    ["Tramari Primitivo Igp", 15, 0, "SAN MARZANO 75cl – 12.5%", []],
    ["Vermentino Igp", 10, 0, "MASSERIA BORGO DEI TRULLI 75cl – 12.5%", []],
    ["Falanghina Guardiolo Dop", 15, 0, "FALANGHINA DEL SANNIO GUARDIOLO DOP LA GUARDIENSE 75cl – 12.5%", []],
    ["Overdose Aglianico Doc", 12, 0, "I CAPITANI 75cl – 12.5%", []],
    ["Testarossa Montepulciano", 16, 0, "PASETTI TERRE AQUILANE 75cl – 13.5%", []],
    ["D’Arapri’ Rose’", 28, 0, "METODO CLASSICO 75cl – 13.0%", []],
    ["D’Arapri’ Brut", 28, 0, "METODO CLASSICO 75cl – 12.5%", []],
    ["La Marca Docg", 15, 0, "CONEGLIANO VALDOBBIADENE MILLESIMATO EXTRA DRY 75cl – 11.0%", []],
    ["Wallemburg Metodo Classico", 22, 0, "BRUT TRENTO DOC 75cl – 12.5%", []],
    ["Monte Rossa Docg", 25, 0, "FRANCIA CORTA 75cl – 12.5%", []],
    ["Mailly Gran Cru", 50, 0, "CHAMPAGNE BRUT RESERVE 75cl – 12.0%", []]
  ]}
];
