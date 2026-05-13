export type MedicationStatus = 'taken' | 'no-response' | 'not-taken' | 'scheduled'
export type SymptomLevel = 'ok' | 'warning' | 'critical'
export type OnboardingStatus = 'pending' | 'active' | 'review'
export type EscalationStatus = 'pending' | 'approved' | 'overridden'
export type ConsultationStatus = 'pending' | 'sent' | 'escalated'

export interface Medication {
  name: string
  dose: string
  unit: string
  scheduledAt: string
  status: MedicationStatus
  respondedAt?: string
  response?: 'YES' | 'NO'
}

export interface Patient {
  id: string
  initials: string
  name: string
  diagnosis: string
  caregiver: string
  medications: Medication[]
  onboardingStatus: OnboardingStatus
}

export interface SymptomReport {
  patientId: string
  date: string
  overallScore: number
  level: SymptomLevel
  responses: { question: string; score: number }[]
}

export interface Escalation {
  id: string
  patientId: string
  triggeredAt: string
  reason: string
  aiDraft: string
  status: EscalationStatus
}

export interface Consultation {
  id: string
  patientId: string
  message: string
  receivedAt: string
  aiResponse: string
  status: ConsultationStatus
}

export const patients: Patient[] = [
  {
    id: 'p1', initials: 'CM', name: 'Carlos Mendoza', diagnosis: 'Type 2 Diabetes',
    caregiver: 'Mariana Mendoza', onboardingStatus: 'active',
    medications: [
      { name: 'Metformin 500mg', dose: '1', unit: 'tablet', scheduledAt: '14:00',
        status: 'taken', respondedAt: '14:03', response: 'YES' },
    ],
  },
  {
    id: 'p2', initials: 'MC', name: 'Mary Castillo', diagnosis: 'Breast cancer · post-op',
    caregiver: 'Luis Castillo', onboardingStatus: 'active',
    medications: [
      { name: 'Ondansetron 8mg', dose: '1', unit: 'tablet', scheduledAt: '08:00',
        status: 'taken', respondedAt: '08:05', response: 'YES' },
    ],
  },
  {
    id: 'p3', initials: 'RP', name: 'Rose Paredes', diagnosis: 'Colorectal cancer',
    caregiver: 'Carmen Paredes', onboardingStatus: 'active',
    medications: [
      { name: 'Dexamethasone 4mg', dose: '1', unit: 'tablet', scheduledAt: '10:00',
        status: 'no-response' },
    ],
  },
  {
    id: 'p4', initials: 'JT', name: 'Jorge Torres', diagnosis: 'Lymphoma · active chemo',
    caregiver: 'Sofia Torres', onboardingStatus: 'active',
    medications: [
      { name: 'Tramadol 50mg', dose: '1', unit: 'capsule', scheduledAt: '08:00',
        status: 'not-taken', respondedAt: '08:12', response: 'NO' },
    ],
  },
  {
    id: 'p5', initials: 'PV', name: 'Patricia Vargas', diagnosis: 'Type 2 Diabetes',
    caregiver: 'Miguel Vargas', onboardingStatus: 'active',
    medications: [
      { name: 'Insulin glargine', dose: '20', unit: 'IU', scheduledAt: '22:00',
        status: 'scheduled' },
    ],
  },
]

export const symptomReports: SymptomReport[] = [
  { patientId: 'p1', date: '2026-05-12', overallScore: 8, level: 'ok',
    responses: [{ question: 'Overall wellbeing?', score: 8 }, { question: 'Pain level?', score: 2 }] },
  { patientId: 'p2', date: '2026-05-12', overallScore: 5, level: 'warning',
    responses: [{ question: 'Overall wellbeing?', score: 5 }, { question: 'Nausea?', score: 6 }] },
  { patientId: 'p3', date: '2026-05-12', overallScore: 3, level: 'critical',
    responses: [{ question: 'Overall wellbeing?', score: 3 }, { question: 'Pain level?', score: 8 }] },
  { patientId: 'p4', date: '2026-05-12', overallScore: 4, level: 'warning',
    responses: [{ question: 'Overall wellbeing?', score: 4 }, { question: 'Pain level?', score: 7 }] },
]

export const escalations: Escalation[] = [
  {
    id: 'e1', patientId: 'p3', triggeredAt: '10:45',
    reason: 'Symptom score critically low (3/10) — pain level 8/10',
    aiDraft: "Hi Carmen, I wanted to flag that Rose's responses today indicate she may be experiencing significant pain and discomfort. We recommend contacting her care team at the earliest opportunity. I'm here if you have any questions.",
    status: 'pending',
  },
]

export const consultations: Consultation[] = [
  {
    id: 'c1', patientId: 'p2', receivedAt: '09:15', status: 'pending',
    message: 'Mary has been feeling very nauseous after the morning dose. Should we change the timing?',
    aiResponse: "Thank you for letting me know. Nausea after Ondansetron is not uncommon. A few things that may help: taking it with a small amount of food, or splitting the dose. I'll flag this for Dr. Ramirez to review.",
  },
  {
    id: 'c2', patientId: 'p4', receivedAt: '07:30', status: 'sent',
    message: 'Jorge said the pain is getting worse at night. Is this normal during chemo?',
    aiResponse: "I understand this is worrying. Increased pain during the night can occur during chemo cycles. Since Jorge reported not taking his Tramadol this morning, that may be contributing. I've alerted Dr. Ramirez.",
  },
]
