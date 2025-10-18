import * as S from './styles';
import logo from '../../../assets/images/logo.svg';
import whatsappImage from '../../../assets/images/wpp.svg';
import emailImage from '../../../assets/images/email.svg';
import instagramImage from '../../../assets/images/instagram.svg';

const Footer = () => {
  const ano = new Date().getFullYear();
  return (
    <S.Footer>
      <S.FooterContent>
        <S.LogoWrapper>
          <img src={logo} alt="Dr. Luiz Miguel Torres - Odontologia" />
        </S.LogoWrapper>
        <S.FooterDescription>
          Transformando sorrisos com cuidado e excelência odontológica.
        </S.FooterDescription>
        <S.SocialMediaLinks>
          <S.SocialMediaLink
            href="https://api.whatsapp.com/send?phone=5582996614416&text=Olá,%20gostaria%20de%20marcar%20uma%20consulta."
            aria-label="Contato via WhatsApp"
          >
            <img src={whatsappImage} alt="icone do WhatsApp" />
          </S.SocialMediaLink>
          <S.SocialMediaLink
            href="mailto:contato@drluizmigueltorres.com"
            aria-label="Enviar e-mail"
          >
            <img src={emailImage} alt="icone do e-mail" />
          </S.SocialMediaLink>
          <S.SocialMediaLink
            href="https://www.instagram.com/dr.luizmigueltorres/"
            aria-label="Instagram do Dr. Luiz Miguel Torres"
          >
            <img src={instagramImage} alt="icone do Instagram" />
          </S.SocialMediaLink>
        </S.SocialMediaLinks>
        <S.FooterText>
          © {ano} Dr. Luiz Miguel Torres. Todos os direitos reservados.
        </S.FooterText>
      </S.FooterContent>
    </S.Footer>
  );
};

export default Footer;