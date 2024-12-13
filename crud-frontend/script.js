const apiUrl = "http://localhost:3000";

// Show message
function showMessage(message, type = "success") {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
  messageDiv.className = `message ${type}`;
  setTimeout(() => {
    messageDiv.textContent = "";
    messageDiv.className = "message";
  }, 3000); // Hide the message after 3 seconds
}

// Fetch all users
function fetchUsers() {
  fetch(`${apiUrl}/users`)
    .then((response) => response.json())
    .then((data) => {
      const usersTable = document.querySelector("#usersTable tbody");
      usersTable.innerHTML = "";
      data.forEach((user) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>
                        <button class="edit" onclick="editUser(${user.id}, '${user.name}', '${user.email}')">Edit</button>
                        <button class="delete" onclick="deleteUser(${user.id})">Delete</button>
                    </td>
                `;
        usersTable.appendChild(row);
      });
    });
}

// Add user
document.getElementById("addUserForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  fetch(`${apiUrl}/add-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  }).then((response) => {
    if (response.ok) {
      fetchUsers();
      document.getElementById("addUserForm").reset();
      showMessage("User added successfully");
    } else {
      showMessage("Error adding user", "error");
    }
  });
});

// Edit user
function editUser(id, name, email) {
  const newName = prompt("Enter new name:", name);
  const newEmail = prompt("Enter new email:", email);

  if (newName && newEmail) {
    fetch(`${apiUrl}/update-user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newName, email: newEmail }),
    }).then((response) => {
      if (response.ok) {
        fetchUsers();
        showMessage("User updated successfully");
      } else {
        showMessage("Error updating user", "error");
      }
    });
  }
}

// Delete user
function deleteUser(id) {
  if (confirm("Are you sure you want to delete this user?")) {
    fetch(`${apiUrl}/delete-user/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        fetchUsers();
        showMessage("User deleted successfully");
      } else {
        showMessage("Error deleting user", "error");
      }
    });
  }
}

// Initialize
fetchUsers();
