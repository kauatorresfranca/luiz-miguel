import { useState } from 'react';
import * as S from './styles';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Como agendar uma consulta com o dentista?',
      answer:
        'Você pode agendar uma consulta pelo WhatsApp ou telefone. Entre em contato para verificar disponibilidade em Maceió',
    },
    {
      question: 'Quais são os métodos de pagamento aceitos?',
      answer:
        'Aceitamos cartões de crédito, débito, PIX e dinheiro. Pagamentos devem ser feitos no dia da consulta.',
    },
    {
      question: 'O dentista atende convênios ou planos de saúde?',
      answer:
        'Não, nosso consultório não atende convênios ou planos de saúde.',
    },
    {
      question: 'Quanto tempo dura uma consulta odontológica?',
      answer:
        'Uma consulta dura em média 40 a 120 minutos, dependendo do procedimento, para garantir um atendimento completo e personalizado.',
    },
    {
      question: 'Qual é o custo de uma consulta ou procedimento dental?',
      answer:
        'O valor varia conforme o tipo de tratamento (ex.: limpeza, prótese), mas é acessível e pode ser discutido na primeira consulta. Oferecemos pacotes e opções de pagamento facilitado.',
    },
    {
      question: 'Quais serviços de odontologia o Dr. Luiz oferece?',
      answer:
        'Oferecemos serviços como prótese dentária, restaurações, limpezas e tratamentos estéticos, todos realizados com técnicas modernas e personalizadas.',
    },
    {
      question: 'Os dados dos pacientes são confidenciais?',
      answer:
        'Sim, todos os atendimentos seguem o código de ética odontológica, garantindo total sigilo e confidencialidade.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <S.FAQ className='container' id="testimonials">
      <S.FAQTitle>
        Dúvidas Frequentes
      </S.FAQTitle>
      <S.FAQList>
        {faqs.map((faq, index) => (
          <S.FAQItem key={index}>
            <S.FAQQuestion
              onClick={() => toggleFAQ(index)}
              className={activeIndex === index ? 'active' : ''}
            >
              {faq.question} <i className="ri-arrow-down-s-line"></i>
            </S.FAQQuestion>
            <S.FAQAnswer
              className={activeIndex === index ? 'active' : 'hidden'}
            >
              {faq.answer}
            </S.FAQAnswer>
          </S.FAQItem>
        ))}
      </S.FAQList>
    </S.FAQ>
  );
};

export default FAQ;