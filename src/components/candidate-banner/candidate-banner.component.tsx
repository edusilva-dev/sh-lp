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
				gap="48px"
			>
				<Box
					sx={(theme) => ({
						width: '100%',
						[theme.breakpoints.down('sm')]: {
							maxHeight: '315.55px',
							height: '600px',
						},
						[theme.breakpoints.up('sm')]: {
							width: '656px',
							maxHeight: '600px',
						},
					})}
					component="img"
					src={bannerPath}
				/>
				<Stack gap={['48px', '110px']}>
					<Stack gap="24px">
						<Stack>
							<Typography variant={isMobile ? 'h2' : 'h1'}>
								Adeus seleções intermináveis.
							</Typography>
							<Typography variant={isMobile ? 'h2' : 'h1'} fontWeight={400}>
								Olá, processos transparentes.
							</Typography>
						</Stack>
						<Typography variant={isMobile ? 'body1' : 'h3'}>
							Com a Skill Hunter, você encontra as melhores oportunidades do
							mercado e deixa para trás os testes sem sentido e critérios
							nebulosos.
						</Typography>
					</Stack>
					<Stack gap="32px">
						<Typography
							sx={(theme) => ({
								fontWeight: 500,
								fontSize: theme.typography.pxToRem(20),
							})}
						>
							Na Skill Hunter, você:
						</Typography>
						<Stack
							gap="16px"
							component="ul"
							sx={(theme) => ({
								marginX: '-25px',
								'>li::marker': {
									color: theme.palette.common.white,
								},
							})}
						>
							<Box component="li">
								<Typography fontWeight={400}>
									É selecionado pelas suas capacidades, não por indicação
								</Typography>
							</Box>
							<Box component="li">
								<Typography fontWeight={400}>
									Tem acesso a oportunidades em grandes players do mercado
								</Typography>
							</Box>
							<Box component="li">
								<Typography fontWeight={400}>
									Economiza até 50% do tempo* ao aplicar para uma posição
								</Typography>
							</Box>
						</Stack>
						<Stack direction={['column', 'row']} gap="24px" alignItems="center">
							<Button color="secondary" variant="contained">
								Cadastre-se
							</Button>
							<Typography component="span" fontWeight={400}>
								Já possui uma conta?{' '}
								<Link href="#" sx={{ fontWeight: 500, textDecoration: 'none' }}>
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
