import  styled  from 'styled-components';

export default function Pin(props){
    let {urls}=props;
    return(
        <div>
           <Wrapper>
            <Container>
                <img src={urls?.regular}alt="pin"/>
            </Container>
        </Wrapper>
        </div>
    )
}

const Wrapper =styled.div`
    display:inline-flex;
    padding:8px;
`

const Container=styled.div`
    display:flex;
    align-items:center;
    box-sizing:border-box;
    cursor:pointer;
    width:236px;

    img{
        display:flex;
        width:100%;
        cursor:zoom-in;
        border-radius:16px;
    }
`