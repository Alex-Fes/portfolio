import axios, { AxiosResponse } from 'axios'

import { FeedbackValuesType } from '../emailForm/EmailForm'

export const sendMessage = {
  send(data: FeedbackValuesType) {
    return axios.post<'', AxiosResponse<any>, FeedbackValuesType>(
      'https://gmail-smtp-virid.vercel.app/sendMessage',
      data
    )
  },
}
