import styled from 'styled-components';
import { breakpoints, colors } from '../../../../styles';

type NavMobileProps = {
  isOpen: boolean;
};

export const Header = styled.header`
  position: fixed;
  top: 32px;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap; /* Allow wrapping for NavMobile */
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 8px 32px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
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
  width: 100%; /* Full width within Header */
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')}; /* Large enough for all items */
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease;

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
    display: none; /* Remove previous ::after styles */
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  font-size: 24px; /* Size of FaBars/FaTimes */
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