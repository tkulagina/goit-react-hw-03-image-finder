import { ThreeDots  } from 'react-loader-spinner';
import css from './Loader.module.css';

export function Loader() {
  return (
    <div>
      <ThreeDots className={css.loader} color="#3f51b5" height={200} width={200} />
    </div>
  );
}