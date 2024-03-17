import { FC, PropsWithChildren } from 'react';
import { Container } from '../container';

export const PrimaryLightContainer: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Container
			sx={(theme) => ({
				backgroundColor: theme.palette.primary.light,
			})}
		>
			{children}
		</Container>
	);
};
