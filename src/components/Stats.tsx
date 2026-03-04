import { motion } from 'motion/react';
import { Users, BookOpen, Globe2, Award } from 'lucide-react';

const stats = [
  {
    id: 1,
    name: 'Студентов',
    value: '50 000+',
    icon: Users,
    description: 'Обучаются в Москве и филиалах'
  },
  {
    id: 2,
    name: 'Образовательных программ',
    value: '200+',
    icon: BookOpen,
    description: 'Бакалавриат, магистратура, аспирантура'
  },
  {
    id: 3,
    name: 'Зарубежных вузов-партнеров',
    value: '130+',
    icon: Globe2,
    description: 'Программы двойного диплома и обмена'
  },
  {
    id: 4,
    name: 'Позиция в рейтингах',
    value: 'Топ-20',
    icon: Award,
    description: 'Лучших вузов России по версии RAEX'
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-slate-800 mb-2">{stat.name}</div>
                <div className="text-sm text-slate-500">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
