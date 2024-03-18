import { Button, Stack } from '@mui/material';
import { FC } from 'react';

export type PlansButtonsProps = {
	vertical?: boolean;
};

export const PlansButtons: FC<PlansButtonsProps> = ({ vertical }) => (
	<Stack gap={[2, 4]} direction={vertical ? 'column' : 'row'} width='100%'>
		<Button variant="contained" sx={{ width: vertical ? '100%' : '50%' }}>Conheça os planos</Button>
		<Button variant="outlined" sx={{ width: vertical ? '100%' : '50%' }}>Solicitar demonstração</Button>
	</Stack>
);
