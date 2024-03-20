import { Button, ButtonProps, Stack } from '@mui/material';
import { FC } from 'react';

type RoundGradientButtonProps = {
	width?: string | number | string[] | number[]
	bgColor?: string
}

export const RoundGradientButton: FC<ButtonProps & RoundGradientButtonProps> = (
	{ bgColor, ...props }
) => (
	<Stack
		alignItems="center"
		justifyContent="center"
		sx={(theme) => ({
			cursor: 'pointer',
			borderRadius: theme.shape.borderRadius,
			height: '42px',
			padding: '2px',
			background: 'linear-gradient(90deg, #B694FF 0%, #4402FF 100%)',
		})}
		{...(props.width && ({
			width: props.width
		}))}
	>
		<Button
			sx={{
				backgroundColor: `${bgColor || '#FFF'} !important`,
				width: '100%',
				height: '38px',
			}}
			variant="contained"
			color="secondary"
		>
			{props.children}
		</Button>
	</Stack>
);
