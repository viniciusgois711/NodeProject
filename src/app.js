import express from "express"

const app = express()

app.use(express.json())

const products = [
    {id: 1, nome: "Geladeira", preco: 2000, cor:"preto"},
    {id: 2, nome: "fogao", preco: 2000, cor:"branco"},
    {id: 3, nome: "maquina", preco: 2000, cor:"cinza"},
]

function buscarProdutosPorId(id){
    return products.filter( product => product.id == id)
}

app.get('/', (req, res) => {
    res.status(200).send("Hello Worlddd")
})

app.get('/products', (req, res) => {
    res.status(200).send(products)
})

app.post('/products', (req, res) => {
    products.push(req.body)
    res.status(201).send("Product criated sucessfully")
})

app.delete(`/products/`, (req, res) => {
    products.delete
})

export default app