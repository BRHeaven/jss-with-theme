import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider, styled } from 'styled-components';
import { DivDefault, DivImage, DivInfo } from '../Jss/Components/Div';
import { Image } from '../Jss/Components/Image';
import { TextDMY, TextName } from '../Jss/Components/Text';
function Card(props) {
    const {id,name,dd,mm,yy,srcImage} = props.object;
    const darkTheme = {colorName:"#030303",colorDMY:"#0f0f10",background:"#8d8d91",border:"#151516"};
    const lightTheme = {colorName:"#c69733",colorDMY:"#cfa344",background:"#fff",border:"#d0a548"};
    const DivCard = styled(DivDefault)`
        background-color: ${(props) => props.theme.background};
        border: 3px solid ${(props) => props.theme.border};
        border-radius: 10px;
        padding : 0 0 10px;
        overflow: hidden;
    `;
    const Name = styled(TextName)`
        color: ${(props) => props.theme.colorName};
    `;
    const DMY = styled(TextDMY)`
        color: ${(props) => props.theme.colorDMY};
    `;
  return (
    <ThemeProvider theme={darkTheme}>
        <DivCard>
            <DivImage>
                <Image src={srcImage} alt={id}/>
            </DivImage>
            <DivInfo>
                <Name>{name}</Name>
                <DMY>{dd}/{mm}/{yy}</DMY>
            </DivInfo>
        </DivCard>
    </ThemeProvider>
  )
};
const mapStateToProps = state => {
    return {
        dataUser: state.dataReducer,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {

    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Card);