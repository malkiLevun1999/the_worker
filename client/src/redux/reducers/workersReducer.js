import produce from 'immer';
import createReducer from './UtilsReducer';

const initialState = {

    worker: {
        id: "",
        name: "",
        email: "",
        password: "",
        status: ""

    },
    const: worker = {
        removeWorker(state,action)
        {
          state.worker=state.worker.filter((p)=>p.id!==action.payload)
        },
        updateWorker(state,action)
        {
          let result=state.list.find((p)=>p.id==action.payload.id)
          result.name=action.payload.name;
          result.email=action.payload.email
          result.password=action.payload.password
          result.status=action.payload.status
        },
        editWorker(state,action)
        {
          state.worker.push(action.payload)
        }
      },
      export default produce((state, action) => createReducer(state, action, mylist), initialState);
      
}
