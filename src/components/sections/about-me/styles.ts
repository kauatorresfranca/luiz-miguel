import styled from 'styled-components';
import { breakpoints, colors } from '../../../../styles';

export const AboutContainer = styled.section`
  padding: 120px 0;
  background-color: #fdfdfd; // Fundo claro para melhor leitura e sofisticação
  overflow: hidden;
  position: relative;
`;

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 100px;
  align-items: center;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
`;

export const ImageSide = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const ImageCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: -20px;
    width: 100%;
    height: 100%;
    border: 3px solid ${colors.secondary};
    border-radius: 40px;
    z-index: -1;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 40px;
    display: block;
    box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.1);
  }

  .dots-pattern {
    position: absolute;
    bottom: -30px;
    left: -30px;
    width: 100px;
    height: 100px;
    background-image: radial-gradient(${colors.secondary} 2px, transparent 2px);
    background-size: 15px 15px;
    z-index: -2;
    opacity: 0.4;
  }
`;

export const ExperienceBadge = styled.div`
  position: absolute;
  top: 40px;
  right: -25px;
  background: ${colors.secondary};
  color: ${colors.title};
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(200, 160, 79, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 110px;

  span {
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 4px;
  }

  strong {
    font-size: 24px;
    font-weight: 900;
    font-family: 'Montserrat', sans-serif;
  }

  @media (max-width: ${breakpoints.tablet}) {
    right: 10px;
    top: -20px;
  }
`;

export const ContentSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tag = styled.span`
  color: ${colors.secondary};
  font-weight: 800;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 3px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '';
    width: 30px;
    height: 2px;
    background-color: ${colors.secondary};
  }
`;

export const Title = styled.h2`
  font-size: 48px;
  color: ${colors.primary};
  font-weight: 800;
  margin-bottom: 16px;
  line-height: 1.2;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 600;
  margin-bottom: 30px;
  font-style: italic;
`;

export const Description = styled.p`
  font-size: 18px;
  color: ${colors.text};
  line-height: 1.8;
  margin-bottom: 24px;
  text-align: justify;

  strong {
    color: ${colors.primary};
    font-weight: 700;
  }

  @media (max-width: ${breakpoints.laptop}) {
    text-align: center;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-top: 20px;

  .feature {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;

    @media (max-width: ${breakpoints.laptop}) {
      align-items: center;
    }

    .icon-wrapper {
      width: 50px;
      height: 50px;
      background-color: rgba(200, 160, 79, 0.1);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      i {
        font-size: 26px;
        color: ${colors.secondary};
      }
    }

    span {
      font-size: 14px;
      font-weight: 700;
      color: ${colors.primary};
      line-height: 1.2;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;