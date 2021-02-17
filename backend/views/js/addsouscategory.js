
var addsCategory = document.getElementById("adds");
addsCategory.addEventListener('click', () => {
    console.log("clicked");
    var nom = document.getElementById('noms').value;
    var category = document.getElementById('category').value;
   

    var obj =     {
        nom : nom,
        category : category
    }
    
    axios.post('http://localhost:8080/sousCategory/add', obj)
    .then(function (response){
       
        document.getElementById("close").click();
            window.location.replace("/");
    })
    .catch(function (err) {
        console.log(err);
    });


  
})