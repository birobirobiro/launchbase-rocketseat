const receitas = document.querySelectorAll(".receitas")

for(let i = 0; i < receitas.length; i++) {
    receitas[i].addEventListener("click", function(){
        window.location.href = `/recipes/${i}`
    })
}
