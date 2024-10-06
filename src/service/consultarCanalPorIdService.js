import { consultarCanalPorId } from "../repository/canalRepository.js";

export default async function consultarCanalPorIdService(id){

    let registros = await consultarCanalPorId(id);

    let canal = registros[0];

    return canal;
    
}