import { clientService } from "../services/cliente-service.js";

const createNewLine = (nome, email, id) =>{
    const newLine = document.createElement('tr');
    const content = `
            <td class="td" data-td="">${nome}</td>
                <td>${email}</td>
                <td>
                    <ul class="tabela__botoes-controle">
                        <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                    </ul>
                </td>`
    newLine.innerHTML = content
    newLine.dataset.id = id
    return newLine
}

const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', (event)=>{
    const btnExcluir = event.target.className == 'botao-simples botao-simples--excluir';
    const btnEditar = event.target.className == 'botao-simples botao-simples--editar';

    if (btnExcluir){
        const clientLine = event.target.closest('[data-id]')
        let id = clientLine.dataset.id
        clientService.deleteClient(id)
        window.location.reload()
    } 
})

const render = async ()=>{
    const listaClientes = await clientService.clientsList()
           
    listaClientes.forEach(element => {
    tabela.appendChild(createNewLine(element.nome, element.email, element.id))
    })

}
render()