import { Education, Certification, Language } from '@/types/about-me'

export const EducationData: Education[] = [
  {
    name: 'Anadolu University',
    degree: 'License',
    field: 'Management Information Systems',
    date: '2019',
  },
  {
    name: 'Elvankoy IMKB Vocational and Technical Anatolian High School',
    degree: '',
    field: 'Information Technologies',
    date: '2014 - 2018',
  },
]

export const CertificationData: Certification[] = [
  {
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Issued Nov 2022',
    credentialUrl:
      'https://freecodecamp.org/certification/emr3rden/responsive-web-design',
  },
  {
    name: 'CSS Certificate',
    issuer: 'HackerRank',
    date: 'Issued Nov 2022',
    credentialUrl: 'https://www.hackerrank.com/certificates/323554107c0e',
  },
  {
    name: 'Pre-Intermediate (A2, A2+) - ABC Languages Schools',
    issuer: 'ABC Okulları',
    date: 'Issued Jan 2022',
  },
  {
    name: 'Elementary (A1, A1+) - ABC Languages Schools',
    issuer: 'ABC Okulları',
    date: 'Issued Aug 2021',
  },
]

export const LanguageData: Language[] = [
  {
    name: 'English',
    proficiency: 'Limited working proficiency',
  },
  {
    name: 'Türkçe',
    proficiency: 'Native or bilingual proficiency',
  },
]
