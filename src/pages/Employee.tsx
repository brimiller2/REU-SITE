import { motion } from 'motion/react';
import { Users, FileText, Settings, Calendar } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function Employee() {
  const { user } = useAuth();

  if (!user || user.role !== 'employee') {
    return <Navigate to="/" replace />;
  }

  const actions = [
    { icon: Users, title: 'Управление студентами', desc: 'Списки групп, успеваемость' },
    { icon: FileText, title: 'Документооборот', desc: 'Приказы, распоряжения, служебные записки' },
    { icon: Calendar, title: 'Расписание', desc: 'Управление расписанием преподавателей' },
    { icon: Settings, title: 'Настройки факультета', desc: 'Управление образовательными программами' },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Кабинет сотрудника</h1>
            <p className="text-slate-600 text-lg">{user.name}</p>
            <div className="flex items-center gap-3 mt-2 text-sm font-medium">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">{user.position}</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full">{user.faculty}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.a
                href="#"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
              >
                <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{action.title}</h3>
                <p className="text-sm text-slate-500">{action.desc}</p>
              </motion.a>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Последние документы на подпись</h2>
          <div className="space-y-4">
            {[
              { title: 'Приказ об отчислении №123', date: '15.10.2024', status: 'Ожидает подписи' },
              { title: 'Служебная записка о переносе занятий', date: '14.10.2024', status: 'Ожидает подписи' },
              { title: 'Утверждение учебного плана ПИ-22', date: '12.10.2024', status: 'Подписано' },
            ].map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">{doc.title}</div>
                    <div className="text-sm text-slate-500">{doc.date}</div>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${doc.status === 'Подписано' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                  {doc.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
