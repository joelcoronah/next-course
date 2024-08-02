import { Navbar } from "@/components";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between p-24">
        <span className="text-lg">Hello mundito</span>
        {children}
      </main>
    </>
  );
}
