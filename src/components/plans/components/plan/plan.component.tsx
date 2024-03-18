import { RoundGradientButton } from '@/components/round-gradient-button';
import {
	Box,
	Button,
	List,
	Stack,
	Theme,
	Typography,
	useMediaQuery,
} from '@mui/material';
import { FC } from 'react';
import { Card, CardContentContainer, PlanOption } from './plan.styles';

type PlanProps = {
	data: PlanData;
};

type PlanData = {
	title: string;
	description: string;
	imageSrc: string;
	options: string[];
	price: number;
	isCustom: boolean;
};

export const Plan: FC<PlanProps> = ({
	data: { title, description, imageSrc, options, price, isCustom },
}) => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('md')
	);

	return (
		<Card>
			<img src={imageSrc} />

			<CardContentContainer>
				<Stack>
					<Typography variant="h2">{title}</Typography>

					<Typography variant="body2" mt={2}>
						{description}
					</Typography>

					{options.length > 0 && !isCustom && (
						<List sx={{ marginTop: 3 }}>
							{options.map((option, index) => (
								<PlanOption key={index} hasDot={!isCustom}>
									{option}
								</PlanOption>
							))}
						</List>
					)}

					{options.length > 0 && isCustom && (
						<Box sx={{ marginTop: 4 }}>
							<PlanOption>{options[0]}</PlanOption>
						</Box>
					)}
				</Stack>

				<Stack gap={3}>
					{price > 0 && price < 100 && (
						<Box
							sx={{
								display: 'flex',
								alignItems: 'flex-end',
								gap: 1,
								marginTop: 4,
							}}
						>
							<Typography variant="h3" fontWeight={400}>
								R$
							</Typography>
							<Typography variant="h1">{price}</Typography>
							<Typography variant="h3" fontWeight={400}>
								/mês
							</Typography>
						</Box>
					)}

					{price > 100 && (
						<Box
							sx={{
								display: 'flex',
								alignItems: 'flex-end',
								gap: 1,
								marginTop: 4,
							}}
						>
							<Typography variant={isMobile ? 'body2' : 'h3'}>
								Valor a consultar
							</Typography>
						</Box>
					)}

					{!isCustom ? (
						<Button variant="contained">Contratar</Button>
					) : (
						<RoundGradientButton>Solicitar contato</RoundGradientButton>
					)}
				</Stack>
			</CardContentContainer>
		</Card>
	);
};
