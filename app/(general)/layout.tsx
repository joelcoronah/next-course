export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <span className="text-lg">Hello mundito</span>
      {children}
    </main>
  );
}
