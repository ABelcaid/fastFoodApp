// --------------get commande detile from local storage ------------------------------


let xcart =  JSON.parse(localStorage.getItem("cart"))
let total = localStorage.getItem("total")
let item = document.getElementById('items');
let totalContinner = document.getElementById('total');
 let dateContinner = document.getElementById('date');


let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date+' '+time;

totalContinner.innerText = total;
dateContinner.innerText = dateTime;




for (let i = 0; i < xcart.length; i++) {

    item.innerHTML += `<tr class="row-data">
    <td>${xcart[i].nom} </td>
    <td id="unit">${xcart[i].amount}</td>
    <td>${xcart[i].prix} </td>
    </tr>`

}


