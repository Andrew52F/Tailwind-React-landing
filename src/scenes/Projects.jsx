import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}

const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 
  bg-gray z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`
const projectVariant = {
  hidden: {opacity: 0, scale: 0.8},
  visible: {opacity: 1, scale: 1}
}

const Project = ({title, text}) => {
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div
      variants={projectVariant}
      className='relative'
    >
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{text}</p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  )
}
const Projects = () => {
  return (
    <section id='projects' className="py-32">
    {/* HEADING */}
    <motion.div
    className="md:w-2/5 mx-auto text-center"
    initial='hidden'
    whileInView='visible'
    viewport={{once:true, amount: 'all'}}
    transition={{duration: 0.5}}
    variants={{
      hidden: {opacity: 0, y: -50},
      visible: {opacity: 1, y: 0}
    }}
    >
      <div>
        <p className="font-playfair font-semibold text-4xl">
        <span className="text-red">PRO</span>JECTS
        </p>
        <div className="flex justify-center mt-5">
          <LineGradient width='w-1/3' />
        </div>
      </div>
      <p className="mt-10 mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis enim nostrum, impedit
        nam perspiciatis porro vel voluptatem tempore quaerat a facere dignissimos numquam nemo at qui ut perferendis
        praesentium magnam ad, commodi illo!
      </p>
    </motion.div>
    {/* Projects */}
    <div className='flex justify-center'>
      <motion.div
      className="sm:grid sm:grid-cols-3"
      initial='hidden'
      whileInView='visible'
      viewport={{once:true, amount:0.1}}
      variants={container}
      >
        <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
          BEAUTIFUL USER INTERFACES
        </div>
        <Project title='Project 1' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis enim nostrum' />
        <Project title='Project 2' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis enim nostrum' />
        <Project title='Project 3' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis enim nostrum' />
        <Project title='Project 4' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis enim nostrum' />
        <Project title='Project 5' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis enim nostrum' />
        <Project title='Project 6' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis enim nostrum' />
        <Project title='Project 7' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis enim nostrum' />
        <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
          SMOOTH USER EXPERIENCE
        </div>
      </motion.div>
    </div>
    </section>
  )
}
export default Projects;