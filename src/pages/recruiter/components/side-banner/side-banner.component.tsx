import interview from '@/assets/images/interview.png';
import { PlansButtons } from '@/components/plans-buttons/plans-buttons.component';
import { Box, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { FC } from 'react';

export const SideBanner: FC = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('lg')
	);

	return (
		<Stack
			direction={isMobile ? 'column' : 'row'}
			justifyItems="space-between"
			gap={6}
			sx={(theme) => ({
				backgroundColor: theme.palette.common.white,
				p: 3,
				borderRadius: 2,
				maxWidth: '1344px',
				width: '100%',
				alignSelf: 'center',
			})}
		>
			<Stack flex="1" justifyContent="space-between">
				<Stack gap={isMobile ? 3 : 6}>
					<Typography variant={isMobile ? 'h2' : 'h1'}>
						Transforme agora mesmo sua rotina de RH
					</Typography>
					<Typography variant={isMobile ? 'h3' : 'h2'} fontWeight={400}>
						Junte-se a milhares de parceiros e revolucione a maneira de atrair,
						selecionar e qualificar talentos.
					</Typography>
				</Stack>
				{!isMobile ? <PlansButtons /> : null}
			</Stack>
			<Stack gap={6}>
				<Box
					component="img"
					src={interview}
					sx={(theme) => ({
						flex: '1',
						borderRadius: 2,
						[theme.breakpoints.up('lg')]: {
							maxWidth: '500px',
						},
					})}
				/>
				{isMobile ? <PlansButtons vertical /> : null}
			</Stack>
		</Stack>
	);
};
