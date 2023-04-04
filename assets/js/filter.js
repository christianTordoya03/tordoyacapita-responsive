document.addEventListener("keyup", e=>{
    if(e.target.matches("#buscador")){
        
        if(e.key ==="Escape")e.target.value = ""
        
        document.querySelectorAll(".card").forEach(propiedad =>{
            propiedad.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?propiedad.classList.remove("filtro")
                :propiedad.classList.add("filtro")
        })
    }
})