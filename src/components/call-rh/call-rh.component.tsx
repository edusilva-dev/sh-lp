import { FC } from 'react';
import {
	DemonstrationButton,
	KnowPlanButton,
} from '../recruiter-banner/recruiter-banner.styles';
import { ButtonsContainer, Container, Text } from './call-rh.styles';

export const CallRH: FC = () => {
	return (
		<Container>
			<Text>
				Encontre as melhores oportunidades nas maiores empresas do país
			</Text>

			<ButtonsContainer>
				<KnowPlanButton variant="contained">Cadastre-se</KnowPlanButton>
				<DemonstrationButton variant="outlined">
					Já possui uma conta? Entre
				</DemonstrationButton>
			</ButtonsContainer>
		</Container>
	);
};
