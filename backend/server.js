import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()

// 中间件
app.use(cors())
app.use(express.json())

// 路由
app.get('/', (req, res) => {
  res.send('Hello from aubergineGPT backend!')
})

// 固定端口
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})