var actif=0; 

function slide(){
    if(actif==0){
        document.getElementById("menu").classList.add("menu_on")

        document.getElementById("content").classList.add("content_on")

        document.getElementById("content").style.transition= "2s ease"; 

    }

    else(actif=1){
        document.getElementById("menu").classList.add("menu_off")

        document.getElementById("content").classList.add("content_off")

        document.getElementById("content").classList.add("content_")

    }

    actif = !actif;