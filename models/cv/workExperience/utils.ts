import dayjs from 'dayjs'
import kebabCase from 'lodash/kebabCase'

export function generateWorkExperienceId({ company, startDate }: { company: string; startDate: string }) {
  return company === 'Freelance' ? `freelance-${dayjs(startDate).format('YYYY')}` : kebabCase(company)
}
