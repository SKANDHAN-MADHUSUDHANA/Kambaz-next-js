import { ReactNode } from "react";
import KambazNavigation from "./Navigation";

type KambazLayoutProps = {
  children: ReactNode;
  params: { cid: string };
};

export default function KambazLayout({ children, params }: Readonly<KambazLayoutProps>) {

  return (
    <table>
      <tbody>
        <tr>
          <td valign="top" width="200">
            <KambazNavigation />
          </td>
          <td valign="top" width="100%">
            {children}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
