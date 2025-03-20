import React from 'react';
import type { ResumeData } from '../types';

export default function ClassicTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="max-w-[800px] mx-auto bg-white p-8 shadow-lg">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold uppercase tracking-wider mb-4">{data.personalInfo.name}</h1>
        <div className="text-gray-600">
          <p>{data.personalInfo.email} | {data.personalInfo.phone}</p>
          <p>{data.personalInfo.location}</p>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-bold uppercase border-b-2 border-gray-300 mb-4">Professional Summary</h2>
        <p className="text-gray-700">{data.personalInfo.summary}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold uppercase border-b-2 border-gray-300 mb-4">Professional Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-2">
              <h3 className="font-bold">{exp.company}</h3>
              <span className="text-gray-600">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <p className="font-semibold italic mb-2">{exp.position}</p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold uppercase border-b-2 border-gray-300 mb-4">Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between">
              <h3 className="font-bold">{edu.school}</h3>
              <span className="text-gray-600">{edu.graduationYear}</span>
            </div>
            <p className="text-gray-700">
              {edu.degree} in {edu.fieldOfStudy}
            </p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-bold uppercase border-b-2 border-gray-300 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {data.skills.map((skill, index) => (
            <span key={index} className="text-gray-700">
              • {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}