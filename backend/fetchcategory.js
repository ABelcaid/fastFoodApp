let dropdown = document.getElementById('menu');
dropdown.length = 0;


let defaultOption = document.createElement('option');
defaultOption.text = 'Choisissez un menu';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const urlc = 'http://localhost:8080/category';

fetch(urlc)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].nom;
      	  option.value = data[i].nom;
      	  dropdown.add(option);
    	}    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });