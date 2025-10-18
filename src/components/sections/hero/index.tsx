import * as S from './styles'
import { MdChatBubbleOutline } from 'react-icons/md'

const Hero = () => {
  return (
    <S.Hero>
      <S.HeroContent className='container'>
        <S.HeroTitle>
          Eleve sua autoestima com o <span>sorriso que você sempre sonhou</span>
        </S.HeroTitle>
        <S.HeroSubtitle>
          Tratamento individualizado e humanizado, com a segurança e excelência que seu sorriso merece.
        </S.HeroSubtitle>
        <S.HeroButton href="https://api.whatsapp.com/send?phone=5582996614416&text=Olá,%20gostaria%20de%20marcar%20uma%20consulta." target="_blank" rel="noopener noreferrer">
          <MdChatBubbleOutline size={22}/>
          Transforme seu sorriso
        </S.HeroButton>
      </S.HeroContent>
    </S.Hero>
  )
}

export default Hero
