import { FC } from 'react';
import { ContainedButton, Container } from './rh-banner.styles';

import bannerPathDesktop from '@/assets/images/rh-banner.png';
import bannerPathMobile from '@/assets/images/rh-banner-mobile.png';
import { Box } from '@mui/material';
import { Title } from '../section-title';

export const RHBanner: FC = () => {
	return (
		<Container>
			<img src={bannerPathMobile} className='mobile' />
			<img src={bannerPathDesktop} className='desktop' />

			<Box sx={{ 
				padding: 3, 
				margin: 2,
				borderRadius: 4, 
				position: 'absolute', 
				bottom: 0, 
				bgcolor: '#fff' 
			}}>
				<Title variant='h3'>
          Qualifique seu departamento de RH e invista tempo nas atividades certas.
				</Title>
        
				<ContainedButton variant='contained' sx={{ marginTop: 4 }}>Conheça os planos</ContainedButton>
				<ContainedButton variant='outlined' sx={{ marginTop: 2 }}>Solicitar demonstração</ContainedButton>
			</Box>
		</Container>
	);
};