import * as S from './styles'
import { MdChatBubbleOutline } from 'react-icons/md'
import { RiDoubleQuotesL } from 'react-icons/ri'

const Hero = () => {
  return (
    <S.HeroSection id="hero">
      <S.Overlay />
      <S.HeroContent className='container'>
        <S.InfoBox
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <S.Tag>
            <RiDoubleQuotesL /> Atendimento Premium
          </S.Tag>
          <S.HeroTitle>
            Eleve sua autoestima com o <span>sorriso que você sempre sonhou</span>
          </S.HeroTitle>
          <S.HeroSubtitle>
            Tratamento individualizado e humanizado em Maceió, com a segurança e excelência que sua saúde bucal merece.
          </S.HeroSubtitle>
          <S.HeroButton 
            href="https://api.whatsapp.com/send?phone=5582996614416&text=Olá,%20gostaria%20de%20marcar%20uma%20consulta." 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <MdChatBubbleOutline size={22}/>
            Agendar consulta agora
          </S.HeroButton>
        </S.InfoBox>
      </S.HeroContent>
    </S.HeroSection>
  )
}

export default Hero