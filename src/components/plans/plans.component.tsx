import { FC } from 'react';
import { PlansContainer } from './plans.styles';
import { Plan } from './components/plan';

import { PLANS } from './mocks/plans.mock';
import { Container } from '../container';
import { Theme, Typography, useMediaQuery } from '@mui/material';

export const Plans: FC = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('sm')
	);

	return (
		<Container sx={(theme) => ({ bgcolor: theme.palette.background.paper })}>
			<Typography variant={isMobile ? 'h2' : 'h1'}>Conheça os planos</Typography>

			<PlansContainer mt={6}>
				{PLANS.map((plan, index) => (
					<Plan key={index} data={plan} />
				))}
			</PlansContainer>
		</Container>
	);
};