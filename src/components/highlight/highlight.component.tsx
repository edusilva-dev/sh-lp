import highlight from '@/assets/images/highlight.png';
import mobileHighlight from '@/assets/images/mobile-highlight.png';
import { Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { FC } from 'react';

export const Highlight: FC = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('sm')
	);

	return (
		<Stack
			height="calc(100vh - 70px)"
			bgcolor="primary.main"
			sx={(theme) => ({
				[theme.breakpoints.down('sm')]: {
					paddingX: 3,
					background: `url(${mobileHighlight}), ${theme.palette.primary.main}`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				},
				[theme.breakpoints.up('sm')]: {
					paddingX: 12,
					background: `url(${highlight}), ${theme.palette.primary.main}`,
					backgroundSize: 'auto 120%',
					backgroundPositionX: 'right',
					backgroundRepeat: 'no-repeat',
				},
			})}
		>
			<Stack
				sx={(theme) => ({
					maxWidth: '345px',
					flex: 1,
					gap: 3,
					[theme.breakpoints.down('sm')]: {
						paddingTop: 12,
					},
					[theme.breakpoints.up('sm')]: {
						maxWidth: '590px',
						justifyContent: 'center',
					},
				})}
			>
				<Typography
					variant={isMobile ? 'h1' : 'hero'}
					fontWeight={isMobile ? 500 : 700}
					color="secondary.main"
				>
					A melhor plataforma de R&S do Brasil
				</Typography>
				<Typography
					variant={isMobile ? 'h3' : 'h2'}
					fontWeight={400}
					color="secondary.main"
				>
					A Skill Hunter é uma solução completa que faz a ponte entre
					recrutadores e candidatos qualificados
				</Typography>
			</Stack>
		</Stack>
	);
};
