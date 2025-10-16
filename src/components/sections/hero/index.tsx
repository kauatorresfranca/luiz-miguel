import * as S from './styles'
import { MdChatBubbleOutline } from 'react-icons/md'

const Hero = () => {
  return (
    <S.Hero>
      <S.HeroContent className='container'>
        <S.HeroTitle>
          Seu sorriso merece o <span>melhor cuidado</span>
        </S.HeroTitle>
        <S.HeroSubtitle>
          Excelência odontológica aliada a um ambiente acolhedor e moderno,
          para que cada visita seja uma experiência única.
        </S.HeroSubtitle>
        <S.HeroButton href="https://api.whatsapp.com/send?phone=5582996614416" target="_blank" rel="noopener noreferrer">
          <MdChatBubbleOutline size={22}/>
          Entrar em contato
        </S.HeroButton>
      </S.HeroContent>
    </S.Hero>
  )
}

export default Hero
