import { consultarProgramaFavoritoId } from "../repository/programaFavoritoRepository.js";

export default async function consultarProgramaFavoritoIdService(id){

    let registros = await consultarProgramaFavoritoId(id);

    let info = registros[0];

    return info;

}