import Footer from "@/components/footer";
import Carosel from "@/components/sections/Carosel";
import Gift from "@/components/sections/Gift";
import Kartu from "@/components/sections/Kartu";
import Ucapan from "@/components/sections/Ucapan";
import { withApollo } from "@/lib/withApollo";
import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  IconButton,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsMusicNote } from "react-icons/bs";

import HomeImg from "../../assets/EMN_4017.jpg";
import BoyImg from "../../assets/EMN_4162.jpg";
import GirlImg from "../../assets/EMN_4151.jpg";
import BgInvitationImg from "../../assets/EMN_4062.jpg";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const router = useRouter();
  const { name } = router.query;

  const [isOpen, setIsOpen] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(new Audio("/assets/lagu_compress.mp3"));
    setPlaying(true);
  }, []);

  const handleButtonMusic = () => {
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    audio.play();
    setPlaying(true);
  };
  return (
    <>
      <Head>
        <title>Ngurah & Ayu Cahyani - Kondangan</title>
        <meta name="description" content="Website dibuat oleh Kondangan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Kartu
          handleClose={handleClose}
          isOpen={isOpen}
          namaUndangan={name}
          key={1}
        />
        <Box bgColor="black" minH="100vh">
          <Container maxW="container.sm" bgColor="white" px="0" minH="100vh">
            <Box pos="fixed" right="10px" bottom="10px" zIndex="999">
              <IconButton
                colorScheme="yellow"
                borderRadius="100px"
                onClick={handleButtonMusic}
              >
                <BsMusicNote size={20} />
              </IconButton>
            </Box>
            <Box pos="relative" maxW="container.md" minH="100vh">
              <Image
                src={HomeImg}
                alt="header"
                priority
                fill
                style={{ objectFit: "cover" }}
              />
              <Box
                pos="absolute"
                bottom="5%"
                left="50%"
                transform="translate(-50%,-50%)"
              >
                <Text
                  fontFamily="Feelgoodnes_sans"
                  color="white"
                  fontWeight={700}
                  fontSize="3xl"
                  textAlign="center"
                  letterSpacing="10px"
                >
                  PAWIWAHAN
                </Text>
                <Text
                  mt="5"
                  fontFamily="Great Vibes"
                  color="white"
                  fontWeight={700}
                  fontSize="4xl"
                  textAlign="center"
                >
                  Ngurah & Ayu Cahyani
                </Text>
              </Box>
            </Box>
            <Box
              bgColor="#7b340d"
              textAlign="center"
              color="white"
              py="40"
              px="10"
            >
              <Stack spacing={4}>
                <Text fontFamily="Great Vibes" fontSize="3xl">
                  We&#39;ve Found Love
                </Text>
                <Text fontFamily="Philosopher">
                  “Anvārabhethām anusam-rabhethām, Etam lokam srad-dadhānāh
                  sacante.”
                </Text>
                <Text fontFamily="Philosopher">
                  “Wahai pasangan suami-isteri, kembangkanlah cinta kasih di
                  dalam dirimu, tekun dan tetaplah berkarma dalam menggapai
                  kebahagiaan. Karena hanya orang yang bersungguh-sungguhlah
                  mendapatkan keberhasilan dalam berkeluarga.”
                </Text>
                <Text fontFamily="Philosopher">(Atharvaveda : VI.122.3)</Text>
              </Stack>
            </Box>
            <Box py="10" bgColor="#ffeecf">
              <Text textAlign="center" fontFamily="Kaushan Script">
                Sang Mempelai
              </Text>
              <SimpleGrid columns={[1, 2]} textAlign="center">
                <Box py="10">
                  <Box display="flex" justifyContent="center">
                    <Image
                      src={BoyImg}
                      alt="header"
                      priority
                      width={200}
                      height={200}
                      style={{ objectFit: "cover", borderRadius: "100px" }}
                    />
                  </Box>
                  <Stack spacing={3}>
                    <Text pt="10" fontFamily="Alkatra" fontWeight={700}>
                      Gusti Ngurah Indra Yuda
                    </Text>
                    <Text fontFamily="Alkatra">Putra Dari</Text>
                    <Text fontFamily="Alkatra" fontWeight={700}>
                      Gusti Made Mawa
                    </Text>
                    <Text fontFamily="Alkatra" fontWeight={700}>
                      Jero Wayan Sekar
                    </Text>
                    <Link href="https://www.instagram.com/yogi_pratamaa16">
                      <IconButton borderRadius="20px">
                        <AiOutlineInstagram size={30} />
                      </IconButton>
                    </Link>
                  </Stack>
                </Box>
                <Box py="10">
                  <Box display="flex" justifyContent="center">
                    <Image
                      src={GirlImg}
                      alt="header"
                      priority
                      width={200}
                      height={200}
                      style={{ objectFit: "cover", borderRadius: "100px" }}
                    />
                  </Box>
                  <Stack spacing={3}>
                    <Text pt="10" fontFamily="Alkatra" fontWeight={700}>
                      Ni Putu Ayu Cahyani
                    </Text>
                    <Text fontFamily="Alkatra">Putri Dari</Text>
                    <Text fontFamily="Alkatra" fontWeight={700}>
                      I Wayan Wisnu Ardana
                    </Text>
                    <Text fontFamily="Alkatra" fontWeight={700}>
                      Ni Putu Widiani
                    </Text>
                    <Link href="https://www.instagram.com/ayucahyanii_">
                      <IconButton borderRadius="20px">
                        <AiOutlineInstagram size={30} />
                      </IconButton>
                    </Link>
                  </Stack>
                </Box>
              </SimpleGrid>
            </Box>
            <Box
              color="white"
              textAlign="center"
              bgColor="#4E4928"
              py="20"
              px="5"
            >
              <Text py="5" fontFamily="Great Vibes" fontSize="39px">
                Om Swastiastu
              </Text>
              <Text py="5" fontSize="1.1em" fontFamily="Philosopher">
                Atas asung kerta wara nugraha Ida Sang Hyang Widhi Wasa,
                perkenankanlah kami mengundang Bapak/Ibu/Saudara/i untuk
                berkenan hadir di acara Manusa Yadnya Pawiwahan kami yang akan
                dilaksanakan pada:
              </Text>
              <Box
                px="5"
                py="10"
                borderRadius="10px"
                bgImage="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8016456582633054) 0%), url('/assets/background1.jpg')"
                bgSize="cover"
                bgPos="center"
                color="black"
                fontFamily="Philosopher"
              >
                <Box display="flex" justifyContent="center">
                  <Image
                    src="/assets/wedding-ring.webp"
                    alt="weeding-ring"
                    width={100}
                    height={100}
                  />
                </Box>
                <Text letterSpacing="0.5em" fontWeight={700} fontSize="2em">
                  RESEPSI
                </Text>
                <Divider py="2" borderColor="black" />
                <HStack
                  gridAutoColumns={2}
                  divider={<StackDivider borderColor="black" />}
                  py="7"
                >
                  <Box w="50%">
                    <Text>JUMAT</Text>
                    <Text fontSize="1.7em">Mei</Text>
                    <Text fontSize="2em">10</Text>
                    <Text fontSize="1.7em">2024</Text>
                  </Box>
                  <Box w="50%">
                    <Text fontSize="1.7em">14.00</Text>
                    <Text fontSize="1.7em">WITA</Text>
                    <Text>sampai Selesai</Text>
                  </Box>
                </HStack>
                <Divider py="2" borderColor="black" />
                <Text mt="10" fontFamily="Kaushan Script" fontSize="1.5em">
                  Tegal Tugu, Kec. Gianyar, Kab. Gianyar
                </Text>
                <Link href="https://maps.app.goo.gl/HezfBmJ3HBiAGugV6">
                  <Button
                    mt="5"
                    bg="#4b3f3b"
                    color="white"
                    _hover={{
                      bg: "#CEA091",
                    }}
                    fontWeight={500}
                    borderRadius="100px"
                  >
                    LIHAT LOKASI
                  </Button>
                </Link>
              </Box>
            </Box>
            <Carosel />
            <Ucapan name={name} />
            <Gift />
            <Box
              h="100vh"
              bgImage="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.20) 0%), url('/assets/sampai-jumpa.jpg')"
              bgSize="cover"
              bgPos="center"
            >
              <Text
                pt="7"
                textAlign="center"
                fontFamily="Philosopher"
                color="white"
              >
                Sampai Jumpa Di :
              </Text>
              <Text
                textAlign="center"
                fontFamily="Kaushan Script"
                fontSize="5xl"
                color="white"
              >
                Hari Spesial Kami
              </Text>
            </Box>
            <Footer />
          </Container>
        </Box>
      </main>
    </>
  );
}

export default withApollo()(Home);
