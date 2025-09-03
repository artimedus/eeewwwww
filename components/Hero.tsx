
'use client';

export default function Hero() {
  return (
    <section 
      className="relative bg-cover bg-center min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Industrial%20metal%20recycling%20facility%20with%20modern%20equipment%2C%20large%20piles%20of%20various%20scrap%20metals%20including%20copper%20pipes%2C%20steel%20beams%2C%20aluminum%20sheets%2C%20organized%20warehouse%20environment%2C%20professional%20lighting%2C%20clean%20industrial%20atmosphere%2C%20workers%20in%20safety%20gear%2C%20modern%20machinery%20for%20metal%20processing%2C%20orange%20and%20gray%20color%20scheme%2C%20realistic%20photography%20style&width=1920&height=1080&seq=hero-metal&orientation=landscape')`
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Скупаем металл по <span className="text-orange-400">высоким ценам</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Честная оценка, моментальная оплата, вывоз собственным транспортом. 
            Работаем с физическими и юридическими лицами более 15 лет.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors whitespace-nowrap cursor-pointer">
              Узнать цену сейчас
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer">
              Вызвать оценщика
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-400">
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-orange-400 mb-2">15+</div>
              <div className="text-gray-200">лет на рынке</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-200">прием заявок</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-orange-400 mb-2">5000+</div>
              <div className="text-gray-200">довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
