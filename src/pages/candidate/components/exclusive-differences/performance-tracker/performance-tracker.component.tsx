import { FC } from 'react';
import { ExclusiveDifferencesCard } from '@/components/exclusive-differences-card';
import { Stack, Typography } from '@mui/material';

import VerticalBars from '@/assets/icons/vertical-bars.svg?react';

export const PerformanceTracker: FC<{ isMobile: boolean }> = ({ isMobile }) => {
	return (
		<ExclusiveDifferencesCard>
			<Stack gap={4} height="100%" justifyContent="space-between">
				<VerticalBars />

				<Stack>
					<Typography variant={isMobile ? 'h3' : 'h2'}>Acompanhe seu desempenho</Typography>

					<Typography color="#1E2E3A" fontWeight={400}>
						<Typography fontWeight={500} component="span">
              Sem processos confusos
						</Typography>
              : acompanhe e melhore seu desempenho para se destacar entre
              os candidatos
					</Typography>
				</Stack>
			</Stack>
		</ExclusiveDifferencesCard>
	);
};