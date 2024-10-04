import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { LuLayoutGrid } from "react-icons/lu";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function BottomMenu() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col gap-2">
      <button onClick={onOpen} className="max-w-fit"><LuLayoutGrid className="h-6 w-6" /></button>
      <Modal
        isOpen={isOpen}
        placement='bottom'
        onOpenChange={onOpenChange}
        size="5xl"
        className="rounded-t-3xl rounded-b-none m-0 p-0 mx-0 px-0"
        classNames={{
          closeButton: "top-auto bottom-1",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                  {
                    siteConfig.navbarItems.map((link) => {
                      const IconComponent = link.icon; // Assuming `link.icon` contains the icon component from react-icons
                      return (
                        <Link
                          key={link.hash}
                          color="primary"
                          href={link.hash}
                          onClick={onClose}
                          className="flex flex-col items-center gap-1 m-2 my-4 p-2 hover:text-green-600 rounded-md cursor-pointer"
                        >
                          <IconComponent className="h-6 w-6" />
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
