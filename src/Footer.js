import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #212121;
  height: 20vh;
  width: 100%;
  color: white;
`;

const LeftSection = styled.section`
  flex: 1;
  display: flex;
  padding: 8px;
  height: 100%;
  img {
    margin-left: 16px;
  }
`;
const Address = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
  font-size: 14px;
  span {
    display: flex;
    align-items: center;
  }
`;
const RightSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0px 16px 0px 0px;
  height: 100%;
  font-size: 12px;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <LeftSection>
        <img
          width={100}
          src="https://www.dingoglobal.com/theme/responsive_makeus/include/img/ft_logo.svg"
        />
        <Address>
          <div>
            <span>{`서울 강남구 봉은사로18길 36 | contact@makeus.com`}</span>
            <span>{`IR & News Contact 개인정보처리방침`}</span>
          </div>
        </Address>
      </LeftSection>
      <RightSection>
        <span>{`Copyright © 2022 Makeus. All rights reserved.`}</span>
      </RightSection>
    </FooterWrapper>
  );
}
