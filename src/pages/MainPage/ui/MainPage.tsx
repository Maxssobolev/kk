import { FC } from 'react';
import { IPage } from 'shared/types/page.interface';
import classes from './MainPage.module.scss';


export const MainPage: FC<IPage> = ({name}) => {

  return (
    <div className={classes.MainPage}>
      <h1 className='text-lg'>{name}</h1>
    </div>
  );
}