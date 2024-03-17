import { FC, useState } from 'react';
import { ButtonsContainer, HeaderContainer, MenuIcon } from './header.styles';
import { Box, Button, Drawer } from '@mui/material';

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
				<Button variant='outlined' color='secondary'>Cadastre-se</Button>
				<Button variant='contained' color='secondary'>Entre</Button>
			</ButtonsContainer>
		</HeaderContainer>
	);
};