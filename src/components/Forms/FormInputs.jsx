import MiniForm from "./MiniForm";
import { PlusIcon } from "lucide-react";

export default function FormInputs({
  field,
  setPersonalInformationInputs,
  onOptionalInfoChange,
  optionalInfo,
  setOptionalInfo,
}) {
  return (
    <div className={`w-full ${field.isVisible ? "mb-4" : "inline-block"}`}>
      {!field.isVisible && (
        <button
          className="hover:bg-gray-200 cursor-pointer flex items-center gap-0.5 px-2 py-1 bg-gray-100 rounded-lg"
          type="button"
          onClick={() =>
            setPersonalInformationInputs((prev) =>
              prev.map((item) =>
                item.id === field.id ? { ...item, isVisible: true } : item
              )
            )
          }>
          <PlusIcon />
          <p>{field.label}</p>
        </button>
      )}
      {field.isVisible && (
        <div className="w-full">
          <MiniForm
            setPersonalInformationInputs={setPersonalInformationInputs}
            id={field.id}
            label={field.label}
            field={field}
            onOptionalInfoChange={onOptionalInfoChange}
            optionalInfo={optionalInfo}
            setOptionalInfo={setOptionalInfo}
          />
        </div>
      )}
    </div>
  );
}
