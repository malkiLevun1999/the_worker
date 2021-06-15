
import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';
import actions from '../redux/actions';

function mapStateToProps(state) {
  return {
    list: state.workersReducer.worker
  };
}
const mapDispatchToProps = (dispatch) => ({
  removeWorker: (worker) => dispatch(actions.removeWorker(worker)),
  updateWorker: (worker) => dispatch(actions.updateWorker(worker)),
  editWorker: (worker) => dispatch(actions.editWorker(worker)),


})
export default connect(mapStateToProps, mapDispatchToProps)(function Director(props) {
  const { list, removeWorker, updateWorker, editWorker } = props;
  
  const [addWorkerFlag, setAddWorkerFlag] = useState(false);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [idWorker, setIdWorker] = useState('');
  const [nameWorker, setNameWorker] = useState('');
  const [passwordWorker, setPasswordWorker] = useState('');
  const [emailWorker, setEmailWorker] = useState('');
  const [statusWorker, setStatusWorker] = useState('');

  function setUpdate(id)
  {
    setIdWorker(id)
    setUpdateFlag(true)
  }
  function handelRemove(id) {
    removeWorker(id)
  }
  function update(id) {
    updateItem({ id: idWorker, name: nameWorker, email:emailWorker, password :passwordWorker,status:statusWorker })
    setUpdateFlag(false);
  }
  function addWorker() {
    let obj = {
      id: idWorker,
      name: nameWorker,
      password: passwordWorker,
      email:emailWorker,
      status:statusWorker
    }
    editItem(obj)
    setAddItemFlag(false);
  }
return (
  <>
    <ul>
      {list.map((worker) => (

        <li key={worker.id}>
          <span>name:{worker.name}--------</span>
          <span>email:{worker.email}-----</span>
          <span>password:{worker.password}-----</span>
          <span>status:{worker.status}</span>
          {/* <span style={{textDecoration:item.is}}></span> */}
          <DeleteIcon onClick={() => handelRemove(worker.id)} />
          <EditIcon onClick={() => setUpdate(worker.id)} />
          { updateFlag&&idWorker==worker.id ? <div>
            <input type="text" placeholder={worker.name} onBlur={(e) => setNameWorker(e.target.value)} />
            <input type="text" placeholder={worker.password} onBlur={(e) => setPasswordWorker(e.target.value)} />
            <input type="text" placeholder={worker.email} onBlur={(e) => setEmailWorker(e.target.value)} />
            <input type="text" placeholder={worker.status} onBlur={(e) => setStatusWorker(e.target.value)} />
            <button type="submit" onClick={() => update(worker.id)} >Update</button></div> : null}
        </li>
      ))}</ul>

    <button type="button" onClick={() => setAddWorkerFlag(true)} >add item</button>
    { addItemFlag ? <div>
      <input type="text" placeholder='name' onBlur={(e) => setNameWorker(e.target.value)} />
      <input type="text" placeholder='email' onBlur={(e) => setEmailWorker(e.target.value)} /> 
      <input type="text" placeholder='password' onBlur={(e) => setPasswordWorker(e.target.value)} /> 
    <button type="submit" onClick={() => addWorker()} >save</button></div> : null}

  </>
)
})

