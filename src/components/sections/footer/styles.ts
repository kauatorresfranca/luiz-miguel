import styled from 'styled-components';
import { colors, breakpoints } from '../../../../styles';

export const Footer = styled.footer`
  background-color: ${colors.background};
  padding: 0;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`;

export const LogoWrapper = styled.div`
  img {
    width: 220px;
    max-width: 100%;
    height: auto;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const FooterDescription = styled.p`
  font-size: 16px;
  color: ${colors.primary};
  font-weight: 400;
  line-height: 1.6;
  max-width: 700px;
  margin: 0;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
    max-width: 90%;
  }
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  gap: 16px;
  margin: 24px 0;
`;

export const SocialMediaLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: ${colors.primary};
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.primary}99;
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 24px;
    height: 24px;
    transition: color 0.3s ease;

    &:hover {
      color: #ffffff;
    }
  }
`;

export const FooterText = styled.p`
  width: 100%;
  font-size: 14px;
  color: ${colors.text};
  opacity: 0.7;
  margin: 0;
  padding: 16px 0;
  border-top: 1px solid ${colors.text};
  font-weight: 300;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
  }
`;
