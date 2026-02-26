// /**
//  * Home page.
//  * WHY: Keep the root page minimal, semantic, and SEO-friendly.
//  * Layout and styling belong in layout/components, not here.
//  */
// import Home from "../../components/home/home";

// export default function HomePage() {
//   return (
//     <main className="p-5 h-screen flex justify-center bg-(--color-bg) text-(--color-text)]">
//       <Home></Home>
//     </main>
//   );
// }

import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/publications"); // change to your target route
}
