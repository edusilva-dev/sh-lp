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
import { PrimaryLightContainer } from '../../../../components/primary-light-container';

export const CandidateBanner: FC = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('lg')
	);

	return (
		<PrimaryLightContainer>
			<Stack
				direction={['column', 'column', 'column', 'row']}
				justifyContent="space-between"
				gap={[ 3, 6 ]}
			>
				<Stack width={['100%', '100%', '100%', '50%']}>
					<Box
						component="img"
						src={bannerPath}
						sx={{
							height: '100%',
							borderRadius: 2,
							objectFit: 'cover',
							objectPosition: 'bottom'
						}}
					/>
				</Stack>

				<Stack width={['100%', '100%', '100%', '50%']} justifyContent='space-between'>
					<Stack gap={3}>
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

					<Stack mt={14}>
						<Typography variant="h3" color="secondary.main">
							Na Skill Hunter, você:
						</Typography>

						<Stack
							gap={2}
							component="ul"
							sx={{
								marginLeft: '-25px',
								color: 'common.white',
							}}
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
									Economiza até <b>50% do tempo*</b> ao aplicar para uma posição
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
