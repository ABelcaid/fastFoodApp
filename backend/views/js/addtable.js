
var addTable = document.getElementById("addt");
addTable.addEventListener('click', () => {
    console.log("clicked");
    var numTable = document.getElementById('numTable').value;
   

    var obj =     {
        numTable : numTable
    }
    
    axios.post('http://localhost:8080/table/add', obj)
    .then(function (response){
       
       
    })
    .catch(function (err) {
        console.log(err);
    });


  
})