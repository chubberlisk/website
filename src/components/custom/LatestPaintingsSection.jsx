import React from "react";
import Link from "next/link";
import PaintingsSection from "./PaintingsSection";

export default function LatestPaintingsSection() {
  return (
    <PaintingsSection
      displayLatest={4}
      title={<h2>Latest paintings</h2>}
      cardHeadingLevel={3}
    >
      <Link href="/paintings" className="inline-block mt-8">
        View all paintings →
      </Link>
    </PaintingsSection>
  );
}
