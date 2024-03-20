import { Button, Stack } from '@mui/material';
import { FC, HTMLProps } from 'react';

type RoundGradientButtonProps = {
	bgColor?: string
}

export const RoundGradientButton: FC<HTMLProps<HTMLButtonElement> & RoundGradientButtonProps> = (
	props
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
				backgroundColor: `${props.bgColor || '#FFF'} !important`,
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
