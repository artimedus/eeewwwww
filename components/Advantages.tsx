
'use client';

export default function Advantages() {
  const advantages = [
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Высокие цены',
      description: 'Предлагаем цены выше рыночных благодаря прямым поставкам на заводы без посредников'
    },
    {
      icon: 'ri-time-line',
      title: 'Быстрая оплата',
      description: 'Расчет производится сразу после взвешивания - наличными или переводом на карту'
    },
    {
      icon: 'ri-truck-line',
      title: 'Бесплатный вывоз',
      description: 'Приедем в любую точку города и области, погрузим и вывезем металл собственным транспортом'
    },
    {
      icon: 'ri-scales-3-line',
      title: 'Точное взвешивание',
      description: 'Используем сертифицированные весы с поверкой, взвешивание проходит в присутствии клиента'
    },
    {
      icon: 'ri-file-text-line',
      title: 'Все документы',
      description: 'Оформляем все необходимые документы для юридических лиц, работаем с НДС'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Лицензия и гарантии',
      description: 'Имеем все необходимые лицензии, застрахованы, предоставляем гарантию честности сделки'
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают именно нас?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            За 15 лет работы мы создали идеальную систему скупки металла, 
            которая выгодна клиентам и удобна в использовании
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-lg mb-6">
                <i className={`${advantage.icon} text-2xl text-orange-600`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
              <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Работаем со всеми видами металла
              </h3>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-center">
                  <i className="ri-checkbox-circle-line text-orange-600 mr-2"></i>
                  Черный металл
                </div>
                <div className="flex items-center">
                  <i className="ri-checkbox-circle-line text-orange-600 mr-2"></i>
                  Медь и латунь
                </div>
                <div className="flex items-center">
                  <i className="ri-checkbox-circle-line text-orange-600 mr-2"></i>
                  Алюминий
                </div>
                <div className="flex items-center">
                  <i className="ri-checkbox-circle-line text-orange-600 mr-2"></i>
                  Нержавейка
                </div>
                <div className="flex items-center">
                  <i className="ri-checkbox-circle-line text-orange-600 mr-2"></i>
                  Свинец
                </div>
                <div className="flex items-center">
                  <i className="ri-checkbox-circle-line text-orange-600 mr-2"></i>
                  Цинк
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Various%20types%20of%20scrap%20metals%20neatly%20organized%2C%20copper%20pipes%2C%20aluminum%20sheets%2C%20steel%20beams%2C%20brass%20fittings%2C%20stainless%20steel%20parts%2C%20lead%20materials%2C%20zinc%20pieces%2C%20professional%20industrial%20sorting%2C%20clean%20warehouse%20environment%2C%20good%20lighting%2C%20realistic%20photography&width=600&height=400&seq=metal-types&orientation=landscape"
                alt="Виды металлов"
                className="rounded-lg shadow-md w-full h-64 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
