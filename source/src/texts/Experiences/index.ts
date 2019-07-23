import moment, { Moment } from 'moment'

interface Experience {
  title: string
  company: string
  dateRange: Moment[]
  desc: string
}

const timelines: Experience[] = [
  {
    title: 'Software Engineer',
    company: '@StealthStartUp',
    dateRange: [moment('2017-11'), moment()],
    desc: `Full-time Frontend developer, led a couple of enterprise projects from scratch.
       Also act as part of platform team to enhance developer experiences when building new projects.`
  },
  {
    title: 'Software Engineer',
    company: '@Informatica',
    dateRange: [moment('2017-04'), moment('2017-11')],
    desc: `Returned as full-time frontend developer, 
        dedicated to design and implement highly customizable, 
        configurable, interactive UI with React stacks.
        Won the internal innovation award for projects participated`
  },
  {
    title: 'Internship',
    company: '@Informatica',
    dateRange: [moment('2015-08'), moment('2016-09')],
    desc: `PEY - Internship program, worked as part of agile team
       on backend side of Master Data Management(MDM) Products. 
      Performing debugging, integration, feature implementation tasks with agile development practices.
        `
  }
]

export default timelines
