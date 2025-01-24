
import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar"
import Order from "./sales"
import Dashboard from "./dashboard"
import Customer_Management from "./customer-management"
import Payment_Management from "./payment-management"
import Inventory_Tools from "./inventory-tools"
import Staff_Tools from "./staff-tools"
import Analytics from "./analytics"
import Others from "./others"



export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <Dashboard />
        <Order />
        <Customer_Management />
        <Payment_Management />
        <Inventory_Tools />
        <Staff_Tools />
        <Analytics />
        <Others />
      </SidebarContent>
    </Sidebar>
  )
}
