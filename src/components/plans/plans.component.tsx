import { FC } from 'react';
import { PlansContainer } from './plans.styles';
import { Plan } from './components/plan';

import { PLANS } from './mocks/plans.mock';
import { Container } from '../container';
import { SectionTitle } from '../section-title';

export const Plans: FC = () => {
	return (
		<Container sx={(theme) => ({ bgcolor: theme.palette.background.paper })}>
			<SectionTitle>Conheça os planos</SectionTitle>

			<PlansContainer mt={6}>
				{PLANS.map((plan, index) => (
					<Plan key={index} data={plan} />
				))}
			</PlansContainer>
		</Container>
	);
};