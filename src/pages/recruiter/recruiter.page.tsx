import { FeaturesSection } from '@/components/features-section';
import { Plans } from '@/components/plans';
import { ReviewSection } from '@/components/review-section';
import { ExclusiveDifferences } from '@components/exclusive-differences';
import { RecruiterBanner } from '@components/recruiter-banner';
import { FC } from 'react';

export const Recruiter: FC = () => {
	return (
		<>
			<RecruiterBanner />
			<ExclusiveDifferences />
			<Plans />
			<FeaturesSection />
			<ReviewSection />
		</>
	);
};