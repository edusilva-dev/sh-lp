import { Box, Button, Typography, styled } from '@mui/material';

type PlanOptionProps = {
	hasDot?: boolean;
};

type HireButtonProps = {
	isCustom: boolean;
};

export const Card = styled(Box)(({ theme }) => ({
	width: '312px',

	display: 'flex',
	flexDirection: 'column',
	alignSelf: 'stretch',
	flex: 1,

	backgroundColor: theme.palette.common.white,
	borderRadius: '16px',

	overflow: 'hidden',

	[theme.breakpoints.down('lg')]: {
		flexShrink: 0,
	},
}));

export const CardContentContainer = styled(Box)(({ theme }) => ({
	flexGrow: 1,

	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',

	padding: theme.spacing(3),
}));

export const PlanOption = styled(Typography, {
	shouldForwardProp: (propName) => propName !== 'hasDot',
})<PlanOptionProps>(({ theme, hasDot }) => ({
	display: 'flex',

	color: theme.palette.common.black,
	fontSize: theme.typography.pxToRem(14),
	lineHeight: theme.typography.pxToRem(18),
	fontWeight: theme.typography.fontWeightRegular,

	position: 'relative',

	...(hasDot && {
		paddingLeft: theme.spacing(2),

		['&::before']: {
			content: '""',

			width: 4,
			height: 4,

			display: 'block',

			backgroundColor: theme.palette.primary.light,
			borderRadius: '100%',

			position: 'absolute',
			left: 0,
			top: 7,
		},
	}),
}));

export const HireButton = styled(Button, {
	shouldForwardProp: (propName) => propName !== 'isCustom',
})<HireButtonProps>(({ theme, isCustom }) => ({
	width: '100%',
	height: '42px',

	borderRadius: '80px',

	textTransform: 'none',
	color: isCustom ? theme.palette.common.black : theme.palette.common.white,
	fontSize: theme.typography.pxToRem(14),
	lineHeight: theme.typography.pxToRem(18),
	fontWeight: theme.typography.fontWeightRegular,
	borderWidth: 2,
}));
