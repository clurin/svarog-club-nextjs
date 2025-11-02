import { getNews } from '@/utils/getNews'
import Image from 'next/image'

const News = async () => {
    const news = await getNews()

    return (
        <div className="bg-black mt-19 pb-8 flex flex-wrap justify-center text-start gap-6">
            <p className='text-3xl text-center pt-5'>Новости</p>
            {news.map(item => (
                <div key={item._id} className="relative w-[300px] bg-white overflow-hidden flex flex-col">
                    <div className="w-full h-[200px] relative">
                        <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <p className="text-2xl mt-2 px-2 text-black">{item.title}</p>
                    <p className="text-sm px-2 mt-1 line-clamp-2 text-neutral-900">
                        {item.content}
                    </p>
                    <div className="flex justify-end px-2 mt-auto pb-2">
                        <button className="text-neutral-500 text-xs pt-5">
                            Подробнее
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default News
