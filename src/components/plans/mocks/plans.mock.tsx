import { Typography } from '@mui/material';
import { Fragment } from 'react/jsx-runtime';

import freePlanSVG from '@/assets/images/plans/free-plan.svg';
import essencialsPlanSVG from '@/assets/images/plans/essencials-plan.svg';
import premiumPlanSVG from '@/assets/images/plans/premium-plan.svg';
import customPlanSVG from '@/assets/images/plans/custom-plan.svg';

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
		imageSrc: freePlanSVG,
		options: [
			'Base de talentos da Skill Hunter',
			'Pacotes de desbloqueio disponíveis',
		],
		price: 0,
		bgColor: '#4402FF33',
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
		imageSrc: essencialsPlanSVG,
		options: ['15 desbloqueios mensais', 'Criação de desafios'],
		price: 40,
		bgColor: '#4402FF80',
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
		imageSrc: premiumPlanSVG,
		options: [
			'Desbloqueios ilimitados',
			'Criação de desafios',
			'Treinamento da equipe interna',
			'Insights da I.A.',
		],
		price: 64,
		bgColor: '#4402FFB3',
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
		imageSrc: customPlanSVG,
		options: ['Personalize seu plano e crie sua experiência ideal!'],
		price: 999,
		bgColor: '#4402FF',
		isCustom: true,
	},
];
