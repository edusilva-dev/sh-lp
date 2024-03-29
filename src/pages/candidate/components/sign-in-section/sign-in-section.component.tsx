import { Container } from '@/components/container';
import {
	Button,
	Link,
	Stack,
	Theme,
	Typography,
	useMediaQuery,
} from '@mui/material';
import { FC } from 'react';

export const SignInSection: FC = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('md')
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
					Encontre as melhores oportunidades nas maiores empresas do país
				</Typography>

				<Stack
					width={[ '100%', '100%', '100%', 'auto' ]}
					direction={isMobile ? 'column' : 'row'}
					alignItems="center"
					justifyContent='flex-end'
					gap={3}
				>
					<Button variant="contained" sx={{ width: isMobile ? '100%' : 'auto' }}>Cadastre-se</Button>

					<Typography
						fontWeight={400}
						color="primary.main"
						component={Stack}
						direction="row"
						gap={0.5}
					>
						Já possui uma conta?
						<Link href="#" fontWeight={500} sx={{ textDecoration: 'none' }}>
							Entre
						</Link>
					</Typography>
				</Stack>
			</Stack>
		</Container>
	);
};
