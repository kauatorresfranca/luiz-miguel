import * as S from './styles';
import logo from '../../../assets/images/logo.svg';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = [
  { label: 'Início', href: '#' },
  { label: 'Serviços', href: '#services' },
  { label: 'Sobre mim', href: '#about-me' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll to calculate progress (0 to 1) over 200px
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 200; // Transition completes at 200px
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / maxScroll, 1); // Clamp between 0 and 1
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  return (
    <S.Header className="container" scrollProgress={scrollProgress}>
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