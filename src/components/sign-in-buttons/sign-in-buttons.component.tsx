import { Button, Link, Stack, Typography } from '@mui/material';
import { FC } from 'react';

export type SignInButtonsProps = {
	vertical?: boolean;
};

export const SignInButtons: FC<SignInButtonsProps> = ({ vertical }) => (
	<Stack direction={!vertical ? 'row' : 'column'} alignItems="center" gap={3}>
		<Button sx={{ width: vertical ? '100%' : 'auto' }} variant="contained">Cadastre-se</Button>

		<Typography
			fontWeight={400}
			color="primary.main"
			component={Stack}
			direction="row"
			gap={0.5}
		>
			Já possui uma conta?
			<Link href="#" fontWeight={500} sx={{ textDecoration: 'none' }}>
				Entre
			</Link>
		</Typography>
	</Stack>
);
