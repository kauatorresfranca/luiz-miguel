import * as S from './styles';
import logo from '../../../assets/images/logo.svg';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Use Heroicons for thinner hamburger and close icons

const navItems = [
  { label: 'Início', href: '#home' },
  { label: 'Serviços', href: '#services' },
  { label: 'Sobre mim', href: '#about-me' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <S.Header className="container">
      <S.Logo src={logo} alt="Logo Luiz Miguel" />
      <S.Nav>
        {navItems.map((item) => (
          <S.NavItem href={item.href} key={item.label}>
            {item.label}
          </S.NavItem>
        ))}
      </S.Nav>
      <S.BurgerMenu onClick={toggleMenu}>
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </S.BurgerMenu>
      <S.NavMobile isOpen={isMenuOpen}>
        {navItems.map((item) => (
          <S.NavItem href={item.href} key={item.label} onClick={toggleMenu}>
            {item.label}
          </S.NavItem>
        ))}
      </S.NavMobile>
    </S.Header>
  );
};

export default Header;