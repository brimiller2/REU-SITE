import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const faculties = [
  {
    name: 'Высшая школа экономики и бизнеса',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    color: 'from-blue-600/80 to-blue-900/90'
  },
  {
    name: 'Высшая школа кибертехнологий, математики и статистики',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    color: 'from-indigo-600/80 to-indigo-900/90'
  },
  {
    name: 'Высшая школа менеджмента',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    color: 'from-emerald-600/80 to-emerald-900/90'
  },
  {
    name: 'Высшая школа финансов',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
    color: 'from-amber-600/80 to-amber-900/90'
  },
  {
    name: 'Высшая школа права',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop',
    color: 'from-rose-600/80 to-rose-900/90'
  },
  {
    name: 'Высшая школа социально-гуманитарных наук',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    color: 'from-purple-600/80 to-purple-900/90'
  }
];

export default function Faculties() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Высшие школы и институты
            </h2>
            <p className="text-lg text-slate-600">
              Выберите свое направление среди множества образовательных программ, созданных совместно с индустриальными партнерами.
            </p>
          </div>
          <Link to="/faculties" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors group">
            Все подразделения
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculties.map((faculty, index) => (
            <Link
              to="/faculties"
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden block cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full h-full"
              >
                <img 
                  src={faculty.image} 
                  alt={faculty.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${faculty.color} opacity-80 transition-opacity duration-300 group-hover:opacity-90`} />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {faculty.name}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm font-medium opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    Подробнее <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
