import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

type FeatureProps = {
  description: string
  icon: JSX.Element
}

export const Feature: FC<FeatureProps> = ({ description, icon }) => {
	return (
		<Stack gap={3} sx={{ width: 312, height: 128 }}>
			{icon}

			<Typography sx={
				(theme) => ({
					maxWidth: 312,
					color: theme.palette.common.white,
					fontSize: theme.typography.pxToRem(20),
					lineHeight: theme.typography.pxToRem(32),
					fontWeight: theme.typography.fontWeightMedium, 
				})}
			>
				{description}
			</Typography>
		</Stack>
	);
};