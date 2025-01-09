const clientsList = ()=>{
    return fetch('http://localhost:3000/profile')
    .then(resposta => {
        return resposta.json()
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
        return resposta.body
    })

}

const deleteClient = (id)=>{
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

export const clientService = {
    clientsList, createCliente, deleteClient
}




