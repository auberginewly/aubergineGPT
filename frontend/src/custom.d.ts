// 类型声明：允许在 TypeScript 中导入图片和静态资源
declare module "*.png" {
  const value: string
  export default value
}
declare module "*.jpg" {
  const value: string
  export default value
}
declare module "*.jpeg" {
  const value: string
  export default value
}
declare module "*.svg" {
  const value: string
  export default value
}
declare module "*.gif" {
  const value: string
  export default value
}

// 允许导入 CSS（若需要）
declare module "*.css" {
  const content: { [className: string]: string }
  export default content
}
