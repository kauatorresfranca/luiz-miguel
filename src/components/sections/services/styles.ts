import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, breakpoints } from '../../../../styles';

export const ServicesSection = styled.section`
  padding: 100px 0;
  background-color: #f8faff; // Um tom de azul quase branco para passar limpeza
`;

export const Header = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Tag = styled.span`
  color: ${colors.secondary};
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  margin-bottom: 12px;
`;

export const Title = styled.h2`
  font-size: 40px;
  color: ${colors.primary};
  font-weight: 800;
  margin-bottom: 20px;

  span {
    color: ${colors.secondary};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: ${colors.text};
  line-height: 1.6;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled(motion.div)`
  background: #fff;
  padding: 40px 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.03);
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: ${colors.secondary};
  }

  h4 {
    font-size: 20px;
    color: ${colors.primary};
    margin-bottom: 16px;
    font-weight: 700;
  }

  p {
    font-size: 15px;
    color: ${colors.text};
    line-height: 1.6;
  }
`;

export const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background-color: rgba(200, 160, 79, 0.1); // Cor secundária bem clarinha
  border-radius: 50% 20% 50% 50%; // Formato assimétrico moderno
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  transition: 0.3s;

  img {
    width: 40px;
    height: 40px;
    transition: 0.3s;
  }

  ${ServiceCard}:hover & {
    background-color: ${colors.secondary};
    transform: rotate(-10deg);
    
    img {
      filter: brightness(0) invert(1); // Deixa o ícone branco no hover
    }
  }
`;

export const CardFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 4px;
  background-color: ${colors.secondary};
  transition: width 0.4s ease;

  ${ServiceCard}:hover & {
    width: 100%;
  }
`;