
var addCodep = document.getElementById("addp");
    addCodep.addEventListener('click', () => {
    console.log("clicked");
    var code = document.getElementById('code').value;
    var pourcentage = document.getElementById('pourcentage').value;
   

    var obj =     {
        code : code,
        pourcentage :pourcentage
    }
    
    axios.post('http://localhost:8080/Codepromo/add', obj)
    .then(function (response){
       
       
    })
    .catch(function (err) {
        console.log(err);
    });


  
})