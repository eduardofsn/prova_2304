import mysql2 from 'mysql2';

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fatec',
    database: 'avaliacao'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao se conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão estabelecida com o banco de dados.');
});

export default connection;