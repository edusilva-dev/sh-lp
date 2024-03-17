import { Avatar, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { CardContainer } from './comment-card.styles';

type CommentCardProps = {
  data: {
    commentary: string
    user: {
      name: string
      role: string
    }
  }
}

export const CommentCard: FC<CommentCardProps> = ({ data: { commentary, user } }) => {
	return (
		<CardContainer sx={{ py: 4, px: 3 }} justifyContent='space-between'>
			<Typography>{commentary}</Typography>

			<Stack mt={[ 4, 5 ]}>
				<Avatar src='https://placeholder.co/32x32' />

				<Typography sx={{ mt: 2 }}>{user.name}</Typography>

				<Typography sx={{ mt: 0.5 }}>{user.role}</Typography>
			</Stack>
		</CardContainer>
	);
};