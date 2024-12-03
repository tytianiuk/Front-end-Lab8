import '../index.css';
import Header from './header/header';
import StartSection from './start-section';
import CategoriesSection from './category/categories-section';
import LatestProductSection from './latest-product/latest-product-section';

const Page = () => {
  return (
    <div className='font-comfortaa'>
      <Header />
      <main>
        <StartSection />
        <CategoriesSection />
        <LatestProductSection />
      </main>
    </div>
  );
};

export default Page;
