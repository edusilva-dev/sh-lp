import { FC, PropsWithChildren } from 'react';
import { Container } from '../container';
import { typographyClasses } from '@mui/material';

export const PrimaryLightContainer: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Container
			sx={(theme) => ({
				backgroundColor: theme.palette.primary.light,
				[`.${typographyClasses.root}`]: { color: theme.palette.common.white },
			})}
		>
			{children}
		</Container>
	);
};
