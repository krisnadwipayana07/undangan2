import {
  Box,
  Button,
  Collapse,
  Text,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Gift() {
  const toast = useToast();
  const [openGift, setOpenGift] = useState(false);
  const { onCopy, hasCopied } = useClipboard("728301016358537");

  const handleClickButton = () => setOpenGift(!openGift);
  const handleCopyNorek = () => {
    onCopy();
    toast({
      title: "Berhasil salin norek",
    });
  };

  return (
    <>
      <Box
        my="10"
        mx="7"
        bg="chocolate"
        py="16"
        px="10"
        borderRadius="20px"
        boxShadow="dark-lg"
        color="white"
      >
        <Box display="flex" justifyContent="center">
          <Image src="/assets/gift.png" alt="gift" width={100} height={100} />
        </Box>
        <Text fontFamily="Great Vibes" fontSize="30px" textAlign="center">
          Wedding Gift
        </Text>
        <Text textAlign="center" fontFamily="Philosopher" mt="20px">
          Kehadiran Anda adalah hadiah tersendiri. Tetapi jika Anda ingin
          memberi kami sesuatu, silakan ketuk tautan berikut untuk melihat
          detailnya.
        </Text>
        <Box display="flex" justifyContent="center">
          <Button
            mt="5"
            variant="outline"
            fontFamily="Philosopher"
            color="white"
            _hover={{
              bg: "#CEA091",
            }}
            fontWeight={500}
            borderRadius="100px"
            onClick={handleClickButton}
          >
            Send Gift
          </Button>
        </Box>
      </Box>
      <Collapse in={openGift} animateOpacity>
        <Box
          my="10"
          mx="7"
          bg="chocolate"
          py="16"
          px="10"
          borderRadius="20px"
          boxShadow="dark-lg"
          color="white"
        >
          <Text fontFamily="Philosopher" fontSize="30px" textAlign="center">
            BRI
          </Text>
          <Text textAlign="center" fontFamily="Philosopher" mt="20px">
            NO Rek : 728301016358537
          </Text>
          <Box display="flex" justifyContent="center">
            <Button
              mt="5"
              variant="outline"
              fontFamily="Philosopher"
              color="white"
              _hover={{
                bg: "#CEA091",
              }}
              fontWeight={500}
              borderRadius="100px"
              onClick={() => onCopy()}
            >
              {hasCopied ? "Tersalin" : "Salin Norek"}
            </Button>
          </Box>
        </Box>
        <Box
          my="10"
          mx="7"
          bg="chocolate"
          py="16"
          px="10"
          borderRadius="20px"
          boxShadow="dark-lg"
          color="white"
        >
          <Text fontFamily="Philosopher" fontSize="30px" textAlign="center">
            GIFT
          </Text>
          <Text textAlign="center" fontFamily="Philosopher" mt="20px">
            Jl. Ratna No.28, Tegal Tugu, Kec. Gianyar, Kabupaten Gianyar, Bali
            80515
          </Text>
          <Box display="flex" justifyContent="center">
            <Link href="https://goo.gl/maps/bzn3KZep3Kn4UNzg8">
              <Button
                mt="5"
                variant="outline"
                fontFamily="Philosopher"
                color="white"
                _hover={{
                  bg: "#CEA091",
                }}
                fontWeight={500}
                borderRadius="100px"
                onClick={() => onCopy()}
              >
                Buka di GMaps
              </Button>
            </Link>
          </Box>
        </Box>
      </Collapse>
    </>
  );
}
