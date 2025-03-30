
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/profile.css";

// const Profile = () => {
//   const navigate = useNavigate();
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handlePasswordReset = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Check if new password and confirm password match
//     if (newPassword !== confirmPassword) {
//       alert("New Password and Confirm Password do not match!");
//       return;
//     }

//     // Simulate password reset logic (In a real app, call an API)
//     alert("Password reset successful!");
//     setCurrentPassword("");  // Clear current password field
//     setNewPassword("");      // Clear new password field
//     setConfirmPassword("");  // Clear confirm password field
//   };

//   const handleLogout = () => {
//     // Clear session storage/local storage (if using authentication tokens)
//     localStorage.removeItem("userToken");  // Example: remove auth token
//     alert("Logged out successfully!");
//     navigate("/");  // Redirect to login page
//   };

//   return (
//     <div className="profile-container">
//       <h2>Profile Page</h2>
//       <form onSubmit={handlePasswordReset}>
//         <div>
//           <label>Current Password:</label>
//           <input
//             type="password"
//             value={currentPassword}
//             onChange={(e) => setCurrentPassword(e.target.value)}
//             placeholder="Enter current password"
//             required
//           />
//         </div>
//         <div>
//           <label>New Password:</label>
//           <input
//             type="password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             placeholder="Enter new password"
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm New Password:</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             placeholder="Confirm new password"
//             required
//           />
//         </div>
//         <button type="submit">Reset Password</button>
//       </form>
//       <button
//         className="logout"
//         onClick={handleLogout}
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Profile;
// ///////////////
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // For API requests
// import "../styles/profile.css";

// const Profile = () => {
//   const navigate = useNavigate();
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState(""); // For error handling

//   const handlePasswordReset = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     // Check if new password and confirm password match
//     if (newPassword !== confirmPassword) {
//       setError("New Password and Confirm Password do not match!");
//       return;
//     }

//     try {
//       // Send the current and new passwords to the backend
//       const token = localStorage.getItem("userToken"); // Get the auth token

//       const response = await axios.post(
//         "http://localhost:5000/api/auth/update-password",
//         { currentPassword, newPassword },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include token in request headers
//           },
//         }
//       );

//       if (response.status === 200) {
//         alert("Password reset successful!");
//         setCurrentPassword("");  // Clear current password field
//         setNewPassword("");      // Clear new password field
//         setConfirmPassword("");  // Clear confirm password field
//       }
//     } catch (error: any) {
//       if (error.response && error.response.data.msg) {
//         setError(error.response.data.msg); // Show error message from backend
//       } else {
//         setError("Failed to reset password. Please try again.");
//       }
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("userToken");  // Remove auth token
//     alert("Logged out successfully!");
//     navigate("/");  // Redirect to login page
//   };

//   return (
//     <div className="profile-container">
//       <h2>Profile Page</h2>
//       <form onSubmit={handlePasswordReset}>
//         <div>
//           <label>Current Password:</label>
//           <input
//             type="password"
//             value={currentPassword}
//             onChange={(e) => setCurrentPassword(e.target.value)}
//             placeholder="Enter current password"
//             required
//           />
//         </div>
//         <div>
//           <label>New Password:</label>
//           <input
//             type="password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             placeholder="Enter new password"
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm New Password:</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             placeholder="Confirm new password"
//             required
//           />
//         </div>
//         {error && <p className="error-message">{error}</p>}
//         <button type="submit">Reset Password</button>
//       </form>
//       <button className="logout" onClick={handleLogout}>
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Profile;
////////////

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import axios to make API requests
// import "../styles/profile.css";

// const Profile = () => {
//   const navigate = useNavigate();
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handlePasswordReset = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Check if new password and confirm password match
//     if (newPassword !== confirmPassword) {
//       alert("New Password and Confirm Password do not match!");
//       return;
//     }

//     try {
//       // Send API request to update the password
//       const response = await axios.put("/api/users/change-password", {
//         username: "currentUsername", // Replace with actual username or get from state/session
//         oldPassword: currentPassword,
//         newPassword: newPassword,
//       });

//       if (response.status === 200) {
//         alert("Password reset successful!");
//         setCurrentPassword("");  // Clear current password field
//         setNewPassword("");      // Clear new password field
//         setConfirmPassword("");  // Clear confirm password field
//       } else {
//         alert("Error resetting password: " + response.data.msg);
//       }
//     } catch (error) {
//       alert("Server error while changing password. Please try again later.");
//     }
//   };

//   const handleLogout = () => {
//     // Clear session storage/local storage (if using authentication tokens)
//     localStorage.removeItem("userToken");  // Example: remove auth token
//     alert("Logged out successfully!");
//     navigate("/");  // Redirect to login page
//   };

//   return (
//     <div className="profile-container">
//       <h2>Profile Page</h2>
//       <form onSubmit={handlePasswordReset}>
//         <div>
//           <label>Current Password:</label>
//           <input
//             type="password"
//             value={currentPassword}
//             onChange={(e) => setCurrentPassword(e.target.value)}
//             placeholder="Enter current password"
//             required
//           />
//         </div>
//         <div>
//           <label>New Password:</label>
//           <input
//             type="password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             placeholder="Enter new password"
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm New Password:</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             placeholder="Confirm new password"
//             required
//           />
//         </div>
//         <button type="submit">Reset Password</button>
//       </form>
//       <button
//         className="logout"
//         onClick={handleLogout}
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Profile;

///////////

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import axios to make API requests
// import "../styles/profile.css";

// const Profile = () => {
//   const navigate = useNavigate();
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handlePasswordReset = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Check if new password and confirm password match
//     if (newPassword !== confirmPassword) {
//       alert("New Password and Confirm Password do not match!");
//       return;
//     }

//     try {
//       // Get the logged-in user's username (assuming it's stored in localStorage)
//       const username = localStorage.getItem("username");

//       // Send API request to update the password
//       const response = await axios.put("http://localhost:5000/api/auth/change-password", {
//         username: username, // Pass the logged-in username
//         oldPassword: currentPassword,
//         newPassword: newPassword,
//       });

//       if (response.status === 200) {
//         alert("Password reset successful!");
//         setCurrentPassword("");  // Clear current password field
//         setNewPassword("");      // Clear new password field
//         setConfirmPassword("");  // Clear confirm password field
//       } else {
//         alert("Error resetting password: " + response.data.msg);
//       }
//     } catch (error) {
//       alert("Server error while changing password. Please try again later.");
//     }
//   };

//   const handleLogout = () => {
//     // Clear session storage/local storage (if using authentication tokens)
//     localStorage.removeItem("authToken");  // Example: remove auth token
//     localStorage.removeItem("username");   // Remove stored username
//     alert("Logged out successfully!");
//     navigate("/");  // Redirect to login page
//   };

//   return (
//     <div className="profile-container">
//       <h2>Profile Page</h2>
//       <form onSubmit={handlePasswordReset}>
//         <div>
//           <label>Current Password:</label>
//           <input
//             type="password"
//             value={currentPassword}
//             onChange={(e) => setCurrentPassword(e.target.value)}
//             placeholder="Enter current password"
//             required
//           />
//         </div>
//         <div>
//           <label>New Password:</label>
//           <input
//             type="password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             placeholder="Enter new password"
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm New Password:</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             placeholder="Confirm new password"
//             required
//           />
//         </div>
//         <button type="submit">Reset Password</button>
//       </form>
//       <button className="logout" onClick={handleLogout}>
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Profile;
////////////

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Make sure axios is installed
import "../styles/profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if new password and confirm password match
    if (newPassword !== confirmPassword) {
      alert("New Password and Confirm Password do not match!");
      return;
    }

    try {
            const token = localStorage.getItem("authToken");
            const user = localStorage.getItem("user");
            console.log(user, 'token'); // Logs the stored token
            
      // Call the backend API to change the password
      const response = await axios.put("http://localhost:5000/api/auth/change-password", {
        oldPassword: currentPassword,
        newPassword: newPassword,
        userId: user
      });

      if (response.status === 200) {
        alert("Password reset successful!");
        setCurrentPassword("");  // Clear current password field
        setNewPassword("");      // Clear new password field
        setConfirmPassword("");  // Clear confirm password field
      } else {
        alert("Error resetting password: " + response.data.msg);
      }
    } catch (error) {
      alert("Error while changing password. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");  // Example: remove auth token
    alert("Logged out successfully!");
    navigate("/");  // Redirect to login page
  };

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <form onSubmit={handlePasswordReset}>
        <div>
          <label>Current Password:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Enter current password"
            required
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            required
          />
        </div>
        <div>
          <label>Confirm New Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
////////

