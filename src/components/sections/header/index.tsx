import * as S from './styles'
import logo from '../../../assets/images/logo.svg'

const Header = () => {
  return (
    <S.Header className='container'>
      <S.Logo src={logo} alt="Logo Luiz Miguel" />
      <S.Nav>
        <S.NavItem href="#services" className='active'>Serviços</S.NavItem>
        <S.NavItem href="#about-me">Sobre mim</S.NavItem>
        <S.NavItem href="#testimonials">Depoimentos</S.NavItem>
        <S.NavItem href="#faq">FAQ</S.NavItem>
        <S.NavItem href="#contact">Contato</S.NavItem>
      </S.Nav>
    </S.Header>
  )
}

export default Header