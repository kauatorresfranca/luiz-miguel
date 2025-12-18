import styled from 'styled-components';
import { breakpoints, colors } from '../../../../styles';

export const FAQ = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px 0;
  background: ${colors.background};

  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px 16px;
  }
`;

export const FAQTitle = styled.h2` // Alterado para h2 por hierarquia
  position: relative;
  font-size: 32px;
  color: ${colors.primary};
  margin: 0 auto 40px auto;
  text-align: center;
  font-weight: 700;

  &::before {
    display: block;
    content: '';
    width: 60px;
    height: 4px;
    border-radius: 10px;
    background-color: ${colors.secondary};
    margin: 0 auto 16px auto;
  }
`;

export const FAQList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px; /* Espaço entre os cards */
`;

export const FAQItem = styled.li`
  background-color: #ffffff;
  border-radius: 12px;
  /* Box shadow para contraste sem usar bordas grossas */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); 
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const FAQQuestion = styled.button` /* Alterado para button para melhor acessibilidade */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 24px;
  font-size: 18px;
  color: ${colors.primary};
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.3s ease;

  i {
    font-size: 24px;
    color: ${colors.text}; /* Cor de destaque no ícone */
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.active {
    background-color: ${colors.primary}05; /* Fundo levemente azulado/primário */
    
    i {
      transform: rotate(180deg);
      color: ${colors.primary};
    }
  }
`;

export const FAQAnswer = styled.div`
  max-height: 0;
  overflow: hidden;
  font-size: 16px;
  line-height: 1.6;
  color: #555; /* Cor de texto mais suave para o conteúdo */
  transition: max-height 0.4s ease, padding 0.4s ease, opacity 0.3s ease;
  opacity: 0;
  background-color: #fff;

  &.active {
    max-height: 300px; /* Ajuste conforme o tamanho do texto */
    opacity: 1;
    padding: 0 24px 20px 24px;
  }
`;