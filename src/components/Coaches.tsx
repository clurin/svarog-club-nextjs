import { getCoaches } from '@/utils/getCoaches'
import CoachesClient from './CoachesClient'
import { Coach } from '@/models/Models'

export default async function Coaches() {
  const coaches: Coach[] = await getCoaches()
  return <CoachesClient coaches={coaches} />
}
