import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

export  function Loader() {
  return (
    <div className={css.loader}>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="blue"
        secondaryColor="white"
      />
    </div>
  );
}