import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

import SkillHunterLogo from '@/assets/logos/skill-hunter-label.svg';

export const Footer: FC = () => {
	return (
		<Stack 
			direction={[ 'column', 'row' ]}
			alignItems={[ 'flex-start', 'center' ]}
			justifyContent='space-between'
			sx={(theme) => ({ 
				px: 3,
				py: 6,
				borderTop: `1px solid ${theme.palette.background.paper}`
			})}
		>
			<img src={SkillHunterLogo} /> 

			<Typography variant='body1' mt={[ 6, 0 ]}>
        Copyrights © 2023. Todos os direitos reservados à Firedev It Solutions
			</Typography>
		</Stack>
	);
};