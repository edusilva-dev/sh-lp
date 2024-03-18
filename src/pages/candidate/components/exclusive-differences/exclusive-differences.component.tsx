import { FC } from 'react';
import { Container } from '@/components/container';
import { Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { HighlightCard } from './highlight-card';
import { PerformanceTracker } from './performance-tracker';
import { SimplifiedApply } from './simplified-apply';

export const ExclusiveDifferences: FC = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('md')
	);

	return (
		<Container>
			<Stack gap={6}>
				<Typography variant={isMobile ? 'h2' : 'h1'}>
					Diferenciais Exclusivos
				</Typography>
				
				<Stack
					direction={isMobile ? 'column' : 'row'}
					justifyContent="center"
					gap={4}
				>
					<HighlightCard isMobile={isMobile} />
					
					<Stack gap={4} width={[ '100%', '100%', '40%']}>
						<PerformanceTracker isMobile={isMobile} />
						
						<SimplifiedApply isMobile={isMobile} />
					</Stack>
				</Stack>
			</Stack>
		</Container>
	);
};
