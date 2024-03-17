import { FC } from 'react';
import { BannerContainer, ButtonsContainer, ContentContainer, DemonstrationButton, KnowPlanButton, RecruiterBannerContainer, RecruiterBannerSubtitle, RecruiterBannerTitle } from './recruiter-banner.styles';
import bannerPath from '@/assets/images/first-banner.png';

export const RecruiterBanner: FC = () => {
	return (
		<RecruiterBannerContainer>
			<ContentContainer>
				<RecruiterBannerTitle variant='h2'>
        Recrutamento simples, ágil e assertivo
				</RecruiterBannerTitle>

				<RecruiterBannerSubtitle variant='h3'>
        Transforme a rotina da sua empresa com uma ferramenta completa para atrair, selecionar e
        qualificar sua equipe.
				</RecruiterBannerSubtitle>

				<ButtonsContainer>
					<KnowPlanButton variant='contained'>Conheça os planos</KnowPlanButton>
					<DemonstrationButton variant='outlined'>Solicitar demonstração</DemonstrationButton>
				</ButtonsContainer>
			</ContentContainer>

			<BannerContainer>
				<img src={bannerPath} />
			</BannerContainer>
		</RecruiterBannerContainer>
	);
};