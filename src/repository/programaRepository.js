import con from './connection.js';

export async function inserirPrograma(programa) {

    const comando = `
    
        insert into tb_canal_programa (id_canal, nm_programa, ds_genero, hr_programa)
        values (?, ?, ?, ?);

    `;

    let resposta = await con.query(comando, [programa.canal, programa.nomePrograma,
    programa.genero, programa.horario]);

    let info = resposta[0];

    let id = info.insertId;

    return id;

}


export async function consultarPrograma() {

    const comando = ` 
    
        select tb_canal_programa.id_canal_programa     idCanalPrograma,
                tb_canal.nm_canal   				   canal,
                tb_canal_programa.nm_programa		   nomePrograma,
                tb_canal_programa.ds_genero  		   genero,
                tb_canal_programa.hr_programa		   horario
        from tb_canal_programa
        join tb_canal on tb_canal_programa.id_canal = tb_canal.id_canal
    
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

    let resposta = await con.query(comando, [programa.canal, programa.nome,
    programa.genero, programa.horario, id]);

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


//por id
export async function consultarProgramaPorId(id){

    const comando = ` 
    
        select tb_canal_programa.id_canal_programa     idCanalPrograma,
                tb_canal.nm_canal   				   canal,
                tb_canal_programa.nm_programa		   nomePrograma,
                tb_canal_programa.ds_genero  		   genero,
                tb_canal_programa.hr_programa		   horario
        from tb_canal_programa
        join tb_canal on tb_canal_programa.id_canal = tb_canal.id_canal
        where id_canal_programa = ?
    
    `;

    let resposta = await con.query(comando, [id]);

    let registros = resposta[0];

    return registros;

}
