interface ContactProps {
  contentClass?: string;
}

const m = 20;

const Contact = ({ contentClass }: ContactProps) => (
  <>
    <section>
      <div class={`${contentClass} pt-16 text-2xl`}>
        <span>Can we work together?</span>
        <p class="cursor-pointer my-10 relative text-4xl">
          <a href="mailto:culitif@tuta.io?subject=Let's talk!">
            <svg
              aria-hidden="true"
              class="group squiggle absolute bottom-0 left-0 max-h-8"
              viewBox={`0 0 ${10 * m} 18`}
            >
              <style>
                {`
                  .squiggle path {
                    animation: shift 3s linear infinite;
                    animation-play-state: paused;
                  }

                  @prefers-reduced-motion: reduce {
                    animation-duration: 60s;
                  }

                  .squiggle:hover path {
                    animation-play-state: running;
                  }

                  @keyframes shift {
                    from { 
                      transform: translateX(-50%);
                    }
                    to { 
                      transform:translateX(0);
                    }
                  }
                `}
              </style>
              {Array.from({ length: m * 2 }).map((_, i) => (
                <path
                  key={i}
                  class="opacity-75 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  d={`M${
                    i * 10
                  } 17.5c2.5 0 2.5-1.5 5-1.5s2.5 1.5 5 1.5 2.5-1.5 5-1.5 2.5 1.5 5 1.5`}
                />
              ))}
            </svg>

            {/* text shadow so squiggle doesn't look bad */}
            <span
              class="absolute pointer-events-none text-[var(--amber-100)] z-10"
              style="-webkit-text-stroke: 3px var(--amber-100);"
            >
              Send me a message!
            </span>
            <span class="pointer-events-none relative z-20">
              Send me a message!
            </span>
          </a>
        </p>
      </div>
    </section>
  </>
);

export default Contact;
