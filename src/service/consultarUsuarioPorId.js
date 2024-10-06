import { consultarUsuarioPorId } from "../repository/usuarioRepository.js";

export default async function consultarUsuarioPorIdPorIdService(id){

    let registros = await consultarUsuarioPorId(id);

    let usuario = registros[0];

    return usuario;
    
}