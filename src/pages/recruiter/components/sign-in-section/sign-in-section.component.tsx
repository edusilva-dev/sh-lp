import { Container } from '@/components/container';
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
				<Typography variant="h3" fontWeight={500} color="#1E2E3A">
					Qualifique seu departamento de RH e invista tempo nas atividades
					certas
				</Typography>
				<Stack
					direction={isMobile ? 'column' : 'row'}
					alignItems="center"
					gap={3}
				>
					<Button variant="outlined">Solicitar demonstração</Button>
					<Button variant="contained">Conheça os planos</Button>
				</Stack>
			</Stack>
		</Container>
	);
};
