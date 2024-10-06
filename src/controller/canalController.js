import * as db from '../repository/canalRepository.js';
import consultarCanalPorIdService from '../service/consultarCanalPorIdService.js';

import { Router } from "express";
const endpoints = Router();

endpoints.post('/canal', async (req, resp) => {

    try {
     
        let canal = req.body;

        let id = await db.inserirCanal(canal);

        resp.send({

            idCanal: id

        })
        
    } 
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })
        
    }
    
})


endpoints.get('/canal', async (req, resp) => {

    try {

        let registros = await db.consultarCanal();

        resp.send(registros);
        
    } 
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })
        
    }
    
})


endpoints.put('/canal/:id', async (req, resp) => {

    try {
     
        let canal = req.body;

        let id = req.params.id

        let linhasAfetadas = await db.alterarCanal(canal, id);

        if(linhasAfetadas == 0){

            throw new Error('Nenhum canal alterado.');

        }

        resp.send();
        
    } 
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })
        
    }
    
})


endpoints.delete('/canal/:id', async (req, resp) => {

    try {
     
        let id = req.params.id;

        let linhasAfetadas = await db.deletarCanal(id);

        if(linhasAfetadas == 0){

            throw new Error('Nenhum canal removido.');

        }

        resp.send();
        
    } 
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })
        
    }
    
})


//Por Id.
endpoints.get('/canal/:id', async (req, resp) => {

    try {
    
        let id = req.params.id;

        let registros = await consultarCanalPorIdService(id);

        resp.send(registros);
        
    } 
    catch(err){
        
        resp.status(400).send({

            erro: err.message

        })

    }
    
})


export default endpoints;