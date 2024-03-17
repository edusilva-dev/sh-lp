import LeftChevron from '@/assets/icons/left-chevron.svg?react';
import RightChevron from '@/assets/icons/right-chevron.svg?react';
import { Stack, Typography, typographyClasses } from '@mui/material';
import useEmblaCarousel from 'embla-carousel-react';
import { FC } from 'react';

export type Review = {
	content: string;
	name: string;
	role: string;
	photo: JSX.Element;
};

export type CardsCarouselProps = {
	reviews: Array<Review>;
};

export const CardsCarousel: FC<CardsCarouselProps> = ({ reviews }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel();

	return (
		<Stack
			gap={6}
			ref={emblaRef}
			sx={{ overflowX: 'hidden', marginX: -6, paddingX: 6 }}
		>
			<Stack direction="row" gap={4}>
				{reviews.map((review, index) => (
					<Stack
						key={index}
						sx={(theme) => ({
							backgroundColor: theme.palette.common.white,
							width: '420px',
							height: '290px',
							p: 3,
							borderRadius: 2,
							flexShrink: '0',
							[`.${typographyClasses.root}`]: {
								color: '#1E2E3A !important',
							},
						})}
					>
						<Stack justifyContent="space-between" height="100%">
							<Typography variant="h3">{review.content}</Typography>
							<Stack direction="row" gap={3}>
								{review.photo}
								<Stack>
									<Typography>{review.name}</Typography>
									<Typography variant="body2">{review.role}</Typography>
								</Stack>
							</Stack>
						</Stack>
					</Stack>
				))}
			</Stack>
			<Stack direction="row" alignSelf="flex-end" gap={4}>
				<Stack
					onClick={() => emblaApi?.scrollPrev()}
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
					onClick={() => emblaApi?.scrollNext()}
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
		</Stack>
	);
};
