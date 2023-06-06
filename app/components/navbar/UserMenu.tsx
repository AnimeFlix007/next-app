"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useRouter } from "next/navigation";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
type Props = {};

export default function UserMenu({}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const registerModal = useRegisterModal();
  const router = useRouter();
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          Your Home
        </div>
        <div
          onClick={toggleOpen}
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={""} />
          </div>
        </div>
        {isOpen && (
          <div
            onClick={toggleOpen}
            className="fixed w-full h-full top-0 left-0"
          >
            <div
              className="
              absolute 
              rounded-xl 
              shadow-md
              w-2/4
              md:w-1/6
              bg-white 
              overflow-hidden 
              right-1
              top-20
              text-sm
            "
              onClick={(e) => e.stopPropagation}
            >
              <div className="flex flex-col cursor-pointer">
                {false ? (
                  <>
                    <MenuItem
                      label="My trips"
                      onClick={() => router.push("/trips")}
                    />
                    <MenuItem
                      label="My favorites"
                      onClick={() => router.push("/favorites")}
                    />
                    <MenuItem
                      label="My reservations"
                      onClick={() => router.push("/reservations")}
                    />
                    <MenuItem
                      label="My properties"
                      onClick={() => router.push("/properties")}
                    />
                    <MenuItem label="Airbnb your home" onClick={() => {}} />
                    <hr />
                    <MenuItem label="Logout" onClick={() => {}} />
                  </>
                ) : (
                  <>
                    <MenuItem label="Login" onClick={() => {}} />
                    <MenuItem
                      label="Sign up"
                      onClick={() => registerModal.onOpen()}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
