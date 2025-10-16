import styled from 'styled-components';
import { breakpoints, colors } from '../../../../styles';

type HeaderProps = {
  scrollProgress: number;
};

type NavMobileProps = {
  isOpen: boolean;
};

export const Header = styled.header<HeaderProps>`
  position: fixed;
  top: 32px;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 8px 32px;
  border-radius: 20px;
  background-color: ${({ scrollProgress }) =>
    `rgba(255, 255, 255, ${1 - 0.2 * scrollProgress})`}; /* 1.0 to 0.8 opacity */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.1));
  backdrop-filter: ${({ scrollProgress }) => `blur(${8 * scrollProgress}px)`}; /* 0px to 8px blur */
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  z-index: 1000;
`;

export const Logo = styled.img`
  width: 120px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 16px;
  margin-top: 6px;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const NavMobile = styled.nav<NavMobileProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const NavItem = styled.a`
  padding: 12px 16px;
  text-decoration: none;
  color: ${colors.primary};
  font-weight: 600;
  border-bottom: 2px solid transparent;
  transition: color 0.3s ease, border-bottom 0.3s ease;

  &.active {
    color: ${colors.secondary};
    border-bottom: 2px solid ${colors.secondary};
  }

  &:hover {
    color: ${colors.secondary};
    border-bottom: 2px solid ${colors.secondary};
  }

  &::after {
    display: none;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  font-size: 28px;
  color: ${colors.primary};
  cursor: pointer;
  margin-top: 6px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }

  &:hover {
    color: ${colors.secondary};
  }

  svg {
    transition: color 0.3s ease;
  }
`;