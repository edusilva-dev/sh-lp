import interview from '@/assets/images/interview.png';
import { PlansButtons } from '@/components/plans-buttons/plans-buttons.component';
import { Box, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { FC } from 'react';

export const SideBanner: FC = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('md')
	);

	return (
		<Stack
			width='100%'
			bgcolor='background.paper'
			direction={isMobile ? 'column' : 'row'}
			justifyContent="space-between"
			py={[6, 8]}
			px={[6, 3]}
			gap={[6, 4]}
		>
			<Stack width={['100%', '100%', '50%']} justifyContent="space-between">
				<Stack>
					<Typography variant={isMobile ? 'h2' : 'h1'}>
						Transforme agora mesmo sua rotina de RH
					</Typography>

					<Typography variant={isMobile ? 'h3' : 'h2'} fontWeight={400} mt={[ 4, 6 ]}>
						Junte-se a milhares de parceiros e revolucione a maneira de atrair,
						selecionar e qualificar talentos.
					</Typography>
				</Stack>

				{!isMobile ? <PlansButtons gradientBgColor='#F3F5F7' /> : null}
			</Stack>

			<Stack width={['100%', '100%', '50%']} gap={6}>
				<Box
					component="img"
					src={interview}
					sx={{
						maxHeight: [316, 600],
						borderRadius: 2,
						objectFit: 'cover',
						objectPosition: 'top'
					}}
				/>

				{isMobile ? <PlansButtons vertical gradientBgColor='#F3F5F7' /> : null}
			</Stack>
		</Stack>
	);
};
