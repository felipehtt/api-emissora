import con from './connection.js';

export async function inserirCanal(canal) {

    const comando = `
    
        insert into tb_canal (nm_canal, nr_canal, bt_aberto)
        values (?, ?, ?);

    `;

    let resposta = await con.query(comando, [canal.nome, canal.numero, canal.aberto]);

    let info = resposta[0];

    let id = info.insertId;

    return id;

}


export async function consultarCanal() {

    const comando = `
    
        select
            id_canal  idCanal,
            nm_canal  nome,
            nr_canal  numero,
            bt_aberto aberto
        from tb_canal;

    `;

    let resposta = await con.query(comando);

    let registros = resposta[0];

    return registros;

}


export async function alterarCanal(canal, id) {
    
    const comando = `
    
        update tb_canal
        set nm_canal = ?,
            nr_canal = ?,
            bt_aberto = ?
        where id_canal = ?

    `;
    
    let resposta = await con.query(comando, [canal.nome, canal.numero, 
    canal.aberto, id]);

    let registros = resposta[0];

    let linhasAfetadas = registros.affectedRows;

    return linhasAfetadas;

}

export async function deletarCanal(id) {
    
    const comando = `
    
        delete from tb_canal
        where id_canal = ?;

    `;

    let resposta = await con.query(comando, [id]);

    let registros = resposta[0];

    let linhasAfetadas = registros.affectedRows;

    return linhasAfetadas;
}


