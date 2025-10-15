import * as S from './styles'
import { AiOutlineCalendar } from 'react-icons/ai'

const Hero = () => {
  return (
    <S.Hero>
      <S.HeroContent className='container'>
        <S.HeroTitle>
          Seu sorriso merece o <span>melhor cuidado</span>
        </S.HeroTitle>
        <S.HeroSubtitle>
          Excelência odontológica aliada a um ambiente acolhedor e moderno,<br />
          para que cada visita seja uma experiência única.
        </S.HeroSubtitle>
        <S.HeroButton>
          <AiOutlineCalendar size={22}/>
          Agendar Consulta
        </S.HeroButton>
      </S.HeroContent>
    </S.Hero>
  )
}

export default Hero
