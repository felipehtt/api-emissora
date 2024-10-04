import con from './connection.js';

export async function inserirPrograma(programa) {

    const comando = `
    
        insert into tb_canal_programa (id_canal, nm_programa, ds_genero, hr_programa)
        values (?, ?, ?, ?);

    `;

    let resposta = await con.query(comando, [programa.idCanal, programa.nome,
    programa.genero, programa.hora]);

    let info = resposta[0];

    let id = info.insertId;

    return id;

}


export async function consultarPrograma() {

    const comando = ` 
    
        select 
        id_canal_programa  idCanalPrograma,
        id_canal            idCanal,
        nm_programa         nome,
        ds_genero           genero,
        hr_programa         hora

        from tb_canal_programa
    
    `;

    let resposta = await con.query(comando);

    let registros = resposta[0];

    return registros;

}



export async function alterarPrograma(programa, id) {

    const comando = ` 
    
        update tb_canal_programa
        set id_canal = ?,
            nm_programa = ?,
            ds_genero = ?,
            hr_programa = ?
        where id_canal_programa = ?;
    
    `;

    let resposta = await con.query(comando, [programa.idCanal, programa.nome,
    programa.genero, programa.hora, id]);

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}


export async function deletarPrograma(id) {

    const comando = ` 
    
        delete from tb_canal_programa
        where id_canal_programa = ?
    
    `;

    let resposta = await con.query(comando, [id]);

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}
