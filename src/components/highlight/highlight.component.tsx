import highlight from '@/assets/images/highlight.png';
import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

export const Highlight: FC = () => {
	return (
		<Stack
			direction="row"
			height="calc(100vh - 70px)"
			bgcolor="primary.main"
			paddingX={12}
			sx={(theme) => ({
				background: `url(${highlight}), ${theme.palette.primary.main}`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'auto 120%',
				backgroundPositionX: 'right',
			})}
		>
			<Stack maxWidth="590px" justifyContent="center" flex={1} gap={3}>
				<Typography variant="hero" color="secondary.main" fontWeight={700}>
					A melhor plataforma de R&S do Brasil
				</Typography>
				<Typography variant="h2" color="secondary.main" fontWeight={400}>
					A Skill Hunter é uma solução completa que faz a ponte entre
					recrutadores e candidatos qualificados
				</Typography>
			</Stack>
		</Stack>
	);
};
