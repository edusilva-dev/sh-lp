import { FC } from 'react';
import { Title } from '../section-title';
import { ContentContainer, PlansContainer } from './plans.styles';
import { Plan } from './components/plan';

import { PLANS } from './mocks/plans.mock';

export const Plans: FC = () => {
	return (
		<ContentContainer>
			<Title>Conheça os planos</Title>

			<PlansContainer>
				{PLANS.map((plan, index) => (
					<Plan key={index} data={plan} />
				))}
			</PlansContainer>
		</ContentContainer>
	);
};