
let category_menu = document.querySelector('.category-menu');

let sctgContinner = document.getElementById('sctgContinner');

// get category from db 

axios.get('http://localhost:8080/category')
.then(function (response) {
  
    response.data.forEach(element => {
        category_menu.innerHTML += `<li class="category"><a href="sousCategory.html?id=${element._id}">${element.nom}</a></li>`
    
    });
    
}).catch(function (err) {
    console.log(err);
});

// --------------------get all s category --------------------


axios.get('http://localhost:8080/sousCategory')
.then(function (response) {

    for (let i = 0; i < 8; i++) {
        sctgContinner.innerHTML += ` <div  class="card ">
        <h4>${response.data[i].nom}</h4>
        <a href="#"></a>
    </div>` 
        
    }

   


    

    
  
   
    
}).catch(function (err) {
    console.log(err);
});












