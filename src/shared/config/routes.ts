import React, {  LazyExoticComponent, FC } from 'react';
import { IPage } from 'shared/types/page.interface';

const MainPage = React.lazy(() => import('pages/MainPage'));


export interface IRoute {
  path: string;
  exact?: boolean;
  name: string;
  element?: LazyExoticComponent<FC<IPage>>;
}

//Добавляем роуты тут

const routes: IRoute[] = [
  { path: '/main', name: 'Главная', element: MainPage },

];

export default routes;
