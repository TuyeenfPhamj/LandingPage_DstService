import { useEffect, useState } from "react";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
}

const charDelay = 30;

export function AnimatedHeading({ text, className = "" }: AnimatedHeadingProps) {
  const [active, setActive] = useState(false);
  const lines = text.split("\n");

  useEffect(() => {
    const timeout = window.setTimeout(() => setActive(true), 200);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <h1 className={className}>
      {lines.map((line, lineIndex) => {
        const lineLength = line.length;
        let charOffset = 0;
        return (
          <span className="block md:whitespace-nowrap" key={`${line}-${lineIndex}`}>
            {line.split(/(\s+)/).map((token, tokenIndex) => {
              const start = charOffset;
              charOffset += token.length;

              if (/^\s+$/.test(token)) {
                return (
                  <span aria-hidden="true" key={`${lineIndex}-space-${tokenIndex}`}>
                    {"\u00A0"}
                  </span>
                );
              }

              return (
                <span
                  className="inline-block whitespace-nowrap"
                  key={`${token}-${lineIndex}-${tokenIndex}`}
                >
                  {Array.from(token).map((char, charIndex) => {
                    const absoluteCharIndex = start + charIndex;
                    return (
                      <span
                        className="inline-block transition-[opacity,transform] duration-500"
                        key={`${char}-${lineIndex}-${absoluteCharIndex}`}
                        style={{
                          opacity: active ? 1 : 0,
                          transform: active ? "translateX(0)" : "translateX(-18px)",
                          transitionDelay: `${
                            lineIndex * lineLength * charDelay +
                            absoluteCharIndex * charDelay
                          }ms`,
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}
