import React from "react";
import { Image, Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/react";
import Link from "next/link";

import { LuLayoutGrid } from "react-icons/lu";
import { siteConfig } from "@/config/site";
import { contactsInfo } from "@/lib/data";


export default function BottomMenu() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col gap-2">
      <button onClick={onOpen} className="max-w-fit"><LuLayoutGrid className="h-5 w-5" /></button>
      <Modal
        isOpen={isOpen}
        placement='bottom'
        onOpenChange={onOpenChange}
        size="5xl"
        className="rounded-t-3xl rounded-b-none m-0 p-0 mx-0 px-0"
        classNames={{
          closeButton: "top-auto bottom-1",
        }}
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                  {
                    siteConfig.navbarItems.map((link) => {
                      return (
                        <Link
                          key={link.hash}
                          color="primary"
                          href={link.hash}
                          onClick={onClose}
                          className="flex flex-col items-center gap-1 m-2 my-2 p-2 hover:text-green-600 rounded-md cursor-pointer"
                        >
                          {link.icon}
                          <span className="text-xs">{link.name}</span>
                        </Link>
                      );
                    })
                  }
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export function ContactMenu() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col gap-2">
      <Image onClick={onOpen} radius="full" shadow="sm" src={siteConfig.logo} alt="Logo" className="h-8 w-8 bg-white cursor-pointer" />
      <Modal
        isOpen={isOpen}
        placement='bottom'
        onOpenChange={onOpenChange}
        size="5xl"
        className="rounded-t-3xl rounded-b-none m-0 p-0 mx-0 px-0"
        classNames={{
          closeButton: "top-auto bottom-1",
        }}
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                  {
                    contactsInfo.map((link) => {
                      return (
                        <Link
                          target="_blank"
                          key={link.name}
                          color="primary"
                          href={link.url}
                          onClick={onClose}
                          className="flex flex-col items-center gap-1 m-2 my-2 p-2 hover:text-green-600 rounded-md cursor-pointer"
                        >
                          {link.icon}
                          <span className="text-xs">{link.name}</span>
                        </Link>
                      );
                    })
                  }
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

