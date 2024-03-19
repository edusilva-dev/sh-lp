import { Button, Stack } from '@mui/material';
import { FC } from 'react';
import { RoundGradientButton } from '../round-gradient-button';

export type PlansButtonsProps = {
	vertical?: boolean;
	gradientBgColor?: string;
};

export const PlansButtons: FC<PlansButtonsProps> = ({ vertical, gradientBgColor }) => (
	<Stack gap={[2, vertical ? 3 : 4]} direction={vertical ? 'column' : 'row-reverse'} width='100%'>
		<Button variant="contained" sx={{ width: vertical ? '100%' : '50%' }}>Conheça os planos</Button>
		<RoundGradientButton 
			width={ vertical ? '100%' : '50%' }
			bgColor={gradientBgColor}
		>
			Solicitar demonstração
		</RoundGradientButton>
	</Stack>
);
