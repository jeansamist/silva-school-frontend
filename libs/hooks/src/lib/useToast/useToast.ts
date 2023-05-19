import { useState, useCallback } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export function useToast() {
  const [toasts, settoasts] = useState<boolean>(false);
  const pushToast = useCallback(() => {
    settoasts(true);
    return;
  }, []);
  return { toasts, pushToast };
}

export default useToast;
