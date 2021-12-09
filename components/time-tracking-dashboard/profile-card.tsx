import styled from "styled-components";
import tw from "tailwind-styled-components";
import Image from "next/image";

let imageSize = 64;

export default function ProfileCard() {
  return (
    <Wrapper>
      <Card>
        <ImageWrapper>
          <Image 
            src="/time-tracking-dashboard/images/image-jeremy.png" 
            layout="fill"
            objectFit="contain"
            alt="Profile Image"/>
        </ImageWrapper>
        <Report>
          <span className="text-base font-light opacity-70">Report for</span>
          <Name>Jeremy Robson</Name>
        </Report>
      </Card>
    </Wrapper>
  )
}

const MainWrapper = styled.div`
  min-width: 20rem;

  @media (min-width: 768px) {
    min-width: 220px;
  }
`;

const Wrapper = tw(MainWrapper)`
  max-w-xs
  rounded-xl
  shadow-md
  overflow-hidden
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-areas: 
    "image profile-content";
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-areas:
      "image"
      "profile-content";
    gap: 2rem;
    padding-bottom: 76px;
  }
`;

const Card = tw(CardWrapper)`
  p-7
  text-white
  font-rubik
  bg-tt-blue
`;

const ImageWrapper = styled.div`
  grid-area: image;
  position: relative;
  width: ${imageSize}px;
  height: ${imageSize}px;
  border-radius: 50%;
  border: 3px solid #fff;
  overflow: hidden;

  @media (min-width: 768px) {
    width: ${imageSize * 1.25}px;
    height: ${imageSize * 1.25}px;
  }
`;

const ReportWrapper = styled.div`
  grid-area: profile-content;
`;

const Report = tw(ReportWrapper)`
  flex
  flex-col
  justify-center
`;

const Name = tw.h1`
  text-2xl
  font-light
  md:text-4xl
  md:w-min
`;