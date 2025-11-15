'use client'
import { useEffect } from 'react'
import { Coach } from '@/models/Models'

export default function ModalCoach({ coach, onClose }: { coach: Coach | null; onClose: () => void }) {
    useEffect(() => {
        if (coach) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [coach])

    if (!coach) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-xs"
            onClick={onClose}
        >
            <div className="bg-white opacity-90 p-2 max-w-md w-[80%] relative"
                onClick={(e) => e.stopPropagation()}>
                <button
                    className="absolute cursor-pointer top-2 right-3 bg-neutral-800 p-1 text-main-red text-xl"
                    onClick={onClose}>
                    закрыть
                </button>

                <img
                    src={coach.imageUrl}
                    alt={coach.name}
                    width={400}
                    height={250}
                    className="object-cover mx-auto mb-1 md:pt-3"
                />
                <h2 className="text-xl text-center text-black mb-2">{coach.name}</h2>
                <p className="text-sm text-neutral-700 mb-1">
                    Дисциплины: <span className='text-xs'>{coach.disciplines.join(', ')}</span>
                </p>
                <ul className="text-xs text-black list-disc pl-5">
                    {coach.achievements.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
