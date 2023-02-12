import third from "../images/third.jpg";
import fourth from "../images/forth.jpg";

import {
  FirstLineWrapper,
  MainTextWrapper,
  ParagraphTextWrapper,
  TextWrapper,
  ImageWrapper,
  SecondLineWrapper,
  SecondParagraphTextWrapper,
} from "./FirstBlockWrapper";

export const SecondBlock = () => {
  return (
    <>
      <FirstLineWrapper>
        <ImageWrapper>
          <img src={third} alt="beaute" width={860} height={480} />
        </ImageWrapper>
        <TextWrapper>
          <MainTextWrapper>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </MainTextWrapper>
          <ParagraphTextWrapper>
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </ParagraphTextWrapper>
          <ParagraphTextWrapper>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </ParagraphTextWrapper>
        </TextWrapper>
      </FirstLineWrapper>

      <SecondLineWrapper>
        <SecondParagraphTextWrapper>
          <MainTextWrapper>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </MainTextWrapper>
          <ParagraphTextWrapper>
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </ParagraphTextWrapper>
        </SecondParagraphTextWrapper>
        <img
          src={fourth}
          style={{ objectFit: "none" }}
          alt="beaute"
          width={599}
          height={411}
        />
      </SecondLineWrapper>
    </>
  );
};
