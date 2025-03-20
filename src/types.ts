export interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  education: {
    school: string;
    degree: string;
    fieldOfStudy: string;
    graduationYear: string;
  }[];
  experience: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  skills: string[];
}

export type TemplateType = 'modern' | 'classic';