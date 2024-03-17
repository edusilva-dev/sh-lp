import { FC } from 'react';
import { Card, CardContentContainer, CardDescription, CardTitle, CurrencyLabel, HireButton, PlanOption, PlanPrice } from './plan.styles';
import { Box, List } from '@mui/material';
import { KnowPlanButton } from '@/components/recruiter-banner/recruiter-banner.styles';

type PlanProps = {
  data: PlanData
}

type PlanData = {
  title: string
  description: string
  imageSrc: string
  options: string[]
  price: number
}

export const Plan: FC<PlanProps> = ({ data: { title, description, imageSrc, options, price } }) => {
	return (
		<Card>
			<img src={imageSrc} />

			<CardContentContainer>
				<CardTitle>{title}</CardTitle>

				<CardDescription>{description}</CardDescription>

				{options.length > 0 && (
					<List sx={{ marginTop: 3 }}>
						{options.map((option, index) => (
							<PlanOption key={index}>{option}</PlanOption>
						))}
					</List>
				)}

				{price > 0 && (
					<Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1, marginTop: 4 }}>
						<CurrencyLabel>R$</CurrencyLabel>
						<PlanPrice>{price}</PlanPrice>
						<CurrencyLabel>/mês</CurrencyLabel>
					</Box>
				)}

				<HireButton variant='contained' sx={{ marginTop: price > 0 ? 3 : 5 }}>Contratar</HireButton>
			</CardContentContainer>
		</Card>
	);
};