import React from "react";

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
    </header>
  );
};

export default Header;
