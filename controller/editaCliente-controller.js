import { clientService } from "../services/cliente-service.js";

(async () => {
    const pegaURL = new URL(window.location);
    const id = pegaURL.searchParams.get('id')

    const inputNome = document.querySelector('[data-nome]');
    const inputEmail = document.querySelector('[data-email]');

    const dados = await clientService.editClient(id)
        
        inputNome.value = dados.nome;
        inputEmail.value = dados.email;
       

    const form = document.querySelector('[data-form]');

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        await clientService.attClient(id, inputNome.value, inputEmail.value)
        window.location.href = '../telas/edicao_concluida.html'


    })
})()

