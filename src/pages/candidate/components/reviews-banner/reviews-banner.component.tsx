import reviewPhoto1 from '@/assets/images/review-photo-1.png';
import reviewPhoto2 from '@/assets/images/review-photo-2.png';
import reviewPhoto3 from '@/assets/images/review-photo-3.png';
import reviewsBannerPhoto from '@/assets/images/reviews-banner-image.png';
import { CardsCarousel, Review } from '@/components/cards-carousel';
import { PrimaryLightContainer } from '@/components/primary-light-container';
import {
	Box,
	Button,
	Link,
	Stack,
	Typography
} from '@mui/material';
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
			<Stack gap={8}>
				<Stack gap={6}>
					<Typography variant="h1" color="secondary.main">
						Ouça de quem usa a Skill Hunter
					</Typography>
					<CardsCarousel reviews={reviews} />
				</Stack>
				<Stack
					direction="row"
					justifyItems="space-between"
					sx={(theme) => ({
						backgroundColor: theme.palette.common.white,
						p: 3,
						borderRadius: 2,
						maxWidth: '1344px',
						width: '100%',
						alignSelf: 'center',
					})}
				>
					<Stack flex="1" p={6}>
						<Stack flex="1" justifyContent="space-between">
							<Stack gap={6}>
								<Typography variant="h1">
									Dê o próximo passo na sua carreira
								</Typography>
								<Typography variant="h2" fontWeight={400}>
									Junte-se a milhares de talentos e explore o mercado com vagas
									sob medida para sua carreira
								</Typography>
							</Stack>
							<Stack direction="row" alignItems="center" gap={3}>
								<Button variant="contained">Cadastre-se</Button>
								<Typography
									fontWeight={400}
									color="primary.main"
									component={Stack}
									direction="row"
									gap={0.5}
								>
									Já possui uma conta?
									<Link
										href="#"
										fontWeight={500}
										sx={{ textDecoration: 'none' }}
									>
										Entre
									</Link>
								</Typography>
							</Stack>
						</Stack>
					</Stack>
					<Box
						sx={{ borderRadius: 2 }}
						flex="1 0 1"
						component="img"
						src={reviewsBannerPhoto}
					/>
				</Stack>
			</Stack>
		</PrimaryLightContainer>
	);
};
