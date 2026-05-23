import { AppSidebar } from "@/components/app-sidebar"
import AppHeader from "@/components/app-header"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex w-full flex-col min-w-0 h-screen">
        <AppHeader />
        <ScrollArea className="min-h-0 h-full">{children}</ScrollArea>
      </main>
    </SidebarProvider>
  )
}
