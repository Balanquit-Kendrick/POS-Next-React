
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible"
import { ChevronDown} from "lucide-react"
import { useState } from "react";
import items from "@/lib/menuItems.js"
import Dashboard from "./dashboard";
export function AppSidebar() {
  const [openMenuId, setOpenMenuId] = useState(null); 
  const toggleSubmenu = (id) => {
    setOpenMenuId((prevId) => (prevId === id ? null : id));
  };
  return (
    <Sidebar>
      <SidebarContent>
        <Dashboard />
        {items.map(item => {
          const Icon = item.icon;
          const isOpen = openMenuId === item.id;
          return (
          <Collapsible 
            defaultOpen={false} 
            open={isOpen}
            className="group/collapsible" 
            key={item.id} 
            onOpenChange={() => toggleSubmenu(item.id)}>
            <SidebarGroup>
              <SidebarGroupLabel asChild className="text-base">
                <CollapsibleTrigger>
                  <Icon className='mr-3'/>
                  {item.title}
                  <ChevronDown 
                  className={`ml-auto transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                  {isOpen && item.submenu && (
                    <>
                      {item.submenu.map((subItem, index) => (
                        <SidebarMenuItem key={index} >
                          <SidebarMenuButton asChild>
                            <a href={subItem.url}>
                              <span className="pl-5">{subItem.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </>
                  )}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>)
        })}
      </SidebarContent>
    </Sidebar>
  )
}
