import { FC } from 'react';
import { CandidateBannerContainer } from './candidate-banner.styles';
import { Box, Button, Link, Stack, Typography } from '@mui/material';
import bannerPath from '@/assets/images/first-banner-candidate.png';

export const CandidateBanner: FC = () => {
	return (
		<CandidateBannerContainer>
			<Stack direction={['column', 'row']} gap="48px">
				<Box
					sx={(theme) => ({
						width: '100%',
						[theme.breakpoints.up('sm')]: {
							width: '656px',
						},
					})}
					component="img"
					src={bannerPath}
				/>
				<Stack gap={['48px', '110px']}>
					<Stack gap="24px">
						<Stack>
							<Typography
								sx={(theme) => ({
									fontSize: theme.typography.pxToRem(24),
									[theme.breakpoints.up('sm')]: {
										fontSize: theme.typography.pxToRem(40),
									},
								})}
							>
								Adeus seleções intermináveis.
							</Typography>
							<Typography
								sx={(theme) => ({
									fontWeight: 300,
									fontSize: theme.typography.pxToRem(24),
									[theme.breakpoints.up('sm')]: {
										fontSize: theme.typography.pxToRem(40),
									},
								})}
							>
								Olá, processos transparentes.
							</Typography>
						</Stack>
						<Typography
							sx={(theme) => ({
								fontWeight: 500,
								fontSize: theme.typography.pxToRem(16),
								[theme.breakpoints.up('sm')]: {
									fontSize: theme.typography.pxToRem(20),
								},
							})}
						>
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
								<Typography>
									É selecionado pelas suas capacidades, não por indicação
								</Typography>
							</Box>
							<Box component="li">
								<Typography>
									Tem acesso a oportunidades em grandes players do mercado
								</Typography>
							</Box>
							<Box component="li">
								<Typography>
									Economiza até 50% do tempo* ao aplicar para uma posição
								</Typography>
							</Box>
						</Stack>
						<Stack direction={['column', 'row']} gap="24px" alignItems="center">
							<Button
								variant="contained"
								sx={(theme) => ({
									width: '196px',
									paddingY: '12px',
									borderRadius: '80px',
									backgroundColor: theme.palette.common.white,
									color: theme.palette.common.black,
								})}
							>
								Cadastre-se
							</Button>
							<Typography component="span">
								Já possui uma conta?{' '}
								<Link href="#" sx={{ fontWeight: 500, textDecoration: 'none' }}>
									Entre
								</Link>
							</Typography>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</CandidateBannerContainer>
	);
};
