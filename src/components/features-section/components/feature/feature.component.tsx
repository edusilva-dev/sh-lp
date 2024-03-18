import { Typography } from '@mui/material';
import { FC } from 'react';
import { FeatureContainer } from './feature.styles';

type FeatureProps = {
  description: string
  icon: JSX.Element
}

export const Feature: FC<FeatureProps> = ({ description, icon }) => {
	return (
		<FeatureContainer gap={[2, 3]} sx={{ width: ['100%', 312], height: 'auto' }}>
			{icon}

			<Typography variant='h3' sx={{ maxWidth: ['100%', 312], color: 'common.white' }}>
				{description}
			</Typography>
		</FeatureContainer>
	);
};