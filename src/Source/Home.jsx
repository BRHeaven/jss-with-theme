import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { SectionHome } from '../Jss/Components/Section';

function Home(props) {
    console.log(props);
    const renderCard = () => {
        return props.data.dataUser.map((object, index) => {
            return <Card object={object} key={index}/>
        });
    };
  return (
    <SectionHome>
        {renderCard()}
    </SectionHome>
  )
};
const mapStateToProps = state => {
    return {
        data : state.dataReducer,
    };
};
export default connect(mapStateToProps, null)(Home);