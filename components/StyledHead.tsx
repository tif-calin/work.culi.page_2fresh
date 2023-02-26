import { Head } from "$fresh/runtime.ts";
import type { ComponentChildren } from "preact";

interface StyledHeadProps {
  children?: ComponentChildren;
}

const StyledHead = ({ children }: StyledHeadProps) => (
  <Head>
    {children}
    <style jsx>
      {`
      :root {
        --amber-100: #ffecb3;
        --red-500: #ef4444;
      }

      body {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background: var(--amber-100);
      }
    `}
    </style>
  </Head>
);

export default StyledHead;
