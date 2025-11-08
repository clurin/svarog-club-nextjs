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
                    className='-z-10 md:hidden w-full'
                />
                <Image
                    src="/images/intro-desktop-image2.png"
                    alt="Intro"
                    fill
                    style={{ objectFit: 'cover' }}
                    className='hidden md:block w-full'
                />
            </div>
            <div className='flex flex-col items-center absolute top-12 left-1/2 transform -translate-x-1/2'>
                <Image
                    src={"/images/logo-image-2.png"}
                    alt='Logo'
                    width={150}
                    height={150}
                    className=''
                />
                <p className='whitespace-nowrap pt-17 md:text-xl text-base text-main-red'
                    style={{ WebkitTextStroke: '0.3px gray' }}>
                    Одни мечтают, другие побеждают
                </p>
                <p className='pt-3 text-3xl md:text-4xl whitespace-nowrap text-black'>
                    КЛУБЫ ЕДИНОБОРСТВ
                </p>
                <p className='text-3xl md:text-4xl whitespace-nowrap text-white bg-main-red'>
                    В Санкт Петербурге
                </p>
            </div>
            <a href="https://wa.me/79650934512?text=Здравствуйте!%20Хочу%20записаться%20на%20тренировку"
                target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <div className='hover:text-main-red transition-colors hover:bg-main-yellow bg-main-red text-2xl md:text-3xl text-center'>
                    Записаться на тренировку
                </div>
            </a>
        </div>
    )
}

export default Intro