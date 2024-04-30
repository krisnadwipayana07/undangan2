import { GET_MY_UCAPAN, INSERT_MY_UCAPAN } from "@/lib/query/Ucapan";
import { useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function Ucapan({ name = "" }) {
  const { loading, error, data } = useQuery(GET_MY_UCAPAN);
  const [input, setInput] = useState({
    name: name,
    message: "",
    avaliable: "",
  });
  const reloadWeb = () => {
    window.location.reload();
  };
  const [insertUcapan] = useMutation(INSERT_MY_UCAPAN, {
    onCompleted: reloadWeb,
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleInputUcapan = (e) => {
    insertUcapan({
      variables: {
        name: input.name,
        message: input.message,
        avaliable: input.avaliable,
      },
    });
  };

  return (
    <Box
      h="150vh"
      p="7"
      bgImage="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(78,73,40,0.4) 0%),url('/assets/ucapan.jpg')"
      bgSize="cover"
      bgPos="center"
    >
      <Stack
        spacing={5}
        p="5"
        bg="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(78,73,40,0.5) 0%)"
        borderRadius="10px"
        mb="10"
      >
        <Text color="white" fontSize="2em" fontFamily="Kaushan Script">
          Ucapan dan Doa
        </Text>

        <FormControl>
          <Input
            _focus={{
              bg: "white",
            }}
            type="text"
            name="name"
            onChange={handleChangeInput}
            value={input.name}
            variant="filled"
            placeholder="Masukan nama anda"
          />
        </FormControl>
        <FormControl>
          <Textarea
            _focus={{
              bg: "white",
            }}
            name="message"
            value={input.message}
            onChange={handleChangeInput}
            variant="filled"
            placeholder="Tuliskan Pesan dan Doa"
          />
        </FormControl>
        <FormControl>
          <Select
            _focus={{
              bg: "white",
            }}
            variant="filled"
            color="gray"
            name="avaliable"
            placeholder="Konfimasi Kehadiran"
            onChange={handleChangeInput}
            value={input.avaliable}
          >
            <option value="Hadir">Hadir</option>
            <option value="Tidak Hadir">Tidak Hadir</option>
          </Select>
        </FormControl>
        <Button
          mt="5"
          fontFamily="Philosopher"
          fontWeight={400}
          bg="#4b3f3b"
          color="white"
          _hover={{
            bg: "#CEA091",
          }}
          onClick={handleInputUcapan}
        >
          Kirim Ucapan
        </Button>
      </Stack>
      {loading && <Text>loading...</Text>}
      <Box height="70vh" overflowY="scroll">
        {data?.yogidiwani_ucapan_doa?.map((item, key) => (
          <Box
            my="5"
            p="5"
            bg="linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(78,73,40,0.5) 0%)"
            borderRadius="10px"
            color="white"
            fontFamily="Philosopher"
            key={key}
          >
            <Text fontWeight={700}>{item.name}</Text>
            <Text fontSize="sm">{item.avaliable}</Text>
            <Text fontFamily="Poppins">{item.message}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
