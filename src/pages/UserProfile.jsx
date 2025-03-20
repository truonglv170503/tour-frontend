import { useState, useEffect } from "react";
import { userService } from "../services/api";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  useEffect(() => {
    userService.getMe()
      .then(response => {
        const userData = response.data?.data?.data;
        if (!userData) console.error("User data not found", response.data); // ✅ Sửa lỗi truy cập dữ liệu API
        setUser(userData);
      })
      .catch(error => console.error("Error fetching user:", error));
  }, []);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("photo", file);
    try {
      const res = await userService.updateMe(formData);
      if (res.data.status === "success") {
        setUser({ ...user, photo: res.data.data.photo });
        alert("Photo updated successfully!");
      }
    } catch (error) {
      console.error("Error uploading photo:", error.response);
      alert("Failed to upload photo");
    }
    // if (file) {
    //   setUser((prevUser) => ({ ...prevUser, photo: URL.createObjectURL(file) }));
    // }
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await userService.updateMe({ name: user.name, email: user.email });
      setUser(updatedUser.data?.data); // Cập nhật state user
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    userService.updatePassword(passwords.current, passwords.new, passwords.confirm)
      .then(() => alert("Password updated successfully!"))
      .catch(error => console.error("Error updating password:", error.response));
  };

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <main className="main">
      <div className="user-view">
        <nav className="user-view__menu">
          <ul className="side-nav">
            <NavItem link="#" text="Settings" icon="settings" active={true} />
            <NavItem link="/my-tours" text="My bookings" icon="briefcase" />
            <NavItem link="#" text="My reviews" icon="star" />
            <NavItem link="#" text="Billing" icon="credit-card" />
          </ul>
          {user.role === "admin" && (
            <div className="admin-nav">
              <h5 className="admin-nav__heading">Admin</h5>
              <ul className="side-nav">
                <NavItem link="#" text="Manage tours" icon="map" />
                <NavItem link="#" text="Manage users" icon="users" />
                <NavItem link="#" text="Manage reviews" icon="star" />
                <NavItem link="#" text="Manage bookings" icon="briefcase" />
              </ul>
            </div>
          )}
        </nav>
        <div className="user-view__content">
          <div className="user-view__form-container">
            <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
            <form className="form form-user-data" onSubmit={handleUpdate}>
              <div className="form__group">
                <label className="form__label" htmlFor="name">Name</label>
                <input
                  id="name"
                  className="form__input"
                  type="text"
                  value={user.name}
                  required
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>
              <div className="form__group ma-bt-md">
                <label className="form__label" htmlFor="email">Email address</label>
                <input
                  id="email"
                  className="form__input"
                  type="email"
                  value={user.email}
                  required
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className="form__group form__photo-upload">
                <img className="form__user-photo" src={user.photo} alt="User photo" />
                <input type="file" accept="image/*" id="photo" name="photo" onChange={handleFileChange} />
                <label htmlFor="photo">Choose new photo</label>
              </div>
              <div className="form__group right">
                <button className="btn btn--small btn--green">Save settings</button>
              </div>
            </form>
          </div>
          <div className="line">&nbsp;</div>
          <div className="user-view__form-container">
            <h2 className="heading-secondary ma-bt-md">Password change</h2>
            <form className="form form-user-password" onSubmit={handlePasswordUpdate}>
              <div className="form__group">
                <label className="form__label" htmlFor="password-current">Current password</label>
                <input
                  id="password-current"
                  className="form__input"
                  type="password"
                  placeholder="••••••••"
                  name="current"
                  required
                  minLength="8"
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="password">New password</label>
                <input
                  id="password"
                  className="form__input"
                  type="password"
                  placeholder="••••••••"
                  name="new"
                  required
                  minLength="8"
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="form__group ma-bt-lg">
                <label className="form__label" htmlFor="password-confirm">Confirm password</label>
                <input
                  id="password-confirm"
                  className="form__input"
                  type="password"
                  placeholder="••••••••"
                  name="confirm"
                  required
                  minLength="8"
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="form__group right">
                <button className="btn btn--small btn--green btn--save-password">Save password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

const NavItem = ({ link, text, icon, active }) => (
  <li className={active ? "side-nav--active" : ""}>
    <a href={link}>
      <svg>
        <use xlinkHref={`/img/icons.svg#icon-${icon}`} />
      </svg>
      {text}
    </a>
  </li>
);

export default UserProfile;
