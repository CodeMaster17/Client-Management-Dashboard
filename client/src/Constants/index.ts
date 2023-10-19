import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineUserAdd,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { MdOutlineDashboard, MdDownhillSkiing } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";

export const menus = [
  { name: "Member Dashboard", link: "/", icon: AiOutlineUser },
  { name: "Tourism Dashboard", link: "/viewplacedata", icon: MdDownhillSkiing },
  { name: "Add User", link: "/register", icon: AiOutlineUserAdd },
  {
    name: "Analytics",
    link: "/visualize",
    icon: TbReportAnalytics,
    margin: true,
  },
  { name: "Add Places", link: "/addplace", icon: AiOutlineAppstoreAdd },
  { name: "Cart", link: "/", icon: FiShoppingCart },
  { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
  { name: "Setting", link: "/", icon: RiSettings4Line },
];
