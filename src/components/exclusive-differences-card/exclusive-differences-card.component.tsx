import { Box, BoxProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export type ExclusiveDifferencesCardProps = BoxProps;

export const ExclusiveDifferencesCard: FC<
	PropsWithChildren<ExclusiveDifferencesCardProps>
> = (props) => <Box {...props} p={3} bgcolor="#F3F5F7" borderRadius={2} />;
