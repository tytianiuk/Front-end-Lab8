import '../index.css';
import Header from './header/header';
import StartSection from './start-section';
import CategoriesSection from './category/categories-section';
import LatestProductSection from './latest-product/latest-product-section';
import ChessClothesSection from './section-with-photo/chess-clothes-section';
import ChessItemsSection from './section-with-photo/chess-items-section';

const Page = () => {
  return (
    <div className='font-comfortaa'>
      <Header />
      <main>
        <StartSection />
        <CategoriesSection />
        <LatestProductSection />
        <ChessClothesSection />
        <ChessItemsSection />
      </main>
    </div>
  );
};

export default Page;
