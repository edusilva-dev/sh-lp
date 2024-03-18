import { Button, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import jobGenerateDesktopPath from '@/assets/images/job-generate-desktop.png';
import StarsIcon from '@/assets/icons/stars.svg?react';
import { ExclusiveDifferencesCard } from '@/components/exclusive-differences-card';

export const HighlightCard: FC<{ isMobile: boolean }> = ({ isMobile }) => {
	return (
		<ExclusiveDifferencesCard sx={{ width: '60%' }}>
			<Stack
				direction={isMobile ? 'column' : 'row'}
				height="100%"
				gap={4}
			>
				<Stack
					alignItems="center"
					justifyContent="center"
					width='50%'
					overflow="hidden"
					sx={{
						borderRadius: 2,
						backgroundImage: `url(${jobGenerateDesktopPath})`,
						backgroundSize: 'cover',
					}}
				>
					<Button
						startIcon={<StarsIcon />}
						sx={{ width: '80%', height: [40, 72] }}
						color="secondary"
						variant="contained"
					>
						<Typography variant={isMobile ? 'body2' : 'body1'}>
										Gerar job description.
						</Typography>
					</Button>
				</Stack>

				<Stack justifyContent="space-between" gap={3} width='50%'>
					<Stack gap={2}>
						<Typography variant={isMobile ? 'h3' : 'h2'}>
										Skill Hunter IA
						</Typography>

						<Typography variant={isMobile ? 'h3' : 'h2'} fontWeight={400}>
										A inteligência artificial que vai além da análise de
										currículos
						</Typography>
					</Stack>

					<Typography color="#1E2E3A" fontWeight={400}>
									Avalie currículos, competências e fit dos talentos, gere
									desafios em poucos cliques: muito mais facilidade e
									assertividade para o seu dia a dia.
					</Typography>
				</Stack>
			</Stack>
		</ExclusiveDifferencesCard>
	);
};