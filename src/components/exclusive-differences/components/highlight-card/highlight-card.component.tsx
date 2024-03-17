import { CardContainer, CardContent, CardDescription, CardSubtitle, CardTitle, ImageContainer, JobGenerateButton, TitleContainer } from './highlight-card.styles';

import jobGenerateDesktopPath from '@/assets/images/job-generate-desktop.png';

export const HighlightCard = () => {
	return (
		<CardContainer>
			<ImageContainer>
				<img src={jobGenerateDesktopPath} />
        
				<JobGenerateButton variant='contained'>Gerar job description</JobGenerateButton>
			</ImageContainer>

			<CardContent>
				<TitleContainer>
					<CardTitle>Skill Hunter IA</CardTitle>

					<CardSubtitle>A inteligência artificial que vai além da análise de currículos</CardSubtitle>
				</TitleContainer>

				<CardDescription>
        Avalie currículos, competências e fit dos talentos, gere desafios em poucos
        cliques: muito mais facilidade e assertividade para o seu dia a dia.
				</CardDescription>
			</CardContent>
		</CardContainer>
	);
};