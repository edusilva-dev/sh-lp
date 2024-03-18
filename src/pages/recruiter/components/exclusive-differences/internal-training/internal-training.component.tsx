import { ExclusiveDifferencesCard } from '@/components/exclusive-differences-card';
import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

import UsersIcon from '@/assets/icons/users.svg?react';

export const InternalTraining: FC<{ isMobile: boolean }> = ({ isMobile }) => {
	return (
		<ExclusiveDifferencesCard sx={{ width: '100%' }}>
			<Stack gap={4} height="100%" justifyContent="space-between">
				<UsersIcon />

				<Stack>
					<Typography variant={isMobile ? 'h3' : 'h2'}>Treinamento interno</Typography>

					<Typography color="#1E2E3A" fontWeight={400}>
						<Typography fontWeight={500} component="span">
											Crescimento de ponta a ponta
						</Typography>
										
										: acompanhe e desenvolva as competências de seus
										colaboradores.
					</Typography>
				</Stack>
			</Stack>
		</ExclusiveDifferencesCard>
	);
};