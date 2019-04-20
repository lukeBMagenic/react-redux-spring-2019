import axios from "axios";

const requestTreeDataType = "REQUEST_TREE_DATA_TYPE";
const receiveTreeDataType = "RECEIVE_TREE_DATA_TYPE";
const errorTreeDataType = "ERROR_TREE_DATA_TYPE";

const initialState = {
  isLoading: false,
  treeData: [],
  isError: false,
  errorMessage: null
};

export const actionCreators = {
  getTreeData: () => async dispatch => {
    dispatch({
      type: requestTreeDataType,
      payload: {
        isLoading: true,
        treeData: null
      }
    });

    axios
      .get(
        'http://my-json-server.typicode.com/lukeBMagenic/react-redux-sprint-2019/treedata',
        {
       
        }
      )
      .then(response => {
        dispatch({
          type: receiveTreeDataType,
          payload: {
            isLoading: false,
            treeData: response.data
          }
        });
      })
      .catch(error => {
        
        console.log("got error");
        
        dispatch({
          type: errorTreeDataType,
          payload: {
            isLoading: false,
            isError: true,
            errorMessage: `${error.error} ${error.message}`
          }
        });
      });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case requestTreeDataType:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case receiveTreeDataType:
      return {
        ...state,
        isLoading: action.payload.isLoading,

        treeData: action.payload.treeData

      };
    case errorTreeDataType:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        isError: action.payload.isError,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};



