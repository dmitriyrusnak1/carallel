"use client"

import { PATHNAMES } from "@/lib/constants"
import { useRouter } from "next/navigation"

export default function Custom404() {
  const router = useRouter()
  router.push(PATHNAMES.library)
  return ""
}