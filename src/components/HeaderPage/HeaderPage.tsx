import logo from '../../assets/logo.png';
import telephone from '../../assets/telephone.svg';
import './headerPage.scss';

export const HeaderPage = () => {
  return (
    <nav className='header__container'>
      <div className='header__container--logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='header__container--info'>
        <span className='header__container--text'>¡Compra por este medio!</span>
        <img src={telephone} alt='phone' width='15px' />
        <span className='header__container--number'>(01) 411 6000</span>
      </div>
    </nav>
  );
};
