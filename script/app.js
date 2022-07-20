class App{
    AddImovel(){
        event.preventDefault()
        let tipo = document.querySelector("select[name='tipo']").value 
        let area = document.querySelector("input[name='area']").value
        let status = document.querySelector("input[name ='status']").checked
        let imovel = new Imovel(tipo, area, status)   
        this.listaDeImoveis(imovel)
        
        
    }

    listaDeImoveis(imovel){
        let elemento = document.createElement("li")
        let texto = "Tipo do imóvel: " + imovel.tipo + ",  área: " + imovel.area
        if(imovel.status){
           let opcaoStatus = this.criarOpcaoStatus()
           elemento.appendChild(opcaoStatus)
        }
        elemento.innerHTML += texto
        document.getElementById("list-imoveis").appendChild(elemento)
    }

    criarOpcaoStatus(){
        let elemento = document.createElement("span")
        elemento.innerText = "ALUGADO "
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return elemento
    }
}