import hydrate from "preact-iso/hydrate";
import About from "./sections/about";
import Portfolio from "./sections/portfolio";
import Blog from "./sections/blog";

export default function App() {
  return (
    <div id="app">
      <h1>Told ya Ida...</h1>
      <img style="max-width: 100%;" src="/images/trap.JPG" />
    </div>
  );
}

hydrate(<App />);

export async function prerender(data) {
  const { default: prerender } = await import("preact-iso/prerender");
  return await prerender(<App {...data} />);
}
