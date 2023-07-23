import React from "react";
import Link from "next/link";
import WritingsSection from "@/components/custom/WritingsSection";

export default function LatestWritingsSection({ writings }) {
  return (
    <WritingsSection
      displayLatest={2}
      writings={writings}
      title={<h2>Latest writings</h2>}
      cardHeadingLevel={3}
    >
      <Link href="/writings" className="inline-block">
        View all writings →
      </Link>
    </WritingsSection>
  );
}
