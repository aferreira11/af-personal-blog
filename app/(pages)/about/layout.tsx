import { constructMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = constructMetadata({
  title: "About | Amadeu Ferreira",
  description: "Learn more about Amadeu Ferreira, the modern Polymath.",
})

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 