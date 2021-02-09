var urlString = window.location.search;
var urlParam = new URLSearchParams(urlString);
const id = urlParam.get('id');
let sctgItemContinner = document.getElementById('sctgItemContinner');

console.log(id)


axios.get(`http://localhost:8080/sousCategory/${id}`)
.then(function (response) {


    
    response.data.forEach(element => {
        sctgItemContinner.innerHTML += ` <div  class="card ">
        
        <a href="product.html?id=${element._id}"><h4>${element.nom}</h4></a>
    </div>`
        
    
    });

   
    
}).catch(function (err) {
    console.log(err);
});