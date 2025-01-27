import { UsersRound, Store, HandCoins, Box, Wrench, ChartLine, Settings2 } from "lucide-react"


const items = [
  {
    id: 1,
    title: "Sales",
    url: "#",
    icon: Store,
    submenu: [
      {
        title: "Products",
        url: "#",
      },
      {
        title: "Hold Order",
        url: "#",
      },
      {
        title: "Order History",
        url: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Payment Management",
    url: "#",
    icon: HandCoins,
    submenu: [
      {
        title: "Split Payments",
        url: "#",
      },
      {
        title: "Refunds/Returns",
        url: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Customer Management",
    url: "#",
    icon: UsersRound,
    submenu: [
      {
        title: "Customer Profiles",
        url: "#",
      },
      {
        title: "Loyalty Points",
        url: "#",
      },
    ],
  },
  {
    id: 4,
    title: "Inventory Tools",
    url: "#",
    icon: Box,
    submenu: [
      {
        title: "Stock Availability",
        url: "#",
      },
      {
        title: "Product Add/Edit",
        url: "#",
      },
    ],
  },
  {
    id: 5,
    title: "Staff Tools",
    url: "#",
    icon: Wrench,
    submenu: [
      {
        title: "Shift Management",
        url: "#",
      },
      {
        title: "Role-Based Access",
        url: "#",
      },
      {
        title: "Notifications/Alerts",
        url: "#",
      },
    ],
  },
  {
    id: 6,
    title: "Analytics",
    url: "#",
    icon: ChartLine,
    submenu: [
      {
        title: "Sales Summary",
        url: "#",
      },
      {
        title: "Performance Metrics",
        url: "#",
      },
    ],
  },
  {
    id: 7,
    title: "Others",
    url: "#",
    icon: Settings2,
    submenu: [
      {
        title: "Settings",
        url: "#",
      },
      {
        title: "Help/Support",
        url: "#",
      },
      {
        title: "Logout",
        url: "#",
      }
    ],
  },
]
export default items;