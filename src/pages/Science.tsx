import { motion } from 'motion/react';
import { Microscope, Lightbulb, TrendingUp, BookOpen, ArrowRight } from 'lucide-react';

export default function Science() {
  const centers = [
    {
      title: 'Институт цифровой экономики',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
      tags: ['ИИ', 'Big Data', 'Блокчейн']
    },
    {
      title: 'Лаборатория поведенческой экономики',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      tags: ['Нейромаркетинг', 'Анализ данных']
    },
    {
      title: 'Центр устойчивого развития',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop',
      tags: ['ESG', 'Зеленая экономика']
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
            Наука и <span className="text-blue-600">инновации</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            РЭУ им. Г.В. Плеханова — ведущий научно-исследовательский центр, формирующий экономическую повестку страны.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { value: '35+', label: 'Научных школ', icon: BookOpen },
            { value: '150+', label: 'Патентов в год', icon: Lightbulb },
            { value: '2.5B₽', label: 'Объем НИОКР', icon: TrendingUp },
            { value: '40+', label: 'Лабораторий', icon: Microscope },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center"
              >
                <div className="w-10 h-10 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Research Centers */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Передовые научные центры</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {centers.map((center, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={center.image} 
                  alt={center.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {center.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-md text-xs font-medium text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {center.title}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-400 text-sm font-medium opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    Подробнее <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Grants & Support */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-blue-100"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Поддержка молодых ученых</h2>
            <p className="text-slate-600 text-lg mb-6">
              Университет предоставляет гранты, стипендии и инфраструктуру для реализации студенческих научных проектов и стартапов.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors">
                Подать заявку на грант
              </button>
              <button className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-medium transition-colors">
                Студенческое научное общество
              </button>
            </div>
          </div>
          <div className="hidden lg:block w-48 h-48 bg-blue-200 rounded-full flex items-center justify-center shrink-0">
            <Lightbulb className="w-20 h-20 text-blue-600" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
