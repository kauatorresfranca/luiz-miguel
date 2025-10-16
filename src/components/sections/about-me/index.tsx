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
          Sou Dr. Luiz Miguel Torres, dentista apaixonado por transformar sorrisos e promover saúde bucal. Formado em 2024 pela UMJ/FAT Alagoas, trago uma abordagem moderna e humanizada, com foco em resultados estéticos e funcionais. Minha especialização em prótese dentária me permite oferecer soluções personalizadas para restauração e reabilitação oral. Atuo em consultório particular, priorizando o conforto e a confiança dos meus pacientes, sempre com base nas mais recentes técnicas odontológicas.
        </S.AboutMeDescription>
        <S.AboutMeTraining>
          <S.AboutMeTrainingTitle>Formação e Experiência</S.AboutMeTrainingTitle>
          <S.AboutMeTrainingList>
            <li>Graduação em Odontologia - UMJ/FAT Alagoas (2024)</li>
            <li>Especialização em Prótese Dentária (em andamento)</li>
            <li>Atendimento clínico em consultório particular (2024-atual)</li>
          </S.AboutMeTrainingList>
        </S.AboutMeTraining>
      </S.AboutMeContent>
    </S.AboutMe>
  );
};

export default AboutMe;