// importando o modulo
let express = require('express');
let port = 3000;
// criar um objeto
let app = express();
app.use(express.json());

// criar uma rota(metodo)  simples 
app.get("/", (req, resp) => {
    resp.json({ "titulo": "Página de Resposta" });
});


//  inserir dados

app.post("/Alunos", (req, resp) => {
    const {nome, idade} = req.body;

    resp.json({
        "servidor": "INSERIR",
        nome,
        idade


    });
})

// para alterar dados
app.put("/update/:id", (req, resp) => {
    // pegar o id 
    let id = req.params.id
    resp.json({
        "update": "alterado",
        "id": id
    });
})



// criar o servidor
app.listen(port, () => {
    console.log(`executar o servidor endereço \n
                  http://localhost:${port} `);
});