const mongoose = require ('mongoose');
mongoose.connect('mongodb+srv://kelvindelimagabriel:MktQ4xEHAKENACR7@teste-api.tf1zh1h.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); 

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão com o banco de dados:'));
db.once('open', () => {
  console.log('Conectado ao banco de dados MongoDB.');
});

module.exports = db;
