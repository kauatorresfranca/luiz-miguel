import styled from 'styled-components';

import heroImage from '../../../assets/images/hero.png';
import { colors } from '../../../../styles';

export const Hero = styled.div`
    width: 100%;
    height: 80vh;
    background-image: url(${heroImage});
    background-size: cover;
    background-position: center;
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    height: 100%;
`;

export const HeroTitle = styled.h1`
    font-size: 32px;
    font-weight: bold;
    color: ${colors.title};

    span {
        color: ${colors.secondary};
    }
`;

export const HeroSubtitle = styled.h2`
    font-size: 16px;
    color: ${colors.text};
`;

export const HeroButton = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    margin-top: 16px;
    background: ${colors.secondary};
    color: ${colors.title};
    border-radius: 4px;
    text-decoration: none;

    &:hover {
        background: darken(#C8A04F, 10%);
    }
`;