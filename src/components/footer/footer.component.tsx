import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { FaIceCream } from 'react-icons/fa';

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
			<FaIceCream /> 

			<Typography variant='body1' mt={[ 6, 0 ]}>
        Copyrights © 2023. Todos os direitos reservados à Firedev It Solutions
			</Typography>
		</Stack>
	);
};