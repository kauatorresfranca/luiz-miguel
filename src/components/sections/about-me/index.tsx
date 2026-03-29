import * as S from './styles';
import aboutImage from '../../../assets/images/aboutMe.png';

const AboutMe = () => {
  return (
    <S.AboutContainer id="about-me">
      <div className="container">
        <S.AboutWrapper>
          <S.ImageSide>
            <S.ImageCard>
              <img src={aboutImage} alt="Dr. Luiz Miguel Torres" />
              <S.ExperienceBadge>
                <span>CRO / AL</span>
                <strong>6549</strong>
              </S.ExperienceBadge>
              {/* Elemento decorativo atrás da imagem */}
              <div className="dots-pattern"></div>
            </S.ImageCard>
          </S.ImageSide>

          <S.ContentSide>
            <S.Tag>Excelência em Odontologia</S.Tag>
            <S.Title>Dr. Luiz Miguel Torres</S.Title>
            <S.Subtitle>Especialista em Prótese Dentária & Reabilitação Oral</S.Subtitle>
            
            <S.Description>
              Com uma abordagem <strong>moderna e humanizada</strong>, uno tecnologia de ponta e sensibilidade clínica para alcançar resultados que vão além da estética, devolvendo a funcionalidade e a autoestima de cada paciente.
            </S.Description>
            
            <S.Description>
              No meu consultório, cada detalhe é planejado para que sua experiência seja acolhedora. Minha missão é transformar o cuidado bucal em um momento de bem-estar, segurança e confiança renovada.
            </S.Description>

            <S.FeaturesGrid>
              <div className="feature">
                <div className="icon-wrapper">
                  <i className="ri-shield-check-line"></i>
                </div>
                <span>Atendimento Humanizado</span>
              </div>
              <div className="feature">
                <div className="icon-wrapper">
                  <i className="ri-microscope-line"></i>
                </div>
                <span>Alta Tecnologia</span>
              </div>
              <div className="feature">
                <div className="icon-wrapper">
                  <i className="ri-medal-line"></i>
                </div>
                <span>Reabilitação Oral</span>
              </div>
            </S.FeaturesGrid>
          </S.ContentSide>
        </S.AboutWrapper>
      </div>
    </S.AboutContainer>
  );
};

export default AboutMe;