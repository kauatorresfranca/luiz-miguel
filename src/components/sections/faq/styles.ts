import styled from 'styled-components';
import { breakpoints, colors } from '../../../../styles';

export const FAQ = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 80px 40px; /* Increased for a premium feel */
  background: ${colors.background}; /* Reverted to original neutral background */
  min-height: 100vh;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px 16px;
  }
`;

export const FAQTitle = styled.h3`
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
`;

export const FAQList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FAQItem = styled.li`
  border-bottom: 1px solid ${colors.text}20;
  padding: 16px 0;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const FAQQuestion = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  font-size: 18px;
  color: ${colors.primary}; /* Changed to primary for visibility */
  font-weight: 500;
  background-color: #f9f9f9;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  i {
    font-size: 20px;
    transition: transform 0.3s ease;
    color: ${colors.primary};
  }

  &:hover {
    background-color: #e9e9e9;
    color: ${colors.primary};
  }

  &.active {
    background-color: ${colors.primary}10;
    color: ${colors.primary};

    i {
      transform: rotate(180deg);
    }
  }
`;

export const FAQAnswer = styled.p`
  max-height: 0;
  overflow: hidden;
  font-size: 16px;
  color: ${colors.text};
  margin-top: 8px;
  padding: 0 16px;
  transition: max-height 0.5s ease, opacity 0.3s ease, padding 0.3s ease;
  opacity: 0;

  &.active {
    max-height: 200px;
    opacity: 1;
    padding: 12px 16px;
  }
`;