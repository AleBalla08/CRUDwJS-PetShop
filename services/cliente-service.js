const clientsList = ()=>{
    return fetch('http://localhost:3000/profile')
    .then(resposta => {
        if (resposta.ok){
            return resposta.json()
        } else {
            throw new Error('Não foi possível carregar os clientes')
        }
        
    }
    )
    };

const createCliente = (nome, email) => {
    return fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
        
    })
    .then( resposta => {
        if (resposta.ok){
            return resposta.body
        } else {
            alert('Não foi possível criar o cliente')
            throw new Error('erro ao criar o cliente')
        }
    })

}

const deleteClient = (id)=>{
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

const editClient = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`
    )
    .then(resposta => {
        return resposta.json()
    })
}

const attClient = (id, nome,email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })})
    .then(resposta => {
        if(resposta.okj){
            return resposta.json()
        } else {
            alert("Não foi possível atualizar o cliente")
            throw new Error('Erro ao atualizar o cliente')
        }
        
    })
}

export const clientService = {
    clientsList, createCliente, deleteClient, editClient, attClient
}




