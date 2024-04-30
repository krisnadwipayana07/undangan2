import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.push("/to/Nama Undangan");
  });
}