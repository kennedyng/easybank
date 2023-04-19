import React, { useState } from "react";

const links = [
  {
    label: "Home",
    link: "#",
  },
  {
    label: "About",
    link: "#",
  },
  {
    label: "Contact",
    link: "#",
  },

  {
    label: "Blog",
    link: "#",
  },

  {
    label: "Career",
    link: "#",
  },
];

const Nav = () => {
  const [open, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpenMenu(!open);
  };
  return (
    <nav className="container mx-auto flex flex-row items-center justify-between p-4">
      <img src="/images/logo.svg" alt="easybank" />
      <ul className="flex-row space-x-4 text-slate-400 hidden  md:flex">
        {links.map(({ label, link }) => (
          <li key={label}>{label}</li>
        ))}
      </ul>

      <div className="bg-gradient-to-r  from-green-400 to-blue-400  px-4 py-2 rounded-3xl text-white hidden md:block">
        Request Invite
      </div>

      <div onClick={toggleMenu} className="md:hidden sm:block">
        {!open ? (
          <img src="/images/icon-hamburger.svg" alt="" />
        ) : (
          <img src="/images/icon-close.svg" alt="" />
        )}
      </div>

      {open && (
        <div className="absolute bg-slate-400 w-11/12 top-20 p-4 rounded-md">
          <ul className="flex flex-col justify-center items-center space-y-4">
            {links.map(({ label, link }) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
