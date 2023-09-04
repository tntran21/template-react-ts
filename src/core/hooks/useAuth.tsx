import { useUserStore } from "@/stores/client/userStore";

/**
 * A hook that handles checking and getting the authenticated user.
 *
 * @returns {Object} An object containing the username of the authenticated user.
 */
export const useAuth = () => {
  // TODO: handle check and get auth user
  const { username } = useUserStore((state) => state);

  return {
    username,
  };
};
