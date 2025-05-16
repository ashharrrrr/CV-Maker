

export default function MiniForm({ id, label, setPersonalInformationInputs, setOptionalInfo, field, onOptionalInfoChange, optionalInfo }){

    function onDelete(){
      setPersonalInformationInputs((prev)=> prev.map((item)=>item.id===id ? {...item, isVisible: false}:item));
      setOptionalInfo({...optionalInfo, [id]:""})
    }
    
    return(
    <div key={id} className="flex flex-col">
          <div className="flex justify-between items-center">
            <label htmlFor={id} className="text-sm font-medium text-gray-700">
              {label}
            </label>
            <button type="button" className="text-gray-400 hover:text-red-500 cursor-pointer" onClick={onDelete} >
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-gray-700 hover:text-red-500">
                    <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862
                    a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4
                    a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>

            </button>
          </div>
          <input
            type="text"
            id={id}
            className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            onChange={onOptionalInfoChange}
            data-key={id}
          />
        </div>)
}