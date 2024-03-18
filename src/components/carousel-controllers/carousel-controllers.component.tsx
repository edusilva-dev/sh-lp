import LeftChevron from '@/assets/icons/left-chevron.svg?react';
import RightChevron from '@/assets/icons/right-chevron.svg?react';
import { Stack } from '@mui/material';
import { FC } from 'react';

export type CarouselControllersProps = {
	onPrevClick(): void;
	onNextClick(): void;
};

export const CarouselControllers: FC<CarouselControllersProps> = ({
	onPrevClick,
	onNextClick,
}) => (
	<Stack direction="row" gap={4}>
		<Stack
			onClick={() => onPrevClick()}
			alignItems="center"
			justifyContent="center"
			sx={(theme) => ({
				borderRadius: '100%',
				height: '40px',
				width: '40px',
				backgroundColor: theme.palette.common.white,
				cursor: 'pointer',
			})}
		>
			<LeftChevron />
		</Stack>
		<Stack
			onClick={() => onNextClick()}
			alignItems="center"
			justifyContent="center"
			sx={(theme) => ({
				borderRadius: '100%',
				height: '40px',
				width: '40px',
				backgroundColor: theme.palette.common.white,
				cursor: 'pointer',
			})}
		>
			<RightChevron />
		</Stack>
	</Stack>
);
