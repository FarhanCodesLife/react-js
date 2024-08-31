import { motion } from "framer-motion"
function Items({user,reference}) {
console.log(user);
return (
    <>
    {user.map((item,index)=>(
       <motion.div
                 key={index}
                 drag
                 dragConstraints={reference}
                 whileDrag={{ scale: 1.1 }}
                 dragElastic={0.1}
                 dragTransition={{ bounceDamping: 30, bounceStiffness: 10 }}
                 className="m-2  p-5 min-w-72 bg-blue-100  border border-black font-semibold  shadow-xl rounded-lg text-wrap "
               >
       <h1>{item.date}</h1>
       <div className=" text-center  text-3xl capitalize border text-yellow-100 rounded-lg bg-slate-800 border-white">
       {/* <tr>farhan</tr> */}
       <h1>{item.name}</h1>
       <h1>Rs {item.expense}</h1>
            
           </div>
</motion.div>
))}
</>
)
     
}

export default Items






// import { motion } from 'framer-motion';

// function Items({ user, reference }) {
//   console.log(user);

//   return (
//     <>
//       {user.map((item, index) => (
//         <motion.div
//           key={index}
//           drag
//           dragConstraints={reference}
//           whileDrag={{ scale: 1.1 }}
//           dragElastic={0.1}
//           dragTransition={{ bounceDamping: 30, bounceStiffness: 10 }}
//           className="p-5 w-52 bg-red-300"
//         >
//           <div className="text-center text-2xl capitalize border border-black">
//             <h1>{item.name}</h1>
//             <h1>{item.expense}</h1>
//             <h1>{item.date}</h1>
//           </div>
//         </motion.div>
//       ))}
//     </>
//   );
// }

// export default Items;
