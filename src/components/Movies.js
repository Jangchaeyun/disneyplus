import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
      <h4>오리지널</h4>
      <Content>
        <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4959EE516E70A95CBD79E62BC5D0FAD738C7DC0DA7F0B525499412B9A2764254/scale?width=1200&aspectRatio=1.78&format=jpeg"/>
        </Wrap>
        <Wrap>
            <img src="https://mblogthumb-phinf.pstatic.net/MjAyMDA0MjJfMjQ4/MDAxNTg3NTE5NTkzMDU5.PIaBuhNq8kL6duh2kidZdgdGA6hVDbHIgcCgZoC95mcg.NBD9S6jRZJ6i7eP9VpvOkvChCqBr03-5V3MX94zXBikg.JPEG.insu1229/1587519592554.jpg?type=w800"/>
        </Wrap>
        <Wrap>
            <img src="https://img.hankyung.com/photo/202111/BF.27930501.3.jpg"/>
        </Wrap>
        <Wrap>
            <img src="https://images.justwatch.com/backdrop/241234328/s640/pigsa-pabkon"/>
        </Wrap>
        <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2D5115B2E2E721641B0007F741787921E163136810B247D42E98DE9D06029BFA/scale?width=1200&aspectRatio=1.78&format=jpeg"/>
        </Wrap>
        <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FE5F623A5AB6665BBCBACF74F0EC25841447C0C5492DB6B103DF9B3F6C58565F/scale?width=1200&aspectRatio=1.78&format=jpeg"/>
        </Wrap>
        <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5862D31BE069B458855C5EAC2BDC1D8BC9222C9913D8E93120DC7D04876F2FD5/scale?width=1200&aspectRatio=1.78&format=jpeg"/>
        </Wrap>
        <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6367A044A167DC9C08EC0C2B70F21D9C894C2270B668439B54114593CB016BEB/scale?width=1200&aspectRatio=1.78&format=jpeg"/>
        </Wrap>
      </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`

`;

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
      transform: scale(1.05);
      border-color: rgba(249, 249, 240, 0.8);
    }
`;