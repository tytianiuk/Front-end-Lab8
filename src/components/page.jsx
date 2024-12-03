import '../index.css';
import Header from './header/header';
import StartSection from './start-section';
import CategoriesSection from './category/categories-section';

const Page = () => {
  return (
    <div className='font-comfortaa'>
      <Header />
      <main>
        <StartSection />
        <CategoriesSection />
      </main>
    </div>
  );
};

export default Page;
