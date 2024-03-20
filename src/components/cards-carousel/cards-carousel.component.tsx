import {
	Avatar,
	Stack,
	Theme,
	Typography,
	typographyClasses,
	useMediaQuery,
} from '@mui/material';
import useEmblaCarousel from 'embla-carousel-react';
import { FC } from 'react';
import { CarouselControllers } from '../carousel-controllers';

export type Review = {
	content: string;
	name: string;
	role: string;
	photo: string;
};

export type CardsCarouselProps = {
	reviews: Array<Review>;
};

export const CardsCarousel: FC<CardsCarouselProps> = ({ reviews }) => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('sm')
	);

	const [emblaRef, emblaApi] = useEmblaCarousel();

	return (
		<Stack>
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
								minHeight: '290px',
								p: 3,
								borderRadius: 2,
								flexShrink: '0',
								[`.${typographyClasses.root}`]: {
									color: '#1E2E3A !important',
								},
								[theme.breakpoints.down('sm')]: {
									width: '300px',
								},
							})}
						>
							<Stack justifyContent="space-between" height="100%" gap={4}>
								<Typography variant="h3">{review.content}</Typography>
								<Stack direction={isMobile ? 'column' : 'row'} gap={3}>
									<Avatar
										src={review.photo}
										sx={{ width: ['32px', '48px'], height: ['32px', '48px'] }}
									/>
									<Stack>
										<Typography>{review.name}</Typography>
										<Typography variant="body2">{review.role}</Typography>
									</Stack>
								</Stack>
							</Stack>
						</Stack>
					))}
				</Stack>
				<Stack alignSelf={['flex-start', 'flex-end']}>
					<CarouselControllers
						onNextClick={() => emblaApi?.scrollNext()}
						onPrevClick={() => emblaApi?.scrollPrev()}
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};
