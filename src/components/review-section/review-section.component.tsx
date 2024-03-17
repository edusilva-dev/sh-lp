import { FC } from 'react';
import { Container } from '../container';
import { CardsCarousel } from '../cards-carousel';
import { COMMENTS } from '@/pages/recruiter/mocks/comments.mock';
import { SectionTitle } from '../section-title';

export const ReviewSection: FC = () => {
	return (
		<Container sx={(theme) => ({ bgcolor: theme.palette.primary.main })}>
			<SectionTitle mb={6} pt={[ 0, 16 ]} sx={{ color: '#fff' }}>Ouça de quem usa a Skill Hunter</SectionTitle>

			<CardsCarousel reviews={COMMENTS} />
		</Container>
	);
};