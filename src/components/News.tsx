import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const news = [
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
  }
];

export default function News() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Новости и события
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Будьте в курсе последних событий, научных открытий и достижений нашего университета.
            </p>
          </div>
          <Link to="/news" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-full font-medium transition-colors">
            Все новости
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Link to="/news" key={item.id} className="group cursor-pointer block">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full flex flex-col"
              >
                <div className="relative h-64 mb-6 rounded-2xl overflow-hidden shrink-0">
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
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-3">
                  {item.title}
                </h3>
                <div className="mt-auto inline-flex items-center gap-2 text-blue-600 font-medium text-sm">
                  Читать далее <ArrowRight className="w-4 h-4" />
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
