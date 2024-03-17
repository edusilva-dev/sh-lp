import { Plans } from '@/components/plans';
import { ExclusiveDifferences } from '@components/exclusive-differences';
import { RecruiterBanner } from '@components/recruiter-banner';
import { FC } from 'react';

export const Recruiter: FC = () => {
	return (
		<>
			<RecruiterBanner />
			<ExclusiveDifferences />
			<Plans />
		</>
	);
};