// src/app/profile/layout.tsx
import React from "react";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Profile Section</h1>
      <main>{children}</main>
    </div>
  );
}
