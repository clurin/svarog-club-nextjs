import { getNews } from '@/utils/getNews'
import Image from 'next/image'
import Link from 'next/link'

const News = async () => {
    const news = (await getNews()).slice(0, 3);

    return (
        <div className='mt-19 bg-black relative'>
            <p className='text-3xl text-center pt-5'>Новости</p>
            <div className="pb-8 mt-9 flex flex-wrap justify-center text-start gap-6">
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
                            <p className="absolute left-2 bottom-2 text-xs text-neutral-500">
                                {new Date(item.publishedAt).toLocaleDateString('ru-RU')}
                            </p>
                            <button className="bg-neutral-900 p-2 rounded-xs text-neutral-100 text-xs mt-5 hover:bg-neutral-100 hover:text-black transition-colors">
                                Подробнее
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Link href="/newspage">
                <div className="text-center pb-6">
                    <button className="bg-white text-black px-4 py-2 text-sm rounded-xs hover:bg-neutral-900 hover:text-neutral-200 transition-colors">
                        Другие новости
                    </button>
                </div>
            </Link>
        </div>
    )
}

export default News