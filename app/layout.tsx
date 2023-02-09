import "../styles/globals.css";
import { GlobalNav } from "@/components/GlobalNav/GlobalNav";
import Byline from "@/components/Byline";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="overflow-y-scroll bg-cobalt_coastlands bg-center bg-no-repeat bg-cover bg-fixed">
        <GlobalNav />
        <div className="lg:pl-72">
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-zinc-900 p-3.5 lg:p-6">
                {children}
              </div>
            </div>
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-zinc-900">
                <Byline />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

//
// }
