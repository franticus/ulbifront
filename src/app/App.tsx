import { Suspense } from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from 'pages/AboutPage/AboutPage.async';
import { MainPageAsync } from 'pages/MainPage/MainPage.async';
import { classNames } from 'helpers/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <div>
        <button onClick={toggleTheme}>Тема</button>
      </div>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageAsync />} />
          <Route path='/' element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
