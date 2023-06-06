"use client";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Logo({}: Props) {
  return (
    <Image
      src={"/images/CrownTown.png"}
      height={"100"}
      width={"100"}
      alt="Crowm Town"
    />
  );
}
