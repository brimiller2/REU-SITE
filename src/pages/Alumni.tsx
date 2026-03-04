import { motion } from 'motion/react';
import { Briefcase, Users, Award, MapPin, ArrowRight } from 'lucide-react';

export default function Alumni() {
  const benefits = [
    {
      title: 'Карьерный центр',
      description: 'Помощь в трудоустройстве, консультации по резюме и доступ к закрытым вакансиям партнеров.',
      icon: Briefcase,
    },
    {
      title: 'Клуб выпускников',
      description: 'Нетворкинг, закрытые мероприятия и встречи с успешными выпускниками РЭУ.',
      icon: Users,
    },
    {
      title: 'Скидки на обучение',
      description: 'Специальные условия на программы дополнительного образования и MBA.',
      icon: Award,
    },
    {
      title: 'Доступ в кампус',
      description: 'Возможность посещать библиотеку, коворкинги и спортивные объекты университета.',
      icon: MapPin,
    },
  ];

  const stories = [
    {
      name: 'Анна Смирнова',
      role: 'Финансовый директор, Яндекс',
      year: 'Выпуск 2015',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
      quote: 'РЭУ дал мне не только фундаментальные знания, но и невероятный нетворк, который помогает мне на протяжении всей карьеры.'
    },
    {
      name: 'Михаил Иванов',
      role: 'Основатель FinTech стартапа',
      year: 'Выпуск 2018',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
      quote: 'Именно в стенах университета я нашел своих будущих партнеров по бизнесу и получил первые инвестиции на питч-сессии.'
    },
    {
      name: 'Елена Попова',
      role: 'Партнер консалтинговой компании',
      year: 'Выпуск 2012',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
      quote: 'Преподаватели-практики научили нас мыслить стратегически. Это то, что отличает выпускников Плехановки.'
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
          >
            Сообщество <span className="text-blue-600">выпускников</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Связь с университетом не заканчивается после получения диплома. Присоединяйтесь к Ассоциации выпускников РЭУ им. Г.В. Плеханова.
          </motion.p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Истории успеха</h2>
            <button className="hidden md:flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
              Все истории <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-blue-600 mb-1">{story.year}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{story.name}</h3>
                  <div className="text-sm text-slate-500 mb-4">{story.role}</div>
                  <p className="text-slate-700 italic">«{story.quote}»</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Оформить карту выпускника</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Получите доступ ко всем привилегиям Ассоциации выпускников РЭУ. Оформление карты займет всего пару минут.
          </p>
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-colors inline-flex items-center gap-2">
            Получить карту
          </button>
        </motion.div>
      </div>
    </div>
  );
}
