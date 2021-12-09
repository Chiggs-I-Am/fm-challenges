import styled from "styled-components";
import tw from "tailwind-styled-components";
import TimeTracker from './time-tracker';

type TimeTrackerListProps = {
  trackers: {
    theme: string;
    icon: string;
    title: string;
    timePeriod: string;
    timeframes: {
      daily: timeframeProps;
      weekly: timeframeProps;
      monthly: timeframeProps;
    };
  }[]
};

type timeframeProps = {
  current: number;
  previous: number;
};

export default function TimeTrackerList({ trackers }: TimeTrackerListProps) 
{
  return (
    <Wrapper>
      {
        trackers ? trackers.map(tracker => {
          const { title, timeframes, timePeriod, theme, icon } = tracker;
          const timeframesFiltered = filterObj(timeframes, timePeriod);          

          return (
            <TimeTracker 
              key={ title } 
              bgcolor={ theme } 
              iconSrc={ `/time-tracking-dashboard/images/icon-${ icon }.svg` }
              title={ title } 
              timeframe={ timeframesFiltered[timePeriod] as timeframeProps }
              timePeriod={ getTimePeriod( timePeriod ) }></TimeTracker>
          )
        }) : <div>...Loading</div>
      }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-areas:
      "tracker-1 tracker-2 tracker-3"
      "tracker-4 tracker-5 tracker-6";
  }
`;

/* 
  converts an object to an array
  returns an object with only the properties that match the string
*/
function filterObj( obj: {}, timePeriod: string) {
  const asArray = Object.entries(obj);
  const filterObj = asArray.filter(([key, value]) => key === timePeriod);
  const filteredObject = Object.fromEntries(filterObj);
  return filteredObject;
}

function getTimePeriod(timePeriod: string): string {
  switch (timePeriod) {
    case "daily":
      return "Yesterday";
    case "weekly":
      return "Last Week";
    case "monthly":
      return "Last Month";
    default:
      return "Yesterday";
  }
} 