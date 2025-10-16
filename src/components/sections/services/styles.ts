import styled from 'styled-components';
import { colors } from '../../../../styles'; // Ajuste o path se necessário

export const Services = styled.section`
  padding: 32px 0 0 80px;
  background-color: ${colors.background};
  min-height: 100vh;

  h3 {
    position: relative;
    font-size: 32px;
    margin-bottom: 3rem;
    color: ${colors.primary};
    margin: 0 auto 24px auto;
    text-align: center;
    font-weight: 700;

    &::before {
    display: block;
    content: '';
    width: 70px;
    height: 4px;
    border-radius: 10px;
    background-color: ${colors.secondary};
    margin: 0 auto 16px auto;
  }

    span {
      color: ${colors.secondary};
    }
  }
`;

export const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ServiceItem = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 320px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(200, 160, 79, 0.2); /* Shadow secondary */
  }

  svg { /* Estilo pro ícone FaTooth */
    width: 50px;
    height: 50px;
    color: ${colors.primary};
    padding: 0.5rem;
    border-radius: 50%;
    margin-bottom: 1rem;
    background-color: rgba(200, 160, 79, 0.4); /* Secondary transparent */
  }

  h4 {
    font-size: 18px;
    margin-bottom: 1rem;
    color: ${colors.primary};
    font-weight: 600;
  }

  p {
    font-size: 14px;
    color: ${colors.text};
    line-height: 1.5;
  }
`;