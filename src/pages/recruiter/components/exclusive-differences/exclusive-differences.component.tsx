import { Container } from '@/components/container';
import { ExclusiveDifferencesCard } from '@/components/exclusive-differences-card';
import { Button, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { FC } from 'react';

import jobGenerateDesktopPath from '@/assets/images/job-generate-desktop.png';
import ListIcon from '@/assets/icons/list.svg?react';
import StarsIcon from '@/assets/icons/stars.svg?react';
import UsersIcon from '@/assets/icons/users.svg?react';

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
					direction={isMobile ? 'column' : 'row'}
					justifyContent="center"
					gap={4}
				>
					<ExclusiveDifferencesCard flex={isMobile ? 1 : '0 1 885px'}>
						<Stack
							direction={isMobile ? 'column' : 'row'}
							height="100%"
							gap={4}
						>
							<Stack
								alignItems="center"
								justifyContent="center"
								flex="0 0 378.5px"
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

							<Stack justifyContent="space-between" gap={3}>
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

					<Stack gap={4} flex="0 1 430px">
						<ExclusiveDifferencesCard flex="1">
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

						<ExclusiveDifferencesCard flex="1">
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
					</Stack>
				</Stack>
			</Stack>
		</Container>
	);
};
