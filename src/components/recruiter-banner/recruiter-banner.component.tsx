import { FC } from 'react';
import {
	Button,
	ButtonsContainer,
	ContentContainer,
	RecruiterBannerContainer,
} from './recruiter-banner.styles';
import bannerPath from '@/assets/images/first-banner.png';
import { Box, Stack, Theme, Typography, useMediaQuery } from '@mui/material';

export const RecruiterBanner: FC = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('md')
	);

	return (
		<RecruiterBannerContainer>
			<ContentContainer>
				<Box>
					<Typography variant={isMobile ? 'h2' : 'h1'}>
					Recrutamento simples, ágil e assertivo
					</Typography>

					<Typography variant={isMobile ? 'h3' : 'h2'} mt={[3, 6]} fontWeight={400}>
					Transforme a rotina da sua empresa com uma ferramenta completa para atrair, selecionar e
					qualificar sua equipe.
					</Typography>
				</Box>

				<ButtonsContainer mt={[3, 3]}>
					<Button variant='contained'>Conheça os planos</Button>

					<Button variant='outlined'>Solicitar demonstração</Button>
				</ButtonsContainer>
			</ContentContainer>

			<img src={bannerPath} />
		</RecruiterBannerContainer>
	);
};