import CandidateBanner from '@/assets/images/candidate-banner-2.jpg';
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

export const SignInBanner: FC = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('sm')
	);

	return (
		<Container>
			<Stack alignItems="center">
				<Stack
					sx={(theme) => ({
						position: 'relative',
						height: '480px',
						width: '100%',
						backgroundSize: 'cover',
						borderRadius: 2,
						padding: 6,
						overflow: 'hidden',
						['&::before']: {
							content: '\'\'',
							position: 'absolute',
							top: 0, 
							left: 0,
							width: '100%', 
							height: '100%',
							backgroundImage: `url(${CandidateBanner})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							transform: 'scaleX(-1)',
						},
						[theme.breakpoints.down('sm')]: {
							height: '480px',
							['&::before']: {
								backgroundPositionX: '-120px',
								backgroundPositionY: '-120px',
							},
							padding: 2,
							'::after': {
								position: 'absolute',
								content: '""',
								bottom: 0,
								left: 0,
								height: '60%',
								width: '100%',
								backgroundImage:
									'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
								zIndex: 0,
							},
						},
					})}
				>
					<Stack
						zIndex={1}
						justifyContent="space-between"
						gap={4}
						sx={(theme) => ({
							maxWidth: '400px',
							backgroundColor: theme.palette.common.white,
							padding: 3,
							borderRadius: 2,
							[theme.breakpoints.down('sm')]: {
								marginTop: 'auto',
								alignSelf: 'center',
							},
							[theme.breakpoints.up('sm')]: {
								height: '100%',
							},
						})}
					>
						<Typography variant={isMobile ? 'h3' : 'h2'}>
							Com a Skill Hunter é selecionado por fazer o que você faz de
							melhor, de forma 100% gratuita.
						</Typography>
						<Stack gap={3}>
							<Button variant="contained">Cadastre-se</Button>
							<Typography
								alignSelf="center"
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
				</Stack>
			</Stack>
		</Container>
	);
};
