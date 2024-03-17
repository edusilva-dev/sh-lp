import { CommentCard } from '@/components/comment-card/comment-card.component';
import { Plans } from '@/components/plans';
import { RHBanner } from '@/components/rh-banner/rh-banner.component';
import { ExclusiveDifferences } from '@components/exclusive-differences';
import { RecruiterBanner } from '@components/recruiter-banner';
import { Stack } from '@mui/material';
import { FC } from 'react';
import { COMMENTS } from './mocks/comments.mock';

export const Recruiter: FC = () => {
	return (
		<>
			<RecruiterBanner />
			<ExclusiveDifferences />
			<Plans />
			<RHBanner />
			<Stack direction='row' p={3} gap={[ 3, 4 ]} sx={{ overflowX: 'auto' }}>
				{COMMENTS.map((comment, index) => (
					<CommentCard key={index} data={comment} />
				))}
			</Stack>
		</>
	);
};