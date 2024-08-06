import { Sidebar } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LoggedIn = { firstName: "Bella", lastName: "Megasara" };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={LoggedIn} />
      {children}
    </main>
  );
}
