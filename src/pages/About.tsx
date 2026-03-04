import { motion } from 'motion/react';
import { History, Target, Globe, Award, Play, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6"
          >
            Основан в 1907 году
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
          >
            Первый экономический <br />
            <span className="text-blue-600">университет России</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            РЭУ им. Г.В. Плеханова — это более вековая история успеха, инновационный подход к образованию и подготовка элиты национальной экономики.
          </motion.p>
        </div>

        {/* Video Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-24 group cursor-pointer"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Plekhanov_Russian_University_of_Economics.jpg/1920px-Plekhanov_Russian_University_of_Economics.jpg" 
            alt="Кампус РЭУ" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center transition-colors group-hover:bg-slate-900/50">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Наша миссия</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Содействие устойчивому социально-экономическому развитию России посредством формирования человеческого и интеллектуального капитала, проведения прорывных научных исследований и создания инноваций.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Видение</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Стать ведущим предпринимательским университетом мирового уровня, центром притяжения талантов и драйвером цифровой трансформации экономики.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 mb-24">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Вехи истории</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {[
              { year: '1907', title: 'Основание', desc: 'Открытие Московского коммерческого института — первого экономического вуза России.' },
              { year: '1924', title: 'Имя Плеханова', desc: 'Институту присвоено имя выдающегося мыслителя Г.В. Плеханова.' },
              { year: '2012', title: 'Объединение', desc: 'Присоединение РГТЭУ и СГСЭУ, создание крупнейшего экономического университета.' },
              { year: '2024', title: 'Современность', desc: 'Вхождение в топ мировых и национальных рейтингов, открытие новых цифровых лабораторий.' }
            ].map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <History className="w-4 h-4" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900 text-xl">{item.title}</h3>
                    <span className="font-bold text-blue-600">{item.year}</span>
                  </div>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Руководство</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ivan_Lobanov.jpg/800px-Ivan_Lobanov.jpg" 
              alt="Ректор" 
              className="w-48 h-48 rounded-2xl object-cover shrink-0"
              referrerPolicy="no-referrer"
            />
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Лобанов Иван Васильевич</h3>
              <div className="text-blue-600 font-medium mb-4">Ректор РЭУ им. Г.В. Плеханова</div>
              <p className="text-slate-600 mb-4">
                Кандидат юридических наук. Возглавляет университет с 2020 года. Под его руководством РЭУ активно развивает цифровые компетенции и укрепляет позиции в международных рейтингах.
              </p>
              <button className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-1">
                Страница ректора <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
