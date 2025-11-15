'use client'

import { useState } from 'react'
import ModalCoach from './CoachModal'
import { Coach } from '@/models/Models'

export default function CoachesClient({ coaches }: { coaches: Coach[] }) {
    const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null)

    return (
        <div className="pt-19 pb-15 bg-black">
            <p className="text-3xl text-center">Тренерский <br /> состав</p>

            <div className="flex flex-wrap justify-center mt-9 gap-6 mx-6">
                {coaches.map(coach => (
                    <div
                        key={coach._id}
                        className="relative w-[300px] h-[220px] overflow-hidden cursor-pointer"
                        onClick={() => setSelectedCoach(coach)}
                    >
                        <img
                            width={300}
                            height={220}
                            src={coach.imageUrl}
                            alt={coach.name}
                            className="object-cover"
                        />
                        <div className="absolute top-0 left-0 bg-main-yellow text-black text-sm px-1">
                            {coach.disciplines.map((d, i) => (
                                <div key={i}>{d}</div>
                            ))}
                        </div>
                        <div className="absolute bottom-0 right-0 bg-main-red text-white text-base px-2">
                            {coach.name}
                        </div>
                    </div>
                ))}
            </div>

            <ModalCoach coach={selectedCoach} onClose={() => setSelectedCoach(null)} />
        </div>
    )
}
