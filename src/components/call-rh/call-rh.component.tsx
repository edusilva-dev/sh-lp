import { FC } from 'react';
import { DemonstrationButton, KnowPlanButton } from '../recruiter-banner/recruiter-banner.styles';
import { ButtonsContainer, Container, Text } from './call-rh.styles';

export const CallRH: FC = () => {
	return (
		<Container>
			<Text>Qualifique seu departamento de RH e invista tempo nas atividades certas</Text>

			<ButtonsContainer>
				<KnowPlanButton variant='contained'>Conheça os planos</KnowPlanButton>
				<DemonstrationButton variant='outlined'>Solicitar demonstração</DemonstrationButton>
			</ButtonsContainer>
		</Container>
	);
};