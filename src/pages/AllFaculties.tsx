import { motion } from 'motion/react';
import { ArrowRight, Search } from 'lucide-react';

export default function AllFaculties() {
  const faculties = [
    {
      name: 'Высшая школа экономики и бизнеса',
      programs: ['Экономика предприятий', 'Мировая экономика', 'Бизнес-аналитика'],
      color: 'bg-blue-600'
    },
    {
      name: 'Высшая школа кибертехнологий, математики и статистики',
      programs: ['Прикладная информатика', 'Математическое обеспечение', 'Информационная безопасность'],
      color: 'bg-indigo-600'
    },
    {
      name: 'Высшая школа менеджмента',
      programs: ['Менеджмент организации', 'Маркетинг', 'Управление проектами'],
      color: 'bg-emerald-600'
    },
    {
      name: 'Высшая школа финансов',
      programs: ['Финансы и кредит', 'Банковское дело', 'Налоги и налогообложение'],
      color: 'bg-amber-600'
    },
    {
      name: 'Высшая школа права',
      programs: ['Юриспруденция', 'Правовое обеспечение национальной безопасности'],
      color: 'bg-rose-600'
    },
    {
      name: 'Высшая школа социально-гуманитарных наук',
      programs: ['Политология', 'Социология', 'Психология'],
      color: 'bg-purple-600'
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Все специальности и направления
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            РЭУ им. Г.В. Плеханова предлагает широкий выбор образовательных программ бакалавриата, специалитета и магистратуры.
          </p>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none bg-white shadow-sm text-lg"
              placeholder="Поиск по специальностям..."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faculties.map((faculty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col h-full"
            >
              <div className={`${faculty.color} p-6 text-white`}>
                <h2 className="text-2xl font-bold leading-tight">{faculty.name}</h2>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Популярные программы</h3>
                <ul className="space-y-3 mb-8 flex-grow">
                  {faculty.programs.map((program, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span>{program}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-blue-600 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 mt-auto">
                  Подробнее о школе <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
