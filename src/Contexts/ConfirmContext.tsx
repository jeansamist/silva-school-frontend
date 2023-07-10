// import { Button, Flexbox, Footer, Modal as ModalElement, ModalProps } from "@silva-school-frontend/ui";
// import { ComponentProps, FunctionComponent, PropsWithChildren, ReactNode, createContext, useCallback, useState } from "react";

// type Modal = ComponentProps<typeof ModalElement>;

// type _def = {
//   confirms: Modal[];
//   onConfirm: () => void;
//   pushConfirm: (title: ReactNode, content: ReactNode) => void;
// };

// const def: _def = {
//   confirms: [],
//   onConfirm: () => {
//     return;
//   },
//   pushConfirm: () => {
//     return;
//   },
// };

// function useConfirm(): _def {
//   const [confirms, setconfirms] = useState<Modal[]>([
//     {
//       children: "Confirm your action",
//       footer: (
//         <Footer>
//           <Flexbox>
//             <Button onClick={}>Confirm</Button>
//           </Flexbox>
//         </Footer>
//       ),
//     },
//   ]);
//   const pushConfirm = useCallback((toast: Confirm) => {
//     setconfirms((v) => [...v, toast]);
//   }, []);
//   return { confirms, pushConfirm };
// }

// export const ConfirmContext = createContext(def);

// export const ConfirmProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
//   const toast = useConfirm();
//   return <ConfirmContext.Provider value={toast}>{children}</ConfirmContext.Provider>;
// };
