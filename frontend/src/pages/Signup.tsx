import { SignupForm } from '@/components/signup/signup-form'
import { assets } from "@/assets/assets"

export default function SignupPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md">
        {/* Logo 部分 */}
        <div className="flex flex-col items-center mb-8">
          <img 
            src={assets.logo_full_dark} 
            alt="AubergineGPT" 
            className="h-12 mb-2 dark:invert"
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            智能对话与图片生成
          </p>
        </div>
        
        {/* 注册表单 */}
        <SignupForm />
      </div>
    </div>
  )
}
