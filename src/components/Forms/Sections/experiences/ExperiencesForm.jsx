import React, { useState } from 'react';
import { Trash } from "lucide-react";

export default function ExperiencesForm({
  handleExperienceChange,
  handleDisplayContentSections,
  currentEditingExperience,
  setExperiences
}) {
  const [showValidation, setShowValidation] = useState(false);
  const [formData, setFormData] = useState({
    companyName: currentEditingExperience?.companyName || '',
  });

  function handleChange(e) {
    const { key } = e.target.dataset;
    setFormData(prev => ({ ...prev, [key]: e.target.value }));
    handleExperienceChange(e);
  }

  function handleDelete(e) {
    e.preventDefault();
    if (currentEditingExperience) {
      setExperiences(prevExperiences =>
        prevExperiences.filter(exp => exp.companyName !== currentEditingExperience.companyName)
      );
    } else {
      // For new experience, remove the last item in the array
      setExperiences(prevExperiences => prevExperiences.slice(0, -1));
    }
    handleDisplayContentSections(e);
  }

  function handleSave(e) {
    e.preventDefault();
    if (!formData.companyName) {
      setShowValidation(true);
      return;
    }
    if (currentEditingExperience) {
      setExperiences(prevExperiences => prevExperiences.map(exp =>
        exp.companyName === currentEditingExperience.companyName ? { ...exp, ...currentEditingExperience } : exp
      ));
    }
    handleDisplayContentSections(e);
  }

  return (
    <div className="flex flex-col space-y-5">
      <form className="bg-white w-full h-auto rounded-2xl shadow-md space-y-6 p-8 flex flex-col">
        <h1 className="font-bold text-3xl md:text-4xl">{currentEditingExperience ? 'Edit Experience' : 'Create Experience'}</h1>
        <div className="flex flex-col">
          <label
            htmlFor="companyName"
            className="text-medium font-bold text-gray-700 p-1">
            Company Name
            <span className="px-1 font-semibold text-red-400">*</span>
          </label>
          <input
            type="text"
            className={`mt-1 p-2 bg-gray-100 border-0 rounded-lg focus:outline-none ${showValidation && !formData.companyName ? 'border-2 border-red-400' : ''}`}
            id="companyName"
            placeholder="Enter Company Name"
            data-key="companyName"
            onChange={handleChange}
            value={formData.companyName}
            required
          />
          {showValidation && !formData.companyName && (
            <span className="text-red-400 text-sm mt-1">Company Name is required</span>
          )}
        </div>
        <div className="flex flex-col">
          <label
            className="text-medium font-bold text-gray-700 p-1"
            htmlFor="positionTitle">
            Position Title
            <span className="px-2 font-semibold text-gray-400">optional</span>
          </label>
          <input
            type="text"
            className="mt-1 p-2 bg-gray-100 border-0 rounded-lg focus:outline-none"
            id="positionTitle"
            placeholder="Enter Position Title"
            data-key="positionTitle"
            onChange={handleExperienceChange}
            defaultValue={currentEditingExperience?.positionTitle || ''}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-medium font-bold text-gray-700 p-1"
            htmlFor="location">
            Location
            <span className="px-2 font-semibold text-gray-400">optional</span>
          </label>
          <input
            type="text"
            className="mt-1 p-2 bg-gray-100 border-0 rounded-lg focus:outline-none"
            id="location"
            placeholder="Enter Location"
            data-key="location"
            onChange={handleExperienceChange}
            defaultValue={currentEditingExperience?.location || ''}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-medium font-bold text-gray-700 p-1"
            htmlFor="description">
            Description
            <span className="px-2 font-semibold text-gray-400">optional</span>
          </label>
          <textarea
            className="mt-1 p-2 bg-gray-100 border-0 rounded-lg focus:outline-none"
            id="description"
            placeholder="Enter Description"
            data-key="description"
            onChange={handleExperienceChange}
            defaultValue={currentEditingExperience?.description || ''}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6">
          <div className="flex flex-col">
            <label
              className="text-medium font-bold text-gray-700 p-1"
              htmlFor="startDate">
              Start Date
              <span className="px-2 font-semibold text-gray-400">optional</span>
            </label>
            <input
              type="text"
              className="mt-1 p-2 bg-gray-100 border-0 rounded-lg focus:outline-none"
              id="startDate"
              placeholder="Enter Start Date"
              data-key="startDate"
              onChange={handleExperienceChange}
              defaultValue={currentEditingExperience?.startDate || ''}
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-medium font-bold text-gray-700 p-1"
              htmlFor="endDate">
              End Date
              <span className="px-2 font-semibold text-gray-400">optional</span>
            </label>
            <input
              type="text"
              className="mt-1 p-2 bg-gray-100 border-0 rounded-lg focus:outline-none"
              id="endDate"
              placeholder="Enter End Date"
              data-key="endDate"
              onChange={handleExperienceChange}
              defaultValue={currentEditingExperience?.endDate || ''}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-4 mt-6">
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 py-2 px-4 text-gray-600 hover:text-gray-900 text-base font-medium">
            <Trash size={20} /> Delete
          </button>
          <button
            onClick={handleSave}
            className="bg-[#E91E63] text-white px-8 py-2 rounded-full text-base font-medium hover:bg-[#D81B60]">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
