import { Box, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { FC } from 'react';
import { HEADER } from '../header/header.constants';
import highlight from '@/assets/images/highlight.png';

export const Highlight: FC = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('sm')
	);

	return (
		<Stack
			direction={isMobile ? 'column' : 'row'}
			alignItems="center"
			justifyContent="center"
			gap={['unset', '150px']}
			paddingLeft={[3, 12]}
			height={`calc(100dvh - ${HEADER.height.mobile}px)`}
			bgcolor="primary.main"
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
			<Box
				sx={(theme) => ({
					backgroundImage: `url(${highlight})`,
					backgroundSize: '300px 300px',
					backgroundRepeat: 'no-repeat',
					position: 'relative',
					width: '300px',
					height: '300px',
					'&:after, &:before': {
						position: 'absolute',
						borderRadius: '100%',
						content: '""',
					},
					'&:after': {
						top: '-150px',
						left: '-150px',
						width: '600px',
						height: '600px',
						background:
							'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 52.15%, rgba(255, 255, 255, 0.15) 100%)',
					},
					'&:before': {
						top: '-450px',
						left: '-450px',
						width: '1200px',
						height: '1200px',
						background:
							'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 52.15%, rgba(255, 255, 255, 0.1) 100%)',
					},
					[theme.breakpoints.down('sm')]: {
						'@media (min-height: 800px)': {
							top: '-20px',
						},
					},
				})}
			/>
		</Stack>
	);
};
