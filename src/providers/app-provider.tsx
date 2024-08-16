import {PropsWithChildren} from "react";

export default function AppProvider({ children }: PropsWithChildren) {

  return (
    <div>
      {children}
    </div>
  );

}
