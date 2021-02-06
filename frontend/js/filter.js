
const menu_wrapper = document.querySelector(".wrapper");
const menu_bar = document.querySelector(".menu-bar");
const setting_drop = document.querySelector(".setting-drop");
const help_drop = document.querySelector(".help-drop");
const setting_item = document.querySelector(".setting-item");
const help_item = document.querySelector(".help-item");
const setting_btn = document.querySelector(".back-setting-btn");
const help_btn = document.querySelector(".back-help-btn");



setting_item.onclick = (() => {
    menu_bar.style.marginLeft = "-252px";
    setTimeout(() => {
        setting_drop.style.display = "block";
    }, 100);
});
help_item.onclick = (() => {
    menu_bar.style.marginLeft = "-252px";
    setTimeout(() => {
        help_drop.style.display = "block";
    }, 100);
});
setting_btn.onclick = (() => {
    menu_bar.style.marginLeft = "0px";
    setting_drop.style.display = "none";
});
help_btn.onclick = (() => {
    help_drop.style.display = "none";
    menu_bar.style.marginLeft = "0px";
});




// get category from db 

// axios.get('http://localhost:8080/category')
// .then(function (response) {
  
//     response.data.forEach(element => {
//         menu_bar.innerHTML += `<li class="setting-item"><a href="#">
//         <div class="icon">
//             <span class="fas fa-cog"></span></div> ${element.nom} <i class="fas fa-angle-right"></i>
//     </a></li>`
    
//     });
    
// }).catch(function (err) {
//     console.log(err);
// });




















