import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import heroImage from '../../../assets/images/hero.png';
import heroImageMobile from '../../../assets/images/heroMobile.png';
import { breakpoints, colors } from '../../../../styles';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export const HeroSection = styled.section`
  width: 100%;
  height: 95vh; // Aumentado levemente para maior imponência
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center right; // Garante que o rosto (geralmente à direita) apareça
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    background-image: url(${heroImageMobile});
    height: 90vh;
    background-position: center;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Gradiente mais suave para não escurecer a foto inteira */
  background: linear-gradient(
    90deg, 
    rgba(0, 0, 0, 0.8) 0%, 
    rgba(0, 0, 0, 0.4) 60%, 
    rgba(0, 0, 0, 0.1) 100%
  );
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    background: linear-gradient(
      0deg, 
      rgba(0, 0, 0, 0.8) 0%, 
      rgba(0, 0, 0, 0.4) 100%
    );
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;

export const InfoBox = styled(motion.div)`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 24px;
  padding: 0 20px;

  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
`;

export const Tag = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(200, 160, 79, 0.15);
  border: 1px solid ${colors.secondary};
  color: ${colors.secondary};
  padding: 8px 18px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const HeroTitle = styled.h1`
  font-size: 58px;
  line-height: 1.1;
  font-weight: 800;
  color: #fff;

  span {
    color: ${colors.secondary};
    display: block;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 38px;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 19px;
  color: rgba(255, 255, 255, 0.9);
  max-width: 520px;
  font-weight: 400;
  line-height: 1.6;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 17px;
  }
`;

export const HeroButton = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 36px;
  background: ${colors.secondary};
  color: ${colors.title}; // Cor escura para contraste no botão dourado
  border-radius: 8px;
  text-decoration: none;
  font-weight: 800;
  font-size: 16px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 20px rgba(200, 160, 79, 0.3);

  &:hover {
    transform: translateY(-4px) scale(1.02);
    filter: brightness(1.1);
    box-shadow: 0 15px 25px rgba(200, 160, 79, 0.4);
  }

  svg {
    animation: ${pulse} 2s infinite ease-in-out;
  }
`;