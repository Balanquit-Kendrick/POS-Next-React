import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import Page from "./dashboard/page";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
        {children}
        <Page />
    </SidebarProvider>
  );
}
