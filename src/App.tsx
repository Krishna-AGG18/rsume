import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import html2canvas from 'html2canvas';
import ResumeForm from './components/ResumeForm';
import ModernTemplate from './components/ModernTemplate';
import ClassicTemplate from './components/ClassicTemplate';
import type { ResumeData, TemplateType } from './types';
import { Download, Moon } from 'lucide-react';

function App() {
  const [step, setStep] = useState<'form' | 'preview'>('form');
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [template, setTemplate] = useState<TemplateType>('modern');
  const componentRef = useRef<HTMLDivElement>(null);

  const handleFormSubmit = (data: ResumeData) => {
    setResumeData(data);
    setStep('preview');
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleDownloadPNG = async () => {
    if (componentRef.current) {
      const canvas = await html2canvas(componentRef.current);
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'resume.png';
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-gradient">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Moon className="w-8 h-8 text-blue-400" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Resume Builder
            </h1>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Create a professional resume in minutes with our easy-to-use builder.
            Choose from modern or classic templates and export to PDF or PNG.
          </p>
        </header>

        {step === 'form' ? (
          <div className="max-w-4xl mx-auto">
            <ResumeForm onSubmit={handleFormSubmit} />
          </div>
        ) : (
          <div className="container mx-auto py-8">
            <div className="max-w-[800px] mx-auto mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                <div className="flex gap-4">
                  <button
                    onClick={() => setTemplate('modern')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      template === 'modern'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    Modern Template
                  </button>
                  <button
                    onClick={() => setTemplate('classic')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      template === 'classic'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    Classic Template
                  </button>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={handlePrint}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                  <button
                    onClick={handleDownloadPNG}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download PNG
                  </button>
                  <button
                    onClick={() => setStep('form')}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div ref={componentRef} className="bg-white rounded-lg shadow-2xl">
              {resumeData && template === 'modern' && <ModernTemplate data={resumeData} />}
              {resumeData && template === 'classic' && <ClassicTemplate data={resumeData} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;