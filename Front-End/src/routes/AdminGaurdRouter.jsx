import React, { Suspense } from "react";
import NavBarAdmin from "../components/NavBarAdmin.jsx";
import { Outlet } from "react-router-dom";
import FullScreenLoader from "../components/FullScreenLoader.jsx";
import NavBar from "../components/NavBar.jsx";
import { AuthGuards } from "../guards/AuthGuards.js";

export default function AdminGaurdRouter() {
  return (
    <>
    <AuthGuards>
    <Suspense fallback={<FullScreenLoader />}>
    <NavBar />
      <main className="container-fluid">
        <div className="row ">
          <NavBarAdmin />
          <Outlet />
        </div>
      </main>
      </Suspense>
      </AuthGuards>
    </>
  );
}
