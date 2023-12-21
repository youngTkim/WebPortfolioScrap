import { useState, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

const CardLCarouselTitleContainer = styled.div`
  display: flex;
  font-family: "Poppins", serif;
  width: 100%;
  height: 14vh;
`;
const CardLCarouselTitle = styled.article`
  display: flex;
  margin-left: 100px;
  color: #6e6e73;
  font-size: 30px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
  align-items: center;
  padding: 8px;
`;

const MainSwiperWrapper = styled.div`
  background: linear-gradient(
    135deg,
    rgba(0, 161, 233, 1) 0%,
    rgba(255, 204, 0, 1) 100%
  );
  display: flex;
  width: 100%;
  height: 110vh;
  padding-bottom: 20vh;
`;
const SwiperContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  width: 100%;
  height: 100%;
`;

const SwiperElement = styled.span`
  flex: 1;
  display: flex;
  justify-items: center;
  align-items: center;
  margin: 0px 1vw;
  border-radius: 30px;
  overflow: hidden;
  transition: 0.75s ease-in-out;
  position: relative;
  height: 100%;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.3);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.75s ease-in-out;
  }
`;

const SwiperLine = styled.article`
  position: absolute;
  top: 80%;
  left: 50%;
  color: white;
`;

export default function MainSwiper() {
  const [Element, setElement] = useState(1);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <CardLCarouselTitleContainer data-aos="fade-down">
        <CardLCarouselTitle>
          <span style={{ color: "#e30000" }}>
            Most Popular Killing Voice for Month.
          </span>
        </CardLCarouselTitle>
      </CardLCarouselTitleContainer>
      <MainSwiperWrapper>
        <SwiperContainer>
          <SwiperElement
            style={Element === 1 ? { flex: "3", height: "60%" } : { flex: "1" }}
            onClick={() => {
              setElement(1);
            }}
          >
            <img
              style={Element === 1 ? { width: "100%" } : { width: "auto" }}
              src="https://pbs.twimg.com/media/F8EKQ-LbgAA84xR?format=jpg&name=medium"
            />
          </SwiperElement>
          <SwiperElement
            style={Element === 2 ? { flex: "3", height: "60%" } : { flex: "1" }}
            onClick={() => {
              setElement(2);
            }}
          >
            <img
              style={Element === 2 ? { width: "100%" } : { width: "auto" }}
              src="https://pbs.twimg.com/media/GAkrw3qa4AALWx3?format=jpg&name=medium"
            />
          </SwiperElement>
          <SwiperElement
            style={Element === 3 ? { flex: "3", height: "60%" } : { flex: "1" }}
            onClick={() => {
              setElement(3);
            }}
          >
            <img
              style={Element === 3 ? { width: "100%" } : { width: "auto" }}
              src="https://pbs.twimg.com/media/F-4e-2SaUAA_qP5?format=jpg&name=medium"
            />
          </SwiperElement>
          <SwiperElement
            style={Element === 4 ? { flex: "3", height: "60%" } : { flex: "1" }}
            onClick={() => {
              setElement(4);
            }}
          >
            <img
              style={Element === 4 ? { width: "100%" } : { width: "auto" }}
              src="https://pbs.twimg.com/media/F9wkrdubwAAE7ev?format=jpg&name=medium"
            />
          </SwiperElement>
          <SwiperElement
            style={Element === 5 ? { flex: "3", height: "60%" } : { flex: "1" }}
            onClick={() => {
              setElement(5);
            }}
          >
            <img
              style={Element === 5 ? { width: "100%" } : { width: "auto" }}
              src="https://pbs.twimg.com/media/F9MVv_SbkAAKtGA?format=jpg&name=medium"
            />
          </SwiperElement>
        </SwiperContainer>
      </MainSwiperWrapper>
    </>
  );
}
