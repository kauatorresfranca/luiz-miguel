import {
  RiStarFill,
  RiStarLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCloseLargeFill,
} from 'react-icons/ri';
import { useState, useRef } from 'react';
import * as S from './styles';
import client1 from '../../../assets/images/client1.png';
import client2 from '../../../assets/images/client2.png';
import client3 from '../../../assets/images/client3.png';
import result1 from '../../../assets/images/client1.png';
import result2 from '../../../assets/images/client2.png';
import result3 from '../../../assets/images/client3.png';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const testimonials = [
    {
      name: 'João Silva',
      avatar: client1,
      text: 'Dr. Luiz foi excepcional! A consulta foi detalhada, e o tratamento dos meus dentes foi impecável. Recomendo a todos que buscam um dentista profissional e atencioso.',
      rating: 5,
      photoUrl: result1,
    },
    {
      name: 'Carlos Menezes',
      avatar: client2,
      text: 'O trabalho do Dr. Luiz mudou meu sorriso! Ele explicou cada passo do processo de prótese dentária com paciência. Resultado incrível, valeu cada centavo!',
      rating: 5,
      photoUrl: result2,
    },
    {
      name: 'Ana Pereira',
      avatar: client3,
      text: 'Adorei o atendimento do Dr. Luiz! Como mulher, me senti super à vontade, e o resultado da minha restauração dental foi perfeito. Profissionalismo de alto nível!',
      rating: 5,
      photoUrl: result3,
    },
  ];

  const total = testimonials.length;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    // Use changedTouches for more accurate end position
    if (e.changedTouches && e.changedTouches.length > 0) {
      touchEndX.current = e.changedTouches[0].clientX;
    }
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (diff > threshold) {
      nextSlide();
    } else if (diff < -threshold) {
      prevSlide();
    }
  };

  return (
    <S.TestimonialsSection id="testimonials">
      <S.TestimonialsTitle>
        Depoimentos
      </S.TestimonialsTitle>
      <div className="container">
        <S.DesktopList>
          {testimonials.map((t) => (
            <S.Card key={t.name}>
              <S.CardHeader>
                <img src={t.avatar} alt={`Foto de ${t.name}`} />
                <div>
                  <h4>{t.name}</h4>
                  <S.Rating aria-label={`${t.rating ?? 5} de 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i key={i}>{i < (t.rating ?? 5) ? <RiStarFill /> : <RiStarLine />}</i>
                    ))}
                  </S.Rating>
                </div>
              </S.CardHeader>
              <S.Text>{t.text}</S.Text>
              {t.photoUrl && (
                <S.ResultThumb>
                  <img
                    src={t.photoUrl}
                    alt={`Resultado do atendimento de ${t.name}`}
                    onClick={() => setFullscreenImage(t.photoUrl!)}
                  />
                </S.ResultThumb>
              )}
            </S.Card>
          ))}
        </S.DesktopList>

        <S.MobileWrapper>
          <S.ArrowLeft onClick={prevSlide}>
            <RiArrowLeftSLine />
          </S.ArrowLeft>

          <S.Slider
            style={{ transform: `translateX(-${current * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((t) => (
              <S.Slide key={t.name}>
                <S.Card>
                  <S.CardHeader>
                    <img src={t.avatar} alt={`Foto de ${t.name}`} />
                    <div>
                      <h4>{t.name}</h4>
                      <S.Rating aria-label={`${t.rating ?? 5} de 5`}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <i key={i}>{i < (t.rating ?? 5) ? <RiStarFill /> : <RiStarLine />}</i>
                        ))}
                      </S.Rating>
                    </div>
                  </S.CardHeader>
                  <S.Text>{t.text}</S.Text>
                  {t.photoUrl && (
                    <S.ResultThumb>
                      <img
                        src={t.photoUrl}
                        alt={`Resultado do atendimento de ${t.name}`}
                        onClick={() => setFullscreenImage(t.photoUrl!)}
                      />
                    </S.ResultThumb>
                  )}
                </S.Card>
              </S.Slide>
            ))}
          </S.Slider>

          <S.ArrowRight onClick={nextSlide}>
            <RiArrowRightSLine />
          </S.ArrowRight>

          <S.Indicators>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={current === index ? 'active' : ''}
                onClick={() => setCurrent(index)}
              />
            ))}
          </S.Indicators>
        </S.MobileWrapper>
      </div>

      {fullscreenImage && (
        <S.FullscreenOverlay onClick={() => setFullscreenImage(null)}>
          <button
            className="close-btn"
            onClick={() => setFullscreenImage(null)}
            aria-label="Fechar imagem"
          >
            <RiCloseLargeFill />
          </button>
          <img src={fullscreenImage} alt="Imagem em tela cheia" />
        </S.FullscreenOverlay>
      )}
    </S.TestimonialsSection>
  );
};

export default Testimonials;