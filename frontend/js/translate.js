function translator() {
 
    var Lngarray = {
        ar: {
            pageTitle : " الدفع",
            question1: "اختيار النظام",
            choix1 :'كل هنا',
            choix2 :'خذ معك',
            choixPay :'اختيار طريقة الدفع',
            choix3 :'السيولة النقدية',
            choix4 :'بطاقة بنكية',
          
        },
        en: {
            pageTitle : " paymment",
            question1: "Order choice",
            choix1 :'eat there',
            choix2 :'take away',
            choixPay :'Choice of payment method',
            choix3 :'cash',
            choix4 :'credit card ',
    
        },
        fr:{
            pageTitle : " paymment",
            question1: "Choix du mode de la commande",
            choix1 :'manger sur place',
            choix2 :'emporter',
            choixPay :'Choix de la méthode de paiement',
            choix3 :'espèces',
            choix4 :'carte bancaire',
            
         
        }
    }
    var urlString = window.location.search;
    var urlParam = new URLSearchParams(urlString);
    var language = urlParam.get('lang');

  
    if(language === "ar"){
        document.title = Lngarray.ar.pageTitle;
        document.getElementById('question1').innerText = Lngarray.ar.question1;
        document.getElementById('choix1').innerText = Lngarray.ar.choix1;
        document.getElementById('choix2').innerText = Lngarray.ar.choix2;
        document.getElementById('choixPay').innerText = Lngarray.ar.choixPay;
        document.getElementById('choix3').innerText = Lngarray.ar.choix3;
        document.getElementById('choix4').innerText = Lngarray.ar.choix4;
        
    }
   else if(language === "fr"){
        document.title = Lngarray.fr.pageTitle;
        document.getElementById('question1').innerText = Lngarray.fr.question1;
        document.getElementById('choix1').innerText = Lngarray.fr.choix1;
        document.getElementById('choix2').innerText = Lngarray.fr.choix2;
        document.getElementById('choixPay').innerText = Lngarray.fr.choixPay;
        document.getElementById('choix3').innerText = Lngarray.fr.choix3;
        document.getElementById('choix4').innerText = Lngarray.fr.choix4;
    }
 else   if(language === "en"){
        document.title = Lngarray.en.pageTitle;
        document.getElementById('question1').innerText = Lngarray.en.question1;
        document.getElementById('choix1').innerText = Lngarray.en.choix1;
        document.getElementById('choix2').innerText = Lngarray.en.choix2;
        document.getElementById('choixPay').innerText = Lngarray.en.choixPay;
        document.getElementById('choix3').innerText = Lngarray.en.choix3;
        document.getElementById('choix4').innerText = Lngarray.en.choix4;
      
    }
    else{
        window.location.href = '404.html'
    }
}

window.addEventListener('load', translator());