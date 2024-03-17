import { FC } from 'react';
import { SectionTitle } from '../section-title';
import { Grid } from '@mui/material';
import { FEATURES } from './mocks/features.mock';
import { Feature } from './components/feature';

import { SectionContainer } from './features-section.styles';

import macProPathDesktop from '@/assets/images/features-mac.png';
import macProPathMobile from '@/assets/images/features-mac-mobile.png';

export const FeaturesSection: FC = () => {
	return (
		<SectionContainer>
			<SectionTitle pt={2} sx={{ color: '#fff', zIndex: 10, position: 'relative' }}>
				Conheça outras funcionalidades
			</SectionTitle>

			<img src={macProPathDesktop} className='desktop' />
			<img src={macProPathMobile} className='mobile' />
			
			<Grid
				container
				rowSpacing={ 4 }
				columnSpacing={ 4 }
				mt={[ 6, 14 ]}
				sx={{
					width: '60%',
					zIndex: 100,
					position: 'relative'
				}}
			>
				{FEATURES.map((feature, index) => (
					<Grid item key={index} lg={6}>
						<Feature description={feature.description} icon={feature.icon} />
					</Grid>
				))}
			</Grid>
		</SectionContainer>
	);
};