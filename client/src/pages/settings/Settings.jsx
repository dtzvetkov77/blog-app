import "./settings.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";


export default function Settings() {
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);


  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleDelete = async() => {
    try {
      await axios.delete(`/users/${user._id}`, {
        data: { id: user._id },
      });
      dispatch({ type: "LOGOUT" });
    } catch (err) {}
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="settings-update-title">Update Your Account</span>
          <span onClick={handleDelete} className="settings-delete-title">Delete Account</span>
        </div>
        <form className="settings-form" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settings-pp">
            <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settings-pp-icon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <button className="settings-submit-button" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
    </div>
  );
}