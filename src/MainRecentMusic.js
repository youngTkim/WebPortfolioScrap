import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import AOS from "aos";

const CardLCarouselTitleContainer = styled.div`
  display: flex;
  font-family: "Poppins", serif;
  width: 100%;
  height: 20vh;
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

const CardLCarouselContainer = styled.section`
  display: block;
  overflow-x: scroll;
  position: relative;
  width: 100%;
  height: 100vh;
`;
const CarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 340vw;
  height: auto;
  padding: 0 90px;
  transition: 0.25s ease;
`;
const CardLContainer = styled.span`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  overflow: hidden;
  margin: 0px 0px 20px 0px;
  max-width: 480px;
  border-radius: 8px;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.15s ease 0s;
  &:hover {
    transform: scale(1.03, 1.03);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.3);
  }
  img {
    pointer-events: none;
    object-fit: cover;
  }
`;

export default function MainRecentMusic() {
  const [isDragging, setisDragging] = useState(false);
  const carouselRef = useRef(null);
  const dragStartX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleMouseDown = (e) => {
    setisDragging(true);
    dragStartX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
    carouselRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 3; // 드래그한 만큼 스크롤 이동
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    setisDragging(false);
    carouselRef.current.style.cursor = "pointer";
  };
  return (
    <>
      <CardLCarouselTitleContainer data-aos="fade-down">
        <CardLCarouselTitle>
          <span style={{ color: "#e30000" }}>Recent Music IP.</span>
        </CardLCarouselTitle>
      </CardLCarouselTitleContainer>
      <CardLCarouselContainer
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        data-aos="fade-down"
      >
        <CarouselContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "8px",
              margin: "0px 8px",
              letterSpacing: "-0.075em",
            }}
          >
            <CardLContainer>
              <img
                width={500}
                src="https://www.dingoglobal.com/data/file/32/thumb-3696586831_mRXejwh2_cc4cbc4ee0866e596c1ed4001753cd4879aaf80d_300x300.jpg"
              />
            </CardLContainer>
            <article
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "8px",
                height: "100px",
                borderRadius: "8px",
              }}
            >
              <span> {`권디엘(Iamdl)`}</span>
              <span style={{ fontSize: "28px" }}>{`Dingo X 권디엘`}</span>
            </article>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "8px",
              margin: "0px 8px",
              letterSpacing: "-0.075em",
            }}
          >
            <CardLContainer>
              <img
                width={500}
                src="https://www.dingoglobal.com/data/file/32/thumb-3696586831_dXg7j8DI_c4c297c053433d108472c57f2230efb034de96cf_300x300.jpg"
              />
            </CardLContainer>
            <article
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "8px",
                height: "100px",
                borderRadius: "8px",
              }}
            >
              <span> {`문수진`}</span>
              <span style={{ fontSize: "28px" }}>{`My Time (Remix) - EP`}</span>
            </article>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "8px",
              margin: "0px 8px",
              letterSpacing: "-0.075em",
            }}
          >
            <CardLContainer>
              <img
                width={500}
                src="https://www.dingoglobal.com/data/file/32/thumb-3696586831_JevXhi23_aaca7de1b7597de26dd1a670d1c16a1c4b5aef35_300x300.jpg"
              />
            </CardLContainer>
            <article
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "8px",
                height: "100px",
                borderRadius: "8px",
              }}
            >
              <span> {`ADORA`}</span>
              <span style={{ fontSize: "28px" }}>{`환상`}</span>
            </article>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "8px",
              margin: "0px 8px",
              letterSpacing: "-0.075em",
            }}
          >
            <CardLContainer>
              <img
                width={500}
                src="https://www.dingoglobal.com/data/file/32/thumb-3696586831_fV7pe4L9_ebda54ea02f5a328d58d21ebe9dd03779f2b80df_300x300.jpg"
              />
            </CardLContainer>
            <article
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "8px",

                height: "100px",
                borderRadius: "8px",
              }}
            >
              <span> {`문수진`}</span>
              <span style={{ fontSize: "28px" }}> {`Don't say`}</span>
            </article>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "8px",
              margin: "0px 8px",
              letterSpacing: "-0.075em",
            }}
          >
            <CardLContainer>
              <img
                width={500}
                src="https://www.dingoglobal.com/data/file/32/thumb-3696586831_0tUzTaWB_c708193cf0de57f98c4f39427c0764a29028be63_300x300.jpg"
              />
            </CardLContainer>
            <article
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "8px",

                height: "100px",
                borderRadius: "8px",
              }}
            >
              <span>
                {`PATEKO(파테코), Jayci Yucca(제이씨 유카), Kid Wine`}
              </span>
              <span style={{ fontSize: "28px" }}>
                {`딩고와 키카코 하우스 네 번째`}
              </span>
            </article>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "8px",
              margin: "0px 8px",
              letterSpacing: "-0.075em",
            }}
          >
            <CardLContainer>
              <img
                width={500}
                src="https://www.dingoglobal.com/data/file/32/thumb-661879018_iNxG9OrZ_be810ea525b2dd43f91e09d7dff8ebf929bcb0a3_300x300.jpg"
              />
            </CardLContainer>
            <article
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "8px",

                height: "100px",
                borderRadius: "8px",
              }}
            >
              <span>{`류민희`}</span>
              <span style={{ fontSize: "28px" }}>{`D에게`}</span>
            </article>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "8px",
              margin: "0px 8px",
              letterSpacing: "-0.075em",
            }}
          >
            <CardLContainer>
              <img
                width={500}
                src="https://www.dingoglobal.com/data/file/32/thumb-3696586831_80RkLbC6_e81c92b13e38ebeeb70fdb36fbb61c3026a6b4b1_300x300.jpg"
              />
            </CardLContainer>
            <article
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "8px",
                height: "100px",
                borderRadius: "8px",
              }}
            >
              <span>
                {`PATEKO(파테코), Jayci Yucca(제이씨 유카), Kid Wine`}
              </span>
              <span style={{ fontSize: "28px" }}>
                {`딩고와 키카코 하우스 세 번째`}
              </span>
            </article>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "8px",
              margin: "0px 8px",
              letterSpacing: "-0.075em",
            }}
          >
            <CardLContainer>
              <img
                width={500}
                src="https://www.dingoglobal.com/data/file/32/thumb-3696586831_wmT2Y6bK_7d9b4c54703ba74c0d38025074f1ca236f41bbdb_300x300.jpg"
              />
            </CardLContainer>
            <article
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "8px",
                height: "100px",
                borderRadius: "8px",
              }}
            >
              <span>{`류민희`}</span>
              <span style={{ fontSize: "28px" }}>{`니 생각`}</span>
            </article>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "8px",
              margin: "0px 8px",
              letterSpacing: "-0.075em",
            }}
          >
            <CardLContainer>
              <img
                width={500}
                src="https://www.dingoglobal.com/data/file/32/thumb-3696586831_3y6EFJW5_1f130eecf7cfa03fcb731a1b9f97fdb841221f05_300x300.png"
              />
            </CardLContainer>
            <article
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "8px",
                height: "100px",
                borderRadius: "8px",
              }}
            >
              <span> {`유다연`}</span>
              <span style={{ fontSize: "28px" }}> {`down down down`}</span>
            </article>
          </div>
        </CarouselContainer>
      </CardLCarouselContainer>
    </>
  );
}
