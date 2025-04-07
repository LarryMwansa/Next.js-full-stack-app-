## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```


run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# Array Snippet

import Link from 'next/link';
import React from 'react';
import styles from "./links.module.css";

const Links = () => {

    const links = [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "About",
        path: "/about",
      },
      {
        title: "Contact",
        path: "/contact",
      },
      {
        title: "Blog",
        path: "/blog",
      },
    ];

  return (
    <div className={styles.links}>
        {links.map((link=>(
            <Link href={link.path} key={link.title}>{link.title}</Link>
        )))}
    </div>
  )
}

export default Links
