import React from "react";

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
  return (
    <nav className="container mx-auto flex flex-row items-center justify-between py-4">
      <img src="/images/logo.svg" alt="easybank" />
      <ul className="flex flex-row space-x-4 text-slate-400">
        {links.map(({ label, link }) => (
          <li key={label}>{label}</li>
        ))}
      </ul>

      <div className="bg-gradient-to-r  from-green-400 to-blue-400  px-4 py-2 rounded-3xl text-white">
        Request Invite
      </div>
    </nav>
  );
};

export default Nav;
