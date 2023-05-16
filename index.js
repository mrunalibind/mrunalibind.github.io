let ham=document.getElementById("my-button");
let anc=document.getElementById("anc");
let count=0;
ham.addEventListener("click",()=>{
    count++;
    if(count%2==1){
        anc.style.display="block"
        // count=0;
    }
    else if(count%2==0){
        anc.style.display="none"
    }    
})