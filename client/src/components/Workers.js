
import React, { useState } from "react";
import { connect } from 'react-redux';
import actions from '../redux/actions';

function mapStateToProps(state) {
  return {
    list: state.workersReducer.worker
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(function Workers(props) {
  const { list} = props;
  
  const [idWorker, setIdWorker] = useState('');
  const [nameWorker, setNameWorker] = useState('');
  const [emailWorker, setEmailWorker] = useState('');
  const [statusWorker, setStatusWorker] = useState('');
  
return (
  <>
    <ul>
      {list.map((worker) => (

        <li key={worker.id}>
          <span>name:{worker.name}--------</span>
          <span>email:{worker.email}-----</span>
          <span>status:{worker.email}</span>
          {/* <span style={{textDecoration:item.is}}></span> */}
          
          
          
        </li>
      ))}</ul>

    

  </>
)
})

