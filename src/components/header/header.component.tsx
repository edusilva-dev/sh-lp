import { FC, useState } from 'react';
import { ButtonsContainer, HeaderContainer, LoginButton, MenuIcon, RegisterButton } from './header.styles';
import { Box, Drawer } from '@mui/material';

import { SkillHunterLogo } from '@/assets/logos/skill-hunter.logo';

export const Header: FC = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

	const toggleDrawer = () => {
		setIsDrawerOpen((previousValue) => !previousValue);
	};

	return (
		<HeaderContainer elevation={0} position='absolute'>
			<Drawer open={isDrawerOpen} onClose={toggleDrawer}>
				{/* Colocar itens do menu aqui */}
			</Drawer>

			<MenuIcon size={20} onClick={toggleDrawer} />

			<Box>
				<SkillHunterLogo />
			</Box>

			<ButtonsContainer>
				<RegisterButton variant='outlined' color={'inherit'}>Cadastre-se</RegisterButton>
				<LoginButton>Entre</LoginButton>
			</ButtonsContainer>
		</HeaderContainer>
	);
};