import { Button } from "@chakra-ui/button";
import React, { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const PrimaryButton: VFC<Props> = (props) => {
  const { children } = props;

  return (
    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
      {children}
    </Button>
  );
};
