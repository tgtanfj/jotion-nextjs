"use client";

import { useEffect, useState } from "react";

import SetttingsModal from "@/components/modals/setttings-modal";
import CoverImageModal from "../modals/cover-image-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SetttingsModal />
      <CoverImageModal/>
    </>
  );
};
