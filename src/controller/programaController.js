import * as db from '../repository/programaRepository.js'
import consultarProgramaPorIdService from '../service/consultarProgramaPorIdService.js';

import { Router } from "express";
const endpoints = Router();

endpoints.post('/programa', async (req, resp) => {

    try {
     
        let programa = req.body;

        let id = await db.inserirPrograma(programa);

        resp.send({

            idCanalPrograma: id

        })
        
    } 
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })
        
    }
    
})


endpoints.get('/programa', async (req, resp) => {

    try {

        let registros = await db.consultarPrograma();

        resp.send(registros)
        
    } 
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })
        
    }

})


endpoints.put('/programa/:id', async (req, resp) => {

    try {
     
        let programa = req.body;

        let id = req.params.id

        let linhasAfetadas = await db.alterarPrograma(programa, id);

        if(linhasAfetadas == 0){

            throw new Error('Nenhum programa alterado.');

        }

        resp.send();
        
    } 
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })
        
    }
    
})


endpoints.delete('/programa/:id', async (req, resp) => {

    try {
     
        let id = req.params.id;

        let linhasAfetadas = await db.deletarPrograma(id);

        if(linhasAfetadas == 0){

            throw new Error('Nenhum programa removido.');

        }

        resp.send();
        
    } 
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })
        
    }
    
})


//por Id
endpoints.get('/programa/:id', async (req, resp) => {

    try {

        let id = req.params.id;

        let registros = await consultarProgramaPorIdService(id);

        resp.send(registros);

    } 
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })
        
    }

})


export default endpoints;