import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function AllNews() {
  const allNews = [
    {
      id: 1,
      title: 'РЭУ им. Г.В. Плеханова вошел в топ-10 лучших вузов России по уровню зарплат выпускников',
      date: '15 Марта 2024',
      category: 'Достижения',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Открыта регистрация на Плехановскую олимпиаду школьников',
      date: '12 Марта 2024',
      category: 'Абитуриентам',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Студенты РЭУ разработали инновационный проект для умного города',
      date: '10 Марта 2024',
      category: 'Наука и инновации',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Встреча с представителями ведущих банков России',
      date: '08 Марта 2024',
      category: 'Карьера',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'Новая лаборатория искусственного интеллекта открыта в главном корпусе',
      date: '05 Марта 2024',
      category: 'Инфраструктура',
      image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'Спортивная команда РЭУ заняла первое место в межвузовском чемпионате',
      date: '01 Марта 2024',
      category: 'Спорт',
      image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Все новости и события
          </h1>
          <div className="flex flex-wrap gap-2">
            {['Все', 'Абитуриентам', 'Наука и инновации', 'Достижения', 'Карьера', 'Спорт'].map((cat, i) => (
              <button key={i} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allNews.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm group cursor-pointer flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-600">
                  {item.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <div className="mt-auto inline-flex items-center gap-2 text-blue-600 font-medium text-sm">
                  Читать далее <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <button className="px-8 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-medium transition-colors">
            Загрузить еще
          </button>
        </div>
      </div>
    </div>
  );
}
