import { Box, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Footer() {
  return (
    <Box bgColor="#F6F1E9" p="10" textAlign="center">
      <Text fontFamily="Philosopher">Made by </Text>
      <Text fontFamily="Great Vibes" fontSize="5xl">
        Krisna Dwipayana
      </Text>
      <Box>
        <Link href="https://api.whatsapp.com/send?phone=6289685769893&text=Halo%2C%20saya%20ingin%20memesan%20website%20untuk%20undangan">
          <IconButton>
            <AiOutlineWhatsApp size={20} />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
}
