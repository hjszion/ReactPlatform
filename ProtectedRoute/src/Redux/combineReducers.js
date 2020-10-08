const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Objects.keys(reducers).reduce(
            (nextState, key) => {
                nextState[key] = reducer[key](
                    state[key],
                    action
                );
                return nextState;
            },
            {}
        );
    };
};




