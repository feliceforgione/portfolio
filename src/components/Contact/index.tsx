'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import { cva } from 'class-variance-authority';
import { SendHorizonal } from 'lucide-react';
import { cn } from '@/lib/utils';

const headerTitle = cva('sectionHeader sectionHeaderGradient');

const inputBox = cva(
  'text-white w-full py-4 border-b border-gray-400 bg-transparent  focus:border-blue-700 rounded-none outline-none focus:outline-none  placeholder:text-gray-400  [&:valid]:bg-transparent'
);
const inputError = cva('mt-[-5px] text-red-600 text-sm');
const errorField = cva('outline-red-600');
const focusField = cva('focus:outline-blue-800');
const submitMessage = cva('mt-3 mr-4');

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: 'onTouched',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_PUBLIC_ACCESS_KEY || '';
  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: 'FeliceForgione Web3Forms',
      subject: 'New Message from feliceforgione.com',
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });
  return (
    <section id="contact" className="scroll-m-40 mt-60">
      <div className="mx-10 md:mx-15 lg:max-w-4xl xl:mx-auto ">
        <div className="flex flex-col  gap-6  px-5 py-8 bg-gray-800  border border-slate-900 rounded-2xl">
          <h2 className={headerTitle()}>Let&apos;s work together!</h2>
          <p className=" text-lg text-gray-200 text-center">
            I am currently available and open to taking on new projects.
            <br /> Feel free to reach out with any ideas or projects you’d like
            to discuss.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" w-full px-10 flex flex-col gap-4"
          >
            <input
              type="checkbox"
              id=""
              className="hidden"
              style={{ display: 'none' }}
              {...register('botcheck')}
            ></input>
            <input
              type="text"
              id="name"
              required
              placeholder="Name"
              className={cn(
                inputBox(),
                `${errors.name ? errorField() : focusField()}`
              )}
              {...register('name', {
                required: 'Name is required',
                maxLength: 80,
              })}
            />
            {errors.name && (
              <div className={inputError()}>
                {errors.name.message as string}
              </div>
            )}

            <input
              type="email"
              id="email"
              placeholder="Email address"
              required
              className={cn(
                inputBox(),
                `${errors.email ? errorField() : focusField()}`
              )}
              {...register('email', {
                required: 'Enter your email',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Please enter a valid email',
                },
              })}
            />
            {errors.email && (
              <div className={inputError()}>
                {errors.email.message as string}
              </div>
            )}
            <input
              type="text"
              id="phone"
              placeholder="Phone number"
              {...register('phone')}
              className={cn(
                inputBox(),
                ` ${errors.phone ? errorField() : focusField()}`
              )}
            />
            {errors.phone && (
              <span className={inputError()}>
                {errors.phone.message as string}
              </span>
            )}
            <textarea
              cols={1}
              rows={6}
              required
              id="message"
              placeholder="Message"
              className={cn(
                inputBox(),
                `${errors.message ? errorField() : focusField()}`
              )}
              {...register('message', {
                required: 'Enter your Message',
              })}
            />
            {errors.message && (
              <div className={inputError()}>
                {errors.message.message as string}
              </div>
            )}
            <div className="flex justify-end mt-6">
              {isSubmitSuccessful && isSuccess && (
                <div className={cn(submitMessage(), 'text-green-500')}>
                  {message || 'Success. Message sent successfully'}
                </div>
              )}
              {isSubmitSuccessful && !isSuccess && (
                <div className={cn(submitMessage(), 'text-red-400')}>
                  {message || 'Something went wrong. Please try later.'}
                </div>
              )}
              <button
                type="submit"
                className="flex gap-2 text-lg font-semibold text-slate-900 capitalize py-4 px-8 bg-yellow-600 rounded-full "
              >
                {isSubmitting ? (
                  <svg
                    className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  'Send'
                )}
                <SendHorizonal className="mt-[4px]" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
