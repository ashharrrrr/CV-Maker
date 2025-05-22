import React, { useState } from 'react';
import { Trash } from "lucide-react";

export default function EducationsForm({
    handleEducationChange,
    handleDisplayContentSections,
    currentEditingEducation,
    setEducations
}) {
    const [showValidation, setShowValidation] = useState(false);
    const [formData, setFormData] = useState({
        degree: currentEditingEducation?.degree || '',
    });

    function handleChange(e) {
        const { key } = e.target.dataset;
        setFormData(prev => ({ ...prev, [key]: e.target.value }));
        handleEducationChange(e);
    }

    function handleDelete(e) {
        e.preventDefault();
        if (currentEditingEducation) {
            setEducations(prevEducations =>
                prevEducations.filter(edu => edu.degree !== currentEditingEducation.degree)
            );
        } else {
            // For new education, remove the last item in the array
            setEducations(prevEducations => prevEducations.slice(0, -1));
        }
        handleDisplayContentSections(e);
    }

    function handleSave(e) {
        e.preventDefault();
        if (!formData.degree) {
            setShowValidation(true);
            return;
        }
        if (currentEditingEducation) {
            setEducations(prevEducations => prevEducations.map(edu =>
                edu.degree === currentEditingEducation.degree ? { ...edu, ...currentEditingEducation } : edu
            ));
        }
        handleDisplayContentSections(e);
    }

    return (
        <div className="flex flex-col space-y-5">
            <form className="bg-white w-full h-auto rounded-2xl shadow-md space-y-6 p-8 flex flex-col">
                <h1 className="font-bold text-3xl md:text-4xl">{currentEditingEducation ? 'Edit Education' : 'Create Education'}</h1>
                <div className="flex flex-col">
                    <label
                        htmlFor="degree"
                        className="text-medium font-bold text-gray-700 p-1">
                        Degree
                        <span className="px-1 font-semibold text-red-400">*</span>
                    </label>
                    <input
                        type="text"
                        className={`mt-1 p-2 bg-gray-100 border-0 rounded-lg focus:outline-none ${showValidation && !formData.degree ? 'border-2 border-red-400' : ''}`}
                        id="degree"
                        placeholder="Enter Degree"
                        data-key="degree"
                        onChange={handleChange}
                        value={formData.degree}
                        required
                    />
                    {showValidation && !formData.degree && (
                        <span className="text-red-400 text-sm mt-1">Degree is required</span>
                    )}
                </div>
                <div className="flex flex-col">
                    <label
                        className="text-medium font-bold text-gray-700 p-1"
                        htmlFor="schoolName">
                        School Name
                        <span className="px-2 font-semibold text-gray-400">optional</span>
                    </label>
                    <input
                        type="text"
                        className="mt-1 p-2 bg-gray-100 border-0 rounded-lg focus:outline-none"
                        id="schoolName"
                        placeholder="Enter School Name"
                        data-key="schoolName"
                        onChange={handleEducationChange}
                        defaultValue={currentEditingEducation?.schoolName || ''}
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
                        onChange={handleEducationChange}
                        defaultValue={currentEditingEducation?.location || ''}
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
                            onChange={handleEducationChange}
                            defaultValue={currentEditingEducation?.startDate || ''}
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
                            onChange={handleEducationChange}
                            defaultValue={currentEditingEducation?.endDate || ''}
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
