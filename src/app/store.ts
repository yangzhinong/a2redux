import  * as mdlActions from './actions'
export interface IAppState {
    counter:number;

}

export const INIT_STATE:IAppState = {
    counter:0
}

export function RootReducer(state:IAppState, action):IAppState{
    switch (action.type){
        case mdlActions.INCREMENT:
            return {counter: state.counter+1};
            
    }
    return state;
}