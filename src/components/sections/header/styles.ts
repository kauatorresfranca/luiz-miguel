import styled from 'styled-components';
import { colors } from '../../../../styles';

export const Header = styled.header`
    position: fixed;
    top: 32px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 24px 32px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.img`
  width: 120px;
`;

export const Nav = styled.nav`
  display: flex;
  margin-top: 6px;
`;

export const NavItem = styled.a`
  padding: 12px 16px;
  text-decoration: none;
  color: ${colors.primary};
  border-bottom: 2px solid transparent;
  font-weight: 600;

  &.active {
    color: ${colors.secondary};

    &::after {
      width: 100%;
    }
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    margin-top: 6px;
    background: ${colors.secondary};
    transition: width 0.3s ease;
    }

    &:hover {
      color: ${colors.secondary};

      &::after {
        width: 100%;
      }
    }
`;