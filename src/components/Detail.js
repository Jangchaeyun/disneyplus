import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4959EE516E70A95CBD79E62BC5D0FAD738C7DC0DA7F0B525499412B9A2764254/scale?width=1200&aspectRatio=1.78&format=jpeg" />
      </Background>
      <ImageTitle>
        <img src="https://w.namu.la/s/c679b2f151c1da844040f5c674b6e61bddeb1daacbc7726d72210ab7fca44ff4af1436ba3e259f46b1bab1662f465ca7c4f8805bb3998bbb4729facbb730dfed51e965854ecf8e4d5485cf5735d5e3a6a25bb8501d9253cdd6ec2403ee00c8aa"/>
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>재생</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>트레일러</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        2013 . 100m . 모험, 코미디, 가족, 판타지, 뮤지컬
      </SubTitle>
      <Description>
        아렌델 왕국의 두 공주, 어릴 때부터 무엇이든 얼릴 수 있는 신비한 마법의 힘을 가지고 태어난 엘사와 그녀의 여동생 안나는 누구보다 친한 자매다. 그러나 어린 시절 엘사의 마법으로 인해 안나가 다치게 되고 그녀의 부모님은 마법의 위험성을 트롤에게 전해 듣고 엘사의 마법을 감추려 외부와 어떠한 접촉도 할 수 없게 한다.
      </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  } 
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgba(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgba(249, 249, 249);
`;