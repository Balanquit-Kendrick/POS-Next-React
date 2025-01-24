import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import React from 'react'
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { Calendar, ChevronDown, Home, Inbox, Store, Settings } from "lucide-react"

// Menu items.
const items = [
  {
    title: "Products",
    url: "#",
    icon: Home,
  },
  {
    title: "Hold Order",
    url: "#",
  },
  {
    title: "Order History",
    url: "#",
  }
]
const Sales = () => {
  return (
    <>
      <Collapsible defaultOpen={false} className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild className="text-base">
              <CollapsibleTrigger >
                <Store className='mr-3'/>
                Sales
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <span className="pl-5">{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
    </>
  )
}

export default Sales