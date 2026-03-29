import styled from 'styled-components';
import { breakpoints, colors } from '../../../../styles';

export const FAQSection = styled.section`
  padding: 100px 0;
  background-color: #f8f9fa; // Cinza claríssimo para destacar os cards brancos
`;

export const FAQHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Tag = styled.span`
  color: ${colors.secondary};
  font-weight: 800;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  margin-bottom: 12px;
`;

export const FAQTitle = styled.h2`
  font-size: 40px;
  color: ${colors.primary};
  font-weight: 800;
  
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 30px;
  }

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: ${colors.secondary};
    margin: 15px auto 0;
    border-radius: 2px;
  }
`;

export const FAQList = styled.div`
  max-width: 850px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FAQItem = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03); 
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.02);

  &.active {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    border-color: rgba(200, 160, 79, 0.2);
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

export const FAQQuestion = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 24px 30px;
  font-size: 18px;
  color: ${colors.primary};
  font-weight: 700;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;

  .icon-circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;

    i {
      font-size: 22px;
      color: ${colors.primary};
      transition: transform 0.4s ease;
    }
  }

  .active & {
    .icon-circle {
      background-color: ${colors.secondary};
      i {
        transform: rotate(180deg);
        color: white;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px;
    font-size: 16px;
  }
`;

export const FAQAnswer = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;

  &.active {
    max-height: 500px;
    opacity: 1;
  }

  .answer-content {
    padding: 0 30px 24px 30px;
    font-size: 16px;
    line-height: 1.7;
    color: ${colors.text};
    border-top: 1px solid #f9f9f9;
    padding-top: 20px;

    @media (max-width: ${breakpoints.tablet}) {
      padding: 0 20px 20px 20px;
    }
  }
`;