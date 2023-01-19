import React, { useState } from "react";
import Fundal from "../../images/fundal.jpg";
import { Button } from "../ButtonElement";
import {
  HomeContainer,
  HomeBg,
  ImageBg,
  HomeContent,
  HomeH1,
  HomeP,
  HomeBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HomeElements";

const HomeSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HomeContainer id="home">
      <HomeBg>
        <ImageBg src={Fundal} />
      </HomeBg>
      <HomeContent>
        <HomeH1>HUNGRY?</HomeH1>
        <HomeP>
          When cravings dictate, Deli delivers. We bring your favorite dish to
          your home or office. Place your order, make yourself comfortable and
          we'll take care of the rest.
        </HomeP>
        <HomeBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Register Now {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HomeBtnWrapper>
      </HomeContent>
    </HomeContainer>
  );
};

export default HomeSection;
