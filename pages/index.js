import Head from "next/head";
import Image from "next/image";
import { Box, Button, Flex, Text, Icon, Link, Stack } from "@chakra-ui/react";
import { LoginButtons } from "@/components/LoginButton";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Box bg="gray.200" py={16} px={4}>
        <Flex as="main" direction="column" maxW="700px" margin="0 auto">
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Icon color="black" name="logo" size="48px" mb={2} />
          <Text mb={4} fontSize="lg" py={4}>
            <Text as="span" fontWeight="bold" display="inline">
              CUÍDATE
            </Text>
            Lleva el registro de tus mediciones de temperatura, nivel de
            saturación de oxigeno y ritmo cardiaco :)
          </Text>
          <LoginButtons />
        </Flex>
      </Box>
      <Image
        src="https://iqqtoxquvtzcsitzxtxd.supabase.co/storage/v1/object/sign/cuidate-bucket/coolKid.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdWlkYXRlLWJ1Y2tldC9jb29sS2lkLnN2ZyIsImlhdCI6MTYxNzg1NjAwMiwiZXhwIjoxOTMzMjE2MDAyfQ.CFtrzGNG6AgsGUa52K4-AYnWtmxET6RrSaULFzWozEY"
        width="600"
        height="400"
        alt=""
      />
    </>
  );
}
