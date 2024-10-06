import con from './connection.js';

export async function inserirProgramaFavorito(programaFavorito) {

    const comando = `
    
        insert into tb_programa_favorito (id_usuario, id_canal_programa, vl_avaliacao)
        values (?, ?, ?);

    `;

    let resposta = await con.query(comando, [programaFavorito.usuario,
    programaFavorito.canalPrograma, programaFavorito.avaliacao]);

    let info = resposta[0];

    let id = info.insertId;

    return id;

}


export async function consultarProgramaFavoritoId(id) {
    let comando = `
        select tb_programa_favorito.id_programa_favorito         idProgramaFavorito,
               tb_usuario.nm_usuario                             usuario,
               tb_canal_programa.nm_programa                     programa,
               tb_programa_favorito.vl_avaliacao                 avaliacao
          from tb_programa_favorito
          join tb_usuario on tb_programa_favorito.id_usuario = tb_usuario.id_usuario
          join tb_canal_programa on tb_programa_favorito.id_canal_programa = tb_canal_programa.id_canal_programa
         where id_programa_favorito = ?;
        `;

    let resposta = await con.query(comando, [id])
    let info = resposta[0]

    return info;
}


export async function consultarProgramaFavorito() {

    const comando = `
    
            select
            id_programa_favorito  idProgramaFavorito,
            id_usuario            usuario,
            id_canal_programa     canalPrograma,
            vl_avaliacao          avaliacao

        from tb_programa_favorito;

    `;

    let resposta = await con.query(comando);

    let registros = resposta[0];

    return registros;

}


export async function alterarProgramaFavorito(programaFavorito, id) {

    const comando = `
    
            update tb_programa_favorito
                set id_usuario = ?,
                    id_canal_programa = ?,
                    vl_avaliacao = ?
            where id_programa_favorito = ?;

    `;

    let resposta = await con.query(comando, [programaFavorito.usuario,
    programaFavorito.canalPrograma, programaFavorito.avaliacao, id]);

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}


export async function deletarProgramaFavorito(id) {

    const comando = `
    
        delete from tb_programa_favorito
        where id_programa_favorito = ?

    `;

    let resposta = await con.query(comando, [id]);

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}


//Join
export async function consultarProgramaFavoritoJoin(){

    const comando = `
        select tb_programa_favorito.id_programa_favorito         idProgramaFavorito,
               tb_usuario.nm_usuario                             usuario,
               tb_canal_programa.nm_programa                     programa,
               tb_programa_favorito.vl_avaliacao                 avaliacao
          from tb_programa_favorito
          join tb_usuario on tb_programa_favorito.id_usuario = tb_usuario.id_usuario
          join tb_canal_programa on tb_programa_favorito.id_canal_programa = tb_canal_programa.id_canal_programa;
        `;

    let resposta = await con.query(comando);

    let info = resposta[0]

    return info;

}