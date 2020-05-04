const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate'); //Responde os email da validação da forma correta
const routes = require('./routes');
const app = express();

app.use(cors()); //Quando nao se passa nenhum parametro, não se tem restrição alguma
/**
app.use(cors({
 origin: 'http://meuapp.com' -- Somente esse endereçø iria poder acessar a API
}))
**/
app.use(express.json());
app.use(routes);
app.use(errors());

//module.exports = app;
app.listen(3333);
// Rota e Recurso
/**
 * Metodo HTTP:
 * 
 * GET: Buscar uma informaçnao do back-end
 * POST: Criar uma informaçnao do back-end
 * PUT: Alterar uma informaçnao do back-end
 * DELETE: Deletar uma informaçnao do back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recusros
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: mONGOdb, CouchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    * 
    */
