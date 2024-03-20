import PeopleIcon from '@/assets/icons/talents.svg?react';
import TargetIcon from '@/assets/icons/target.svg?react';
import { IoIosStar as StarIcon } from 'react-icons/io';
import { FaLinkedinIn as LinkedinIcon } from 'react-icons/fa6';

export const FEATURES = [
	{
		description: 'Processo integrado de R&S',
		icon: <PeopleIcon color={'#fff'} />
	},
	{
		description: 'Desafios personalizados',
		icon: <TargetIcon color={'#fff'} />
	},
	{
		description: 'Veja os candidatos mais qualificados',
		icon: <StarIcon size={40} color={'#fff'} />
	},
	{
		description: 'Integração com o LinkedIn',
		icon: <LinkedinIcon size={40} color={'#fff'} />
	}
];