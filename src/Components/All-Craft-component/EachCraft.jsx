import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const EachCraft = ({ eachCraftObj }) => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(user);

  useEffect(() => {
    if (user) {
      const fetchUsers = async () => {
        try {
          // Assuming there's an endpoint to get user-specific data
          const response = await fetch(`/user/${user.email}`);
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchUsers();
    }
  }, [user]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Logged In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>{new Date(user.createdAt).toLocaleString()}</td>
                <td>{new Date(user.lastLoggedAt).toLocaleString()}</td>
                <td>
                  {/* Uncomment and define handleDelete if needed */}
                  {/* <button onClick={() => handleDelete(user._id)} className="btn">
                  X
                </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
    // <div className="overflow-x-auto">
    //   <table className="table">
    //     {/* head */}
    //     <thead>
    //       <tr>
    //         <th></th>
    //         <th>Email</th>
    //         <th>Created At</th>
    //         <th>Last Logged In</th>
    //         <th>Action</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {users.map((user) => (
    //         <tr key={user._id}>
    //           <th>1</th>
    //           <td>{user.email}</td>
    //           <td>{new Date(user.createdAt).toLocaleString()}</td>
    //           <td>{new Date(user.lastLoggedAt).toLocaleString()}</td>
    //           <td>
    //             {/* <button
    //                 onClick={() => handleDelete(user._id)}
    //                 className="btn"
    //               >
    //                 X
    //               </button> */}
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default EachCraft;
