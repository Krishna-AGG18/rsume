import React from 'react';
import type { ResumeData } from '../types';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ModernTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="max-w-[800px] mx-auto bg-white p-8 shadow-lg">
      <header className="border-b-2 border-gray-300 pb-6 mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{data.personalInfo.name}</h1>
        <div className="flex flex-wrap gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            {data.personalInfo.email}
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            {data.personalInfo.phone}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {data.personalInfo.location}
          </div>
        </div>
        <p className="mt-4 text-gray-700">{data.personalInfo.summary}</p>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl font-medium text-gray-800">{exp.position}</h3>
              <span className="text-gray-600 text-sm">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <p className="text-gray-700 font-medium">{exp.company}</p>
            <p className="mt-2 text-gray-600">{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl font-medium text-gray-800">{edu.school}</h3>
              <span className="text-gray-600 text-sm">{edu.graduationYear}</span>
            </div>
            <p className="text-gray-700">
              {edu.degree} in {edu.fieldOfStudy}
            </p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}