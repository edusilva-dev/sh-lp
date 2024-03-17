import { ButtonProps } from '@mui/material';
import { FC } from 'react';
import { Button } from './tab.styles';

type TabProps = {
  label: string
  isActive: boolean
} & ButtonProps

export const Tab: FC<TabProps> = ({ label, isActive, ...rest }) => {
	return (
		<Button color='inherit' $isActive={isActive} {...rest}>
			{label}
		</Button>
	);
};