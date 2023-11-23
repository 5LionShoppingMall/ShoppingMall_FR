<<<<<<< HEAD
import { authSocialBtnType } from '@/constants/auth';

export default function SocialLoginBtn({ socialType }) {
  const type = authSocialBtnType[socialType];

  return (
    <button
      className={`pt-4 pr-5 pb-4 pl-5 text-center w-full text-white p-3 duration-300 rounded-lg ${type?.color}`}
    >
      {type.title}
    </button>
  );
=======
/** @format */

import { authSocialBtnType } from '@/constants/auth'

export default function SocialLoginBtn({ socialType }) {
  const type = authSocialBtnType[socialType]

  return (
    <button
      className={`flex items-center justify-center pt-4 pr-5 pb-4 pl-5 text-center w-full text-black p-3 duration-300 rounded-lg ${type?.color}`}>
      {type.Icon()}
      <span className='ml-2'>{type.title}</span>
    </button>
  )
>>>>>>> c3f9e88c791dc7f7ac46d771d35d2a6626456c8c
}
