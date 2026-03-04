import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Faculties from '../components/Faculties';
import News from '../components/News';

export default function Home() {
  return (
    <div className="pt-0">
      <Hero />
      <Stats />
      <Faculties />
      <News />
    </div>
  );
}
