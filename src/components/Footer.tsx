import { FaWhatsapp, FaTelegramPlane, FaVk } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className=" text-white py-8">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col md:flex-row gap-2 text-sm">
                    <span>г. Санкт-Петербург ул. Будапештская 97к2, ул. Окуловская 18</span>
                    <span>+7 (812) 982-10-49</span>
                    <span>info@fightclub.ru</span>
                </div>
                <div className="flex gap-4 text-2xl">
                    <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-green-500 transition-colors">
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

            <div className="mt-6 text-center text-xs text-gray-400">
                © {new Date().getFullYear()} АНО СК &quot;Сварог&quot;. Все права защищены.
            </div>
        </footer>
    )
}

export default Footer
