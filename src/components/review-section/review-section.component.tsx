import { FC } from 'react';
import { Container } from '../container';
import { CardsCarousel } from '../cards-carousel';
import { COMMENTS } from '@/pages/recruiter/mocks/comments.mock';
import { Theme, Typography, useMediaQuery } from '@mui/material';

export const ReviewSection: FC = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('sm')
	);

	return (
		<Container sx={(theme) => ({ bgcolor: theme.palette.primary.main })}>
			<Typography variant={isMobile ? 'h2' : 'h1'} color='common.white' mb={6} pt={[ 3, 16 ]}>
				Ouça de quem usa a Skill Hunter
			</Typography>

			<CardsCarousel reviews={COMMENTS} />
		</Container>
	);
};