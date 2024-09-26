
const grandParent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

grandParent.addEventListener("click",function(e){

    console.log("Grandparent clicked");

    console.log(e.target, e.currentTarget);
    
},true);


parent.addEventListener("click",function(e){

    console.log("Parent clicked");

    console.log(e.target, e.currentTarget);
    
},false)


child.addEventListener("click",function(e){

    console.log("Child clicked");

    console.log(e.target, e.currentTarget);
    
},true)
