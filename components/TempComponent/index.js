import React from "react";
import Link from "next/link";

const TempComponent = () => (
  <div>
    <div>This is Temp page</div>
    <div>
      <Link href="/">
        <a>Go to Home Page</a>
      </Link>
    </div>
  </div>
);

export default TempComponent;
