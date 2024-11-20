// src/app/profile/layout.tsx

export default function ProfileLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <>{children}</>; // Render only children without any global layout
  }
  