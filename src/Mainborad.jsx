import  styled  from 'styled-components';
import Pin from './Pin';
import "./Mainborad.css"

export default function Mainborad(props){
  let {pin}=props;
    return(
        <Wrapper>
            <Container className="mainborad_container">
              {pin.map((pins,index)=>{
                let {urls}=pins;
               return <Pin key={index} urls={urls}/>
              })}
              
            </Container>
        </Wrapper>

    )
}

const Wrapper=styled.div`
  background-color:white;
  display:flex;
  justify-content:center;
  margin-top:15px;
  width:100%;
  height:100%;
`
const Container=styled.div`
column-count:5;
column-gap:20px;
margin:0,auto;
max-width:1190px;
height:100%;
`