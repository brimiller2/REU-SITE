import { motion } from 'motion/react';
import { FileText, CheckCircle, Calendar, GraduationCap, ArrowRight } from 'lucide-react';

export default function Abiturient() {
  const steps = [
    {
      title: 'Выбор программы',
      description: 'Ознакомьтесь с направлениями подготовки и выберите подходящее.',
      icon: GraduationCap,
    },
    {
      title: 'Подача документов',
      description: 'Подайте заявление онлайн через Госуслуги или лично в приемной комиссии.',
      icon: FileText,
    },
    {
      title: 'Вступительные испытания',
      description: 'Сдайте внутренние экзамены, если это предусмотрено программой.',
      icon: Calendar,
    },
    {
      title: 'Зачисление',
      description: 'Отслеживайте конкурсные списки и предоставьте оригинал аттестата.',
      icon: CheckCircle,
    },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6"
          >
            Приемная кампания 2024
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
          >
            Поступление в <span className="text-blue-600">РЭУ им. Г.В. Плеханова</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Станьте частью первого экономического университета страны. Мы готовим лидеров, способных отвечать на вызовы современной экономики.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Как поступить</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 relative z-10">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">{step.title}</h3>
                  <p className="text-slate-600 relative z-10">{step.description}</p>
                  <div className="mt-6 text-2xl font-black text-slate-100 absolute bottom-4 right-6">
                    0{index + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Готовы подать документы?</h2>
            <p className="text-blue-100 text-lg">
              Подайте заявление онлайн через портал Госуслуг и следите за конкурсными списками.
            </p>
          </div>
          <a href="https://www.gosuslugi.ru/vuz" target="_blank" rel="noopener noreferrer" className="shrink-0 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors flex items-center gap-2">
            Перейти на Госуслуги <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
