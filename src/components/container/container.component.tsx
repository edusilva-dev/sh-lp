import { Box, BoxProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export type ContainerProps = BoxProps;

export const Container: FC<PropsWithChildren<BoxProps>> = ({
	children,
	...boxProps
}) => (
	<Box {...boxProps} p={[3, 6]}>
		{children}
	</Box>
);
