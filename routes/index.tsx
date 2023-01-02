import StyledHead from "../components/StyledHead.tsx";

export default function Home() {
  return (
    <>
      <StyledHead>
        <title>Fresh App</title>
      </StyledHead>
      <main class="flex-grow">
        <section class="p-4 mx-auto max-w-screen-md">
          <h1>Hi, I'm Culi!</h1>
          <p class="my-6">
            full-stack software engineer
          </p>
        </section>
      </main>
      <footer class="p-4 mx-auto max-w-screen-md shrink flex gap-1 items-center">
        <span class="rotate-180 translate-y-[1.2px]">&copy;</span>
        <span>steal this</span>
      </footer>
    </>
  );
}
