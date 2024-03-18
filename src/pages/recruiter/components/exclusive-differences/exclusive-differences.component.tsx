import { Container } from '@/components/container';
import { Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { FC } from 'react';

import { HighlightCard } from './highlight-card';
import { VerifiedSkills } from './verified-skills';
import { InternalTraining } from './internal-training';

export const ExclusiveDifferences: FC = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('lg')
	);

	return (
		<Container>
			<Stack gap={6}>
				<Typography variant={isMobile ? 'h2' : 'h1'}>
					Diferenciais Exclusivos
				</Typography>

				<Stack
					width='100%'
					direction={isMobile ? 'column' : 'row'}
					justifyContent="center"
					gap={4}
				>
					<HighlightCard isMobile={isMobile} />

					<Stack gap={4} width='40%'>
						<VerifiedSkills isMobile={isMobile} />

						<InternalTraining isMobile={isMobile} />
					</Stack>
				</Stack>
			</Stack>
		</Container>
	);
};
