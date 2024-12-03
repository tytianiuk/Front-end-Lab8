import '../index.css';
import Header from './header/header';
import StartSection from './start-section';

const Page = () => {
  return (
    <div className='font-comfortaa'>
      <Header />
      <main>
        <StartSection />
      </main>
    </div>
  );
};

export default Page;
