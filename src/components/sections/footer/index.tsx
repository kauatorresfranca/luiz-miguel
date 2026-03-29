import * as S from './styles';
import logo from '../../../assets/images/logo.svg';
import whatsappImage from '../../../assets/images/wpp.svg';
import emailImage from '../../../assets/images/email.svg';
import instagramImage from '../../../assets/images/instagram.svg';

const Footer = () => {
  const ano = new Date().getFullYear();
  
  return (
    <S.FooterWrapper>
      <S.Container className="container">
        <S.FooterContent>
          <S.LogoWrapper>
            <img src={logo} alt="Dr. Luiz Miguel Torres - Odontologia" />
          </S.LogoWrapper>
          
          <S.FooterDescription>
            Elevando a odontologia ao nível de excelência com tratamentos 
            humanizados e tecnologia de ponta em Maceió.
          </S.FooterDescription>
          
          <S.SocialMediaLinks>
            <S.SocialMediaLink
              href="https://api.whatsapp.com/send?phone=5582996614416&text=Olá,%20gostaria%20de%20marcar%20uma%20consulta."
              target="_blank"
              aria-label="Contato via WhatsApp"
            >
              <img src={whatsappImage} alt="WhatsApp" />
            </S.SocialMediaLink>
            
            <S.SocialMediaLink
              href="mailto:contato@drluizmigueltorres.com"
              aria-label="Enviar e-mail"
            >
              <img src={emailImage} alt="E-mail" />
            </S.SocialMediaLink>
            
            <S.SocialMediaLink
              href="https://www.instagram.com/dr.luizmigueltorres/"
              target="_blank"
              aria-label="Instagram"
            >
              <img src={instagramImage} alt="Instagram" />
            </S.SocialMediaLink>
          </S.SocialMediaLinks>
        </S.FooterContent>
      </S.Container>
      
      <S.CopyrightBar>
        <div className="container">
          <p>© {ano} Dr. Luiz Miguel Torres. Todos os direitos reservados.</p>
          <a 
            href="https://portfolio-kaua-torres.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Desenvolvido por <strong>Kauã Torres</strong>
          </a>
        </div>
      </S.CopyrightBar>
    </S.FooterWrapper>
  );
};

export default Footer;