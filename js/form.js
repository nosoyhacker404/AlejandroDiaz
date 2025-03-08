document.querySelector('#submit').addEventListener('click',function(){
    
    let cliente = document.querySelector('#cliente').value;
    let fecha = document.querySelector('#fecha').value;
    let hora = document.querySelector('#hora').value;
    let barbero = document.querySelector('#barbero').value;
    let servicio1 = document.querySelector('#servicio1').value;
    let servicio2 = document.querySelector('#servicio2').value;
    let servicio3 = document.querySelector('#servicio3').value;
    let servicio4 = document.querySelector('#servicio4').value;
    let servicio5 = document.querySelector('#servicio5').value;
    let servicio6 = document.querySelector('#servicio6').value;
    let servicio7 = document.querySelector('#servicio7').value;
    let servicio8 = document.querySelector('#servicio8').value;
    let servicio9 = document.querySelector('#servicio9').value;
    let servicio10 = document.querySelector('#servicio10').value;
    let servicio11 = document.querySelector('#servicio11').value;
    let servicio12 = document.querySelector('#servicio12').value;
    let servicio13 = document.querySelector('#servicio13').value;
    let servicio14 = document.querySelector('#servicio14').value;
    let servicio15 = document.querySelector('#servicio15').value;
    let servicio16 = document.querySelector('#servicio16').value;
    let servicio17 = document.querySelector('#servicio17').value;
    let servicio18 = document.querySelector('#servicio18').value;
    let servicio19 = document.querySelector('#servicio19').value;
    let servicio20 = document.querySelector('#servicio20').value;
    let servicio21 = document.querySelector('#servicio21').value;
    let servicio22 = document.querySelector('#servicio22').value;
    let servicio23 = document.querySelector('#servicio23').value;
    let servicio24 = document.querySelector('#servicio24').value;
    let servicio25 = document.querySelector('#servicio25').value;
    let servicio26 = document.querySelector('#servicio26').value;
    let servicio27 = document.querySelector('#servicio27').value;
    let servicio28 = document.querySelector('#servicio28').value;
    let servicio29 = document.querySelector('#servicio29').value;
    let servicio30 = document.querySelector('#servicio30').value;
    let servicio31 = document.querySelector('#servicio31').value;
    let servicio32 = document.querySelector('#servicio32').value;
    let servicio33 = document.querySelector('#servicio33').value;
    let servicio34 = document.querySelector('#servicio34').value;
    let servicio35 = document.querySelector('#servicio35').value;
    let servicio36 = document.querySelector('#servicio36').value;
    let servicio37 = document.querySelector('#servicio37').value;
    let servicio38 = document.querySelector('#servicio38').value;
    let servicio39 = document.querySelector('#servicio39').value;
    let servicio40 = document.querySelector('#servicio40').value;
    let servicio41 = document.querySelector('#servicio41').value;
    let servicio42 = document.querySelector('#servicio42').value;
    let servicio43 = document.querySelector('#servicio43').value;
    let servicio44 = document.querySelector('#servicio44').value;
    let servicio45 = document.querySelector('#servicio45').value;
    let servicio46 = document.querySelector('#servicio46').value;
    let servicio47 = document.querySelector('#servicio47').value;
    let servicio48 = document.querySelector('#servicio48').value;
    let servicio49 = document.querySelector('#servicio49').value;
    let servicio50 = document.querySelector('#servicio50').value;
    let servicio51 = document.querySelector('#servicio51').value;
    let servicio52 = document.querySelector('#servicio52').value;
    let servicio53 = document.querySelector('#servicio53').value;
    let servicio54 = document.querySelector('#servicio54').value;
    let servicio55 = document.querySelector('#servicio55').value;
    let servicio56 = document.querySelector('#servicio56').value;
    let servicio57 = document.querySelector('#servicio57').value;
    let servicio58 = document.querySelector('#servicio58').value;
    let servicio59 = document.querySelector('#servicio59').value;
    let servicio60 = document.querySelector('#servicio60').value;
    let servicio61 = document.querySelector('#servicio61').value;
    let servicio62 = document.querySelector('#servicio62').value;
    let servicio63 = document.querySelector('#servicio63').value;
    let servicio64 = document.querySelector('#servicio64').value;
    let servicio65 = document.querySelector('#servicio65').value;
    let servicio66 = document.querySelector('#servicio66').value;
    let servicio67 = document.querySelector('#servicio67').value;
    let servicio68 = document.querySelector('#servicio68').value;
    let servicio69 = document.querySelector('#servicio69').value;
    let servicio70 = document.querySelector('#servicio70').value;
    let servicio71 = document.querySelector('#servicio71').value;
    let servicio72 = document.querySelector('#servicio72').value;
    let servicio73 = document.querySelector('#servicio73').value;
    let servicio74 = document.querySelector('#servicio74').value;
    let servicio75 = document.querySelector('#servicio75').value;

    let url = "https://api.whatsapp.com/send?phone=15712641705&text=*_POPEYES_*%0A*Inventario*%0A%0A*Sugerencias*%0A" + cliente + 
    "%0A*Inventory Date*%0A" + fecha + 
    "%0A*Inventory Time*%0A" + hora + 
    "%0A*Manager who performs the inventory*%0A" + barbero + 
    
    "%0A*Coca-Cola*%0A"           + servicio1 + 
    "%0A*Diet Coke*%0A"           + servicio2 + 
    "%0A*Sprite*%0A"              + servicio3 + 
    "%0A*Hawaiian Punch*%0A"      + servicio4 +
    "%0A*Dr. Pepper*%0A"          + servicio5 +
    "%0A*Strawberry Fanta*%0A"    + servicio6 +
    "%0A*Orange Fanta*%0A"        + servicio7 + 
    "%0A*Pure Water*%0A"          + servicio8 + 
    "%0A*Lemonade Juice*%0A"      + servicio9 + 
    "%0A*Tea*%0A"                 + servicio10 + 


    "%0A*Ketchup*%0A"             + servicio11 +
    "%0A*Applesauce*%0A"          + servicio12 +
    "%0A*Mayo*%0A"                + servicio13 +
    "%0A*Oil Butter*%0A"          + servicio14 + 
    "%0A*Shortening*%0A"          + servicio15 + 
    "%0A*BBQ*%0A"                 + servicio16 + 
    "%0A*Hot Sauce*%0A"           + servicio17 + 
    "%0A*Sweet Heat*%0A"          + servicio18 +
    "%0A*Honey Mustard*%0A"       + servicio19 +
    "%0A*Sugar*%0A"               + servicio20 +
    "%0A*Flour Wheat*%0A"         + servicio21 +
    "%0A*Salad Dressing (Coleslaw Dressing)*%0A"+ servicio22 + 
    "%0A*Ranch Buttermilk*%0A"    + servicio23 + 
    "%0A*Blackened Ranch*%0A"     + servicio24 + 
    "%0A*Strawberry Jam*%0A"      + servicio25 +
    "%0A*Grape Jam*%0A"           + servicio26 +
    "%0A*Mardi Gras Sauce*%0A"    + servicio27 +
    "%0A*Shredded Cheese*%0A"     + servicio28 + 
    "%0A*Cajun Seasoning*%0A"     + servicio29 + 
    "%0A*Sandwich B*%0A"          + servicio30 + 
    "%0A*Sporks*%0A"              + servicio31 + 


    "%0A*Chicken Nugget*%0A"      + servicio32 +
    "%0A*Chicken Tender Mild*%0A" + servicio33 +
    "%0A*Chicken Tender Spicy*%0A"+ servicio34 +
    "%0A*Chicken Breast Fillet*%0A"+ servicio35 + 
    "%0A*Chicken Wings*%0A"       + servicio36 + 
    "%0A*Blackened Chicken Breast*%0A"+ servicio37 + 
    "%0A*Breaded Chicken*%0A"     + servicio38 + 

    "%0A*Shrimp Popcorn*%0A"      + servicio39 +

    "%0A*Potato Mash*%0A"          + servicio40 +
    "%0A*Rice*%0A"    + servicio41 +
    "%0A*Fries*%0A"        + servicio42 + 
    "%0A*Mac & Cheese*%0A"           + servicio43 + 
    "%0A*Gravy*%0A"           + servicio44 + 
    "%0A*Red Beans*%0A"              + servicio45 + 
    "%0A*Cabbage*%0A"      + servicio46 +
    "%0A*Biscuits*%0A"          + servicio47 +
    "%0A*Apple Pie*%0A"    + servicio48 +
    "%0A*Mango Puree*%0A"      + servicio49 +
    "%0A*Pickles*%0A"          + servicio50 +
    "%0A*Coleslaw*%0A"    + servicio51 +

    "%0A*9' Box*%0A"        + servicio52 + 
    "%0A*10' Box*%0A"           + servicio53 + 
    "%0A*Snack Box*%0A"           + servicio54 + 
    "%0A*Dinner Box*%0A"              + servicio55 + 
    "%0A*Lid 12-21 Cup*%0A"      + servicio56 +
    "%0A*Large Bags*%0A"          + servicio57 +
    "%0A*Medium Bags*%0A"    + servicio58 +
    "%0A*Napkin%0A"        + servicio59 +
    "%0A*7oz Container*%0A"           + servicio60 + 
    "%0A*Tray Food*%0A"           + servicio61 + 
    "%0A*Wrap / Liner*%0A"              + servicio62 + 
    "%0A*Lid Plastic 7 & 16 oz Side*%0A"      + servicio63 +
    "%0A*16 oz Container*%0A"          + servicio64 +
    "%0A*Straw 9'*%0A"    + servicio65 +
    "%0A*Diaper*%0A"        + servicio66 + 
    "%0A*Towel Purple*%0A"           + servicio67 + 
    "%0A*Towel Blue*%0A"           + servicio68 + 
    "%0A*Clean Restroom*%0A"              + servicio69 + 
    "%0A*Sanitizer Dispenser*%0A"      + servicio70 +
    "%0A*Detergent*%0A"          + servicio71 +

    "%0A*30 oz*%0A"    + servicio72 +
    "%0A*40 oz*%0A"        + servicio73 + 
    "%0A*Glove LG (Large Gloves)*%0A"           + servicio74 + 
    "%0A*Glove MD (Medium Gloves)*%0A"           + servicio75;   
    
    window.open(url);
});


