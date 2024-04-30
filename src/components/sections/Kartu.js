import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function Kartu({ isOpen, handleClose, namaUndangan }) {
  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent
        bgImage="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,253,236,0.8) 0%) , url('/assets/header.jpg')"
        bgSize="cover"
        bgPos="center"
        h="80vh"
        textAlign="center"
        fontFamily="Philosopher"
      >
        <ModalBody display="flex" justifyContent="center" alignItems="center">
          <Box>
            <Box display="flex" justifyContent="center" mb="20">
              <Image
                src="/assets/logo.png"
                alt="logo"
                priority
                width={100}
                height={100}
              />
            </Box>
            <Text py="10">Kepada YTH.</Text>
            <Text fontSize="2xl">{namaUndangan}</Text>
            <Button
              mt="5"
              bg="#6e5d57"
              color="white"
              _hover={{
                bg: "#CEA091",
              }}
              fontWeight={500}
              fontFamily="Philosopher"
              onClick={handleClose}
            >
              Buka Undangan
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
