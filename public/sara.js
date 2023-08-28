import hydrate from "preact-iso/hydrate";
import Gallery from "./sections/gal";
import Portfolio from "./sections/portfolio";
import Blog from "./sections/blog";

export default function App() {
  return (
    <div id="app">
      <Gallery />
    </div>
  );
}

hydrate(<App />);

export async function prerender(data) {
  const { default: prerender } = await import("preact-iso/prerender");
  return await prerender(<App {...data} />);
}
