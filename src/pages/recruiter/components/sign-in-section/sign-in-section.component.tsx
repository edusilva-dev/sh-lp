import { Container } from '@/components/container';
import { RoundGradientButton } from '@/components/round-gradient-button';
import { Button, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { FC } from 'react';

export const SignInSection: FC = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('lg')
	);

	return (
		<Container>
			<Stack
				gap={3}
				direction={isMobile ? 'column' : 'row'}
				alignItems="center"
				justifyContent="space-between"
			>
				<Typography variant={isMobile ? 'h3' : 'body1'} fontWeight={500} color="#1E2E3A">
					Qualifique seu departamento de RH e invista tempo nas atividades certas
				</Typography>

				<Stack
					direction={isMobile ? 'column-reverse' : 'row'}
					alignItems="center"
					gap={[2, 3]}
					{...(isMobile && {
						width: '100%',
					})}
				>
					<RoundGradientButton width={'100%'}>
						Solicitar demonstração
					</RoundGradientButton>
					
					<Button
						sx={(theme) => ({
							[theme.breakpoints.down('lg')]: { width: '100%' },
						})}
						variant="contained"
					>
						Conheça os planos
					</Button>
				</Stack>
			</Stack>
		</Container>
	);
};
