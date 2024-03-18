import { FC } from 'react';
import { Card, CardContentContainer, CardDescription, CardTitle, CurrencyLabel, CustomPriceLabel, HireButton, PlanOption, PlanPrice } from './plan.styles';
import { Box, List, Stack } from '@mui/material';

type PlanProps = {
  data: PlanData
}

type PlanData = {
  title: string
  description: string
  imageSrc: string
  options: string[]
  price: number
	isCustom: boolean
}

export const Plan: FC<PlanProps> = ({ data: { title, description, imageSrc, options, price, isCustom } }) => {
	return (
		<Card>
			<img src={imageSrc} />

			<CardContentContainer>
				<Stack>
					<CardTitle>{title}</CardTitle>

					<CardDescription>{description}</CardDescription>

					{options.length > 0 && !isCustom && (
						<List sx={{ marginTop: 3 }}>
							{options.map((option, index) => (
								<PlanOption key={index} hasDot={!isCustom}>{option}</PlanOption>
							))}
						</List>
					)}

					{options.length > 0 && isCustom && (
						<Box sx={{ marginTop: 4 }}>
							<PlanOption>{options[0]}</PlanOption>
						</Box>
					)}
				</Stack>

				<Stack>
					{price > 0 && price < 100 && (
						<Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1, marginTop: 4 }}>
							<CurrencyLabel>R$</CurrencyLabel>
							<PlanPrice>{price}</PlanPrice>
							<CurrencyLabel>/mês</CurrencyLabel>
						</Box>
					)}

					{price > 100 && (
						<Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1, marginTop: 4 }}>
							<CustomPriceLabel>Valor a consultar</CustomPriceLabel>
						</Box>
					)}

					<HireButton 
						isCustom={isCustom}
						variant={isCustom ? 'outlined' : 'contained'}
						sx={{ marginTop: price > 0 ? 3 : 5 }}
					>
						{isCustom ? 'Valor a consultar' : 'Contratar'} 
					</HireButton>
				</Stack>
			</CardContentContainer>
		</Card>
	);
};