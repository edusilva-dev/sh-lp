import { FC } from 'react';
import { CardContainer, CardDescription, CardSubtitle, CardTitle, Icon, IconContainer } from './card.styles';

type CardProps = {
  data: {
    title: string
    subtitle: string
    description: string
  }
}

export const Card: FC<CardProps> = ({ data: { title, subtitle, description } }) => {
	return (
		<CardContainer>
			<IconContainer>
				<Icon size={20} />
			</IconContainer>

			<CardTitle>{title}</CardTitle>

			<CardSubtitle>{subtitle}</CardSubtitle>

			<CardDescription>{description}</CardDescription>
		</CardContainer>
	);
};