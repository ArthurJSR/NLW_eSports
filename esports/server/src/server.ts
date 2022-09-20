import express, { response } from 'express'

const app = express()

app.get('/games', (request, response) => {
    return response.json([]);
});

app.post('/ads', (request, response) => {
    return response.status(201).json([]);
});

app.get('/games/:id/ads', (request, response) => {
    //const gameid=request.params.id
    
    return response.json([
        {id:1, name: 'Anucio 1'},
        {id:2, name: 'Anucio 2'},
        {id:3, name: 'Anucio 3'} 
    ])
})

app.get('/ads/:id/discord', (request, response) => {
    //const adsid=request.params.id
    
    return response.json([])
})

app.listen(3333)
