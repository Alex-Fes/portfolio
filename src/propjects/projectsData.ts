import learningCardsImg from '../assets/image/learningCards.jpg'
import socialImage from '../assets/image/socialNetwork.jpg'
import todoImage from '../assets/image/todolist.jpg'

export const socialNetwork: styleObjType = {
  backgroundImage: `url(${socialImage})`,
  title: 'Social Network',
  url: 'https://alex-fes.github.io/samurayway/',
  description:
    'The social network project was developed over the course of training using React, Redux, TypeScript. \n' +
    'It used class components with lifecycle methods, as well as RestAPI and Axios to work with the server.\n' +
    'I also used Lazy Loading to optimize page loading.',
}
export const todolist: styleObjType = {
  backgroundImage: `url(${todoImage})`,
  title: 'Todolist',
  url: 'https://alex-fes.github.io/todoList/',
  description:
    'The project was created during the training period using React, ReduxToolkit, TypeScript.\n' +
    'To work with the state applied the technology ReduxToolkit and AsynchronousThunks. ' +
    'To work with CRUD operations I used RestAPI and Axios. Also used MaterialUI for UI elements and Formik for the authorization page.',
}

export const learningCards: styleObjType = {
  backgroundImage: `url(${learningCardsImg})`,
  title: 'Learning Cards',
  url: 'https://grigorydobrenko.github.io/learning-cards/',
  description:
    'The project was created in a team of three people using React, Redux, TypeScript.\n' +
    'The project used MaterialUI for the UI. For authorization and registration Formik was used. AntDesign was used to display tables and sort parameters. \n' +
    'Also modal windows were used to implement the functionality of the project.',
}

export type styleObjType = {
  backgroundImage: string
  title: string
  description: string
  url: string
}
