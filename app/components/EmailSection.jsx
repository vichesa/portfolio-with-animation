// "use client";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import Link from "next/link";

// const EmailSection = () => {
//   return (
//     <section>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//         <div>
//           <h5 className="text-xl lg:text-2xl font-bold">Let's connect!</h5>
//           <p className="text-[#ADB7BE] text-base lg:text-lg mt-4">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, unde.
//             Eaque non natus voluptas ratione saepe ut nesciunt officia
//             molestias? Illum dolorum hic incidunt cum minus totam inventore ipsa
//             quibusdam?
//           </p>
//           <div className="mt-4 flex flex-cols-2 gap-4">
//             <Link href={"https://github.com/vichesa"}>
//               <FontAwesomeIcon icon={faGithub} className="h-7 w-7" />
//             </Link>
//             <Link href={"https://linkedin.com/in/vichesa"}>
//               <FontAwesomeIcon icon={faLinkedin} className="h-7 w-7" />
//             </Link>
//           </div>
//         </div>
//         <div>
//           <form>
//             <label htmlFor="email" className="block mt-4 mb-2">
//               Your email adress
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="example@gmail.com"
//               className="w-full rounded-lg p-[2px] text-black"
//             />
//             <label htmlFor="subject" className="block mt-4 mb-2">
//               Subject
//             </label>
//             <input
//               type="text"
//               name="subject"
//               placeholder="New Oppurtunity"
//               className="w-full rounded-lg p-[2px] text-black"
//             />
//             <label htmlFor="message" className="block mt-4 mb-2">
//               Message
//             </label>
//             <textarea
//               name="message"
//               id="message"
//               cols="30"
//               rows="5"
//               placeholder="Let's talk about..."
//               className="w-full text-black rounded-lg p-[2px]"
//             ></textarea>
//             <button
// type="submit"
//               className="bg-blue-800 w-full rounded-lg mt-4 p-[2px]"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EmailSection;
