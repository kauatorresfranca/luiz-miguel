import styled from 'styled-components';

import heroImage from '../../../assets/images/hero.png';
import heroImageMobile from '../../../assets/images/heroMobile.png';
import { breakpoints, colors } from '../../../../styles';

export const Hero = styled.div`
    width: 100%;
    height: 80vh;
    background-image: url(${heroImage});
    background-size: cover;
    background-position: center;;

    @media (max-width: ${breakpoints.laptop}) {
        background-image: url(${heroImageMobile});
        height: 80vh;
    }

    @media (max-width: ${breakpoints.tablet}) {
        background-image: url(${heroImageMobile});
        height: 90vh;
    }
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-top: 120px;
    gap: 10px;
    height: 100%;

    @media (max-width: ${breakpoints.laptop}) {
        padding-top: 200px;
        justify-content: flex-start;
    }
`;

export const HeroTitle = styled.h1`
    font-size: 40px;
    font-weight: bold;
    color: ${colors.title};
    max-width: 500px;

    span {
        color: ${colors.secondary};
    }

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 32px;
    }
`;

export const HeroSubtitle = styled.h2`
    font-size: 16px;
    color: ${colors.text};
    max-width: 520px;
    font-weight: 500;
`;

export const HeroButton = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    margin-top: 16px;
    background: linear-gradient(45deg, ${colors.secondary} 0%, #816122ff 100%);
    color: ${colors.title};
    border-radius: 4px;
    text-decoration: none;
    font-weight: 600;
    transition: 0.3s ease-out;

    &:hover {
        background: darken(#C8A04F, 10%);
        cursor: pointer;
        transform: scale(1.05);
    }
`;