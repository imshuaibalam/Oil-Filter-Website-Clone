// window.addEventListener("scroll", function(){
//     let navbar = document.querySelector(".navbar");

//     if(window.pageYOffset >= 700){
//         navbar.classList.add('nav_fixed')
//     }
//     else{
//         navbar.classList.remove('nav_fixed')
//     }
// })



window.addEventListener("scroll", function(){
    let navbar = document.querySelector(".navbar");

    if(window.pageYOffset >= 600){
        navbar.classList.add('nav_fixed')
        navbar.classList.add("nav_bg")
    }
    else{
        navbar.classList.remove('nav_fixed')
        navbar.classList.remove("nav_bg")
    }
})