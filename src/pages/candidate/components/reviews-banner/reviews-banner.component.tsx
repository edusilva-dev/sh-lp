import reviewPhoto1 from '@/assets/images/review-photo-1.png';
import reviewPhoto2 from '@/assets/images/review-photo-2.png';
import reviewPhoto3 from '@/assets/images/review-photo-3.png';
import reviewsBannerPhoto from '@/assets/images/reviews-banner-image.png';
import { CardsCarousel, Review } from '@/components/cards-carousel';
import { PrimaryLightContainer } from '@/components/primary-light-container';
import { SignInButtons } from '@/components/sign-in-buttons';
import { Box, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { FC } from 'react';

const reviews: Array<Review> = [
	{
		content:
			'Foi através da Skill Hunter que consegui me recolocar no mercado. A plataforma é muito mais transparente do que as demais, e isso ajuda muito no processo.',
		name: 'Gabriel',
		role: 'Desenvolvedor Frontend na ABC',
		photo: reviewPhoto1,
	},
	{
		content:
			'A Skill Hunter me permitiu me destacar dentre diversos candidatos por priorizar minha capacidade técnica em vez de somente o tempo de experiência.',
		name: 'Cristina',
		role: 'Analista de CRM na DFG',
		photo: reviewPhoto2,
	},
	{
		content: 'Essa plataforma acabou com os processos sem sentido. ',
		name: 'Fernanda',
		role: 'UX Designer na JKL',
		photo: reviewPhoto3,
	},
	{
		content:
			'Foi através da Skill Hunter que consegui me recolocar no mercado. A plataforma é muito mais transparente do que as demais, e isso ajuda muito no processo.',
		name: 'Gabriel',
		role: 'Desenvolvedor Frontend na ABC',
		photo: reviewPhoto1,
	},
	{
		content:
			'A Skill Hunter me permitiu me destacar dentre diversos candidatos por priorizar minha capacidade técnica em vez de somente o tempo de experiência.',
		name: 'Cristina',
		role: 'Analista de CRM na DFG',
		photo: reviewPhoto2,
	},
	{
		content: 'Essa plataforma acabou com os processos sem sentido. ',
		name: 'Fernanda',
		role: 'UX Designer na JKL',
		photo: reviewPhoto3,
	},
];

export const ReviewsBanner: FC = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('lg')
	);

	return (
		<PrimaryLightContainer>
			<Stack gap={8}>
				<Stack gap={6}>
					<Typography variant={isMobile ? 'h2' : 'h1'} color="secondary.main">
						Ouça de quem usa a Skill Hunter
					</Typography>

					<CardsCarousel reviews={reviews} />
				</Stack>

				<Stack
					direction={isMobile ? 'column' : 'row'}
					justifyItems="space-between"
					gap={6}
					sx={(theme) => ({
						backgroundColor: theme.palette.common.white,
						p: 3,
						borderRadius: 2,
						width: '100%',
						alignSelf: 'center',
					})}
				>
					<Stack flex="1" justifyContent="space-between">
						<Stack gap={isMobile ? 3 : 6}>
							<Typography variant={isMobile ? 'h2' : 'h1'}>
								Dê o próximo passo na sua carreira
							</Typography>

							<Typography variant={isMobile ? 'h3' : 'h2'} fontWeight={400}>
								Junte-se a milhares de talentos e explore o mercado com vagas
								sob medida para sua carreira
							</Typography>
						</Stack>

						{!isMobile ? <SignInButtons /> : null}
					</Stack>

					<Stack gap={6}>
						<Box
							sx={(theme) => ({
								flex: '1',
								borderRadius: 2,
								[theme.breakpoints.up('lg')]: {
									maxWidth: '500px',
								},
							})}
							component="img"
							src={reviewsBannerPhoto}
						/>

						{isMobile ? <SignInButtons vertical /> : null}
					</Stack>
				</Stack>
			</Stack>
		</PrimaryLightContainer>
	);
};
