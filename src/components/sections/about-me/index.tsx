import * as S from './styles';
import aboutImage from '../../../assets/images/aboutMe.png';

const AboutMe = () => {
  return (
    <S.AboutMe className="container" id="about-me">
      <S.AboutMeImage>
        <img src={aboutImage} alt="Dr. Luiz Miguel Torres" />
      </S.AboutMeImage>
      <S.AboutMeContent>
        <S.AboutMeTitle>Dr. Luiz Miguel Torres</S.AboutMeTitle>
        <S.AboutMeSubtitle>Dentista | CRO/AL 6549</S.AboutMeSubtitle>
        <S.AboutMeDescription>
          Sou o Dr. Luiz Miguel Torres, dentista apaixonado por transformar sorrisos e promover saúde bucal com excelência.
          Com uma abordagem moderna e humanizada, uno tecnologia e sensibilidade para alcançar resultados estéticos e funcionais que valorizam cada paciente.
          Especializado em prótese dentária, ofereço soluções personalizadas para reabilitação e restauração oral, sempre priorizando o conforto, a confiança e o bem-estar em cada atendimento.
          No consultório, cada detalhe é pensado para que sua experiência seja positiva, acolhedora e transformadora.
        </S.AboutMeDescription>
      </S.AboutMeContent>
    </S.AboutMe>
  );
};

export default AboutMe;