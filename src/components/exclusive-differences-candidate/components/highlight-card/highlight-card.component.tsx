import {
	CardContainer,
	CardContent,
	CardDescription,
	CardSubtitle,
	CardTitle,
	ImageContainer,
	JobGenerateButton,
	TitleContainer,
} from './highlight-card.styles';

import jobGenerateDesktopPath from '@/assets/images/job-generate-desktop.png';

export const HighlightCard = () => {
	return (
		<CardContainer>
			<ImageContainer>
				<img src={jobGenerateDesktopPath} />

				<JobGenerateButton variant="contained">
					Me conte sobre sua experiência
				</JobGenerateButton>
			</ImageContainer>

			<CardContent>
				<TitleContainer>
					<CardTitle>Skill Hunter IA</CardTitle>

					<CardSubtitle>
						A inteligência artificial que te ajuda a chegar mais longe, mais
						rápido
					</CardSubtitle>
				</TitleContainer>

				<CardDescription>
					A Skill Hunter te mostra vagas adequadas para o seu perfil. Ao aplicar
					para uma vaga, conte brevemente sobre sua experiência e para estar
					qualificado em poucos passos
				</CardDescription>
			</CardContent>
		</CardContainer>
	);
};
