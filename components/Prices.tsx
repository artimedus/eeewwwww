
'use client';

export default function Prices() {
  const priceData = [
    {
      category: 'Черный металл',
      items: [
        { name: 'Стальная стружка', price: '8-12' },
        { name: 'Чугун', price: '12-18' },
        { name: 'Металлолом 3А', price: '15-22' },
        { name: 'Металлолом 5А', price: '18-25' }
      ]
    },
    {
      category: 'Цветной металл',
      items: [
        { name: 'Медь микс', price: '450-520' },
        { name: 'Медь блеск', price: '520-580' },
        { name: 'Алюминий профиль', price: '85-110' },
        { name: 'Алюминий пищевой', price: '95-125' }
      ]
    },
    {
      category: 'Нержавейка',
      items: [
        { name: 'Нержавейка 12Х18Н10Т', price: '95-120' },
        { name: 'Нержавейка пищевая', price: '110-140' },
        { name: 'Нержавейка техническая', price: '85-105' },
        { name: 'Нержавейка стружка', price: '60-80' }
      ]
    }
  ];

  return (
    <section id="prices" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Актуальные цены на металл
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Цены обновляются ежедневно в зависимости от биржевых котировок. 
            Точную стоимость узнавайте по телефону
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {priceData.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-orange-600 text-white p-6">
                <h3 className="text-xl font-bold text-center">{category.category}</h3>
              </div>
              <div className="p-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">{item.name}</span>
                    <span className="font-semibold text-orange-600">{item.price} ₽/кг</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Почему наши цены выше?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-arrow-right-circle-fill text-orange-600 mr-3 mt-1"></i>
                  <div>
                    <div className="font-semibold text-gray-900">Прямые поставки</div>
                    <div className="text-gray-600">Работаем напрямую с заводами без посредников</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-arrow-right-circle-fill text-orange-600 mr-3 mt-1"></i>
                  <div>
                    <div className="font-semibold text-gray-900">Большие объемы</div>
                    <div className="text-gray-600">Благодаря объемам получаем лучшие цены от переработчиков</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-arrow-right-circle-fill text-orange-600 mr-3 mt-1"></i>
                  <div>
                    <div className="font-semibold text-gray-900">Минимальные издержки</div>
                    <div className="text-gray-600">Оптимизированные процессы позволяют больше платить клиентам</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-xl p-8">
                <div className="text-4xl font-bold text-orange-600 mb-2">+15%</div>
                <div className="text-lg text-gray-700 mb-4">выше рыночных цен</div>
                <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer">
                  Узнать точную цену
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          * Цены указаны ориентировочные и могут изменяться в зависимости от качества металла и объема партии
        </div>
      </div>
    </section>
  );
}
