import reviewPhoto1 from '@/assets/images/review-photo-1.png';
import reviewPhoto2 from '@/assets/images/review-photo-2.png';
import reviewPhoto3 from '@/assets/images/review-photo-3.png';
import { CardsCarousel, Review } from '@/components/cards-carousel';
import { PrimaryLightContainer } from '@/components/primary-light-container';
import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';

const reviews: Array<Review> = [
	{
		content:
			'Foi através da Skill Hunter que consegui me recolocar no mercado. A plataforma é muito mais transparente do que as demais, e isso ajuda muito no processo.',
		name: 'Gabriel',
		role: 'Desenvolvedor Frontend na ABC',
		photo: <Box component="img" src={reviewPhoto1} />,
	},
	{
		content:
			'A Skill Hunter me permitiu me destacar dentre diversos candidatos por priorizar minha capacidade técnica em vez de somente o tempo de experiência.',
		name: 'Cristina',
		role: 'Analista de CRM na DFG',
		photo: <Box component="img" src={reviewPhoto2} />,
	},
	{
		content: 'Essa plataforma acabou com os processos sem sentido. ',
		name: 'Fernanda',
		role: 'UX Designer na JKL',
		photo: <Box component="img" src={reviewPhoto3} />,
	},
	{
		content:
			'Foi através da Skill Hunter que consegui me recolocar no mercado. A plataforma é muito mais transparente do que as demais, e isso ajuda muito no processo.',
		name: 'Gabriel',
		role: 'Desenvolvedor Frontend na ABC',
		photo: <Box component="img" src={reviewPhoto1} />,
	},
	{
		content:
			'A Skill Hunter me permitiu me destacar dentre diversos candidatos por priorizar minha capacidade técnica em vez de somente o tempo de experiência.',
		name: 'Cristina',
		role: 'Analista de CRM na DFG',
		photo: <Box component="img" src={reviewPhoto2} />,
	},
	{
		content: 'Essa plataforma acabou com os processos sem sentido. ',
		name: 'Fernanda',
		role: 'UX Designer na JKL',
		photo: <Box component="img" src={reviewPhoto3} />,
	},
];

export const ReviewsBanner: FC = () => {
	return (
		<PrimaryLightContainer>
			<Stack gap={6}>
				<Typography variant="h1">Ouça de quem usa a Skill Hunter</Typography>
				<CardsCarousel reviews={reviews} />
			</Stack>
		</PrimaryLightContainer>
	);
};
