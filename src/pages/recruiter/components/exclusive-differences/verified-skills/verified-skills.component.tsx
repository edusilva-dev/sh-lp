import { ExclusiveDifferencesCard } from '@/components/exclusive-differences-card';
import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

import ListIcon from '@/assets/icons/list.svg?react';

export const VerifiedSkills: FC<{ isMobile: boolean }> = ({ isMobile }) => {
	return (
		<ExclusiveDifferencesCard>
			<Stack gap={4} height="100%" justifyContent="space-between">
				<ListIcon />

				<Stack>
					<Typography variant={isMobile ? 'h3' : 'h2'}>Competências comprovadas</Typography>

					<Typography color="#1E2E3A" variant='body1' fontWeight={400}>
						<Typography fontWeight={500} component="span">
											Sem mais dúvidas sobre aptidão técnica
						</Typography>

										: desafios exclusivos para validar as competências dos
										candidatos.
					</Typography>
				</Stack>
			</Stack>
		</ExclusiveDifferencesCard>
	);
};