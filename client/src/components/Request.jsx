import React, { useContext } from 'react';
import moment from 'moment';
import DeleteButton from './DeleteButton';
import CompleteButton from './CompleteButton';
import { AppContext } from '../context/AppContext';

const request = ({ requests }) => {
  const { search } = useContext(AppContext);

  const filteredrequests = requests?.filter((request) => {
    return request.description
      .toLowerCase()
      .includes(search.toLowerCase().trim());
  });

  return (
    <>
      {filteredrequests.map((request) => (
        <tr key={request._id}>
          <td>
            {request.completed ? (
              <strike>{request.description}</strike>
            ) : (
              request.description
            )}
          </td>
          <td>
            {request.dueDate
              ? moment(request.dueDate).format('MMM Do, YYYY')
              : 'No Due Date.'}
          </td>
          <td>
            <DeleteButton id={request._id} />
            <CompleteButton request={request} />
          </td>
        </tr>
      ))}
    </>
  );
};
export default request;
