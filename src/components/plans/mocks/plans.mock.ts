const baseUrl = 'src/assets/images/plans';

export const PLANS = [
	{
		title: 'Plano Free',
		description: 'O Plano Free oferece uma introdução ideal, permitindo que você experimente nossos recursos básicos de forma gratuita.',
		imageSrc: `${baseUrl}/free-plan.png`,
		options: [
			'Base de talentos da Skill Hunter',
			'Pacotes de desbloqueio disponíveis'
		],
		price: 0
	},
	{
		title: 'Plano Essencials',
		description: 'O Plano Essentials eleva a sua experiência a um nível intermediário, desfrutando de funcionalidades adicionais que potencializam seu uso na plataforma.',
		imageSrc: `${baseUrl}/essencials-plan.png`,
		options: [
			'15 desbloqueios mensais',
			'Criação de desafios'
		],
		price: 40
	},
	{
		title: 'Plano Premium',
		description: 'O Plano Premium é a escolha perfeita para uma experiência completa e aprimorada, onde cada recurso avançado foi projetado para garantir que você aproveite ao máximo nossa plataforma.',
		imageSrc: `${baseUrl}/premium-plan.png`,
		options: [
			'Desbloqueios ilimitados',
			'Criação de desafios',
			'Treinamento da equipe interna',
			'Insights da I.A.'
		],
		price: 64
	},
	{
		title: 'Plano Personalizado',
		description: 'O Plano Personalizado oferece uma flexibilidade para escolher os recursos que mais atendem às suas necessidades, construindo sua própria assinatura e garantindo uma experiência sob medida para sua empresa.',
		imageSrc: `${baseUrl}/custom-plan.png`,
		options: [
			'Personalize seu plano e crie sua experiência ideal!'
		],
		price: null
	}
];