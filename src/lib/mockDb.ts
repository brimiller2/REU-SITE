export type Role = 'student' | 'employee';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  group?: string;
  position?: string;
  faculty?: string;
}

export const users: User[] = [
  {
    id: '1',
    email: '123@gmail.com',
    name: 'Иванов Иван Иванович',
    role: 'student',
    group: 'ПИ-21-1',
    faculty: 'Высшая школа кибертехнологий, математики и статистики'
  },
  {
    id: '2',
    email: '456@gmail.com',
    name: 'Петров Петр Петрович',
    role: 'employee',
    position: 'Декан',
    faculty: 'Высшая школа экономики и бизнеса'
  }
];

export const schedules: Record<string, Array<{time: string, subject: string, room: string, type: 'lecture' | 'practice' | 'seminar'}>> = {
  'ПИ-21-1': [
    { time: '08:30 - 10:05', subject: 'Базы данных', room: 'Корпус 3, ауд. 137', type: 'lecture' },
    { time: '10:15 - 11:50', subject: 'Программирование', room: 'Корпус 2, ауд. 412', type: 'practice' },
    { time: '14:00 - 15:35', subject: 'Высшая математика', room: 'Корпус 1, ауд. 204', type: 'seminar' }
  ]
};
