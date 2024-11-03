import Image from "next/image";

import MouseMoveSection from "@/components/MouseMoveSection";
import Cursor from "@/components/Cursor";

/* import { getSEOTags } from "@/libs/seo";
export const metadata = getSEOTags({
  title: `Profile | ${config.appName}`,
  canonicalUrlRelative: "/profile",
}); */

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: "url('/img/bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <main className="flex flex-col justify-items-center items-center w-full">
        {Array.from({ length: 3 }, (_, i) => (
          <MouseMoveSection key={i} i={i + 1} />
        ))}
      </main>
    </div>
  );
}
