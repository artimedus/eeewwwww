
'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://static.readdy.ai/image/e50d81505896166f69b70c6c5c2e88d5/9546c40f1129bd19e6e2ef378edbbab8.jfif" 
                alt="ГородЛома логотип"
                className="w-8 h-8 mr-3 object-contain"
              />
              <span className="text-xl font-bold">ГородЛома</span>
            </div>
            <p className="text-gray-400 mb-4">
              Надежная скупка металла с 2008 года. Честные цены, быстрая оплата, профессиональный сервис.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors cursor-pointer">
                <i className="ri-phone-line"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors cursor-pointer">
                <i className="ri-whatsapp-line"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors cursor-pointer">
                <i className="ri-telegram-line"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Скупка черного металла</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Скупка цветного металла</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Скупка нержавейки</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Вывоз металлолома</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Демонтаж конструкций</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <i className="ri-phone-line mr-2 text-orange-600"></i>
                <span>8(985) 006-16-17</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ГородЛома. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
