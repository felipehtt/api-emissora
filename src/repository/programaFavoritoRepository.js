import con from './connection.js';

export async function inserirProgramaFavorito(programaFavorito) {

    const comando = `
    
        insert into tb_programa_favorito (id_usuario, id_canal_programa, vl_avaliacao)
        values (?, ?, ?);

    `;

    let resposta = await con.query(comando, [programaFavorito.idUsuario, 
    programaFavorito.idCanalPrograma, programaFavorito.avaliacao]);

    let info = resposta[0];

    let id = info.insertId;

    return id;

}


export async function consultarProgramaFavorito(){

    const comando = `
    
            select
            id_programa_favorito  idProgramaFavorito,
            id_usuario            idUsuario,
            id_canal_programa     idCanalPrograma,
            vl_avaliacao          avaliacao

        from tb_programa_favorito;

    `;

    let resposta = await con.query(comando);

    let registros = resposta[0];

    return registros;
    
}


export async function alterarProgramaFavorito(programaFavorito, id){

    const comando = `
    
            update tb_programa_favorito
                set id_usuario = ?,
                id_canal_programa = ?,
                vl_avaliacao = ?
            where id_programa_favorito = ?;

    `;

    let resposta = await con.query(comando, [programaFavorito.idUsuario, 
    programaFavorito.idCanalPrograma, programaFavorito.avaliacao, id]);

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}


export async function deletarProgramaFavorito(id){

    const comando = `
    
        delete from tb_programa_favorito
        where id_programa_favorito = ?

    `;

    let resposta = await con.query(comando, [id]);

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;
    
}
