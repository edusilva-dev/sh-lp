import { Typography } from '@mui/material';
import { Fragment } from 'react/jsx-runtime';

const baseUrl = 'src/assets/images/plans';

export const PLANS = [
	{
		title: 'Plano Free',
		description: (
			<Fragment>
				O{' '}
				<Typography
					fontWeight={500}
					variant="body2"
					component="span"
					color="primary.light"
				>
					Plano Free
				</Typography>{' '}
				oferece uma introdução ideal, permitindo que você experimente nossos
				recursos básicos de forma gratuita.
			</Fragment>
		),
		imageSrc: `${baseUrl}/free-plan.svg`,
		options: [
			'Base de talentos da Skill Hunter',
			'Pacotes de desbloqueio disponíveis',
		],
		price: 0,
		isCustom: false,
	},
	{
		title: 'Plano Essencials',
		description: (
			<Fragment>
				O{' '}
				<Typography
					fontWeight={500}
					variant="body2"
					component="span"
					color="primary.light"
				>
					Plano Essentials
				</Typography>{' '}
				eleva a sua experiência a um nível intermediário, desfrutando de
				funcionalidades adicionais que potencializam seu uso na plataforma.
			</Fragment>
		),
		imageSrc: `${baseUrl}/essencials-plan.svg`,
		options: ['15 desbloqueios mensais', 'Criação de desafios'],
		price: 40,
		isCustom: false,
	},
	{
		title: 'Plano Premium',
		description: (
			<Fragment>
				O{' '}
				<Typography
					fontWeight={500}
					variant="body2"
					component="span"
					color="primary.light"
				>
					Plano Premium
				</Typography>{' '}
				é a escolha perfeita para uma experiência completa e aprimorada, onde
				cada recurso avançado foi projetado para garantir que você aproveite ao
				máximo nossa plataforma.
			</Fragment>
		),
		imageSrc: `${baseUrl}/premium-plan.svg`,
		options: [
			'Desbloqueios ilimitados',
			'Criação de desafios',
			'Treinamento da equipe interna',
			'Insights da I.A.',
		],
		price: 64,
		isCustom: false,
	},
	{
		title: 'Plano Personalizado',
		description: (
			<Fragment>
				O{' '}
				<Typography
					fontWeight={500}
					variant="body2"
					component="span"
					color="primary.light"
				>
					Plano Personalizado
				</Typography>{' '}
				oferece uma flexibilidade para escolher os recursos que mais atendem às
				suas necessidades, construindo sua própria assinatura e garantindo uma
				experiência sob medida para sua empresa.
			</Fragment>
		),
		imageSrc: `${baseUrl}/custom-plan.svg`,
		options: ['Personalize seu plano e crie sua experiência ideal!'],
		price: 999,
		isCustom: true,
	},
];
