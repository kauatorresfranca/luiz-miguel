import styled from 'styled-components';
import { breakpoints, colors } from '../../../../styles';

export const TestimonialsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 24px 60px 24px;
  text-align: center;
  background: ${colors.background}; /* Reverted to neutral background */
  min-height: 100vh;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 60px 0;
  }
`;

export const TestimonialsTitle = styled.h3`
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

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
  }
`;

export const DesktopList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  display: none;
  padding: 0 16px;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

export const Slider = styled.div`
  display: flex;
  transition: transform 0.6s ease-in-out;
  width: 100%;
`;

export const Slide = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  padding: 0 8px;
  box-sizing: border-box;
`;

export const Card = styled.article`
  max-width: 100%;
  width: 100%;
  border-radius: 16px;
  padding: 24px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(200, 160, 79, 0.2);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 2px solid ${colors.secondary};
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 4px;

  i {
    color: ${colors.secondary};
    font-size: 18px;
  }
`;

export const Text = styled.p`
  color: ${colors.text};
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 16px;
  text-align: left;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${breakpoints.tablet}) {
    -webkit-line-clamp: unset;
    overflow: visible;
    font-size: 14px;
  }
`;

export const ResultThumb = styled.div`
  margin-top: 16px;

  img {
    width: 100%;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const ArrowLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  padding: 12px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 10;
  transition: background 0.3s ease, color 0.3s ease;

  svg {
    height: 24px;
    width: 24px;
    color: ${colors.primary};
  }

  &:hover {
    background: ${colors.secondary};
    svg {
      color: #fff;
    }
  }
`;

export const ArrowRight = styled(ArrowLeft)`
  left: auto;
  right: 8px;
`;

export const Indicators = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 12px;

  button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(45deg, #ccc, #999);
    cursor: pointer;
    transition: background 0.3s ease;

    &.active {
      background: ${colors.secondary};
    }

    &:hover {
      background: ${colors.secondary};
    }
  }
`;

export const FullscreenOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  opacity: 0;
  transition: opacity 0.3s ease;
  animation: fadeIn 0.3s ease forwards;

  img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 16px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }

  .close-btn {
    position: absolute;
    top: 24px;
    right: 24px;
    background: transparent;
    border: none;
    color: #fff;
    font-size: 32px;
    cursor: pointer;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: scale(1.2);
      color: ${colors.secondary};
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;