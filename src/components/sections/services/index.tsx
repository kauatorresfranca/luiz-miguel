import * as S from './styles';
import { FaTooth } from 'react-icons/fa'; // Placeholder dental icon (troque por img depois)

const Services = () => {
  return (
    <S.Services className="container" id='services'>
      <h3>
        Especialidades
      </h3>
      <S.ServicesList>
        <S.ServiceItem>
          <FaTooth />
          <h4>Restauração Estética</h4>
          <p>Restauração dos dentes para um sorriso natural e perfeito.</p>
        </S.ServiceItem>
        <S.ServiceItem>
          <FaTooth />
          <h4>Prótese Total</h4>
          <p>Prótese completa para substituição total de dentes ausentes.</p>
        </S.ServiceItem>
        <S.ServiceItem>
          <FaTooth />
          <h4>Limpeza</h4>
          <p>Limpeza profissional para manter a saúde bucal impecável.</p>
        </S.ServiceItem>
        <S.ServiceItem>
          <FaTooth />
          <h4>Coroa</h4>
          <p>Colocação de coroas para proteção e estética dental.</p>
        </S.ServiceItem>
        <S.ServiceItem>
          <FaTooth />
          <h4>Atendimento Infantil</h4>
          <p>Cuidados odontológicos especializados para crianças.</p>
        </S.ServiceItem>
        <S.ServiceItem>
          <FaTooth />
          <h4>Clareamento</h4>
          <p>Clareamento dental seguro para dentes mais brancos.</p>
        </S.ServiceItem>
        <S.ServiceItem>
          <FaTooth />
          <h4>Prótese Parcial</h4>
          <p>Prótese parcial para dentes ausentes selecionados.</p>
        </S.ServiceItem>
        <S.ServiceItem>
          <FaTooth />
          <h4>Aparelho Ortodôntico</h4>
          <p>Correção de alinhamento dentário com aparelhos modernos.</p>
        </S.ServiceItem>
      </S.ServicesList>
    </S.Services>
  );
};

export default Services;