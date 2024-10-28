import express from "express"

const app = express()

app.use(express.json())

const products = [
    {id: 1, nome: "Geladeira", preco: 2000, cor:"preto"},
    {id: 2, nome: "fogao", preco: 2000, cor:"branco"},
    {id: 3, nome: "maquina", preco: 2000, cor:"cinza"},
]

function buscarProdutosPorId(id){
    return products.findIndex( product => product.id == id)
}

app.get('/', (req, res) => {
    res.status(200).send("Hello Worlddd")
})

app.get('/products', (req, res) => {
    res.status(200).send(products)
})

app.get('/products/:id', (req, res) => {
    res.send(products[buscarProdutosPorId(req.params.id)])
})

app.post('/products', (req, res) => {
    products.push(req.body)
    res.status(201).send("Product criated sucessfully")
})

app.delete('/products/:id', (req, res) => {
    products.splice(buscarProdutosPorId(req.params.id), 1)
    res.send("Product deleted successfully")
})

app.put('/products/:id', (req, res) => {
    let index = buscarProdutosPorId(req.params.id)
    products[index].nome = req.body.nome
    products[index].preco = req.body.preco
    products[index].cor = req.body.cor
    res.send("Product changed sucessfully")
})

export default app