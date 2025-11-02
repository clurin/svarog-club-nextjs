import { getCoaches } from '@/utils/getCoaches'
import Image from 'next/image'

const Coaches = async () => {
    const coaches = await getCoaches()

    return (
        <div className="mt-19 flex flex-wrap justify-center gap-6">
            <p className='text-3xl text-center'>Тренерский <br /> состав</p>
            {coaches.map(coach => (
                <div key={coach._id} className="relative w-[300px] h-[220px] overflow-hidden">
                    <Image
                        width={300}
                        height={220}
                        src={coach.imageUrl}
                        alt={coach.name}
                        className="object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-main-yellow text-black text-sm px-1">
                        {coach.disciplines.map((d: string, i: number) => (
                            <div key={i}>{d}</div>
                        ))}
                    </div>

                    <div className="absolute bottom-0 right-0 bg-main-red text-white text-base px-2">
                        {coach.name}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Coaches
