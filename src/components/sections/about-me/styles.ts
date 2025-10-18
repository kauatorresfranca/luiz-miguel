import styled from 'styled-components';
import { breakpoints, colors } from '../../../../styles';

export const AboutMe = styled.section`
  display: flex;
  align-items: center;
  gap: 40px;
  background: linear-gradient(125deg, ${colors.primary} 0%, #114781ff 100%);
  padding: 60px 40px 0 40px;
  border-radius: 40px 40px 20px 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.laptop}) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

export const AboutMeImage = styled.div`
  width: 300px;
  min-height: 300px;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Maintain aspect ratio, cover the area */
    object-position: top; /* Ensure the top of the head is visible */
  }

  @media (max-width: ${breakpoints.laptop}) {
    width: 200px;
    min-height: 200px;
  }
`;

export const AboutMeContent = styled.div`
  max-width: 800px;
`;

export const AboutMeTitle = styled.h2`
  position: relative;
  font-size: 32px;
  color: ${colors.title};
  font-weight: 700;
  margin-bottom: 16px;

  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 40px;
    background-color: ${colors.secondary};
    margin-right: 10px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
  }
`;

export const AboutMeSubtitle = styled.h3`
  font-size: 18px;
  color: ${colors.secondary};
  font-weight: 500;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`;

export const AboutMeDescription = styled.p`
  font-size: 18px;
  color: ${colors.text};
  line-height: 1.6;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`;

export const AboutMeTraining = styled.div`
  margin-top: 32px;
`;

export const AboutMeTrainingTitle = styled.h4`
  font-size: 20px;
  color: ${colors.title};
  font-weight: 700;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
`;

export const AboutMeTrainingList = styled.ul`
  padding-left: 0;
  list-style: none;

  li {
    font-size: 16px;
    color: ${colors.text};
    margin-bottom: 8px;
    position: relative;
    padding-left: 20px;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: ${colors.secondary};
    }

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
    }
  }
`;