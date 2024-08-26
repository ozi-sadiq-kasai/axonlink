import styled, {keyframes} from 'styled-components'
import words from '../../assets/words.jpg'

export const Image = styled.img`
  width: 100vw;
`;

export const Paragraph = styled.p`
text-align:center;
color:#AAB2B3;
margin-bottom:15px
`

export const Header = styled.h1`
font-weight:500;
 text-align: center;
 margin-bottom: 15px;
 color:#757676
`


export const HomeLayout = styled.section`
  padding: 50px 40px 40px 20px;

`;

export const List = styled.ul`
    display: flex;
    align-items:center;
    justify-content:center;
    list-style-type: none;
    gap:15px;
  
  li {
    padding:2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    text-align: center;
  }

  h2{
  font-weight:400;
  font-size:15px;
  color:#757676
  }

  img {
    width:100%; 
    height: 220px; 
    object-fit: cover; 
  }
  p{
  color:#AAB2B3;
  font-size: 12px
  }

`

//Animations
export const MoveLeft = keyframes`
0%{
opacity:0;
transform:translateX(-100px)
}
80%{
transform:translateX(-10px)
}
100%{
opacity:1;
transform:translate(0)
}`

export const Opacity = keyframes`
0%{
opacity:0;
}
100%{
opacity:1;
}
`

export const Logo = styled.p`
position:absolute;
top:300px;
left:230px;
font-size:26px;
font-weight:700;
color:#E4FCBA;
animation:${MoveLeft}  1s ease-out
`

export const LogoSpan = styled.p`
position:absolute;
top:340px;
left:320px;
font-size:23px;
font-weight:400;
color:#E4FCBA;
animation:${Opacity} 4s ease-in
`

export const HomeAddress = styled.div`
  width: 100vw;
  height: 70vh;
  background: linear-gradient(to right bottom, #1f5b7ee3, #1f79a3cc), url(${words});
     clip-path: polygon(0 19%, 100% 0, 100% 100%, 0 100%);
  background-size: cover;
  background-position: center;
  
  address{
    position: relative;
   top: 220px;
   left: 470px;
  }
  a {
    text-decoration: none;
    margin-left: 10px;
    color: white;
  }

  span {
    // color: white;
    font-style: italic; /* Makes the text italic */
  }`




