import styled, { keyframes } from "styled-components";
import AOS from "aos";
import { useEffect } from "react";

const MainLinesWrapper = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  height: 80vh;
  border: 1px solid black;
`;

const LineFirst = styled.span`
  position: absolute;
  z-index: 2;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 120px;
  color: #212121;
  opacity: 0.3;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LineSecond = styled.span`
  position: absolute;
  z-index: 3;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 200px;
  color: #ff0f0f;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Button = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 11vw;
  height: 8vh;
  border-radius: 4vh;
  font-weight: 800;
  font-size: 18px;
  transition: 0.5s ease;

  &:hover {
    background-color: #ff0f0f;
    color: white;
  }
`;
const FadeUp = keyframes`
0% {
  transform:translateY(200px);
  opacity:0;
}
100%{
  transform: translate(0%); 
  opacity:1
}
`;

export default function MainLines() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <MainLinesWrapper>
      <LineFirst>
        <span data-aos="fade-up">{`It's time to`}</span>
      </LineFirst>
      <LineSecond>
        <span data-aos="fade-right" data>{`dingo`}</span>
      </LineSecond>
      <Button>
        <span>View more</span>
      </Button>
    </MainLinesWrapper>
  );
}
