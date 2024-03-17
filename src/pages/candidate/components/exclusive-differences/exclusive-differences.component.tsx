import Notebook from '@/assets/icons/notebook.svg?react';
import Stars from '@/assets/icons/stars.svg?react';
import VerticalBars from '@/assets/icons/vertical-bars.svg?react';
import jobGenerateDesktopPath from '@/assets/images/job-generate-desktop.png';
import { Container } from '@/components/container';
import { ExclusiveDifferencesCard } from '@/components/exclusive-differences-card';
import { Button, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { FC } from 'react';

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
									startIcon={<Stars />}
									sx={{ width: '80%' }}
									color="secondary"
									variant="contained"
								>
									Me conte sobre sua experiência.
								</Button>
							</Stack>
							<Stack justifyContent="space-between" gap={3}>
								<Stack gap={2}>
									<Typography variant={isMobile ? 'h3' : 'h2'}>
										Skill Hunter IA
									</Typography>
									<Typography variant={isMobile ? 'h3' : 'h2'} fontWeight={400}>
										A inteligência artificial que te ajuda a chegar mais longe,
										mais rápido
									</Typography>
								</Stack>
								<Typography color="#1E2E3A" fontWeight={400}>
									A Skill Hunter te mostra vagas adequadas para o seu perfil. Ao
									aplicar para uma vaga, conte brevemente sobre sua experiência
									e para estar qualificado em poucos passos
								</Typography>
							</Stack>
						</Stack>
					</ExclusiveDifferencesCard>
					<Stack gap={4} flex="0 1 430px">
						<ExclusiveDifferencesCard flex="1">
							<Stack gap={4} height="100%" justifyContent="space-between">
								<VerticalBars />
								<Stack>
									<Typography variant="h2">Acompanhe seu desempenho</Typography>
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
						<ExclusiveDifferencesCard flex="1">
							<Stack gap={4} height="100%" justifyContent="space-between">
								<Notebook />
								<Stack>
									<Typography variant="h2">Aplicação simplificada</Typography>
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
					</Stack>
				</Stack>
			</Stack>
		</Container>
	);
};
