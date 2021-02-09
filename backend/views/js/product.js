var urlString = window.location.search;
var urlParam = new URLSearchParams(urlString);
const id = urlParam.get('id');
let productContinner = document.getElementById('productContinner');

console.log(id)


axios.get(`http://localhost:8080/product/${id}`)
.then(function (response) {


    response.data.forEach(element => {
        productContinner.innerHTML += `<div class="card ">
        <img src="img/sandwichs.png">
        <p>${element.nom}</p>
        <h4>${element.prix}  DH</h4>
        <a href="#"><i class="fas fa-plus-circle"></i></a>
    </div>`  
    });


   
  
   
    
}).catch(function (err) {
    console.log(err);
});