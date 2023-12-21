import styled from "styled-components";
import AOS from "aos";

import { useEffect, useState } from "react";

import "./App.css";
import "aos/dist/aos.css";

import Header from "./Header";
import MainBusiness from "./MainBusiness";
import MainRecentMusic from "./MainRecentMusic";
import MainSwiper from "./MainSwiper";
import MainLines from "./MainLines";
import Footer from "./Footer";

function App() {
  useEffect(() => {
    AOS.init();
    alert("이 포트폴리오는 상업적 용도로 사용되지 않습니다!");
  }, []);

  const [scene1, setScene1] = useState(true);
  const [scene2, setScene2] = useState(false);
  const [scene3, setScene3] = useState(false);
  //Background height 1732.5

  window.addEventListener("scroll", function () {
    if (window.scrollY < 500 && !scene1) {
      setScene1(true);
      setScene2(false);
    } else if (window.scrollY >= 500 && scene1) {
      setScene1(false);
      setScene2(true);
    }
    if (window.scrollY < 1000 && !scene2) {
      setScene2(true);
      setScene3(false);
    } else if (window.scrollY >= 1000 && scene2) {
      setScene2(false);
      setScene3(true);
    }
    if (window.scrollY < 1500 && !scene3) {
      setScene3(true);
    } else if (window.scrollY > 1500 && scene3) {
      setScene3(false);
    }
  });

  return (
    <AppWrapper>
      <Header scene1={scene1} />
      <Background className={`${scene3 ? "scene3" : "scene4"}`}>
        <img src="https://withuplus.co.kr/images/main/main_visual1.jpg" />
      </Background>
      <Line1 data-aos="fade-right">
        <Line1Inner>
          <span>{`가치 있는 경험을 발굴하고 발전시켜`} </span>
          <span>{`전 세계에 소개하는 메이크어스는 디지털 미디어 사업을 통해`}</span>
          <span>{`라이프스타일 트렌드를 선도하고 있습니다.`}</span>
        </Line1Inner>
      </Line1>
      <Line2 data-aos="fade-left">
        <Line2Inner>
          <span>{`모바일, SNS, 개인화, 계속해서 변화하는 미디어 시대에`}</span>
          <span>{`가장 최적화된 디지털 콘텐츠를 제작하는 메이크어스는`}</span>
          <span>{`엔터테인먼트 분야의 글로벌 비즈니스를 지향합니다.`}</span>
        </Line2Inner>
      </Line2>
      <MiddleLine
        className={`${scene1 ? "scene1" : scene3 ? "scene2" : "scene4"}`}
      />
      <DingoMusic>
        <Dingo
          className={`${
            scene1 ? "scene1" : scene2 ? "scene2" : scene3 ? "scene3" : "scene4"
          }`}
        >
          <DingoInner
            className={`${
              scene1
                ? "scene1"
                : scene2
                ? "scene2"
                : scene3
                ? "scene3"
                : "scene4"
            }`}
          >
            dingo
          </DingoInner>
        </Dingo>
        <Music
          className={`${scene1 ? "scene1" : scene2 ? "scene2" : "scene3"}`}
        >
          <MusicInner
            className={`${scene1 ? "scene1" : scene2 ? "scene2" : "scene3"}`}
          >
            music
          </MusicInner>
        </Music>
      </DingoMusic>
      <MainBusiness />
      <MainRecentMusic />
      <MainSwiper />
      <MainLines />
      <Footer />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const MainWrapper = styled.main`
  position: relative;
  top: 1722.5px;
`;

const Line1 = styled.div`
  position: absolute;
  top: 40vh;
  left: 25%;
`;
const Line1Inner = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  color: white;
  transform: translate(-50%, -50%);
`;

const Line2 = styled.div`
  position: absolute;
  top: 120vh;
  left: 75%;
`;
const Line2Inner = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  color: white;
  transform: translate(-50%, -50%);
`;
const MiddleLine = styled.span`
  position: absolute;
  width: 1px;
  height: 0px;
  top: 1000px;
  left: 50%;
  background-color: white;
  transition: 1s ease-in-out;
  pointer-events: none;
  touch-action: none;
  &.scene1 {
    height: 0px;
  }
  &.scene2 {
    height: 800px;
  }
  &.scene4 {
    opacity: 0;
  }
`;

const Background = styled.div`
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
  transition: 0.5s ease;
  touch-action: none;
  &.scene4 {
    opacity: 0;
  }
`;

const DingoMusic = styled.div`
  display: block;
  z-index: 99998;
  width: 100%;
  height: 100%;
  color: black;

  width: 100vw;
  height: 100vh;
  font-size: 100px;
  font-weight: 800;
`;
const Dingo = styled.span`
  position: fixed;
  top: 20%;
  left: 20%;
  transition: 0.5s ease;
  &.scene2 {
    top: 50%;
    left: 20%;
  }
  &.scene3 {
    top: 50%;
    left: 50%;
  }
  &.scene4 {
    top: 50%;
    left: 50%;
    opacity: 0;
  }
`;
const DingoInner = styled.div`
  transition: 1s ease;
  transform: translate(-50%, -50%);
  color: white;
  &.scene2 {
    transform: translate(-50%, -50%) scale(1.1);
  }
  &.scene3 {
    transform: translate(-50%, -50%) scale(1.1);
  }
  &.scene4 {
    color: red;
    transform: translate(-50%, -50%) scale(3);
  }
`;

const Music = styled.span`
  position: fixed;
  top: 80%;
  left: 80%;
  transition: 0.5s ease;
  &.scene2 {
    top: 50%;
    left: 80%;
  }
  &.scene3 {
    opacity: 0;
    top: 50%;
    left: 50%;
  }
`;
const MusicInner = styled.div`
  transition: 1s ease;
  transform: translate(-50%, -50%);
  color: white;
  &.scene1 {
  }
  &.scene2 {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

export default App;
