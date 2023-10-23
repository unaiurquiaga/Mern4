import React from 'react'
import styled from 'styled-components'
import { COMPANY_NAME, COMPANY_TEXT } from '../../data/TitleTexts'
import facebookLogo from '../../assets/facebook.png'
import instagamLogo from '../../assets/instagram.png'
import youtubeLogo from '../../assets/youtube.png'
import { Link } from 'react-router-dom'

const CompanyContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-evenly;

width: 25vw;
padding-left: 2vw

@media (max-width: 768px) {
  width: 30%;

};
`
const CompanyDataContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap:0.6vw;
width: 25vw;

`

const CompanyNameFooter = styled.h3`
font-size: 0.8vw;
border: 3px solid;
padding: 0.5vw 1vw;

@media (max-width: 768px) {
  font-size: 3vw;
  border: 3px solid;

}`

const CompanyTextFooter = styled.h5`
font-weight: 200;

@media (max-width: 768px) {
  display:none;

}`

const SocialMediaContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1vw;
  width: 25vw;
  flex-wrap: wrap;
`

const SocialMediaLink = styled.li`
list-style-type: none;

@media (max-width: 768px) {
  width: 5vw;

}

`

const SocialMediaImg = styled.img`
width: 2vw;
height: auto;

@media (max-width: 768px) {
  width: 6vw;


}

`

const SocialMedia = () => {
  return (
    <CompanyContainer>
      <CompanyDataContainer>
        <Link to='/'><CompanyNameFooter>{COMPANY_NAME}</CompanyNameFooter></Link>
        <CompanyTextFooter>{COMPANY_TEXT}</CompanyTextFooter>
      </CompanyDataContainer>
      <SocialMediaContainer>
        <SocialMediaLink><a href=""><SocialMediaImg src={facebookLogo} alt="facebookLogo" /></a></SocialMediaLink>
        <SocialMediaLink><a href=""><SocialMediaImg src={instagamLogo} alt="InstagramLogo" /></a></SocialMediaLink>
        <SocialMediaLink><a href=""><SocialMediaImg src={youtubeLogo} alt="youtubeLogo" /></a></SocialMediaLink>


      </SocialMediaContainer>
    </CompanyContainer>
  )
}

export default SocialMedia