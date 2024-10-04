import con from './connection.js';

export async function inserirUsuario(usuario) {

    const comando = `
    
        insert into tb_usuario (nm_usuario)
        values ('Felipe Cirqueira');

    `;

    let resposta = await con.query(comando, [usuario.nome]);

    let info = resposta[0];

    let id = info.insertId;

    return id;

}

export async function consultarUsuario() {

    const comando = ` 
    
        select 
        id_usuario  idUsuario,
        nm_usuario  nome
        from tb_usuario
    
    `;

    let resposta = await con.query(comando);

    let registros = resposta[0];

    return registros;

}


export async function alterarUsuario(usuario, id) {

    const comando = ` 
    
        update tb_usuario
        set nm_usuario = ?
        where id_usuario = ?;
    
    `;

    let resposta = await con.query(comando, [usuario.nome, id]);

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}


export async function deletarUsuario(id) {

    const comando = ` 
    
        delete from tb_usuario
        where id_usuario = ?
    
    `;

    let resposta = await con.query(comando, [id]);

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}