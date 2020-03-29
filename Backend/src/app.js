const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

module.exports = app

// Metodos HTTP:
// GET: Buscar/Listar informacao do backend
// POST: Criar informacao no backend
// PUT: Alterar informacao no backend
// DELETE: Deletar informacao no backend

// Tipos de parametros:
// QUERY PARAMS: Parametros nomeados enviados na rota apos "?" (Filtros, Paginacao)
// ROUTE PARAMS: Parametros utilizados para identificar recursos
// REQUEST BODY: Corpo da requisicao, ultilizado para criar ou alterar recursos

// SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
// NoSQL: MongoDB, CouchDB, etc

// Driver: SELECT * FROM users
// Query Builder: table('users').select('*').where('...')