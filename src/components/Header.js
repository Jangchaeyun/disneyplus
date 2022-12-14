import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo src="images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg"/>
          <span>홈</span>
        </a>
        <a>
          <img src="/images/search-icon.svg"/>
          <span>찾기</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg"/>
          <span>관심 콘텐츠</span>
        </a>
        <a>
          <img src="/images/original-icon.svg"/>
          <span>오리지널</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg"/>
          <span>영화</span>
        </a>
        <a>
          <img src="/images/series-icon.svg"/>
          <span>시리즈</span>
        </a>
      </NavMenu>
      <UserImg src="https://cdn.topstarnews.net/news/photo/201909/667114_372480_341.jpg"/>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.455, 0.03, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;