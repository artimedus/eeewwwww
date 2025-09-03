
'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готовы принять вашу заявку и ответить на все вопросы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg mr-4">
                  <i className="ri-phone-line text-orange-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Телефон</h3>
                  <p className="text-gray-600 mb-1">Прием заявок круглосуточно</p>
                  <a href="tel:8-985-006-16-17" className="text-orange-600 font-semibold text-lg hover:text-orange-700 cursor-pointer">
                    8(985) 006-16-17
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg mr-4">
                  <i className="ri-whatsapp-line text-orange-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-600 mb-1">Быстрая связь в мессенджере</p>
                  <a href="https://wa.me/79850061617" className="text-orange-600 font-semibold hover:text-orange-700 cursor-pointer">
                    Написать в WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg mr-4">
                  <i className="ri-mail-line text-orange-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600 mb-1">Отправьте запрос на почту</p>
                  <a href="mailto:info@gorodloma.ru" className="text-orange-600 font-semibold hover:text-orange-700 cursor-pointer">
                    info@gorodloma.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg mr-4">
                  <i className="ri-map-pin-line text-orange-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Адрес</h3>
                  <p className="text-gray-600 mb-1">Пункт приема металлолома</p>
                  <p className="text-gray-800">
                    г. Москва, ул. Промышленная, д. 15к2
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Работаем: пн-пт 8:00-18:00, сб 9:00-15:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Заявка на оценку</h3>
            <form id="contact-form" className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                <input 
                  type="tel" 
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="8(985) 006-16-17"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Вид металла</label>
                <select name="metal_type" className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                  <option value="">Выберите вид металла</option>
                  <option value="black_metal">Черный металл</option>
                  <option value="copper">Медь</option>
                  <option value="aluminum">Алюминий</option>
                  <option value="stainless">Нержавейка</option>
                  <option value="brass">Латунь</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Примерный вес (кг)</label>
                <input 
                  type="number" 
                  name="weight"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Например: 500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Комментарий</label>
                <textarea 
                  name="comment"
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Опишите металл, его состояние, адрес вывоза"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}