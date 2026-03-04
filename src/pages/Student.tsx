import { motion } from 'motion/react';
import { Calendar, Book, Users, Bell, MapPin, Clock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { schedules } from '../lib/mockDb';
import { Navigate } from 'react-router-dom';

export default function Student() {
  const { user } = useAuth();

  if (!user || user.role !== 'student') {
    return <Navigate to="/" replace />;
  }

  const schedule = user.group ? schedules[user.group] : [];

  const services = [
    { icon: Calendar, title: 'Расписание занятий', desc: 'Актуальное расписание пар и сессии' },
    { icon: Book, title: 'Электронная библиотека', desc: 'Доступ к учебным материалам и статьям' },
    { icon: Users, title: 'Студенческий совет', desc: 'Внеучебная жизнь и мероприятия' },
    { icon: Bell, title: 'Уведомления', desc: 'Важные объявления от деканата' },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Личный кабинет студента</h1>
            <p className="text-slate-600 text-lg">{user.name}</p>
            <div className="flex items-center gap-3 mt-2 text-sm font-medium">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Группа: {user.group}</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full">{user.faculty}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-medium text-slate-900">Осенний семестр 2024</div>
              <div className="text-xs text-slate-500">Идет 4-я учебная неделя</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a
                href="#"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
              >
                <div className="w-12 h-12 shrink-0 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-sm text-slate-500">{service.desc}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Важные объявления</h2>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-md">Важно</span>
                    <span className="text-sm text-slate-500">12 Октября 2024</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Начало приема заявок на повышенную стипендию</h3>
                  <p className="text-slate-600 text-sm">Открыт прием документов на назначение повышенной государственной академической стипендии за достижения в учебной, научно-исследовательской, общественной, культурно-творческой и спортивной деятельности.</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Расписание на сегодня</h2>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
                <span className="font-medium">Вторник, 15 Октября</span>
                <span className="text-sm bg-white/20 px-2 py-1 rounded">Числитель</span>
              </div>
              <div className="divide-y divide-slate-100">
                {schedule && schedule.length > 0 ? (
                  schedule.map((item, idx) => (
                    <div key={idx} className={`p-4 flex gap-4 hover:bg-slate-50 ${item.type === 'practice' ? 'border-l-4 border-blue-500 bg-blue-50/30' : ''}`}>
                      <div className="text-sm font-bold text-slate-900 w-12 shrink-0">
                        {item.time.split(' - ')[0]}<br/>
                        <span className="text-slate-400 font-normal">{item.time.split(' - ')[1]}</span>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm mb-1">
                          {item.subject} <span className="text-slate-500 font-normal">({item.type === 'lecture' ? 'Лекция' : item.type === 'practice' ? 'Практика' : 'Семинар'})</span>
                        </div>
                        <div className="text-xs text-slate-500 flex items-center gap-2">
                          <MapPin className="w-3 h-3" /> {item.room}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center text-slate-500">
                    <Clock className="w-8 h-8 mx-auto mb-3 opacity-50" />
                    <p>На сегодня пар нет</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
