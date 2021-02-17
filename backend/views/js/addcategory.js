
var addCategory = document.getElementById("addc");
    addCategory.addEventListener('click', () => {
        console.log("clicked");
        var nom = document.getElementById('nom').value;
       

        var obj =     {
            nom : nom
        }
        
        axios.post('http://localhost:8080/category/add', obj)
        .then(function (response){
           
           
        })
        .catch(function (err) {
            console.log(err);
        });


      
    })

    
var addCategory = document.getElementById("updatec");
addCategory.addEventListener('click', () => {
    console.log("clicked");
    var nomc = document.getElementById('updatename').value;
    var id = document.getElementById('idc').value;
   

    var obj =     {
        nom : nomc
    }
    
    axios.put("http://localhost:8080/category/"+id, obj)
    .then(function (response){
       
       
    })
    .catch(function (err) {
        console.log(err);
    });


  
})


    