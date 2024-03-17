import { FC } from 'react';
import { Container, HighilightSubtitle, HighlightTitle, ImageContainer, TitlesContainer } from './highlight.styles';
import highlightMobilePath from '@/assets/images/mobile-highlight.png';

export const Highlight: FC = () => {
	return (
		<Container>
			<TitlesContainer>
				<HighlightTitle variant='h1'>A melhor plataforma de R&S do Brasil</HighlightTitle>

				<HighilightSubtitle variant='subtitle1'>
				A Skill Hunter é uma solução completa que faz a ponte entre recrutadores e candidatos qualificados
				</HighilightSubtitle>
			</TitlesContainer>
			
			<ImageContainer>
				<img src={highlightMobilePath} className='mobile' />
			</ImageContainer>
		</Container>
	);
};