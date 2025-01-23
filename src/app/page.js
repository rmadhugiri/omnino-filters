// src/app/page.js

import React from "react";
import Filters from "./components/filters";
import Header from "./components/header";

export default function Page() {
  return (
    <main>
      <Header />
      <Filters />
    </main>
  );
}
