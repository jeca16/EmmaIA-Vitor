'use strict'

async function cadastrarUsuario() {
    const nome = document.getElementById('user').value
    const email = document.getElementById('email').value
    const senha = document . getElementById ('senha').value
    const confirmarSenha = document.getElementById('confirmSenha').value

    if (nome == '' || email == '' || senha == '' || confirmarSenha == '') {
        alert('preencha os campos devidamente!')

    }else{
        if (confirmarSenha != senha) {
            alert('As senhas informadas não são iguais')
        }else{
            try {
                const novoUsuario = {
                    nome: nome,
                    email: email,
                    senha: senha
                }
                await fetch('http://back-login.vercel.app/usuarios', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(novoUsuario)
                })
                window.location.href = '../login.html'
            } catch (error) {
                console.log(error)
            }
        }
    }
}