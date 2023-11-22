import { Suspense } from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <div>
        <button onClick={toggleTheme}>Тема</button>
      </div>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О сайте</Link>
      <AppRouter />
    </div>
  );
};
