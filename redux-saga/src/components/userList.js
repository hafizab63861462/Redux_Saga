import { useEffect } from "react";

const UserList = ({ list, fetchAction }) => {
  useEffect(() => {
    fetchAction();
  });

  console.log(list);

  return (
    <div className="p-4 m-4 container">
      <h1 className="pb-4">Users</h1>

      <div className="row px-4 mx-4">
        <div className="col-4">
          <h4>Name</h4>
        </div>
        <div className="col-4">
          <h4>Email</h4>
        </div>
        <div className="col-2">
          <h4>Gender</h4>
        </div>
        <div className="col-2">
          <h4>Status</h4>
        </div>
        <hr />
      </div>

      {list &&
        list.map((user) => (
          <div key={user.id} className="row px-4 mx-4">
            <div className="col-4">
              <p>{user.name}</p>
            </div>
            <div className="col-4">
              <p>{user.email}</p>
            </div>
            <div className="col-2">
              <p>{user.gender}</p>
            </div>
            <div className="col-2">
              <p>{user.status}</p>
            </div>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default UserList;
