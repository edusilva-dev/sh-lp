import { Button, Stack } from '@mui/material';
import { FC } from 'react';

export type PlansButtonsProps = {
	vertical?: boolean;
};

export const PlansButtons: FC<PlansButtonsProps> = ({ vertical }) => (
	<Stack gap={3} direction={vertical ? 'column' : 'row'}>
		<Button variant="contained">Conheça os planos</Button>
		<Button variant="outlined">Solicitar demonstração</Button>
	</Stack>
);
