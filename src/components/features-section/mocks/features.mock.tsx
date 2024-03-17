import { FaLinkedinIn as LinkedinIcon } from 'react-icons/fa6';
import { GoGoal as GoalIcon } from 'react-icons/go';
import { IoIosStar as StarIcon } from 'react-icons/io';
import { IoPeople as PeopleIcon } from 'react-icons/io5';

export const FEATURES = [
	{
		description: 'Processo integrado de R&S',
		icon: <PeopleIcon size={40} color={'#fff'} />
	},
	{
		description: 'Desafios personalizados',
		icon: <GoalIcon size={40} color={'#fff'} />
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