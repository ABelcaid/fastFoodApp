const total = localStorage.getItem('total');
const totalPoints = localStorage.getItem('pointsTotals');

// parseInt totalPoints

let totalPointsInt = parseInt(totalPoints)

document.querySelector('.total').innerText = total;
document.querySelector('.totalPoints').innerText = totalPoints;






pay = document.getElementById('pay');

pay.addEventListener('click', () => {


   let cartFidilite =  document.getElementById('cartFidilite').value || 0;



//    generate ramdom cartId


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
 let newCartId = makeid(5);

   





//    check if cart exsite in db 


axios.get(`http://localhost:8080/pointFidelite/${cartFidilite}`)
.then(function (response) {

    if (response.data != null) {

       let newnomberPoint = response.data.nbPoint + totalPointsInt

        // update num de point 


        axios.put(`http://localhost:8080/pointFidelite/update/${cartFidilite}`, {nbPoint :newnomberPoint })
        .then(function (response) {
          console.log('updated');
        })
        .catch(function (err) {
          console.log(err);
        });
        
        
        localStorage.setItem("cartFdId",cartFidilite);
        

    }else{

        // create new cart 
        var obj =     {
            idClient : newCartId,
            nbPoint : totalPointsInt
        }
        
        axios.post('http://localhost:8080/pointFidelite/add', obj)
        .then(function (response){

          console.log('added');
        })
        .catch(function (err) {
            console.log(err);
        });

        localStorage.setItem("cartFdId",newCartId);
      


    }

  
    
})
.catch(function (err) {
    console.log(err);
  });


  setTimeout(() => {
   window.location.href = "invoice.html";
  }, 1000)
    
    
})



