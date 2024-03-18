import { FC } from 'react';
import {
	BannerContainer,
	Button,
	ButtonsContainer,
	ContentContainer,
	RecruiterBannerContainer,
	RecruiterBannerSubtitle,
	RecruiterBannerTitle
} from './recruiter-banner.styles';
import bannerPath from '@/assets/images/first-banner.png';
import { Theme, useMediaQuery } from '@mui/material';

export const RecruiterBanner: FC = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('md')
	);

	return (
		<RecruiterBannerContainer>
			<ContentContainer>
				<RecruiterBannerTitle variant={isMobile ? 'h2' : 'h1'}>
					Recrutamento simples, ágil e assertivo
				</RecruiterBannerTitle>

				<RecruiterBannerSubtitle variant={isMobile ? 'h3' : 'h2'}>
					Transforme a rotina da sua empresa com uma ferramenta completa para atrair, selecionar e
					qualificar sua equipe.
				</RecruiterBannerSubtitle>

				<ButtonsContainer>
					<Button variant='contained'>Conheça os planos</Button>

					<Button variant='outlined'>Solicitar demonstração</Button>
				</ButtonsContainer>
			</ContentContainer>

			<BannerContainer>
				<img src={bannerPath} />
			</BannerContainer>
		</RecruiterBannerContainer>
	);
};