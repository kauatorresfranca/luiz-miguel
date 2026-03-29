import { useState } from 'react';
import * as S from './styles';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Como agendar uma consulta?',
      answer:
        'Você pode agendar sua consulta diretamente pelo nosso WhatsApp ou telefone. Nossa equipe verificará a melhor disponibilidade para atendê-lo em nosso consultório em Maceió.',
    },
    {
      question: 'Quais são as formas de pagamento?',
      answer:
        'Trabalhamos com diversas modalidades: Cartões de Crédito (com opção de parcelamento), Débito, PIX e dinheiro. O acerto é realizado no dia do atendimento.',
    },
    {
      question: 'O Dr. Luiz atende convênios ou planos de saúde?',
      answer:
        'Atualmente realizamos apenas atendimentos particulares. Isso nos permite dedicar o tempo necessário para cada procedimento, garantindo a excelência e o rigor técnico que sua saúde merece.',
    },
    {
      question: 'Quanto tempo dura uma consulta?',
      answer:
        'Depende do procedimento. Uma avaliação inicial ou limpeza costuma durar entre 40 a 60 minutos. Reabilitações complexas podem levar até 120 minutos para total precisão.',
    },
    {
      question: 'Quais são as principais especialidades oferecidas?',
      answer:
        'O foco principal do Dr. Luiz Miguel é em Reabilitação Oral e Prótese Dentária, mas oferecemos um leque completo de serviços como Restaurações Estéticas, Profilaxia (Limpeza) e Planejamento Digital do Sorriso.',
    },
    {
      question: 'Onde está localizado o consultório?',
      answer:
        'Nosso espaço está estrategicamente localizado em Maceió, Alagoas, com estrutura moderna e pronta para oferecer o máximo de conforto durante seu tratamento.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <S.FAQSection id="faq">
      <div className="container">
        <S.FAQHeader>
          <S.Tag>Suporte ao Paciente</S.Tag>
          <S.FAQTitle>Dúvidas Frequentes</S.FAQTitle>
        </S.FAQHeader>

        <S.FAQList>
          {faqs.map((faq, index) => (
            <S.FAQItem key={index} className={activeIndex === index ? 'active' : ''}>
              <S.FAQQuestion
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                {faq.question}
                <div className="icon-circle">
                  <i className="ri-arrow-down-s-line"></i>
                </div>
              </S.FAQQuestion>
              <S.FAQAnswer className={activeIndex === index ? 'active' : ''}>
                <div className="answer-content">
                  {faq.answer}
                </div>
              </S.FAQAnswer>
            </S.FAQItem>
          ))}
        </S.FAQList>
      </div>
    </S.FAQSection>
  );
};

export default FAQ;