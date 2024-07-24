import Login from "@/components/Login";
import React from "react";

const AuthPage = ({ searchParams }: { searchParams: any }) => {
  return <Login mode={searchParams.mode} />;
};

export default AuthPage;
