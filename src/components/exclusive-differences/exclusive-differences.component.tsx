import { FC } from 'react';
import { CardsContainer, ContentContainer, SmallCardsContainer, Title } from './exclusive-differences.styles';
import { HighlightCard } from './components/highlight-card/highlight-card.component';
import { Card } from './components/card';
import { CARDS } from './mocks/cards.mock';

export const ExclusiveDifferences: FC = () => {
	return (
		<ContentContainer>
			<Title variant='h2'>Diferenciais Exclusivos</Title>
      
			<CardsContainer>
				<HighlightCard />

				<SmallCardsContainer>
					{CARDS.map((card, index) => (
						<Card key={index} data={card} />
					))}
				</SmallCardsContainer>
			</CardsContainer>
		</ContentContainer>
	);
};