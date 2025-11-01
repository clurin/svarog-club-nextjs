import Image from 'next/image';

const Intro = () => {
    return (
        <div className='relative w-full h-124'>
            <div>
                <div className='-z-9 w-full h-124'></div>
                <Image
                    src="/images/intro-mobile-image2.png"
                    alt="Intro"
                    fill
                    style={{ objectFit: 'cover' }}
                    className='-z-10 md:hidden  w-full'
                />
                <Image
                    src="/images/intro-desktop-image.png"
                    alt="Intro"
                    width={1200}
                    height={800}
                    className='hidden md:block w-full'
                />
            </div>
            <div className=' flex flex-col items-center absolute top-12 left-1/2 transform -translate-x-1/2'>
                <Image
                    src={"/images/logo-image-2.png"}
                    alt='Logo'
                    width={150}
                    height={150}
                    className=''
                />
                <p className='whitespace-nowrap pt-15 text-base text-main-red'
                    style={{ WebkitTextStroke: '0.3px gray' }}>
                    Одни мечтают, другие побеждают
                </p>
                <p className='pt-5 text-3xl whitespace-nowrap text-black'>
                    КЛУБЫ ЕДИНОБОРСТВ
                </p>
                <p className='text-3xl whitespace-nowrap text-white bg-main-red'>
                    В Санкт Петербурге
                </p>
            </div>
            <div className='bg-main-red text-2xl text-center'>
                Записаться на тренировку
            </div>
        </div>
    )
}

export default Intro