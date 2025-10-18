import * as S from './styles';

import service1 from "../../../assets/images/service1.svg"
import service2 from "../../../assets/images/service2.svg"
import service3 from "../../../assets/images/service3.svg"
import service4 from "../../../assets/images/service4.svg"
import service6 from "../../../assets/images/service6.svg"

const Services = () => {
  return (
    <S.Services className="container" id='services'>
      <h3>
        Especialidades
      </h3>
      <S.ServicesList>
        <S.ServiceItem>
          <img src={service1} alt="" />
          <h4>Restauração Estética</h4>
          <p>Restauração dos dentes para um sorriso natural e perfeito.</p>
        </S.ServiceItem>
        <S.ServiceItem>
          <img src={service2} alt="" />
          <h4>Próteses Removíveis</h4>
          <p>Prótese totais ou parcial para substituição de dentes ausentes.</p>
        </S.ServiceItem>
        <S.ServiceItem>
          <img src={service3} alt="" />
          <h4>Limpeza</h4>
          <p>Limpeza profissional para manter a saúde bucal impecável.</p>
        </S.ServiceItem>
        <S.ServiceItem>
          <img src={service4} alt="" />
          <h4>Coroa</h4>
          <p>Colocação de coroas para proteção e estética dental.</p>
        </S.ServiceItem>
        <S.ServiceItem>
          <img src={service1} alt="" />
          <h4>Restauração</h4>
          <p>Restauração dos dentes para um sorriso natural e perfeito.</p>
        </S.ServiceItem>
        <S.ServiceItem>
          <img src={service6} alt="" />
          <h4>Clareamento</h4>
          <p>Clareamento dental seguro para dentes mais brancos.</p>
        </S.ServiceItem>
      </S.ServicesList>
    </S.Services>
  );
};

export default Services;