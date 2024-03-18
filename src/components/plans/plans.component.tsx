import { FC } from 'react';
import { PlansContainer } from './plans.styles';
import { Plan } from './components/plan';

import { PLANS } from './mocks/plans.mock';
import { Container } from '../container';
import { Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import useEmblaCarousel from 'embla-carousel-react';
import { CarouselControllers } from '../carousel-controllers';

export const Plans: FC = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('sm')
	);

	const isTablet = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('lg')
	);

	const [emblaRef, emblaApi] = useEmblaCarousel();

	return (
		<Container sx={(theme) => ({ bgcolor: theme.palette.background.paper })}>
			<Typography variant={isMobile ? 'h2' : 'h1'}>
				Conheça os planos
			</Typography>
			<Stack gap={6}>
				<Stack {...(isTablet && { ref: emblaRef })}>
					<PlansContainer mt={6}>
						{PLANS.map((plan, index) => (
							<Plan key={index} data={plan} />
						))}
					</PlansContainer>
				</Stack>
				{isTablet ? (
					<Stack direction="row" alignItems="center" justifyContent="center">
						<CarouselControllers
							onNextClick={() => emblaApi?.scrollNext()}
							onPrevClick={() => emblaApi?.scrollPrev()}
						/>
					</Stack>
				) : null}
			</Stack>
		</Container>
	);
};
