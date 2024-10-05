import * as db from '../repository/programaFavoritoRepository.js'
import consultarProgramaFavoritoIdService from '../service/programaFavoritoService.js';

import { Router } from "express";
const endpoints = Router();

endpoints.post('/programaFavorito', async (req, resp) => {

    try {
     
        let programaFavorito = req.body;

        let id = await db.inserirProgramaFavorito(programaFavorito);

        resp.send({

            idProgramaFavorito: id

        })
        
    } 
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })
        
    }
    
})

endpoints.get('/programaFavorito', async (req, resp) => {

    try {

        let registros = await db.consultarProgramaFavorito();

        resp.send(registros)
        
    } 
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })
        
    }

})


endpoints.put('/programaFavorito/:id', async (req, resp) => {

    try {
     
        let programaFavorito = req.body;

        let id = req.params.id

        let linhasAfetadas = await db.alterarProgramaFavorito(programaFavorito, id);

        if(linhasAfetadas == 0){

            throw new Error('Nenhum favorito alterado.');

        }

        resp.send();
        
    } 
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })
        
    }
    
})


endpoints.delete('/programaFavorito/:id', async (req, resp) => {

    try {
     
        let id = req.params.id;

        let linhasAfetadas = await db.deletarProgramaFavorito(id);

        if(linhasAfetadas == 0){

            throw new Error('Nenhum favorito removido.');

        }

        resp.send();
        
    } 
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })
        
    }
    
})

endpoints.get('/join/programaFavorito/:id', async (req, resp) => {
    try {
        let id = req.params.id
        let registros = await consultarProgramaFavoritoIdService(id)

        resp.send(registros)
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default endpoints;