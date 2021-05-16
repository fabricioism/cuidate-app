import { Button, Flex } from "@chakra-ui/react";

// import { useAuth } from "@/lib/auth";

export const LoginButtons = () => {
  //   const auth = useAuth();

  return (
    <Flex direction={["column", "row"]}>
      <Button
        backgroundColor="white"
        color="gray.900"
        variant="outline"
        fontWeight="medium"
        leftIcon="google"
        mt={4}
        _hover={{ bg: "gray.100" }}
        _active={{
          bg: "gray.100",
          transform: "scale(0.95)",
        }}
      >
        Iniciar sesión con Google
      </Button>
    </Flex>
  );
};
