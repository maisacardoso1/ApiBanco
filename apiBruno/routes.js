import express from 'express'
import sql from 'mssql'
import { sqlConfig } from './config.js'

const pool = new sql.ConnectionPool(sqlConfig)
await pool.connect();
export const routes = express.Router()

routes.get('/', async (req, res)=>{
    try{
    const { recordset } = await pool.query`select * from Chamado`
    return res.status(200).json(recordset)
    }
    catch(error){
        return res.status(500).json('Erro ao visualizar')
    }
})

routes.get('/chamado/:id', async (req,res)=>{
    try{
        const { id } = req.params
        const { recordset } = await pool.query`select * from Chamado where IdChamado = ${id}`
        return res.status(200).json(recordset)
    }
    catch(error){
        return res.status(500).json('Erro ao visualizar')
    }
})

routes.post('/chamado/novo', async (req, res)=>{
    try{
        const { id, DataChamado, NomeCliente, Descricao } = req.body
        await pool.query`insert into Chamado values(${id}, ${DataChamado}, ${NomeCliente}, ${Descricao})`
        return res.status(200).json('Novo adicionado')
    }
    catch(error){
        return res.status(500).json('Erro ao cadastrar')
    }
})

export default routes