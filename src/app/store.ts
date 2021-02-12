import { ITask } from './task';
import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK, REMOVE_ALL_TASKS } from './actions';

export interface IAppState {
    tasks: ITask[];
    lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
    tasks: [],
    lastUpdate: null
}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case ADD_TASK:
            action.todo.id = state.tasks.length + 1;
            return Object.assign({}, state, {
              tasks: state.tasks.concat(Object.assign({}, action.todo)),
                lastUpdate: new Date()
            })

        case TOGGLE_TASK:
            var todo = state.tasks.find(t => t.id === action.id);
            var index = state.tasks.indexOf(todo);
            return Object.assign({}, state, {
                  tasks: [
                    ...state.tasks.slice(0, index),
                    Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
                    ...state.tasks.slice(index+1)
                ],
                lastUpdate: new Date()
            })

        case REMOVE_TASK:
            return Object.assign({}, state, {
              tasks: state.tasks.filter(t => t.id !== action.id),
              lastUpdate: new Date()
            })

        case REMOVE_ALL_TASKS:
            return Object.assign({}, state, {
              tasks: [],
              lastUpdate: new Date()
            })
    }
    return state;
}

