import React from "react";
import Link from 'next/link'
import {
  HiOutlineClipboardList,
  HiOutlineDocumentReport,
} from "react-icons/hi";
import { BsPersonGear } from "react-icons/bs";

const SideBar = () => {
  return (
    <nav
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-gray-900 shadow-lg"
    >
      <SideBarIcon icon={<HiOutlineClipboardList size="40" />} text="Captura" />
      <SideBarIcon icon={<HiOutlineDocumentReport size="40" />} text="Reporte" />
      <SideBarIcon icon={<BsPersonGear size="36" />} text="Docentes" />
    </nav>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡"  }) => (
  <div className="sidebar-icon group">
    <Link href={`/${text.toLowerCase()}`}>
      {icon}
    </Link>
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;