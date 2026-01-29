import React, { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { ValidationError, useForm } from '@formspree/react'
import Swal from 'sweetalert2'
import imgefrom from '../../assets/mail.png'
import { motion } from 'framer-motion'
import '../../i18next'
import { useTranslation } from 'react-i18next'

const Contact = ({ Dark }) => {
  const { t } = useTranslation()

  const [state, handleSubmit] = useForm('xrgnnoly')

  const container = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  })

  const HandleSubmit = (e) => {
    e.preventDefault()

    handleSubmit(e).then(() => {
      checkState()
    })
  }

  const [, setMail] = useState(null)
  const [, setMessage] = useState(null)

  const checkState = () => {
    Swal.fire({
      title: 'Done',
      text: 'Your message was sent',
      icon: 'success',
      confirmButtonText: 'Cool',
    })
  }
  return (
    <div id="Contact_Us" Dark>
      <div className="hed my-10 text-center  flex items-center justify-center text-4xl ">
        <MdEmail className="mx-3" />
        <h2 className="">{t('Contact.head')}</h2>
      </div>
      <p className="text-center my-2 text-neutral-400">{t('Contact.title')}</p>
      <div className=" tracking-tighter  flex flex-wrap items-center justify-between">
        <form className=" w-full lg:w-[47%] m-auto  mb-16 " onSubmit={(e) => HandleSubmit(e)}>
          <div className=" field1 flex  ">
            <input
              placeholder={t('Contact.palceholderEmail')}
              onChange={(e) => {
                setMail(e.target.value)
              }}
              required
              className="field outline-none border-2   border-gray-500 my-3 w-full p-2  rounded-md "
              type="email"
              name="email"
              id="email"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className=" field2   ">
            <textarea
              placeholder={t('Contact.palceholderMessage')}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
              rows={5}
              className="field outline-none  border-2   border-gray-500 my-3 w-full p-2  rounded-md  resize-none "
              name="message"
              id="message"
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className=" btns   bg-slate-400 w-full  px-5 py-2 font-bold text-black  rounded-md"
          >
            {t('Contact.submit')}
          </button>
        </form>
        <div className="imgs w-[90%] p-5 lg:w-[48%]">
          <motion.img
            variants={container(2.5)}
            initial="initial"
            animate="animate"
            src={imgefrom}
            className="w-full"
            alt="imgefrom"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
