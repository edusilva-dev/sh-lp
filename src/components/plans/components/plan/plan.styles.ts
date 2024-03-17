import { Box, Button, Typography, styled } from '@mui/material';

export const Card = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',

	backgroundColor: theme.palette.common.white,
	borderRadius: '16px',

	overflow: 'hidden',

	[theme.breakpoints.up('sm')]: {
		width: '25%',
		minHeight: '584px',
	}
}));

export const CardContentContainer = styled(Box)(({ theme }) => ({
	flexGrow: 1,

	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',

	padding: theme.spacing(3)
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.common.black,
	fontSize: theme.typography.pxToRem(24),
	lineHeight: theme.typography.pxToRem(32),
	fontWeight: theme.typography.fontWeightMedium,
}));

export const CardDescription = styled(Typography)(({ theme }) => ({
	marginTop: theme.spacing(2),

	color: theme.palette.common.black,
	fontSize: theme.typography.pxToRem(14),
	lineHeight: theme.typography.pxToRem(18),
	fontWeight: theme.typography.fontWeightRegular,
}));

type PlanOptionProps = {
	$hasDot?: boolean
}

export const PlanOption = styled(Typography)<PlanOptionProps>(({ theme, $hasDot }) => ({
	display: 'flex',
	alignItems: 'center',

	color: theme.palette.common.black,
	fontSize: theme.typography.pxToRem(14),
	lineHeight: theme.typography.pxToRem(18),
	fontWeight: theme.typography.fontWeightRegular,

	position: 'relative',
	
	...($hasDot && {
		textIndent: theme.spacing(2),

		['&::before']: {
			content: '\"\"',
		
			width: 4,
			height: 4,
		
			display: 'block',
		
			backgroundColor: theme.palette.secondary.main,
			borderRadius: '100%',
		
			position: 'absolute',
			left: 0
		}
	})
}));

export const PlanPrice = styled(Typography)(({ theme }) => ({
	color: theme.palette.common.black,
	fontSize: theme.typography.pxToRem(40),
	lineHeight: theme.typography.pxToRem(56),
	fontWeight: theme.typography.fontWeightMedium,
}));

export const CurrencyLabel = styled(Typography)(({ theme }) => ({
	color: theme.palette.common.black,
	fontSize: theme.typography.pxToRem(20),
	lineHeight: theme.typography.pxToRem(32),
	fontWeight: theme.typography.fontWeightRegular,
}));

export const CustomPriceLabel = styled(Typography)(({ theme }) => ({
	color: theme.palette.common.black,
	fontSize: theme.typography.pxToRem(20),
	lineHeight: theme.typography.pxToRem(32),
	fontWeight: theme.typography.fontWeightMedium,
}));

type HireButtonProps = {
	$isCustom: boolean
}

export const HireButton = styled(Button)<HireButtonProps>(({ theme, $isCustom }) => ({
	width: '100%',
	height: '42px',
  
	borderRadius: '80px',

	textTransform: 'none',
	color: $isCustom ? theme.palette.common.black : theme.palette.common.white,
	fontSize: theme.typography.pxToRem(14),
	lineHeight: theme.typography.pxToRem(18),
	fontWeight: theme.typography.fontWeightRegular,
	borderWidth: 2
}));