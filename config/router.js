import express from "express";

const routes = express.Router() 

let db = [
    {'1': { Nome: 'cliente 1', idade:'20'} },
    {'2': { Nome: 'cliente 2', idade:'20'} },
    {'3': { Nome: 'cliente 3', idade:'20'} }
];

routes.get('/', (req, res) => {
    return res.json(db)    
})

routes.post('/add', (req, res) => {
    const body = req.body
    if(!body)
        return res.status(400).end()
    db.push(body)
    return res.json(body)
    
})

routes.delete('/:id', (req, res) =>{
    const id = req.params.id

    let newDB = db.filter(item => {
        if(item[id])
            return item
    })
    return res.send(newDB)
    db = newDB;
})



export default routes;