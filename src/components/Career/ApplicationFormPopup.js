// // JobApplicationPopup.jsx
// import React from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export default function JobApplicationPopup({ open, setOpen }) {
//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogContent
//         style={{
//           maxWidth: "600px",
//           borderRadius: "16px",
//           padding: "24px",
//           background: "#fff",
//           boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
//         }}
//       >
//         <DialogHeader>
//           <DialogTitle
//             style={{
//               fontSize: "24px",
//               fontWeight: "600",
//               color: "#1f2937",
//               marginBottom: "20px",
//             }}
//           >
//             Job Application Form
//           </DialogTitle>
//         </DialogHeader>

//         <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//           {/* First & Last Name */}
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "1fr 1fr",
//               gap: "16px",
//             }}
//           >
//             <div>
//               <Label style={{ color: "#374151", fontSize: "14px" }}>
//                 First Name
//               </Label>
//               <Input placeholder="Steve" />
//             </div>
//             <div>
//               <Label style={{ color: "#374151", fontSize: "14px" }}>
//                 Last Name
//               </Label>
//               <Input placeholder="Rogers" />
//             </div>
//           </div>

//           {/* Email */}
//           <div>
//             <Label style={{ color: "#374151", fontSize: "14px" }}>Email</Label>
//             <Input type="email" placeholder="steve@example.com" />
//           </div>

//           {/* Phone Number */}
//           <div>
//             <Label style={{ color: "#374151", fontSize: "14px" }}>
//               Phone Number
//             </Label>
//             <Input type="tel" placeholder="+1 234 567" />
//           </div>

//           {/* Position Applying For */}
//           <div>
//             <Label style={{ color: "#374151", fontSize: "14px" }}>
//               Position Applying For
//             </Label>
//             <Select>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select a position" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="frontend">Frontend Developer</SelectItem>
//                 <SelectItem value="backend">Backend Developer</SelectItem>
//                 <SelectItem value="fullstack">Full Stack Developer</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Upload Resume */}
//           <div>
//             <Label style={{ color: "#374151", fontSize: "14px" }}>
//               Upload Resume
//             </Label>
//             <Input type="file" accept=".pdf,.doc,.docx,.jpg,.png" />
//             <p
//               style={{
//                 fontSize: "12px",
//                 color: "#9ca3af",
//                 marginTop: "4px",
//               }}
//             >
//               Upload in PDF, DOC, or JPG format
//             </p>
//           </div>

//           {/* Submit Button */}
//           <div style={{ display: "flex", justifyContent: "center" }}>
//             <Button
//               type="submit"
//               style={{
//                 backgroundColor: "#2563eb",
//                 borderRadius: "8px",
//                 padding: "12px 24px",
//                 color: "#fff",
//                 fontWeight: 500,
//                 fontSize: "16px",
//                 cursor: "pointer",
//               }}
//             >
//               Submit
//             </Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }
