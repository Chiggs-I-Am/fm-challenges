import Image from "next/image";
import styled from "styled-components";
import tw from "tailwind-styled-components";

type BackgroundColor = {
  bgcolor: string;
}

type TimeTrackerProps = {
  bgcolor: string;
  iconSrc: string;
  title: string;
  timePeriod: string;
  timeframe: {
    current: number;
    previous: number;
  }
}

export default function TimeTracker( props: TimeTrackerProps ) 
{
  const { bgcolor, iconSrc, title, timePeriod, timeframe } = props;
  return (
    <Wrapper bgcolor={ bgcolor }>
      <Card>
        <CardHeader bgcolor={ bgcolor }>
          <ImageWrapper>
            <Image 
              src={ iconSrc } 
              layout="fill"
              alt="Header Icon"
              aria-hidden="true"
              objectFit="contain"/>
          </ImageWrapper>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <Title>{ title }</Title>
            <Image 
              src="/time-tracking-dashboard/images/icon-ellipsis.svg"
              width={ 20 }
              height={ 20 }
              alt="Menu Button"
              objectFit="contain"
              className="cursor-pointer"/>
          </div>
          <div className="flex justify-between md:flex-col md:gap-4">
            <CurrentTimePeriod>
              <h2>{ timeframe.current }hrs</h2>
            </CurrentTimePeriod>
            <PreviousTimePeriod>
              <span>{ timePeriod } - { timeframe.previous }{ timeframe.previous === 1 ? "hr" : "hrs" }</span>
            </PreviousTimePeriod>
          </div>
        </CardContent>
      </Card>
    </Wrapper>
  )
}

const MainWrapper = styled.div`
  min-width: 20rem;

  @media (min-width: 768px) {
    min-width: 240px;
  }
`;

const Wrapper = tw(MainWrapper)`
  max-w-xs
  rounded-xl
  shadow-md
  overflow-hidden
  ${ ( props:BackgroundColor ) => `bg-${ props.bgcolor }` }
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-areas: 
    "card-header" 
    "card-content";
`;

const Card = tw(CardWrapper)`
  font-rubik
`;

const CardHeaderWrapper = styled.div<BackgroundColor>`
  grid-area: card-header;
  display: flex;
  justify-content: flex-end;
  max-height: 36px;

  @media (min-width: 768px) {
    max-height: 48px;
  }
`;

const CardHeader = tw(CardHeaderWrapper)`
  ${ ( props:BackgroundColor ) => `bg-${ props.bgcolor }` }
  px-4
`;

const ImageWrapper = tw.div`
  relative
  w-20
  h-20
  transform
  -translate-y-1.5
`;

const CardContentWrapper = styled.div`
  grid-area: card-content;
`;

const CardContent = tw(CardContentWrapper)`
  grid
  gap-2
  p-6
  rounded-xl
  overflow-hidden
  bg-dark-blue
  z-10
  cursor-pointer
  filter
  md:gap-5
  md:hover:brightness-150
`;

const Title = tw.h3`
  text-lg
  text-white
  font-medium
`;

const CurrentTimePeriod = tw.div`
  text-3xl
  text-white
  font-thin
  md:text-5xl
`;

const PreviousTimePeriod = tw.div`
  flex
  items-center
  text-sm
  text-white
  opacity-50
`;