import React from "react";
import tw from "tailwind-styled-components";

type NavigationProps = {
  showDaily: ( event: React.MouseEvent<HTMLButtonElement>, period: string ) => void;
  showWeekly: ( event: React.MouseEvent<HTMLButtonElement>, period: string ) => void;
  showMonthly: ( event: React.MouseEvent<HTMLButtonElement>, period: string ) => void;
};

export default function Navigation( props: NavigationProps ) {
  return (
    <Wrapper>
      <Button 
        className="navigation-button"
        type="button"
        onClick={ event => props.showDaily( event, "daily" ) }>Daily</Button>
      <Button 
        className="navigation-button"
        type="button"
        onClick={ event => props.showDaily( event, "weekly" ) }>Weekly</Button>
      <Button 
        className="navigation-button"
        type="button"
        onClick={ event => props.showDaily( event, "monthly" ) }>Monthly</Button>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex
  w-full
  px-6
  py-5
  justify-between
  items-center
  md:flex-col
  md:items-start
  md:gap-4
  md:py-4
`;

const Button = tw.button`
  text-lg
  font-rubik
  & > * {
    text-white
    opacity-30
    hover:opacity-100
    focus:opacity-100
    active:opacity-100
  }
`;