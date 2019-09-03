import moment, { Moment } from 'moment'

interface Experience {
  title: string
  company: string
  dateRange: Moment[]
  desc: string[]
}

const timelines: Experience[] = [
  {
    title: 'Software Engineer',
    company: '@StartUp in Stealth Mode',
    dateRange: [moment('2017-11'), moment()],
    desc: [
      '- Company partner with airlines to solve complex problems',
      '- Frontend team lead to initiate multiple projects from scratch to production',
      '- Oversees project difficulties and build tools to enhance the development experiences across all teams',
      '- Products focus on providing flight scheduling solutions for airline and customer relationships'
    ]
  },
  {
    title: 'Software Engineer',
    company: '@Informatica',
    dateRange: [moment('2017-04'), moment('2017-11')],
    desc: [
      '- Full time frontend developer',
      '- Innovated & produced new interactive, responsive, highly customizable UI for all MDM products with React stacks.'
    ]
  },
  {
    title: 'Internship',
    company: '@Informatica',
    dateRange: [moment('2015-08'), moment('2016-09')],
    desc: [
      '- Year-long professional experience program',
      '- Master data management production bug fix and integrations',
      '- Participated in release team to work through the MDM v10.2 release.'
    ]
  }
]

export default timelines
