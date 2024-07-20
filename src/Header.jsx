import PinterestIcon from '@mui/icons-material/Pinterest';
import  styled  from 'styled-components';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextsmsIcon from '@mui/icons-material/Textsms';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import Mainborad from './Mainborad';

// props:{
//     onSubmit:onSearchSubmit();
// }

 function Header(props){

    const[input, setInput]=useState("");

 const  onSearchSubmit=(e)=>{
        e.preventDefault();
       props.onsubmit(input)
 }

    return(
        <>
        <div>
       <Wrapper>
        <LogoWrapper>
            <IconButton>
                <PinterestIcon/>
            </IconButton>
        </LogoWrapper>
        <HomePageButton>
            <a href="/">Home</a>
        </HomePageButton>
        <ExploreButton>
        <a href="/">Explore</a>
        </ExploreButton>
        <CreateButton>
        <a href="/">Create</a>
        </CreateButton>
        <SearchWrapper>
        <SearchBarWrapper>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <form>
                <input type="text" onChange={(e)=>setInput(e.target.value)}/>
                <button type="submit" onClick={onSearchSubmit}></button>
            </form>
        </SearchBarWrapper>
        </SearchWrapper>
            <IconWrapper>

                <IconButton>
                <NotificationsIcon/>
                </IconButton>
                <IconButton>
                    <TextsmsIcon/>
                    </IconButton>
                    <IconButton>
                        <AccountCircleOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardArrowDownIcon/>
                    </IconButton>

            </IconWrapper>
       </Wrapper>
      
       </div>

 
  
        </>
    )

}
export default Header;

const Wrapper= styled.div`
display:flex;
align-items:center;
height:56px;
padding:12px 4px 4px 16px;
background-color:white;
color:black;
font-family:sans-serif;

`
const LogoWrapper =styled.div`
    .MuiSvgIcon-root{
    color:#e60023;
    font-size:32px;
    cursor:pointer;
    }
`
const HomePageButton=styled.div`
 display:flex;
 height:48px;
 min-width:123px;
 background-color:black;
 justify-content:center;
 align-items:center;
 border-radius:24px;
 cursor:pointer;
 
 a{
 text-decoration:none;
 color:white;
 font-weight:700;
 }


`
const ExploreButton=styled.div`
 display:flex;
 height:48px;
 min-width:123px;
 background-color:white;
 justify-content:center;
 align-items:center;
 border-radius:24px;
 cursor:pointer;
 

  a{
 text-decoration:none;
 color:black;
 font-weight:700;
 }
:hover{
    background-color:#e1e1e1;
    }
   

`
const CreateButton=styled.div`
 display:flex;
 height:48px;
 min-width:123px;
 justify-content:center;
 align-items:center;
 border-radius:24px;
 cursor:pointer;
 background-color:white;

 :hover{
    background-color:#e1e1e1;
    }

  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
}
    
`
const SearchWrapper=styled.div`
flex:1;
`
const SearchBarWrapper=styled.div`
background-color:#efefef;
display:flex;
height:48px;
width:95%;
border-radius:50px;
border:none;
padding-left:10px;

form{
display:flex;
flex:1;
}

form >input{
background-color:transparent;
border:none;
width:95%;
margin-left:5px;
font-size:16px;
}

form >button{
 display:none;
}

input:focus{
outline:none;
}


`
const IconWrapper=styled.div``