import { KarateScheduleItem, ScheduleItem } from '@/models/Models';
import { getKarateSchedule, getSchedules } from '@/utils/getSchedules'

const ScheduleSection = ({ title, items }: { title: string, items: ScheduleItem[] }) => (
    <div>
        <p className="w-[55%] mx-auto -mt-px flex justify-center items-center h-8 bg-main-orange [box-shadow:0_-4px_6px_-4px_rgba(0,0,0,0.3)]">
            {title}
        </p>
        <div className="w-full max-w-[95%] mx-auto [word-spacing:-5px]">
            {items.map((item) => (
                <div key={item._id} className="-mt-0.5 grid grid-cols-4 border-2 text-center border-solid border-black bg-white text-black text-base">
                    <div className="border-r-2 border-solid border-black p-2 text-center">{item.ageGroup} лет</div>
                    <div className="border-r-2 border-solid border-black p-2 text-center ">{item.days.join(', ')}</div>
                    <div className="border-r-2 border-solid border-black p-2 text-center">{item.time}</div>
                    <div className="border-solid border-black p-2 text-center">{item.price} <span className='text-sm'>Руб</span></div>
                </div>
            ))}
        </div>
    </div>
)
const KarateScheduleSection = ({ title, items }: { title: string, items: KarateScheduleItem[] }) => (
    <div>
        <p className="w-[55%] mx-auto -mt-px flex justify-center items-center h-8 bg-main-orange [box-shadow:0_-4px_6px_-4px_rgba(0,0,0,0.3)]">
            {title}
        </p>

        <div className="w-full max-w-[95%] mx-auto overflow-x-auto">
            <table className="w-full table-fixed border-2 border-black text-base text-center bg-white text-black border-collapse">
                <colgroup>
                    <col className="w-1/4" />
                    <col className="w-1/4" />
                    <col className="w-1/4" />
                    <col className="w-1/4" />
                </colgroup>

                <tbody>
                    {items.map(item =>
                        item.schedule.map((s, idx) => (
                            <tr key={`${item._id}-${idx}`} className="border-2 border-black">
                                {idx === 0 && (
                                    <td rowSpan={item.schedule.length} className="border-2 border-black p-2 align-middle">
                                        {item.ageGroup} лет
                                    </td>
                                )}
                                <td className="border-2 border-black p-2">{s.days.join(', ')}</td>
                                <td className="border-2 border-black p-2">{s.time}</td>
                                {idx === 0 && (
                                    <td rowSpan={item.schedule.length} className="border-2 border-black p-2 align-middle">
                                        {item.price} <span className="text-sm">Руб</span>
                                    </td>
                                )}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    </div>
)

const Schedule = async () => {
    const [
        hand_to_hand_kupchino,
        mma_kupchino,
        kickboxing_kupchino,
        karate_kupchino
    ] = await Promise.all([
        getSchedules('kupchino', 'hand-to-hand'),
        getSchedules('kupchino', 'mma'),
        getSchedules('kupchino', 'kickboxing'),
        getKarateSchedule('kupchino'),
    ])

    return (
        <div className='w-full mt-19'>
            <p className='text-3xl text-center'>Расписание<br />занятий</p>
            <div className='bg-[#C3C4D1]'>
                <p className='w-full h-10 mt-10 text-2xl flex justify-center items-center bg-kupchino'>
                    Купчино
                </p>
                <p className='w-full h-10 text-2xl flex justify-center items-center bg-main-red'>
                    ул. Будапештская 97к2
                </p>
                <ScheduleSection title="Рукопашный бой" items={hand_to_hand_kupchino as ScheduleItem[]} />
                <ScheduleSection title="ММА" items={mma_kupchino as ScheduleItem[]} />
                <ScheduleSection title="Кикбоксинг" items={kickboxing_kupchino as ScheduleItem[]} />
                <KarateScheduleSection title='Каратэ' items={karate_kupchino} />
            </div>
        </div>
    )
}

export default Schedule