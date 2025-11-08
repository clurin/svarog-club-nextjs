import { KarateScheduleItem, ScheduleItem } from '@/models/Models';
import { getKarateSchedule, getSchedules } from '@/utils/getSchedules'
import { getSchool } from '@/utils/getSchool';

const ScheduleSection = ({ title, items }: { title: string, items: ScheduleItem[] }) => (
    <div>
        <p className="w-[55%] mx-auto -mt-px md:-m-1 md:mx-auto flex justify-center items-center h-8 md:w-[40%] md:h-10 md:text-2xl bg-main-orange [box-shadow:0_-4px_6px_-4px_rgba(0,0,0,0.3)]">
            {title}
        </p>
        <div className="w-full max-w-[95%] md:max-w-[50%] mx-auto [word-spacing:-5px]">
            {items.map((item) => (
                <div key={item._id} className="-mt-0.5 grid grid-cols-4 border-2 text-center border-solid border-black bg-white text-black text-base">
                    <div className="border-r-2 border-solid border-black p-2 text-center">{item.ageGroup} лет</div>
                    <div className="border-r-2 border-solid border-black p-2 text-center">{item.days.join(', ')}</div>
                    <div className="border-r-2 border-solid border-black p-2 text-center">{item.time}</div>
                    <div className="border-solid border-black p-2 text-center">{item.price} <span className='text-sm'>Руб</span></div>
                </div>
            ))}
        </div>
    </div>
)

const KarateScheduleSection = ({ title, items }: { title: string, items: KarateScheduleItem[] }) => (
    <div>
        <p className="w-[55%] mx-auto -mt-px md:-m-1 md:mx-auto flex justify-center items-center h-8 md:w-[40%] md:h-10 md:text-2xl bg-main-orange [box-shadow:0_-4px_6px_-4px_rgba(0,0,0,0.3)]">
            {title}
        </p>

        <div className="w-full max-w-[95%] md:max-w-[50%] mx-auto overflow-x-auto">
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
    const [school_shushari, school_kupchino] = await Promise.all([getSchool('shushari'), getSchool('kupchino')])

    const [
        hand_to_hand_kupchino,
        mma_kupchino,
        kickboxing_kupchino,
        karate_kupchino
    ] = await Promise.all([
        getSchedules('kupchino', 'hand-to-hand'),
        getSchedules('kupchino', 'mma'),
        getSchedules('kupchino', 'kickboxing'),
        getKarateSchedule('kupchino', 'karate'),
    ])

    const [
        karate_shushari_raw,
        taekwondo_shushari
    ] = await Promise.all([
        getKarateSchedule('shushari', 'karate'),
        getKarateSchedule('shushari', 'taekwondo')
    ])

    const karate_shushari = karate_shushari_raw.flatMap(item =>
        item.schedule.map(s => ({
            _id: item._id,
            ageGroup: item.ageGroup,
            days: s.days,
            time: s.time,
            price: item.price,
        }))
    ) as ScheduleItem[]

    return (
        <div className='w-full mt-19 bg-black'>
            <p className='text-3xl text-center pt-5'>Расписание<br />занятий</p>
            <div className='bg-[#C3C4D1] pb-3'>
                <p className='w-full h-10 md:h-14 md:text-4xl mt-10 text-2xl flex justify-center items-center bg-kupchino'>
                    Купчино
                </p>
                <p className='w-full h-10 md:h-12 md:text-3xl text-2xl flex justify-center items-center bg-main-red'>
                    ул. Будапештская 97к2
                </p>
                <ScheduleSection title="Рукопашный бой" items={hand_to_hand_kupchino as ScheduleItem[]} />
                <ScheduleSection title="ММА" items={mma_kupchino as ScheduleItem[]} />
                <ScheduleSection title="Кикбоксинг" items={kickboxing_kupchino as ScheduleItem[]} />
                <KarateScheduleSection title='Каратэ' items={karate_kupchino} />
                <p className='w-full h-10 md:h-12 md:text-3xl text-2xl flex justify-center items-center bg-main-red'>
                    ул. Димитрова 9к3, школа 364
                </p>
                <ScheduleSection title="Рукопашный бой" items={school_kupchino as ScheduleItem[]} />
            </div>
            <div className='bg-[#C3C4D1] pb-3'>
                <p className='w-full h-10 text-2xl  md:h-14 md:text-4xl flex justify-center items-center bg-shushari'>
                    Шушары
                </p>
                <p className='w-full h-10 text-2xl  md:h-12 md:text-3xl flex justify-center items-center bg-main-red'>
                    ул. Окуловская 18
                </p>
                <ScheduleSection title='Каратэ' items={karate_shushari} />
                <KarateScheduleSection title='Тхэквондо' items={taekwondo_shushari} />
                <p className='w-full h-10 text-2xl  md:h-12 md:text-3xl flex justify-center items-center bg-main-red'>
                    ул. Первомайская 30, школа 93
                </p>
                <ScheduleSection title='Рукопашный бой' items={school_shushari as ScheduleItem[]} />
            </div>
        </div>
    )
}

export default Schedule
