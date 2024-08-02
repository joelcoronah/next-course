import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO title",
  description: "Description of the page",
  keywords: ["joel", "seo", "nextjs"],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-6xl">About Page</span>
    </>
  );
}
