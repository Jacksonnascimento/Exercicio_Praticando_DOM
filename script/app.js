class App{
    AddImovel(){
        event.preventDefault()
        let tipo = document.querySelector("select[name='tipo']").value 
        let area = document.querySelector("input[name='area']").value
        let status = document.querySelector("input[name ='status']").checked
        let imovel = new Imovel(tipo, area, status)   
        this.listaDeImoveis(imovel)
        this.limpar()
        
    }

    listaDeImoveis(imovel){
        let elemento = document.createElement("li")
        let texto = "Tipo do imóvel: " + imovel.tipo + ",  área: " + imovel.area
        if(imovel.status){
           let opcaoStatus = this.criarOpcaoStatus()
           elemento.appendChild(opcaoStatus)
        }
        elemento.innerHTML += texto
        elemento.appendChild(this.criarBotao())
        document.getElementById("list-imoveis").appendChild(elemento)
    }

    criarOpcaoStatus(){
        let elemento = document.createElement("span")
        elemento.innerText = "ALUGADO "
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return elemento
    }

    criarBotao(){
        let botao = document.createElement("button")
        botao.type = "button"
        botao.innerText =" Remover"
        botao.setAttribute("onclick", "app.removerPropriedade(this)")
        return botao
    }

    removerPropriedade(propriedade){
        let remover = propriedade.parentNode
        document.getElementById("list-imoveis").removeChild(remover) 
    }

    limpar(){
        document.querySelector("select[name='tipo']").value = ""
        document.querySelector("input[name='area']").value = ""
        document.querySelector("input[name ='status']").checked = false
    }

}
