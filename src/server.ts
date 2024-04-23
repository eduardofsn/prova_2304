import connection from './db';

const CriaSala = (Nome_Sala: string, Localizacao: string) => {
    connection.query('INSERT INTO Sala SET ?', {Nome_Sala, Localizacao}, (err, result) =>{
        if(err) {
            console.log('Erro ao criar sala: ', err);
            return;
        }
        console.log('Sala criada com sucesso.');
    });
};

const CriaEquipamento = (Nome_Equipamento: string, Descricao: string) => {
    connection.query('INSERT INTO Equipamento SET ?', {Nome_Equipamento, Descricao}, (err, result) =>{
        if(err) {
            console.log('Erro ao criar equipamento: ', err);
            return;
        }
        console.log('Equipamento criado com sucesso');
    });
};


const BuscaSalaEquipamento = () => {
    connection.query('SELECT ID_Equipamento, Quantidade from Sala_Equipamento WHERE ID_Sala = 1', (err, results: any[]) => {
        if(err){
            console.error('Erro ao buscar', err);
            return;
        }
        console.log('Lista de equipamentos:');
        results.forEach((equip) => {
            console.log(equip);
        });
    });
};

const BuscaEquipamentoQuantidade = () => {
    connection.query('SELECT COUNT(ID_Equipamento) FROM sala_equipamento WHERE ID_Sala = 1 ORDER BY ID_Equipamento;', (err, results: any[]) => {
        if(err){
            console.error('Erro ao buscar', err);
            return;
        }
        console.log('Número total de equipamentos por sala');
        results.forEach((equip2) => {
            console.log(equip2);
        });
    });
};