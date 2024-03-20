import { FC } from 'react';
import { Box, Grid, Theme, Typography, useMediaQuery } from '@mui/material';
import { FEATURES } from './mocks/features.mock';
import { Feature } from './components/feature';

import { SectionContainer } from './features-section.styles';

import macProPathDesktop from '@/assets/images/features-mac.png';
import macProPathMobile from '@/assets/images/features-mac-mobile.png';

export const FeaturesSection: FC = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('md')
	);

	return (
		<SectionContainer>
			<Typography
				variant={isMobile ? 'h2' : 'h1'}
				pt={2}
				sx={{ color: 'common.white', zIndex: 10, position: 'relative' }}
			>
				Conheça outras funcionalidades
			</Typography>

			{isMobile ? (
				<Box 
					component="img"
					src={macProPathMobile}
					className="mobile"
					maxWidth={[ '800px', '700px' ]}
					marginTop={'-100px'}
					marginLeft={'-260px'} 
				/>
			) : (
				<Box 
					component="img"
					src={macProPathDesktop}
					className="desktop"
					maxWidth={[ '600px', '600px', '500px', '800px' ]}
				/>
			)}

			<Grid
				container
				rowSpacing={4}
				mt={[5, 5, 14]}
				sx={{
					width: ['80vw', '100%', '60%'],
					zIndex: 100,
					position: 'relative',
				}}
			>
				{FEATURES.map((feature, index) => (
					<Grid item key={index} xs={12} sm={6} md={6} lg={6}>
						<Feature description={feature.description} icon={feature.icon} />
					</Grid>
				))}
			</Grid>
		</SectionContainer>
	);
};
