/**
 * Import types
 */
import { Request, Response } from 'express'

/**
 * Import modules 
 */
import express from 'express'
import cors from 'cors'
import md5 from 'md5'

import { DB_URL, DB_NAME, PORT } from './settings'

const app = new express()
app.use(cors())
app.use(express.json())

app.all('/', (req ?: Request, res ?: Response): void => {
    res.send(`Nothing to see here`)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))