export const incubatorStudy: bgDescription = {
  name: 'School "IT-INCUBATOR"',
  startYear: 2022,
  endYear: 2023,
  title: 'Front-end Developer',
  description:
    'During the training I gained knowledge of JavaScript, TypeScript. \n' +
    'Gained experience creating SPA with React under Redux, ReduxToolkit. This knowledge has been applied both on their own projects and in teamwork.\n' +
    'Discovered a lot of new knowledge and opportunities.',
}

export const instituteStudy: bgDescription = {
  name: 'Interregional Personnel Management Academy',
  startYear: 2006,
  endYear: 2012,
  title: 'Business Economics and Human Resource Management',
  description:
    'I graduated from the Interregional Academy of Personnel Management with a degree in Human Resources Management and Business Economics.\n' +
    'During my studies I acquired skills in communication and interaction with people, which I applied in practice, working in various spheres of activity.',
}

export const educationExp: bgDescription = {
  name: 'study in "IT-INCUBATOR"',
  startYear: 2022,
  endYear: 2023,
  title: 'IT student',
  description:
    'During the training I acquired knowledge about the React library and put it into practice by creating my own projects.\n' +
    'Learned the basic principles of OOP programming, understood the principles of SOLID, TDD, FLUX, KISS and applied them in practice.\n' +
    'Also learned how to work with the state managers Redux and ReduxToolkit, asynchronous operations and interaction with the server through RestAPI. \n' +
    'Throughout the training I developed my own skills of communication and interaction with other students.',
}

export const partTimeExp: bgDescription = {
  name: 'part-time work',
  startYear: 2022,
  endYear: 'Present',
  title: 'Part-time work as Front-end Developer',
  description:
    'Developed part of a CRM for a trucking company, created a table with different sorting parameters, worked with queries to the server using RestAPI and Axios.' +
    ' I implemented error handling for asynchronous operations.' +
    ' Created a module for confirming actions by sending a confirmation email and a private message. ' +
    'Participated in project optimization and bug fixing.',
}
export const html: skillObjType = {
  width: 90,
}
export const css: skillObjType = {
  width: 92,
}
export const javaScript: skillObjType = {
  width: 85,
}
export const react: skillObjType = {
  width: 91,
}
export const redux: skillObjType = {
  width: 92,
}
export const typescript: skillObjType = {
  width: 89,
}

export type skillObjType = {
  width: number
}

export type bgDescription = {
  name: string
  startYear: number
  endYear: number | string
  title: string
  description: string
}
