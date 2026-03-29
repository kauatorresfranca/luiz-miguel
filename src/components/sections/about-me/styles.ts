import styled from 'styled-components';
import { breakpoints, colors } from '../../../../styles';

export const AboutContainer = styled.section`
  padding: 100px 0;
  background: linear-gradient(125deg, ${colors.primary} 0%, #114781ff 100%);
  overflow: hidden;
`;

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 80px;
  align-items: center;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: 1fr;
    gap: 40px;
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
  max-width: 400px;
  
  &::after {
    content: '';
    position: absolute;
    top: 20px;
    left: -20px;
    width: 100%;
    height: 100%;
    border: 2px solid ${colors.secondary};
    border-radius: 30px;
    z-index: 0;
  }

  img {
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 30px;
    z-index: 1;
    display: block;
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }
`;

export const ExperienceBadge = styled.div`
  position: absolute;
  bottom: 30px;
  right: -20px;
  background: ${colors.primary};
  color: #fff;
  padding: 15px 25px;
  border-radius: 15px;
  z-index: 2;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.8;
  }

  strong {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const ContentSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tag = styled.span`
  color: ${colors.secondary};
  font-weight: 700;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 12px;
`;

export const Title = styled.h2`
  font-size: 48px;
  color: ${colors.title};
  font-weight: 800;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 22px;
  color: ${colors.secondary};
  font-weight: 500;
  margin-bottom: 24px;
`;

export const Description = styled.p`
  font-size: 18px;
  color: ${colors.text};
  line-height: 1.8;
  margin-bottom: 20px;

  strong {
    color: ${colors.primary};
    font-weight: 600;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;

  .feature {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (max-width: ${breakpoints.laptop}) {
      align-items: center;
    }

    i {
      font-size: 28px;
      color: ${colors.primary};
    }

    span {
      font-size: 14px;
      font-weight: 600;
      color: ${colors.title};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;