import React, { ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/button";

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export const PrimaryButton: VFC<Props> = (props) => {
  const { children, onClick, disabled = false, loading = false } = props;

  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
      disabled={disabled || loading}
      isLoading={loading}
    >
      {children}
    </Button>
  );
};
