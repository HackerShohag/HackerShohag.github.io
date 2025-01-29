'use client';

import CustomTimeline from '@/components/CustomTimeline';

const timelineItems = [
  {
    title: 'Step 1',
    cardTitle: 'Project Started',
    cardSubtitle: '01 Jan 2024',
    cardDetailedText: 'We kicked off the project with an initial meeting.',
  },
  {
    title: 'Step 2',
    cardTitle: 'Development Phase',
    cardSubtitle: '15 Jan 2024',
    cardDetailedText: 'We started developing the core features.',
  },
  {
    title: 'Step 3',
    cardTitle: 'Testing & QA',
    cardSubtitle: '10 Feb 2024',
    cardDetailedText: 'Performed rigorous testing to ensure quality.',
  },
  {
    title: 'Step 4',
    cardTitle: 'Project Completed',
    cardSubtitle: '25 Feb 2024',
    cardDetailedText: 'Project was successfully delivered to the client.',
  },
];

export default function ChronoTimeline() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <CustomTimeline items={timelineItems} position="middle" />
    </div>
  );
}
