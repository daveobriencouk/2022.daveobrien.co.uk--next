const EDUCATION_COLUMNS = [
  {
    column: 'Years',
    isSmHidden: false,
  },
  {
    column: 'Institution',
    isSmHidden: false,
  },
  {
    column: 'Qualification',
    isSmHidden: true,
  },
  {
    column: 'Grade',
    isSmHidden: true,
  },
]

const EDUCATION_ROWS = [
  {
    years: '1997-1999',
    institution: 'Collingwood 6th Form',
    qualification: 'GNVQ Art & Design',
    grade: 'Distinction',
  },
  {
    years: '1993-1997',
    institution: 'Collingwood College',
    qualification: '10 GCSEs',
    grade: 'A-C',
  },
]

export function getEducation() {
  return {
    columns: EDUCATION_COLUMNS,
    rows: EDUCATION_ROWS,
  }
}
