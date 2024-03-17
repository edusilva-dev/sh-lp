import bannerPath from '@/assets/images/first-banner-candidate.png';
import {
	Box,
	Button,
	Link,
	Stack,
	Theme,
	Typography,
	useMediaQuery,
} from '@mui/material';
import { FC } from 'react';
import { PrimaryLightContainer } from '../primary-light-container';

export const CandidateBanner: FC = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('md')
	);

	return (
		<PrimaryLightContainer>
			<Stack
				direction={['column', 'row']}
				justifyContent="center"
				alignItems="center"
				gap={6}
			>
				<Box
					component="img"
					src={bannerPath}
					sx={(theme) => ({
						width: '100%',
						[theme.breakpoints.up('sm')]: {
							maxWidth: '200px',
						},
						[theme.breakpoints.up('md')]: {
							maxWidth: '300px',
						},
						[theme.breakpoints.up('lg')]: {
							maxWidth: '600px',
						},
					})}
				/>
				<Stack gap={['48px', '110px']}>
					<Stack gap="24px">
						<Stack>
							<Typography
								variant={isMobile ? 'h2' : 'h1'}
								color="secondary.main"
							>
								Adeus seleções intermináveis.
							</Typography>
							<Typography
								variant={isMobile ? 'h2' : 'h1'}
								fontWeight={400}
								color="secondary.main"
							>
								Olá, processos transparentes.
							</Typography>
						</Stack>
						<Typography
							variant={isMobile ? 'body1' : 'h3'}
							color="secondary.main"
						>
							Com a Skill Hunter, você encontra as melhores oportunidades do
							mercado e deixa para trás os testes sem sentido e critérios
							nebulosos.
						</Typography>
					</Stack>
					<Stack gap="32px">
						<Typography variant="h3" color="secondary.main">
							Na Skill Hunter, você:
						</Typography>
						<Stack
							gap="16px"
							component="ul"
							sx={(theme) => ({
								marginLeft: '-25px',
								color: theme.palette.common.white,
							})}
						>
							<Box component="li">
								<Typography fontWeight={400} color="secondary.main">
									É selecionado pelas suas capacidades, não por indicação
								</Typography>
							</Box>
							<Box component="li">
								<Typography fontWeight={400} color="secondary.main">
									Tem acesso a oportunidades em grandes players do mercado
								</Typography>
							</Box>
							<Box component="li">
								<Typography fontWeight={400} color="secondary.main">
									Economiza até 50% do tempo* ao aplicar para uma posição
								</Typography>
							</Box>
						</Stack>
						<Stack direction={['column', 'row']} gap="24px" alignItems="center">
							<Button color="secondary" variant="contained">
								Cadastre-se
							</Button>
							<Typography
								component="span"
								fontWeight={400}
								color="secondary.main"
							>
								Já possui uma conta?{' '}
								<Link
									color="secondary.main"
									href="#"
									sx={{ fontWeight: 500, textDecoration: 'none' }}
								>
									Entre
								</Link>
							</Typography>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</PrimaryLightContainer>
	);
};
