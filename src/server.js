const express = require("express")
const server = express()

//configurar pasta public
server.use(express.static("public"))

//utilizando template engine
const nunjucks = require("nunjucks")

nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos da aplicação
//pagina inicial

    //req: requisição
    //res: resposta

server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um título" })
})

server.get("/login", (req, res) => {
    return res.render("login.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})


//ligar o servidor
server.listen(3000)