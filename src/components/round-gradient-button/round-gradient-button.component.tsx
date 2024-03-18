import { Button, Stack } from '@mui/material';
import { FC, HTMLProps } from 'react';

export const RoundGradientButton: FC<HTMLProps<HTMLButtonElement>> = (
	props
) => (
	<Stack
		alignItems="center"
		justifyContent="center"
		sx={(theme) => ({
			cursor: 'pointer',
			borderRadius: theme.shape.borderRadius,
			height: '44px',
			padding: '2px',
			background: 'linear-gradient(90deg, #B694FF 0%, #4402FF 100%)',
		})}
	>
		<Button
			sx={{
				backgroundColor: '#FFFFFF !important',
				width: '100%',
				height: '40px',
			}}
			variant="contained"
			color="secondary"
		>
			{props.children}
		</Button>
	</Stack>
);
