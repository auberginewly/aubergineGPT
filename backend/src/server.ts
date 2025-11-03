import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// 类型定义
type ExpressApp = ReturnType<typeof express>
type Request = express.Request
type Response = express.Response
type NextFunction = express.NextFunction

interface AppConfig {
  port: number
  nodeEnv: string
  corsOrigins: string[]
}

interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
  error?: string
}

interface ErrorWithStatus extends Error {
  status?: number
  statusCode?: number
}

// 加载环境变量
dotenv.config()

class AubergineGPTServer {
  private app: ExpressApp
  private config: AppConfig

  constructor() {
    this.app = express()
    this.config = this.loadConfig()
    this.setupMiddleware()
    this.setupRoutes()
    this.setupErrorHandling()
  }

  private loadConfig(): AppConfig {
    return {
      port: parseInt(process.env.PORT || '3000', 10),
      nodeEnv: process.env.NODE_ENV || 'development',
      corsOrigins: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:5173']
    }
  }

  private setupMiddleware(): void {
    // CORS 配置
    this.app.use(cors({
      origin: this.config.corsOrigins,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }))

    // 解析 JSON 请求体
    this.app.use(express.json({ limit: '10mb' }))
    
    // 解析 URL 编码数据
    this.app.use(express.urlencoded({ extended: true }))

    // 请求日志中间件
    this.app.use(this.requestLogger)
  }

  private requestLogger = (req: Request, res: Response, next: NextFunction): void => {
    const timestamp = new Date().toISOString()
    console.log(`[${timestamp}] ${req.method} ${req.path}`)
    next()
  }

  private setupRoutes(): void {
    // 根路由
    this.app.get('/', this.handleHealthCheck)

    // API 路由组
    this.app.get('/api/health', this.handleHealthCheck)
    this.app.get('/api/status', this.handleStatus)

    // 聊天相关路由
    this.app.post('/api/chat/send', this.handleChatSend)
    this.app.get('/api/chat/history', this.handleChatHistory)

    // 用户相关路由
    this.app.post('/api/auth/login', this.handleLogin)
    this.app.post('/api/auth/register', this.handleRegister)
    this.app.post('/api/auth/logout', this.handleLogout)

    // 404 处理
    this.app.use(this.handle404)
  }

  // 路由处理函数
  private handleHealthCheck = (req: Request, res: Response): void => {
    const response: ApiResponse = {
      success: true,
      message: 'aubergineGPT backend is running! 🍆',
      data: {
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        environment: this.config.nodeEnv
      }
    }
    res.json(response)
  }

  private handleStatus = (req: Request, res: Response): void => {
    const response: ApiResponse = {
      success: true,
      message: 'Server status',
      data: {
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        cpu: process.cpuUsage(),
        platform: process.platform,
        nodeVersion: process.version
      }
    }
    res.json(response)
  }

  private handleChatSend = async (req: Request, res: Response): Promise<void> => {
    try {
      const { message, chatId } = req.body

      if (!message) {
        res.status(400).json({
          success: false,
          message: 'Message is required',
          error: 'MISSING_MESSAGE'
        })
        return
      }

      // 这里将来集成 AI 服务
      const response: ApiResponse = {
        success: true,
        message: 'Message processed',
        data: {
          reply: `🍆 收到你的消息: "${message}"。茄子GPT正在思考中...`,
          timestamp: new Date().toISOString(),
          chatId: chatId || 'default'
        }
      }

      res.json(response)
    } catch (error) {
      this.handleError(error as Error, req, res)
    }
  }

  private handleChatHistory = (req: Request, res: Response): void => {
    const { chatId } = req.query

    const response: ApiResponse = {
      success: true,
      message: 'Chat history retrieved',
      data: {
        chatId: chatId || 'default',
        messages: [
          {
            id: '1',
            role: 'assistant',
            content: '你好！我是茄子GPT 🍆，很高兴为你服务！',
            timestamp: new Date().toISOString()
          }
        ]
      }
    }

    res.json(response)
  }

  private handleLogin = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body

      if (!email || !password) {
        res.status(400).json({
          success: false,
          message: 'Email and password are required',
          error: 'MISSING_CREDENTIALS'
        })
        return
      }

      // 这里将来添加真实的认证逻辑
      const response: ApiResponse = {
        success: true,
        message: 'Login successful',
        data: {
          user: {
            id: '1',
            email,
            name: 'aubergineGPT User',
            credits: 200
          },
          token: 'mock-jwt-token'
        }
      }

      res.json(response)
    } catch (error) {
      this.handleError(error as Error, req, res)
    }
  }

  private handleRegister = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password, name } = req.body

      if (!email || !password || !name) {
        res.status(400).json({
          success: false,
          message: 'Email, password and name are required',
          error: 'MISSING_FIELDS'
        })
        return
      }

      const response: ApiResponse = {
        success: true,
        message: 'Registration successful',
        data: {
          user: {
            id: Date.now().toString(),
            email,
            name,
            credits: 50
          }
        }
      }

      res.json(response)
    } catch (error) {
      this.handleError(error as Error, req, res)
    }
  }

  private handleLogout = (req: Request, res: Response): void => {
    const response: ApiResponse = {
      success: true,
      message: 'Logout successful'
    }
    res.json(response)
  }

  private handle404 = (req: Request, res: Response): void => {
    res.status(404).json({
      success: false,
      message: `Route ${req.method} ${req.path} not found`,
      error: 'NOT_FOUND'
    })
  }

  private setupErrorHandling(): void {
    this.app.use(this.globalErrorHandler)
  }

  private handleError = (error: Error, req: Request, res: Response): void => {
    console.error(`Error in ${req.method} ${req.path}:`, error)
    
    const statusCode = (error as ErrorWithStatus).status || 
                      (error as ErrorWithStatus).statusCode || 500

    res.status(statusCode).json({
      success: false,
      message: 'Internal server error',
      error: this.config.nodeEnv === 'development' ? error.message : 'INTERNAL_ERROR'
    })
  }

  private globalErrorHandler = (
    error: ErrorWithStatus,
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    this.handleError(error, req, res)
  }

  public start(): void {
    this.app.listen(this.config.port, () => {
      console.log('🍆 ================================')
      console.log('🍆 aubergineGPT Backend Server')
      console.log('🍆 ================================')
      console.log(`🚀 Server running on port ${this.config.port}`)
      console.log(`🌍 Environment: ${this.config.nodeEnv}`)
      console.log(`🔗 URL: http://localhost:${this.config.port}`)
      console.log('🍆 ================================')
    })
  }

  public getApp(): ExpressApp {
    return this.app
  }
}

// 启动服务器
const server = new AubergineGPTServer()
server.start()

export default server