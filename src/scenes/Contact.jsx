import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const { register, trigger, formState: {errors}} = useForm();
  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();

    }
  }

  return (
    <section id='contact' className="py-48">
      {/* HEADINGS */}
      <motion.div
        className="md:flex md:justify-end width-full"
        initial='hidden'
        whileInView='visible'
        viewport={{once:true, amount:0.5}}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity: 0, x: -50},
          visible: {opacity: 1, x: 0}
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width='w-1/2'/>
          </div>
        </div>
      </motion.div>
      {/* FORM AND IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial='hidden'
          whileInView='visible'
          viewport={{once:true, amount:0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, y: -50},
            visible: {opacity: 1, y: 0}
          }}
        >
          <img src="../assets/contact-image.jpeg" alt="contact" />
        </motion.div>
        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial='hidden'
          whileInView='visible'
          viewport={{once:true, amount:0.5}}
          transition={{delay:0.2, duration: 0.5}}
          variants={{
            hidden: {opacity: 0, y: -50},
            visible: {opacity: 1, y: 0}
          }}
        >
          <form
            target='_blank'
            onSubmit={onSubmit}
            action='https://formsubmit.co/5b727197330f553a1e2199cd716db450'
            method='POST' 
          >
            <input
              type="text"
              placeholder="NAME"
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
              {...register('name', {required: true, maxLength: 100})}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {(errors.name.type === 'required') &&  'This field is required.'}
                {(errors.name.type === 'maxLength') &&  'Max length is a 100 char.'}
              </p>
            )}
            <input
              type="text"
              placeholder="EMAIL"
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              {...register('email', {required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i})}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {(errors.email.type === 'required') &&  'This field is required.'}
                {(errors.email.type === 'pattern') &&  'Invalid email adress.'}
              </p>
            )}
            <textarea
              rows='4'
              colls='50'
              placeholder="MESSAGE"
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              {...register('message', {required: true, maxLength: 2000})}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {(errors.message.type === 'required') &&  'This field is required.'}
                {(errors.message.type === 'maxLength') &&  'Max length is a 2000 char.'}
              </p>
            )}
            <button
              type="submit"
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div> 
    </section>
  )
}
export default Contact;