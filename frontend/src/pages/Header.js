import React, { useEffect, useState } from "react";
import api from "../api/api";
import { NOTIFICATIONS_API } from "../api/endpoints";

const navButtons = [
  {
    id: 1,
    icon: "#search",
    target: "#navbarSearch",
    controls: "navbarSearch",
    label: "Toggle search",
  },
  {
    id: 2,
    icon: "#list",
    target: "#sidebarMenu",
    controls: "sidebarMenu",
    label: "Toggle navigation",
  },
];

const Header = () => {
  const [notifications, setNotifications] = useState([]);
  const fetchNotifications = async () => {
    try {
      const response = await api.get(NOTIFICATIONS_API);
      console.log(response.data);

      setNotifications(response.data?.data);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <header
      className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow"
      data-bs-theme="dark"
    >
      <a
        className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white"
        href="#"
      >
        Recipe
      </a>
      <ul className="navbar-nav flex-row d-md-none">
        {navButtons.map((button) => (
          <li className="nav-item text-nowrap" key={button.id}>
            <button
              className="nav-link px-3 text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={button.target}
              aria-controls={button.controls}
              aria-expanded="false"
              aria-label={button.label}
            >
              <svg className="bi">
                <use xlinkHref={button.icon} />
              </svg>
            </button>
          </li>
        ))}
      </ul>
      <div id="navbarSearch" className="navbar-search w-100 collapse">
        <input
          className="form-control w-100 rounded-0 border-0"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div className="dropdown px-2 py-2">
        <button
          className="btn btn-light btn-sm position-relative "
          type="button"
          id="notificationDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bi bi-bell fs-4"></i>
          <span
            id="notificationCount"
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            3
          </span>
        </button>
        <ul
          class="dropdown-menu dropdown-menu-end p-2"
          aria-labelledby="notificationDropdown"
        >
          {notifications?.length > 0 ? (
            <>
              {notifications?.map((notification) => (
                <>
                  <li>
                    <a className="dropdown-item" href="#">
                      {notification?.message}
                    </a>
                  </li>
                </>
              ))}
            </>
          ) : (
            <li>
              {" "}
              <p>No notications found</p>
            </li>
          )}
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a
              className="dropdown-item text-center text-primary"
              href="#"
              id="clearNotifications"
            >
              Clear All
            </a>
          </li>
        </ul>
      </div>
      {/* <div id="card">
        <card>
          <h2>Card</h2>
        </card>
      </div> */}
    </header>
  );
};

export default Header;
