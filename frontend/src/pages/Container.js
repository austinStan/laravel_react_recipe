import React from "react";

const Container = () => {
  const navItems = [
    { id: 1, icon: "#house-fill", label: "Dashboard", href: "#" },
    { id: 2, icon: "#people", label: "Leads", href: "#" },
    { id: 3, icon: "#graph-up", label: "Follow Ups", href: "#" },
  ];

  const navItemsTwo = [
    { id: 1, icon: "#gear-wide-connected", label: "Settings", href: "#" },
    { id: 2, icon: "#door-closed", label: "Sign out", href: "#" },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
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
                {navItemsTwo.map((item) => (
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

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Share
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Export
                </button>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1"
              >
                <svg className="bi">
                  <use href="#calendar3" />
                </svg>
                This week
              </button>
            </div>
          </div>

          <h2>Leads</h2>
          <div className="table-responsive small">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>random</td>
                  <td>data</td>
                  <td>placeholder</td>
                  <td>text</td>
                </tr>
                <tr>
                  <td>1,002</td>
                  <td>placeholder</td>
                  <td>irrelevant</td>
                  <td>visual</td>
                  <td>layout</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Container;
