
'use client';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Заявка',
      description: 'Звоните или оставляете заявку на сайте. Описываете вид и примерное количество металла'
    },
    {
      number: '02', 
      title: 'Оценка',
      description: 'Наш специалист приезжает для оценки металла и назначает окончательную цену'
    },
    {
      number: '03',
      title: 'Взвешивание',
      description: 'Производим точное взвешивание на сертифицированных весах в вашем присутствии'
    },
    {
      number: '04',
      title: 'Вывоз',
      description: 'Грузим металл в наш транспорт и вывозим, оставляя территорию чистой'
    },
    {
      number: '05',
      title: 'Оплата',
      description: 'Мгновенно рассчитываемся наличными или переводом, оформляем все документы'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Как проходит сделка?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Простой и прозрачный процесс сдачи металла - от звонка до получения денег
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full">
                  <div className="h-0.5 bg-orange-200 -translate-x-8"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Готовы сдать металл?</h3>
          <p className="text-lg mb-6 opacity-90">
            Получите бесплатную оценку прямо сейчас!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-phone-line mr-2"></i>
              Позвонить сейчас
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-message-line mr-2"></i>
              Написать в WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
