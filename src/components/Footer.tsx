import { FaWhatsapp, FaTelegramPlane, FaVk } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className=" text-white py-8">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-around items-start md:items-center">
                <div>
                    <p className='text-2xl md:text-3xl'>АДРЕСА</p>
                    <span className='text-base md:text-xl'>
                        ул. Будапештская 97к2 <br />
                        ул. Димитрова 9к3, школа 364 <br />
                        ул. Окуловская 18 <br />
                        ул. Первомайская 30, школа 93
                    </span>
                </div>
                <div className=''>
                    <p className='pt-5 md:pt-0 text-2xl md:text-3xl'>Контакты</p>
                    <span>+7 (812) 982-10-49</span>
                    <div className="flex gap-4 text-2xl">
                        <a href="https://wa.me/79650934512?text=Здравствуйте!%20Хочу%20записаться%20на%20тренировку"
                            target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-green-500 transition-colors">
                            <FaWhatsapp />
                        </a>
                        <a href="https://t.me/spbsvarog" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-blue-400 transition-colors">
                            <FaTelegramPlane />
                        </a>
                        <a href="https://vk.com/spb.sk_svarog" target="_blank" rel="noopener noreferrer" aria-label="VK" className="hover:text-blue-600 transition-colors">
                            <FaVk />
                        </a>
                    </div>
                </div>
            </div>

            <div className="pt-6 text-center text-xs text-gray-400">
                © {new Date().getFullYear()} АНО СК &quot;Сварог&quot;. Все права защищены.
            </div>
        </footer>
    )
}

export default Footer
