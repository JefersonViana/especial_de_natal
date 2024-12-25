import s from './footer.module.scss';
import instagram from '../../assets/instagram.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import presente from '../../assets/presente.png';

const Footer = () => {
  return (
    <footer>
      <nav className={s.footer_nav_left}>
        <ul>
          <l1><a href="https://www.linkedin.com/company/vainaweb/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a></l1>
          <l1><a href="https://www.instagram.com/vainaweb/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" /></a></l1>
          <l1><a href="https://github.com/vainaweb" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a></l1>
        </ul>
      </nav>
      <section className={s.footer_section_center}>
        <p>Aluno: Jeferson Viana</p>
        <p>Instrutora: Fernanda Corrêa</p>
        <p>Facilitador: João Pedro</p>
        <p>Layout criado para fins natalistícos na escola vai na web</p>
      </section>
      <section className={s.footer_section_right}>
        <img src={presente} alt="" />
      </section>
    </footer>
  );
};

export default Footer;