import { FC } from 'react';
import { ExclusiveDifferencesCard } from '@/components/exclusive-differences-card';
import { Button, Stack, Typography } from '@mui/material';

import StarsIcon from '@/assets/icons/stars.svg?react';
import jobGenerateDesktopPath from '@/assets/images/job-generate-desktop.png';

export const HighlightCard: FC<{ isMobile: boolean }> = ({ isMobile }) => {
	return (
		<ExclusiveDifferencesCard width={[ '100%', '100%', '60%']}>
			<Stack
				direction={isMobile ? 'column' : 'row'}
				height="100%"
				gap={4}
			>
				<Stack
					alignItems="center"
					justifyContent="center"
					width={[ '100%', '100%', '50%']}
					height={[ '240px', '240px', 'unset' ]}
					overflow="hidden"
					sx={{
						borderRadius: 2,
						backgroundImage: `url(${jobGenerateDesktopPath})`,
						backgroundSize: 'cover',
					}}
				>
					<Button
						startIcon={<StarsIcon />}
						sx={{ width: '80%', height: [40, 40, 72] }}
						color="secondary"
						variant="contained"
					>
						<Typography variant={isMobile ? 'body2' : 'body1'}>
              Gerar job description.
						</Typography>
					</Button>
				</Stack>

				<Stack justifyContent="space-between" gap={3} width={['100%', '100%', '50%']}>
					<Stack gap={2}>
						<Typography variant={isMobile ? 'h3' : 'h2'}>
              Skill Hunter IA
						</Typography>

						<Typography variant={isMobile ? 'h3' : 'h2'} fontWeight={400}>
              A inteligência artificial que te ajuda a chegar mais longe, mais rápido
						</Typography>
					</Stack>

					<Typography color="#1E2E3A" fontWeight={400}>
            A Skill Hunter te mostra vagas adequadas para o seu perfil.
            Ao aplicar para uma vaga, conte brevemente sobre sua experiência
            e para estar qualificado em poucos passos
					</Typography>
				</Stack>
			</Stack>
		</ExclusiveDifferencesCard>
	);
};