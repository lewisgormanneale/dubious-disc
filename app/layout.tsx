import "../styles/globals.css";
import { GlobalNav } from "@/components/GlobalNav/GlobalNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <GlobalNav />
        {children}
      </body>
    </html>
  );
}

// function Byline() {
//   return (
//     <div className="flex items-center justify-between gap-x-4 p-3.5 lg:px-5 lg:py-3">
//       <div className="flex items-center gap-x-1.5">
//         <div className="text-sm text-gray-400">By</div>
//         <a href="https://vercel.com" title="Vercel">
//           <div className="w-16 text-gray-100 hover:text-gray-50">
//             <VercelLogo />
//           </div>
//         </a>
//       </div>

//       <div className="text-sm text-gray-400">
//         <a
//           className="underline decoration-dotted underline-offset-4 hover:text-gray-400"
//           href="https://github.com/vercel/app-playground"
//           target="_blank"
//         >
//           View code
//         </a>
//         {" or "}
//         <a
//           className="underline decoration-dotted underline-offset-4 hover:text-gray-400"
//           href="https://vercel.com/templates/next.js/app-directory"
//           target="_blank"
//         >
//           deploy your own
//         </a>
//       </div>
//     </div>
//   );
// }
