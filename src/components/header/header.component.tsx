import { FC, useState } from 'react';
import { ButtonsContainer, HeaderContainer } from './header.styles';
import { Box, Button, Drawer, Theme, useMediaQuery } from '@mui/material';
import { HiMenuAlt1 as MenuIcon } from 'react-icons/hi';

import SkillHunterLogo from '@/assets/logos/skill-hunter-label-white.svg?react';

export const Header: FC = () => {
	const isMobile = useMediaQuery<Theme>((theme) =>
		theme.breakpoints.down('sm')
	);

	const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

	const toggleDrawer = () => {
		setIsDrawerOpen((previousValue) => !previousValue);
	};

	return (
		<HeaderContainer elevation={0} position="absolute">
			{isMobile && (
				<>
					<Drawer open={isDrawerOpen} onClose={toggleDrawer}>
						{/* Colocar itens do menu aqui */}
					</Drawer>

					<MenuIcon color="#fff" size={20} onClick={toggleDrawer} />
				</>
			)}

			<Box>
				<SkillHunterLogo />
			</Box>

			{isMobile === false ? (
				<ButtonsContainer>
					<Button variant="outlined" color="secondary" sx={{ width: 160 }}>
						Cadastre-se
					</Button>
					<Button variant="contained" color="secondary" sx={{ width: 160 }}>
						Entre
					</Button>
				</ButtonsContainer>
			) : (
				<Box width={20}></Box>
			)}
		</HeaderContainer>
	);
};
