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
					p={3}
					gap={[6, 6, 6, 0]}
					sx={{
						backgroundColor: 'common.white',
						borderRadius: 2,
					}}
				>
					<Stack width={['100%', '100%', '100%', '50%']} justifyContent='space-between' p={[0, 0, 0, 6]}>
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

					<Stack gap={6} width={['100%', '100%', '100%', '50%']}>
						<Box
							component="img"
							src={reviewsBannerPhoto}
							sx={{
								height: ['272px', '372px', '472px', '100%'],
								borderRadius: 2,
								objectFit: 'cover',
							}}
						/>

						{isMobile ? <SignInButtons vertical /> : null}
					</Stack>
				</Stack>
			</Stack>
		</PrimaryLightContainer>
	);
};
