 
import './App.css';
import { Blog } from './components/Blog';
import { Category } from './components/Category';
import { Discount } from './components/Discount';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { NewArrivals } from './components/NewArrivals';
import { News } from './components/News';

function App() {
  return (
  <>
<Navbar/>
<Hero/>
<Category/>
<Discount/>
<NewArrivals/>
<Blog/>
<News/>
<Footer/>
  </>
  );
}

export default App;
