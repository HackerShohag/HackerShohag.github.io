'use client';

import { FC, useState } from 'react';
import { Chrono } from 'react-chrono';
import { Switch } from '@nextui-org/react';

interface TimelineItem {
  title: string;
  cardTitle: string;
  cardSubtitle?: string;
  cardDetailedText?: string;
}

interface CustomTimelineProps {
  items: TimelineItem[];
  position?: 'left' | 'right' | 'middle' | 'middle-left' | 'middle-right';
}

const CustomTimeline: FC<CustomTimelineProps> = ({ items, position = 'middle' }) => {
  const [isVertical, setIsVertical] = useState(true);

  const timelineClasses = {
    left: 'items-start justify-center',
    right: 'items-end justify-center',
    middle: 'items-center justify-center',
    'middle-left': 'items-start justify-center',
    'middle-right': 'items-end justify-center',
  };

  return (
    <div className={`flex ${timelineClasses[position]} my-10`}>
      <div className="flex flex-col items-center">
        <Switch
          checked={isVertical}
          onChange={() => setIsVertical(!isVertical)}
          color="primary"
        //   label={`Orientation: ${isVertical ? 'Vertical' : 'Horizontal'}`}
        />

        <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-lg">
          <Chrono
            items={items}
            mode={isVertical ? 'VERTICAL' : 'HORIZONTAL'}
            cardHeight={200}
            hideControls
            theme={{
              primary: '#0072F5',
              secondary: '#f5f5f5',
              cardBgColor: '#ffffff',
              cardForeColor: '#333',
              titleColor: '#0072F5',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomTimeline;
