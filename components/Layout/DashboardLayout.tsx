import React from "react";
import Navbar from "./Navbar/Navbar";
import Content from "./Content/Content";
import Main from "./Main/Main";
import LoadingLayout from "./LoadingLayout";
import Sidebar from "@app/components/Layout/Sidebar/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps): JSX.Element {
  return (
    <div className="wrapper">
      <Main>
        <Navbar />
        <div style={{display: "flex", padding: "20px", marginTop: "55px"}}>
          <Sidebar />
          <LoadingLayout>
            <Content>{children}</Content>
          </LoadingLayout>
        </div>
      </Main>
    </div>
  );
}
