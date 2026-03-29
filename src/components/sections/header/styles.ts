import styled from 'styled-components';
import { breakpoints, colors } from '../../../../styles';

type HeaderProps = {
  scrollProgress: number;
};

type NavMobileProps = {
  isOpen: boolean;
};

export const HeaderWrapper = styled.header<HeaderProps>`
  position: fixed;
  top: ${({ scrollProgress }) => (scrollProgress > 0.5 ? '10px' : '20px')};
  left: 0;
  right: 0;
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: ${({ scrollProgress }) =>
    `rgba(255, 255, 255, ${1 - 0.2 * scrollProgress})`};
  backdrop-filter: blur(${({ scrollProgress }) => scrollProgress * 12}px);
  -webkit-backdrop-filter: blur(${({ scrollProgress }) => scrollProgress * 12}px);
  border: 1px solid ${({ scrollProgress }) => `rgba(255, 255, 255, ${0.3 * scrollProgress})`};
  border-radius: ${({ scrollProgress }) => (scrollProgress > 0.5 ? '15px' : '24px')};
  box-shadow: ${({ scrollProgress }) => 
    scrollProgress > 0.1 
    ? '0 10px 30px rgba(0, 0, 0, 0.08)' 
    : '0 4px 20px rgba(0, 0, 0, 0.05)'};
`;

export const Container = styled.div<HeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ scrollProgress }) => (scrollProgress > 0.5 ? '8px 24px' : '14px 32px')};
  transition: padding 0.4s ease;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 12px 20px;
  }
`;

export const Logo = styled.img`
  width: 110px;
  height: auto;
  transition: transform 0.3s ease;

  @media (max-width: ${breakpoints.mobile}) {
    width: 90px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const NavItem = styled.a`
  padding: 8px 16px;
  text-decoration: none;
  color: ${colors.primary};
  font-weight: 600;
  font-size: 15px;
  position: relative;
  transition: color 0.3s ease;

  @media (min-width: ${breakpoints.mobile}) {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: ${colors.secondary};
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    &:hover {
      color: ${colors.secondary};
      &::after {
        width: 60%;
      }
    }
  }
`;

export const HeaderCTA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${colors.primary};
  color: #fff;
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-left: 10px;

  &:hover {
    background-color: ${colors.secondary};
    transform: translateY(-2px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
    
    &.mobile-cta {
      display: flex;
      margin: 10px 20px 20px;
    }
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  font-size: 28px;
  color: ${colors.primary};
  cursor: pointer;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
  }
`;

export const NavMobile = styled.nav<NavMobileProps>`
  display: none;
  flex-direction: column;
  background: white;
  border-radius: 0 0 20px 20px;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  overflow: hidden;
  transition: all 0.4s ease-in-out;

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
  }

  ${NavItem} {
    padding: 16px;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    width: 100%;
    text-align: center;
  }
`;