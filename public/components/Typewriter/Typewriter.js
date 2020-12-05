import { useState, useEffect } from "preact/hooks";
export default function TypeWriter({ children }) {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (progress <= children.length - 1) {
      setTimeout(() => {
        setProgress(progress + 1);
      }, 70);
    }
  }, [progress, children.length]);

  return <h3>{children.slice(0, progress)}</h3>;
}
