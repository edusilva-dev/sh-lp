import { Stack } from '@mui/material';
import { FC } from 'react';

import FiredevIconPath from '@/assets/partners-logo/firedev.svg';
import AgoraaIconPath from '@/assets/partners-logo/agoraa.svg';
import DataHubIconPath from '@/assets/partners-logo/data-hub.svg';
import MassimusIconPath from '@/assets/partners-logo/massimus.svg';
import ToroIconPath from '@/assets/partners-logo/toro.svg';

export const Partners: FC = () => {
	return (
		<Stack 
			direction='row'
			justifyContent={[ 'flex-start', 'space-between' ]}
			gap={[ 3, 0]}
			px={[ 3, 8 ]}
			py={4}
			sx={(theme) => ({ 
				borderTop: `1px solid ${theme.palette.background.paper}`,
				opacity: 0.6,
				overflowX: 'auto'
			})}
		>
			<img src={FiredevIconPath} />
			<img src={AgoraaIconPath} />
			<img src={DataHubIconPath} />
			<img src={MassimusIconPath} />
			<img src={ToroIconPath} />
		</Stack>
	);
};