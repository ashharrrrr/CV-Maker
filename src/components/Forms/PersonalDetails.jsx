import { useState } from "react";
import FormInputs from "./FormInputs";

const initialPersonalDetails = {
  fullName: "",
  photo: "",
  jobTitle: "",
  email: "",
  phone: "",
  location: "",
  personalInformation: {
    dateOfBirth: "",
    passportOrId: "",
    gender: "",
    maritalStatus: "",
    nationality: "",
  },
  links: {
    website: "",
    linkedIn: "",
    github: "",
  },
};

export default function PersonalDetails() {
  const [personalInformationInputs, setPersonalInformationInputs] = useState([
    {
      id: "dateOfBirth",
      label: "Date Of Birth",
      isVisible: false,
    },
    {
      id: "nationality",
      label: "Nationality",
      isVisible: false,
    },
  ]);

  const [links, setLinks] = useState([
    {
      id: "website",
      label: "Website",
      isVisible: false,
    },
    {
      id: "github",
      label: "Github",
      isVisible: false,
    },
  ]);

  const [personalDetails, setPersonalDetails] = useState(
    initialPersonalDetails
  );
  return (
    <form className="personalDetails bg-white w-2xl h-[70vh] overflow-x-auto no-scrollbar p-8 rounded-2xl shadow-md space-y-8">
      <h1 className="font-bold text-4xl">Edit Personal Details</h1>
      <div className="nameAndImage flex flex-row justify-between gap-6 ">
        <div className="nameAndJob flex-1 space-y-4">
          <div className="name flex flex-col">
            <label
              htmlFor="fullName"
              className="text-sm font-bold text-gray-700 p-1">
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your title, first- and last name"
              className="mt-1 p-2 bg-gray-100 border-0 rounded-lg focus:outline-none "
              required
            />
          </div>
          <div className="job flex flex-col">
            <label
              htmlFor="jobTitle"
              className="text-sm font-bold text-gray-700 p-1">
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              placeholder="Enter Job title"
              className="mt-1 p-2 bg-gray-100 rounded-lg focus:outline-none"
            />
          </div>
        </div>
        <div className="photo w-32 h-32 relative">
          <label
            htmlFor="profilePhoto"
            className="
    group
    relative
    inline-block
    w-32 h-32
    cursor-pointer
  ">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-200">
              <img
                src="../../../previewpfp.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>

            <div
              className="
      absolute inset-0
      flex items-end justify-end p-2
      opacity-0 group-hover:opacity-100
      transition-opacity duration-200
      z-10
    ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-6 text-white bg-pink-500 rounded-full p-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 3.487a2.25 2.25 0 113.182 3.182L6.414 20.299a1.5 1.5 0 01-.913.538l-4.5.75a.75.75 0 01-.859-.859l.75-4.5a1.5 1.5 0 01.538-.913L16.862 3.487z"
                />
              </svg>
            </div>

            <input
              type="file"
              id="profilePhoto"
              className="sr-only"
              accept="image/png, image/jpeg"
            />
          </label>
        </div>
      </div>
      <div className="grid grid-rows-2 gap-6">
        <div className="grid md:grid-cols-2 gap-6 ">
          <div className="flex flex-col">
            <label htmlFor="emailId" className="text-sm p-1 font-bold">
              Email
            </label>
            <input
              type="email"
              id="emailId"
              placeholder="Enter email"
              className="mt-1 p-2 rounded-lg bg-gray-100 focus:outline-none"
            />
          </div>
          <div className="flex flex-col phone">
            <label htmlFor="phoneNumber" className="text-sm p-1 font-bold">
              Phone
            </label>
            <input
              type="number"
              id="phoneNumber"
              placeholder="Enter Phone"
              className="mt-1 p-2 rounded-lg bg-gray-100 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="location" className="text-sm p-1 font-bold">
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="City, Country"
            className="mt-1 p-2 rounded-lg bg-gray-100 focus:outline-none"
          />
        </div>
      </div>
      <section className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">
          Personal Information
        </h3>
        <div className="flex flex-wrap gap-2">
          {personalInformationInputs.map((field) => (
            <div
              key={field.id}
              className={`${
                field.isVisible ? "w-full" : "inline-block"
              } transition-all duration-300`}
            >
              <FormInputs
                field={field}
                setPersonalInformationInputs={setPersonalInformationInputs}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-2">
        <h3 className="text-2xl font-bold">Links</h3>
        <div className="flex gap-2 flex-wrap">
          {links.map((link) => (
            <div key={link.id}
              className={`${
                link.isVisible ? "w-full" : "inline-block"
              } transition-all duration-300`}
              >

            <FormInputs
              field={link}
              setPersonalInformationInputs={setLinks}
            />
            </div>
          ))}
        </div>
      </section>
    </form>
  );
}
