import { FC } from 'react';
import { ExclusiveDifferencesCard } from '@/components/exclusive-differences-card';
import { Stack, Typography } from '@mui/material';

import NotebookIcon from '@/assets/icons/notebook.svg?react';

export const SimplifiedApply: FC<{ isMobile: boolean }> = ({ isMobile }) => {
	return (
		<ExclusiveDifferencesCard>
			<Stack gap={4} height="100%" justifyContent="space-between">
				<NotebookIcon />

				<Stack>
					<Typography variant={isMobile ? 'h3' : 'h2'}>Aplicação simplificada</Typography>

					<Typography color="#1E2E3A" fontWeight={400}>
						<Typography fontWeight={500} component="span">
											Responda somente o necessário
						</Typography>

										: A Skill Hunter guarda todas as suas informações de forma
										segura para que você não precise se repetir
					</Typography>
				</Stack>
			</Stack>
		</ExclusiveDifferencesCard>
	);
};