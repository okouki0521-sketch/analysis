import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <main className="flex-1 overflow-y-auto relative bg-[#F8FAFC]">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-indigo-50/80 via-white/20 to-transparent pointer-events-none"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </>
  );
}
