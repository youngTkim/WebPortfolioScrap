import styled from "styled-components";
import AOS from "aos";

import "./App.css";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function MainBusiness() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <MainBusinessWrapper>
      <StickyBox>
        <img src="https://i.namu.wiki/i/I5B75-IXp8Nwkp4nyK1-zI4zI6CULN24NSXd2lBroN1nLO5-04tdiDAFDflVn_hLzCg5JWkWI9BOlZ1Q6vUOKfCoZ_qnw8sQzCQ_susEbVuestsmRh12UDO1ylxExKxofo-xBtC5N93De1WAeevuUA.webp" />
      </StickyBox>
      <ScrollBoxes>
        <ScrollBox>
          <ImageContainer>
            <img
              data-aos="flip-right"
              src="https://www.dingoglobal.com/theme/responsive_makeus/include/img/s11-1-bg01.jpg"
              alt=""
            />
          </ImageContainer>
          <Explanation>
            <Title>Who we are</Title>
            <Line>
              <span>
                메이크어스는 독보적인 IP 라인업 및 제작 전문성을 갖춘 글로벌
                디지털 콘텐츠 스튜디오입니다.
              </span>
              <span>
                메이크어스는 음악, 예능, 웹드라마, 헬스, 뷰티, 라이프스타일 등
                다양한 콘텐츠를 우리만의 방법으로 만들고, 공감과 정보를
                즐거움이라는 언어로 나누고 있습니다.
              </span>
            </Line>
          </Explanation>
        </ScrollBox>
        <ScrollBox>
          <ImageContainer>
            <img
              data-aos="flip-right"
              src="https://cdn.pixabay.com/photo/2015/08/21/18/02/television-899265_1280.jpg"
              alt=""
            />
          </ImageContainer>
          <Explanation>
            <Title>Productions</Title>
            <Line>
              <span>
                국내외 최고의 크리에이터들과 함께 드라마, 영화, OTT, 예능,
                디지털 콘텐트 등 장르와 플랫폼에 국한되지 않는 다양한 콘텐트를
                제작하고 있습니다. 글로벌 제작사 윕(wiip)을 인수해 본격적인 미국
                시장 진출에도 앞장서고 있습니다.
              </span>
              <span>
                보유 IP를 바탕으로 해외 리메이크 작품 제작 및 OST 음원 유통,
                공연 사업, MD, AR/VR 등의 다양한 분야로 사업 다각화를 실현하고
                있습니다.
              </span>
            </Line>
          </Explanation>
        </ScrollBox>
        <ScrollBox>
          <ImageContainer>
            <img
              data-aos="flip-right"
              src="https://www.dingoglobal.com/theme/responsive_makeus/include/img/s11-1-bg02.jpg"
              alt=""
            />
          </ImageContainer>
          <Explanation>
            <Title>Mission</Title>
            <Line>
              <span>
                가치 있는 경험을 발굴하고 발전시켜 전 세계에 소개하는
                메이크어스는 디지털 미디어 사업을 통해 라이프스타일 트렌드를
                선도하고 있습니다.
              </span>
              <span>
                메이크어스는 국내 영상 및 음악 IP의 글로벌 진출을 위한 게이트
                웨이가 되고자 합니다.
              </span>
              <span>
                이를 위해 다양한 콘텐츠 IP를 확보 및 연구·개발하고 있으며,
                효율적인 제작 방식을 통해 콘텐츠를 양산하고 있습니다.
              </span>
            </Line>
          </Explanation>
        </ScrollBox>
        <ScrollBox>
          <ImageContainer>
            <img
              data-aos="flip-right"
              src="https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg"
              alt=""
            />
          </ImageContainer>
          <Explanation>
            <Title>Go Together</Title>
            <Line>
              <span>
                딩고는 함께하는 구성원의 성장을 위해 아낌없이 지원합니다.
              </span>
              <span>
                자율적인 근무 환경에서 효율적인 업무가 가능합니다. 배우고
                성장하는것 무한한 가능성을 펼쳐보세요
              </span>
            </Line>
          </Explanation>
        </ScrollBox>
      </ScrollBoxes>
    </MainBusinessWrapper>
  );
}
const MainBusinessWrapper = styled.div`
  margin-top: -100vh;
  position: relative;
  display: flex;
  width: 100%;
`;

const StickyBox = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  height: 100vh;
  z-index: 1;
  position: sticky;
  top: 0%;
  left: 0%;
  background-color: #ff0000;
  transition: 0.5s ease;
  img {
    display: block;
    height: auto;
    width: 100%;
    transition: 0.5s ease;
  }
  &:hover > img {
    transform: scale(1.08);
  }
`;

const ScrollBoxes = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  width: 50%;
`;

const ScrollBox = styled.section`
  position: relative;
  overflow: hidden;
`;

const Explanation = styled.section`
  display: flex;
  width: 100%;
  min-height: 200px;
  background-color: whitesmoke;
`;
const Title = styled.label`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  font-size: 40px;
  font-weight: 800;
`;

const Line = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 8px;
  span {
    margin-bottom: 12px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;

  img {
    display: block;
    height: auto;
    width: 100%;
  }
  &:hover > img {
    transform: scale(1.08);
  }
`;
