import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { siteConfig } from "@/config/site";

const PdfViewer = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Link
                className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                href=""
                onClick={onOpen}
            >
                View Resume{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </Link>
            <Modal size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Resume of {" "} {siteConfig.name}</ModalHeader>
                            <ModalBody>
                                <iframe
                                    src="/resume.pdf"
                                    className="w-full h-[80vh] border-none"
                                ></iframe>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    <Link
                                        className="flex items-center gap-2"
                                        href="/resume.pdf"
                                        download = "Shohag_RUET_CSE_Resume.pdf"
                                        target="_blank"
                                    >
                                        Download{" "}
                                        <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                                    </Link>
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default PdfViewer;
