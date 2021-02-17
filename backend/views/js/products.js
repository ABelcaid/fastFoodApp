
 fetch_product();
 async function fetch_product() {
   
   const response = await fetch('http://localhost:8080/product').then(
     res=>{
       res.json().then(
         data=>{
           console.log(data);
           if(data.length > 0){
             var temp = "";

             data.forEach((u)=>{
               temp +="<tr>";
               temp +="<td> <img width=90px src="+u.img+" ></td>";
               temp +="<td>"+u.nom+"</td>";
               temp +="<td>"+u.prix+"</td>";
               temp +="<td>"+u.pointfidelite+"</td>";
               temp +="<td>"+u.ingrediens+"</td>";
               temp +="<td><button type='button' onclick='updateproduct(\""+u._id+"\")' data-toggle='modal' data-target='#updateproduct' class='btn btn-warning'><i class='fas fa-edit'></i></button><button type='button' onclick='deleteproduct(\""+u._id+"\")'   class='btn btn-danger'><i class='fas fa-trash-alt'></i></button></td></tr>";
             })

             document.getElementById("list").innerHTML = temp;
           }
         }
       )
     }
   )
    

   
   
   } 

var addProduct = document.getElementById("addpro");
addProduct.addEventListener('click', () => {
console.log("clicked");
var nom = document.getElementById('nomp').value;
var prix = document.getElementById('prix').value;
var ingrediens = document.getElementById('ingrediens').value;
var pointfidelite = document.getElementById('pointfidelite').value;
var img = document.getElementById('img').value;
var scategory = document.getElementById('scategory').value;


var obj =     {
    nom : nom,
    prix : prix,
    ingrediens : ingrediens,
    pointfidelite : pointfidelite,
    img : img,
    sousCategory : scategory

}
axios.post('http://localhost:8080/product/add', obj)
.then(function (response){
   
   
})
.catch(function (err) {
    console.log(err);
});



})


function updateproduct(user_id){

   
    fetch('http://localhost:8080/product/'+user_id).then(
  res=>{
    res.json().then(
      data=>{
        document.getElementById("updatenomp").value = data.nom ;
        document.getElementById("updateprix").value = data.prix ;
        document.getElementById("updateingrediens").value = data.ingrediens ;
        document.getElementById("updatepointfidelite").value = data.pointfidelite ;
        document.getElementById("updateimg").value = data.img ;
    
      }
    )
  }
)
 
var addProduct = document.getElementById("updatepro");
addProduct.addEventListener('click', () => {
console.log("clicked");
var upnom = document.getElementById('updatenomp').value;
var upprix = document.getElementById('updateprix').value;
var upingrediens = document.getElementById('updateingrediens').value;
var uppointfidelite = document.getElementById('updatepointfidelite').value;
var upimg = document.getElementById('updateimg').value;
var upscategory = document.getElementById('updatescategory').value;

var obj =     {
nom : upnom,
prix : upprix,
ingrediens : upingrediens,
pointfidelite : uppointfidelite,
img : upimg,
sousCategory : upscategory

}
axios.put('http://localhost:8080/product/'+user_id, obj)
.then(function (response){


})
.catch(function (err) {
console.log(err);
});



})



}

function deleteproduct(user_idd){

axios.delete('http://localhost:8080/product/delete/'+user_idd)
.then(function (response){


})
.catch(function (err) {
console.log(err);
});


location.reload();

}




