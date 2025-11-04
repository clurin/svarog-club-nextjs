import { getNews } from '@/utils/getNews'
import Image from 'next/image'
import React from 'react'

const page = async () => {
    const news = await getNews()
    return (
        <div className="bg-back-color relative">
            <p className="text-3xl text-center pt-5">Все Новости</p>
            <div className="pb-8 mt-9 mx-auto max-w-7xl px-4 sm:columns-2 md:columns-2 lg:columns-4 gap-6">
                {news.map(item => (
                    <article
                        key={item._id}
                        className="inline-block w-full mb-6 bg-white overflow-hidden"
                        style={{ breakInside: 'avoid' }}>
                        <div className="w-full relative" style={{ height: 200 }}>
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="text-2xl mt-2 px-2 text-black">{item.title}</p>
                        <p className="text-sm px-2 mt-1 text-neutral-900 pb-5">
                            {item.content}
                        </p>

                        <p className="text-xs text-neutral-500 px-2 pb-2">
                            {new Date(item.publishedAt).toLocaleDateString('ru-RU')}
                        </p>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default page