import React from 'react'
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem } from '../ui/sidebar'

const Dashboard = () => {
  return (
    <>
      <SidebarGroup className="pt-5">
        <SidebarGroupLabel className="text-base">
          Dashboard
        </SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem >
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </>
  )
}

export default Dashboard