// --------------get commande detile from local storage ------------------------------


let xcart = JSON.parse(localStorage.getItem("cart"))
let total = localStorage.getItem("total")
let item = document.getElementById('items');
let totalContinner = document.getElementById('total');
let dateContinner = document.getElementById('date');

let today = new Date();
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date + ' ' + time;

totalContinner.innerText = total;
dateContinner.innerText = dateTime;


for (let i = 0; i < xcart.length; i++) {

    item.innerHTML += `<tr class="row-data">
    <td>${xcart[i].nom} </td>
    <td id="unit">${xcart[i].amount}</td>
    <td>${xcart[i].prix} </td>
    </tr>`

}



// -------------------------------qr code ------------------------------------



    // -------------get cart info --------------------------

    let cardfdId = localStorage.getItem('cartFdId');

    let nbPoint = 0;

   


   


    axios.get(`http://localhost:8080/pointFidelite/${cardfdId}`)
    .then(function (response) {

        nbPoint = response.data.nbPoint;

           let  inputMsg = document.getElementById('text').value = ` ID fidelite est : ${cardfdId} et points : ${nbPoint} `;

    
    
    
    }).catch(function (err) {
      console.log(err);
    })

  
    setTimeout(() => {
        $(document).ready(function () {

            var qrcode = new QRCode("qrcode");
    
            function makeCode() {
                var elText = document.getElementById("text");
    
                if (!elText.value) {
                    alert("Input a text");
                    elText.focus();
                    return;
                }
    
                qrcode.makeCode(elText.value);
            }
    
            makeCode();
    
            $("#text").
            on("blur", function () {
                makeCode();
            }).
    
            on("load", function (e) {
                if (e.keyCode == 13) {
                    makeCode();
                }
            });
    
    
        });
    
       }, 1000)




  




















