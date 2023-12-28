const nav = document.querySelector('.nav-bar'),
searchButton = document.querySelector('#nav-search'),
openMenu = document.querySelector('.openMenu'),
closeMenu = document.querySelector('.closeMenu');

searchButton.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  if(nav.classList.contains("openSearch")){
   return searchButton.classList.replace("ri-search-line","ri-close-fill")
  }
  searchButton.classList.replace("ri-close-fill","ri-search-line")
});
openMenu.addEventListener("click",()=>{
    nav.classList.add("menuTab");
})

closeMenu.addEventListener("click",()=>{
    nav.classList.remove("menuTab");
})