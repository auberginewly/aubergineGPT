import { useEffect, useState } from 'react'
import { aiImages } from '../assets/assets'
import Loading from './Loading'

// 定义图片数据类型
interface CommunityImage {
  imageUrl: string
  userName: string
}

const Community = () => {
  const [images, setImages] = useState<CommunityImage[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const fetchImages = async () => {
    setLoading(true)
    try {
      // 模拟从 assets 中获取图片数据
      const mockImages: CommunityImage[] = [
        { imageUrl: aiImages.ai_image1, userName: 'Alex Chen' },
        { imageUrl: aiImages.ai_image2, userName: 'Sarah Kim' },
        { imageUrl: aiImages.ai_image3, userName: 'Mike Johnson' },
        { imageUrl: aiImages.ai_image4, userName: 'Emily Wang' },
        { imageUrl: aiImages.ai_image5, userName: 'David Liu' },
        { imageUrl: aiImages.ai_image6, userName: 'Lisa Zhang' },
        { imageUrl: aiImages.ai_image7, userName: 'Tom Brown' },
        { imageUrl: aiImages.ai_image8, userName: 'Anna Lee' },
        { imageUrl: aiImages.ai_image9, userName: 'John Smith' },
        { imageUrl: aiImages.ai_image10, userName: 'Maya Patel' },
        { imageUrl: aiImages.ai_image11, userName: 'Chris Wong' },
        { imageUrl: aiImages.ai_image12, userName: 'Sophie Davis' },
      ]
      
      // 模拟网络延迟
      setTimeout(() => {
        setImages(mockImages)
        setLoading(false)
      }, 1000)
    } catch (error) {
      console.error('Error fetching images:', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className='p-6 pt-12 xl:px-12 2xl:px-20 w-full mx-auto h-full overflow-y-scroll'>
      <h2 className='text-xl font-semibold mb-6 text-gray-800 dark:text-purple-100'>
        社区图片
      </h2>
      
      {images.length > 0 ? (
        <div className='flex flex-wrap max-sm:justify-center gap-5'>
          {images.map((item, index) => (
            <a 
              key={index} 
              href={item.imageUrl} 
              target='_blank' 
              className='relative group block rounded-lg overflow-hidden border border-gray-200 dark:border-purple-700 shadow-sm hover:shadow-md transition-shadow duration-300'
            >
              <img 
                src={item.imageUrl} 
                alt="" 
                className='w-full h-40 md:h-50 2xl:h-62 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out'
              />
              <p className='absolute bottom-0 right-0 text-xs bg-black/50 backdrop-blur text-white px-4 py-1 rounded-tl-xl opacity-0 group-hover:opacity-100 transition duration-300'>
                由{item.userName}生成
              </p>
            </a>
          ))}
        </div>
      ) : (
        <p className='text-center text-gray-600 dark:text-purple-200 mt-10'>
          暂无可用图片。
        </p>
      )}
    </div>
  )
}

export default Community
