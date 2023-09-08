import data from '../../Data/miniData.json';
const stateData = {
    dataUser : data.data
};
const dataReducer = ( state = stateData, action ) => {
    return {...state};
};
export default dataReducer;