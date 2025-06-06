import React from 'react';


// Actions
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const RESET = 'reset';

const myContext = React.createContext(null);

const Points = () => {

    const state = React.useContext(myContext);

    return (
        <p>Points: { state.count }</p>
    )

}

const Counter = () => {

    // Initial State for Reducer
    const initialState = {
        count: 0
    }

    // Reducer to change State
    const reducer = (state, action) => {

        switch (action.type) {
            case INCREMENT:
                return {
                    count: state.count + action.payload.quantity
                };
            case DECREMENT:
                return {
                    count: state.count - action.payload.quantity
                };
            case RESET:
                return {
                    count: 0
                };
            default:
                return state;
        }
    }


    // Asign useReducer to State, reducer and dispatch actiones
    const [state, dispatch] = React.useReducer(reducer, initialState);



    return (
        <myContext.Provider value={state}>
            <div>
                {/* <p>Points: { state.count }</p> */}
                <Points />
                <div>
                    <button 
                        onClick={
                        () => dispatch({
                            type: INCREMENT,
                            payload: {
                                quantity: 1
                                }
                            })
                        }
                    >
                        Increment
                    </button>
                    <button 
                        onClick={
                        () => dispatch({
                            type: DECREMENT,
                            payload: {
                                quantity: 1
                                }
                            })
                        }
                    >
                        Decrement
                    </button>
                </div>
                <div>
                    <button 
                        onClick={
                        () => dispatch({type: RESET})
                        }
                    >
                        Reset Counter
                    </button>
                </div>
            </div>
        </myContext.Provider>
        
    );
}

export default Counter;
