import React, { useState } from "react";

function UserRoleSelector({ user }) {
  const [selectedRole, setSelectedRole] = useState(user.role);

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  return (
    <div>
      <span>
        {user.name} - {user.organization}
      </span>
      <label>
        <input
          type="radio"
          value="admin"
          checked={selectedRole === "admin"}
          onChange={handleRoleChange}
        />
        Admin
      </label>
      <label>
        <input
          type="radio"
          value="employee"
          checked={selectedRole === "employee"}
          onChange={handleRoleChange}
        />
        Employee
      </label>
    </div>
  );
}

function UserRoles() {
  const userData = [
    { id: 1, name: "John", organization: "Organization A", role: "admin" },
    { id: 2, name: "Jane", organization: "Organization B", role: "employee" },
    { id: 3, name: "Bob", organization: "Organization C", role: "admin" },
    // Add more user data as needed
  ];
  return (
    <div>
      {userData.map((user) => (
        <UserRoleSelector key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserRoles;
