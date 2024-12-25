import arvore from '../../assets/arvore.png';
import s from './header.module.scss';
import './header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <section>
        <img src={arvore} alt="arvore de natal" />
        <p className={s.font_great}>Feliz Natal!!!</p>
      </section>
      <nav>
        <ul>
          <li><a className={s.font_great} href="#inicio">Inicio</a></li>
          <li><a className={s.font_great} href="#curiosidade">Curiosidade</a></li>
          <li><a className={s.font_great} href="#galeria">Galeria</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;