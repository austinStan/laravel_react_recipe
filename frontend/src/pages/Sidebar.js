import React from "react";

const Sidebar = () => {
  const navItems = [
    { id: 1, icon: "#house-fill", label: "Dashboard", href: "/" },
    { id: 2, icon: "#people", label: "Leads", href: "/leads" },
    { id: 3, icon: "#graph-up", label: "Follow Ups", href: "/followup" },
  ];

  const secondNavItems = [
    { id: 2, icon: "#door-closed", label: "Sign out", href: "/logout" },
  ];

  return (
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div
        className="offcanvas-md offcanvas-end bg-body-tertiary"
        tabindex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            Company name
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  className="nav-link d-flex align-items-center gap-2"
                  href={item.href}
                >
                  <svg className="bi">
                    <use href={item.icon} />
                  </svg>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <hr className="my-3" />

          <ul className="nav flex-column mb-auto">
            {secondNavItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  className="nav-link d-flex align-items-center gap-2"
                  href={item.href}
                >
                  <svg className="bi">
                    <use href={item.icon} />
                  </svg>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
