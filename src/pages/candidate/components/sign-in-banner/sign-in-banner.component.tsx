import CandidateBanner from '@/assets/images/candidate-banner-2.png';
import { Container } from '@/components/container';
import { Box, Button, Link, Stack, Typography } from '@mui/material';
import { FC } from 'react';

export const SignInBanner: FC = () => (
	<Container>
		<Stack alignItems="center">
			<Box
				sx={{
					height: '480px',
					width: '100%',
					maxWidth: '1344px',
					backgroundImage: `url(${CandidateBanner})`,
					backgroundSize: 'cover',
					backgroundPosition: '100px',
					borderRadius: 2,
					padding: 6,
				}}
			>
				<Stack
					justifyContent="space-between"
					sx={(theme) => ({
						maxWidth: '400px',
						height: '100%',
						backgroundColor: theme.palette.common.white,
						padding: 3,
						borderRadius: 2,
					})}
				>
					<Typography variant="h2">
						Com a Skill Hunter é selecionado por fazer o que você faz de melhor,
						de forma 100% gratuita.
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
			</Box>
		</Stack>
	</Container>
);
