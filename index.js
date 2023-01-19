const express =  require("express"); //importando o express

const app = express(); //iniciando o express

app.get("/",function(req,res){
    res.send("Bem vindo ao node js")
})

app.get("/blog/:artigo?",function(req,res){
    var artigo = req.params.artigo;
    if(artigo){
        res.send("<h2>Artigo: "+ artigo+  "</h2>")
    }else{
        res.send("Bem vindo ao pagina de blog")
    }
    
})

app.get("/canal/youtube",function(req,res){
    var canal = req.query["canal"]
    if (canal) {
        res.send(canal)
    }else{
        res.send("Nenhum canal fornecido")
    }
    
})

// REQ => dados enviados pelo usuario
// RES => resposta que vai ser evidada para o usuario

app.get("/ola/:nome/:empresa", function(req,res){
    var nome = req.params.nome
    var empresa = req.params.empresa
    res.send("<h1>oi " + nome + "da " + empresa + "</h1>") 
})


app.listen(4000,function(error){
    if(error){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso! na porta: 4000"  )
    }
})

