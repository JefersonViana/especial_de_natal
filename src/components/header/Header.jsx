import arvore from '../../assets/arvore.png';
import './header.module.scss';

const Header = () => {
  return (
    <header>
      <section>
        <img src={arvore} alt="arvore de natal" />
        <p>Feliz Natal!!!</p>
      </section>
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#curiosidade">Curiosidade</a></li>
          <li><a href="#galeria">Galeria</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;