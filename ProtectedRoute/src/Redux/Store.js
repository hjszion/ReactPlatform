const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        listeners.forEach(listener => listener());
    }

    const subscribe = (listener) => {
        listener.push(listener);
        return () => {
            listeners = listeners.filter(l => l != listener);
        }
    }

    dispatch({});

    return {getState, dispatch, subscribe}
}

const store = createStore(reducer);



