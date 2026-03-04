import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                П
              </div>
              <div className="font-bold leading-tight text-white">
                <span className="block text-lg">РЭУ им. Г.В. Плеханова</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Первый экономический университет России. Основан в 1907 году.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Обучение</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Бакалавриат</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Магистратура</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Аспирантура</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Дополнительное образование</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Бизнес-образование (MBA)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Университет</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Об университете</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Руководство</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Структура</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Наука и инновации</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Международное сотрудничество</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>117997, Российская Федерация, г. Москва, Стремянный пер., 36</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>+7 (495) 958-21-83</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>rector@rea.ru</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} ФГБОУ ВО «РЭУ им. Г.В. Плеханова». Все права защищены.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Карта сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
