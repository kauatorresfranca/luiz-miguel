import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import heroImage from '../../../assets/images/hero.png';
import heroImageMobile from '../../../assets/images/heroMobile.png';
import { breakpoints, colors } from '../../../../styles';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const HeroSection = styled.section`
  width: 100%;
  height: 90vh;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start; // Garante o alinhamento à esquerda

  @media (max-width: ${breakpoints.laptop}) {
    background-image: url(${heroImageMobile});
    height: 85vh;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%);
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    background: rgba(0,0,0,0.5); // Overlay mais uniforme no mobile
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start; // Conteúdo colado na esquerda do container
  height: 100%;
  width: 100%;
`;

export const InfoBox = styled(motion.div)`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Alinha itens internos à esquerda
  text-align: left; // Garante texto à esquerda
  gap: 20px;
`;

export const Tag = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(200, 160, 79, 0.15);
  border: 1px solid ${colors.secondary};
  color: ${colors.secondary};
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const HeroTitle = styled.h1`
  font-size: 52px;
  line-height: 1.1;
  font-weight: 800;
  color: #fff;

  span {
    color: ${colors.secondary};
    display: block;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 34px;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  max-width: 480px;
  font-weight: 400;
  line-height: 1.6;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`;

export const HeroButton = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  background: ${colors.secondary};
  color: ${colors.title};
  border-radius: 6px;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 15px rgba(200, 160, 79, 0.2);

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
    box-shadow: 0 12px 20px rgba(200, 160, 79, 0.3);
  }

  svg {
    animation: ${pulse} 2s infinite ease-in-out;
  }
`;