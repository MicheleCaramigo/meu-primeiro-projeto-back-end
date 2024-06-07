const express = require("express")
const app = express()
const router = express.Router()

const porta = 3333
function mostraHora(request, response) {

    const data = new Date()
   
    const hora = data.toLocaleTimeString('pt-BR')
   
    response.send(hora)
   
   }

function mostraMulher(request, response) {

    response.json({
   
       nome: 'Simara Conceição',
   
       imagem: 'https://github.com/simaraconceicao.png',
   
       minibio: 'Desenvolvedora e instrutora'
   
    })
   
   }

function mostraPorta () {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)