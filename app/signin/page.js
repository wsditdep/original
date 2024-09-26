// import Image from "next/image";
// import logo from "@/public/auth/logo.png";
// import Signin from "@/components/auth/Signin";
// import Link from "next/link";

// export const dynamic = "force-dynamic";

// const page = () => {
//     return (
//         <section className="auth-section" style={{
//             width: '100%',
//             height: '100%',
//             // background: `linear-gradient(to bottom, rgb(36 58 84),rgb(107 160 180))`
//         }}>

//             <div className="auth-wrapper">
//                 <div className="welcome-icon">
//                     <Link href={"/"}><i className="fa-solid fa-angle-left"></i></Link>
//                 </div>
//                 <div className="auth-login-logo">
//                     <Image
//                         src={logo}
//                         height={100}
//                         width={100}
//                         alt="logo"
//                         unoptimized
//                     />
//                 </div>
//                 <Signin />
//                 <div className="auth-copyright">
//                     <p><i className="fa fa-shield"></i>We'll never post anything without your permission.</p>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default page