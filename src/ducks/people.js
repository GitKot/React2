import React from 'react'
import { List } from 'immutable';

const ReducerState = Record({
    entities: new List([])
})

const PersonRecord = Record({
    id: null,
    firstname: null,
    lastname: null,
    email: null
})

export const moduleName = 'people'
const prefix = `${appName}/${moduleName}`
export const   ADD_PERSON = `${prefix}/ADD_PERSON`

export default function reducer(state = new ReducerState(), action) {
    const {type, payload} = action

    switch (type){
        case ADD_PERSON:
              return state.update('entities', entities => entities.push(new PersonRecord(payload.person)))
        default:
             return state;
    }
}