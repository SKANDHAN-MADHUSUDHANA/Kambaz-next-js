import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import CourseBreadcrumb from "./Breadcrumb";

export default async function CoursesLayout(
  { children, params }: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
 const { cid } = await params;
 return (
   <div id="wd-courses">
     {/* Dynamic Breadcrumb Navigation */}
     <CourseBreadcrumb cid={cid} />
     
     <hr />
     <table>
       <tbody>
         <tr>
           <td valign="top" width="200"> <CourseNavigation cid={cid} /> </td>
           <td valign="top" width="100%"> {children} </td>
         </tr>
       </tbody>
     </table>
   </div>
);}
