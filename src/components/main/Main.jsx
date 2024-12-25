import s from './main.module.scss';
import papaiNoel from "../../assets/papai_noel.png";
import globo from "../../assets/globo_natal.png";
import cidade_1 from "../../assets/cidades_para_viajar_no_natal_1.png";
import cidade_3 from "../../assets/cidades_para_viajar_no_natal_3.png";
import atracoes from "../../assets/atracoes_do_natal_luz_em_gramado.png";

const Main = () => {
  return (
    <main>
      <section id='inicio' className={s.main_section_up}>
        <img src={papaiNoel} alt="" />
      </section>
      <section id='curiosidade' className={s.main_section_center}>
        <img src={globo} alt="" />
        <p>A origem do globo de neve é incerta, mas acredita-se que tenha surgido na Europa no século XIX, tornando-se um símbolo de magia, afeto e encantamento, especialmente no Natal, trazendo um toque de nostalgia e maravilha para as celebrações e encantando gerações ao redor do mundo.</p>
      </section>
      <section id='galeria' className={s.main_section_down}>
        <img src={cidade_1} alt="" />
        <img src={atracoes} alt="" />
        <img src={cidade_3} alt="" />
      </section>
    </main>
  );
};

export default Main;