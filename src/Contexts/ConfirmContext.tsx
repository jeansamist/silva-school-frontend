import { Modal } from "@silva-school-frontend/ui";
import { ComponentProps, Dispatch, FunctionComponent, PropsWithChildren, SetStateAction, createContext, useCallback, useState } from "react";
type Confirm = { onConfirm?: () => void; onCancel?: () => void; setter?: Dispatch<SetStateAction<boolean>> } & ComponentProps<typeof Modal>;
type _def = {
  confirms: Confirm[];
  pushConfirm: (confirm: Confirm) => void;
};
const def: _def = {
  confirms: [],
  pushConfirm: () => {
    return;
  },
};
function useConfirm(): _def {
  const [confirms, setconfirms] = useState<Confirm[]>([
    {
      children: "Do you really want to perform this action?",
    },
  ]);
  const pushConfirm = useCallback((confirm: Confirm) => {
    confirm.setter !== undefined && confirm.setter(true);
    // confirm.isVisible = true;
    setconfirms((v) => [...v, confirm]);
  }, []);
  return { confirms, pushConfirm };
}

export const ConfirmContext = createContext(def);
export const ConfirmProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const confirm = useConfirm();
  return <ConfirmContext.Provider value={confirm}>{children}</ConfirmContext.Provider>;
};
