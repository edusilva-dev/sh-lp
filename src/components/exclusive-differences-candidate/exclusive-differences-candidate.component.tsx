import { FC } from 'react';
import {
	CardsContainer,
	ContentContainer,
	SmallCardsContainer,
	Title,
} from './exclusive-differences-candidate.styles';
import { HighlightCard } from './components/highlight-card/highlight-card.component';
import { Card } from './components/card';
import { CARDS } from './mocks/cards.mock';
import { CallRH } from '../call-rh/call-rh.component';
import { Box, Button, Stack, Typography } from '@mui/material';
import CandidateBanner2 from '@/assets/images/candidate-banner-2.png';

export const ExclusiveDifferences: FC = () => {
	return (
		<ContentContainer>
			<Title variant="h2">Diferenciais Exclusivos</Title>
			<CardsContainer>
				<HighlightCard />
				<SmallCardsContainer>
					{CARDS.map((card, index) => (
						<Card key={index} data={card} />
					))}
				</SmallCardsContainer>
			</CardsContainer>
			<CallRH />
			<Box
				sx={(theme) => ({
					[theme.breakpoints.up('sm')]: {
						height: '480px',
						padding: '48px',
						backgroundPositionY: '-150px',
					},
					[theme.breakpoints.down('sm')]: {
						paddingTop: '200px',
						backgroundPositionY: '-100px',
						backgroundPositionX: '500px',
					},
					width: '100%',
					padding: '16px',
					backgroundImage: `url(${CandidateBanner2})`,
					backgroundSize: 'cover',
					borderRadius: '16px',
				})}
			>
				<Stack
					justifyContent="space-between"
					gap="32px"
					sx={(theme) => ({
						[theme.breakpoints.up('sm')]: {
							width: '400px',
						},
						backgroundColor: theme.palette.common.white,
						padding: '24px',
						height: '100%',
						borderRadius: '16px',
					})}
				>
					<Typography
						sx={(theme) => ({
							fontSize: theme.typography.pxToRem(20),
							[theme.breakpoints.up('sm')]: {
								fontSize: theme.typography.pxToRem(24),
							},
						})}
					>
						Com a Skill Hunter é selecionado por fazer o que você faz de melhor,
						de forma 100% gratuita.
					</Typography>
					<Stack gap="24px">
						<Button variant="contained">Cadastrar</Button>
						<Typography>Já possui uma conta? Entre</Typography>
					</Stack>
				</Stack>
			</Box>
		</ContentContainer>
	);
};
