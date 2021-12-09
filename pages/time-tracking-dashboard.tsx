import { useState, useEffect } from "react";
import { timeTrackerData } from "../libs/time-tracker-data";
import TimeTrackerList from "../components/time-tracking-dashboard/time-tracker-list";
import ProfileCard from "../components/time-tracking-dashboard/profile-card";
import Navigation from "../components/time-tracking-dashboard/navigation";

import styled from "styled-components";
import tw from "tailwind-styled-components";

const tracker_data = timeTrackerData.map(
  tracker => {
    return { ...tracker, timePeriod: "daily" };
});

export default function TimeTrackingDashboard() 
{
  const [ trackers, setTrackers ] = useState(tracker_data);
  useEffect(() => {
    console.log(trackers);
  });
  
  return (
    <Wrapper>
      <Dashboard>
        <DashboardHeader>
          <ProfileCard />
          <Navigation 
            showDaily={ ( event, period ) => {
              selectedButton(event);
              return setTrackers( 
                trackers.map( tracker => { 
                  return { ...tracker, timePeriod: period } })
              )}}
            showWeekly={ ( event, period ) => {
              selectedButton(event);
              return setTrackers( 
                trackers.map( tracker => { 
                  return { ...tracker, timePeriod: period } })
              )}}
            showMonthly={ ( event, period ) => {
              selectedButton(event);
              return setTrackers( 
                trackers.map( tracker => { 
                  return { ...tracker, timePeriod: period } })
              )}} />
        </DashboardHeader>
        <DashboardList>
          <TimeTrackerList 
            trackers={ trackers } />
        </DashboardList>
      </Dashboard>
    </Wrapper>
  )

  function selectedButton(event: React.MouseEvent<HTMLButtonElement> ) 
  {
    let selectedButton = event.currentTarget;
    const buttons = document.querySelectorAll(".navigation-button");
    console.log( buttons );

    buttons.forEach(button => {
      button.classList.remove("active");
    });

    selectedButton.classList.add("active");
  }
}

const DashboardWrapper = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-areas:
      "header trackers";
  } 
`;

const Wrapper = tw.div`
  grid
  h-screen
  place-items-center
  bg-very-dark-blue
`;

const Dashboard = tw(DashboardWrapper)`
  grid
  gap-6
  p-4
`;

const DashboardHeaderWrapper = styled.div`
  @media (min-width: 768px) {
    grid-area: header;
    min-width: max-content;
  }
`;

const DashboardHeader = tw(DashboardHeaderWrapper)`
  bg-dark-blue
  rounded-xl
  overflow-hidden
`;

const DashboardListWrapper = styled.div`
  @media (min-width: 768px) {
    grid-area: trackers;
  }
`;

const DashboardList = tw(DashboardListWrapper)`

`;


