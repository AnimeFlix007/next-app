import Image from "next/image";
import React from "react";

type Props = {
  src: string 
};

export default function Avatar({ src }: Props) {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={src || "/images/defaultUser.jpg"}
    />
  );
}
