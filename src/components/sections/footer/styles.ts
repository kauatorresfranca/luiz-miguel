import styled from 'styled-components';
import { colors, breakpoints } from '../../../../styles';

export const FooterWrapper = styled.footer`
  background-color: #ffffff;
  padding-top: 80px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

export const Container = styled.div`
  margin: 0 auto;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
  padding-bottom: 60px;
`;

export const LogoWrapper = styled.div`
  img {
    width: 240px;
    height: auto;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const FooterDescription = styled.p`
  font-size: 18px;
  color: ${colors.text};
  max-width: 550px;
  line-height: 1.6;
  font-weight: 400;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
    padding: 0 20px;
  }
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const SocialMediaLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  background-color: ${colors.primary}08; // Fundo azul bem suave
  border: 1px solid ${colors.primary}15;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    background-color: ${colors.secondary};
    transform: translateY(-5px);
    border-color: ${colors.secondary};
    box-shadow: 0 10px 20px rgba(200, 160, 79, 0.25);
    
    img {
      filter: brightness(0) invert(1); // Deixa o ícone branco no hover
    }
  }

  img {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease;
  }
`;

export const CopyrightBar = styled.div`
  background-color: ${colors.primary};
  padding: 24px 0;
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
      gap: 12px;
      text-align: center;
    }
  }

  p, a {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: ${colors.secondary};
  }

  strong {
    font-weight: 700;
    color: #fff;
  }
`;