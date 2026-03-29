import * as S from './styles';
import logo from '../../../assets/images/logo.svg';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { MdWhatsapp } from 'react-icons/md';

const navItems = [
  { label: 'Início', href: '#' },
  { label: 'Especialidades', href: '#services' },
  { label: 'Sobre mim', href: '#about-me' },
  { label: 'FAQ', href: '#faq' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / 150, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <S.HeaderWrapper scrollProgress={scrollProgress}>
      <S.Container className="container" scrollProgress={scrollProgress}>
        <S.Logo src={logo} alt="Dr. Luiz Miguel Torres" />
        
        <S.Nav>
          {navItems.map((item) => (
            <S.NavItem href={item.href} key={item.label}>
              {item.label}
            </S.NavItem>
          ))}
          <S.HeaderCTA 
            href="https://api.whatsapp.com/send?phone=5582996614416&text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20marcar%20uma%20consulta."
            target="_blank"
          >
            <MdWhatsapp size={20} />
            Agendar Consulta
          </S.HeaderCTA>
        </S.Nav>

        <S.BurgerMenu onClick={toggleMenu}>
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </S.BurgerMenu>
      </S.Container>

      <S.NavMobile isOpen={isMenuOpen}>
        {navItems.map((item) => (
          <S.NavItem href={item.href} key={item.label} onClick={toggleMenu}>
            {item.label}
          </S.NavItem>
        ))}
        <S.HeaderCTA 
          href="https://api.whatsapp.com/send?phone=5582996614416"
          target="_blank"
          className="mobile-cta"
        >
          Agendar agora
        </S.HeaderCTA>
      </S.NavMobile>
    </S.HeaderWrapper>
  );
};

export default Header;