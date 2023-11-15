import './index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from 'src/pages/AboutPage/AboutPage.async';
import { MainPageAsync } from 'src/pages/MainPage/MainPage.async';

export const App = () => {
  return (
    <div className='app'>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О сайте</Link>
      <Routes>
        <Route path='/about' element={<AboutPageAsync />} />
        <Route path='/' element={<MainPageAsync />} />
      </Routes>
    </div>
  );
};
