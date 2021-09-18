import { HStack, Icon, IconButton } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine, RiLogoutBoxRLine } from "react-icons/ri";
import { useAuth } from "../../contexts/AuthContext";

export function NotificationsNav() {
  const { signOut } = useAuth();

  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <IconButton
        aria-label="Notifications"
        variant="unstyled"
        size="20"
        icon={<RiNotificationLine fontSize="20" />}
      />
      <IconButton
        aria-label="Profile"
        variant="unstyled"
        size="20"
        icon={<RiUserAddLine fontSize="20" />}
      />
      <IconButton
        aria-label="Logout"
        variant="unstyled"
        size="20"
        icon={<RiLogoutBoxRLine fontSize="20" />}
        onClick={signOut}
      />
    </HStack>
  );
}