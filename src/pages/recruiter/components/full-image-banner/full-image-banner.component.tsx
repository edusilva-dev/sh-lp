import { FC } from 'react';
import { Container } from '@/components/container';
import { PlansButtons } from '@/components/plans-buttons/plans-buttons.component';
import { Stack, Theme, Typography, useMediaQuery } from '@mui/material';

import RhBannerMobile from '@/assets/images/rh-banner-mobile.png';
import RhBanner from '@/assets/images/rh-banner.png';

export const FullImageBanner: FC = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('sm')
	);

	return (
		<Container bgcolor='background.paper'>
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
						backgroundImage: `url(${RhBanner})`,
						backgroundRepeat: 'no-repeat',
						WebkitBackgroundSize: 'cover',
						[theme.breakpoints.down('sm')]: {
							backgroundImage: `url(${RhBannerMobile})`,
							padding: 2,
						}
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
							Qualifique seu departamento de RH e invista tempo nas atividades
							certas
						</Typography>

						<PlansButtons vertical />
					</Stack>
				</Stack>
			</Stack>
		</Container>
	);
};
