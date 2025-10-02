import type { LinksFunction } from "@remix-run/node";
import styles from "./styles/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>Remix + Tailwind Golden Path</title>
      </head>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <h1 className="text-4xl font-bold text-blue-600">
            Remix + Tailwind Golden Path 🚀
          </h1>
        </div>
      </body>
    </html>
  );
}
