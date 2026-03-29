import * as S from './styles';

import service1 from "../../../assets/images/service1.svg"
import service2 from "../../../assets/images/service2.svg"
import service3 from "../../../assets/images/service3.svg"
import service4 from "../../../assets/images/service4.svg"
import service6 from "../../../assets/images/service6.svg"

const Services = () => {
  const especialidades = [
    { title: 'Restauração Estética', img: service1, desc: 'Reconstrução dos dentes para um sorriso natural e harmônico.' },
    { title: 'Próteses Removíveis', img: service2, desc: 'Soluções totais ou parciais para a substituição de dentes ausentes.' },
    { title: 'Limpeza Profissional', img: service3, desc: 'Prevenção e cuidados para manter sua saúde bucal sempre em dia.' },
    { title: 'Coroas Dentárias', img: service4, desc: 'Proteção e estética para dentes comprometidos com alta durabilidade.' },
    { title: 'Reabilitação Oral', img: service1, desc: 'Tratamentos complexos para devolver a função mastigatória total.' },
    { title: 'Clareamento Dental', img: service6, desc: 'Procedimentos seguros para dentes mais brancos e brilhantes.' },
  ];

  return (
    <S.ServicesSection id='services'>
      <div className="container">
        <S.Header>
          <S.Tag>O que fazemos</S.Tag>
          <S.Title>Nossas <span>Especialidades</span></S.Title>
          <S.Subtitle>
            Oferecemos soluções completas em odontologia moderna, focando no seu conforto e em resultados de excelência.
          </S.Subtitle>
        </S.Header>

        <S.ServicesGrid>
          {especialidades.map((item, index) => (
            <S.ServiceCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <S.IconWrapper>
                <img src={item.img} alt={item.title} />
              </S.IconWrapper>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <S.CardFooter />
            </S.ServiceCard>
          ))}
        </S.ServicesGrid>
      </div>
    </S.ServicesSection>
  );
};

export default Services;