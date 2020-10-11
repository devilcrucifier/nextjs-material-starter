import React from "react";
import Link from "next/link";

const HomeComponent = () => (
  <div>
    <div>This is Home page</div>
    <div>
      <Link href="/temp">
        <a>Go to Temp Page</a>
      </Link>
    </div>
  </div>
);

export default HomeComponent;
