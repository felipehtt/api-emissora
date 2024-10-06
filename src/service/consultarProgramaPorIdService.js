import { consultarProgramaPorId } from "../repository/programaRepository.js";

export default async function consultarProgramaPorIdService(id){

    let registros = await consultarProgramaPorId(id);

    let programa = registros[0];

    return programa;
    
}