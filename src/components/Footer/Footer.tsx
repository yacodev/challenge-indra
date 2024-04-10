import logoWhite from '../../assets/logo-white.svg';
import './footer.scss';

export const FooterPage = () => {
  return (
    <footer className='footer__container'>
      <div className='logo'>
        <img src={logoWhite} alt='' />
      </div>

      <span>© 2024 RIMAC Seguros y Reaseguros.</span>
    </footer>
  );
};
