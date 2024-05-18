const EachCraft = ({ eachCraftObj }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Created At</th>
            <th>Last Logged In</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastLoggedAt}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default EachCraft;
