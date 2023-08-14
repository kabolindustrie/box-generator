import getBoxShadowValue from "../../../utils/getBoxShadowValue"
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function ModalResult({ closeModal }) {
  const shadowValues = useSelector(state => state.shadows)

  useEffect(() => {
    document.body.style.overflowY = "hidden"

    return () => document.body.style.overflowY = "auto"
  }, [])

  let runningAnimation = false
  function handleCopy(e) {
    if(!runningAnimation) {
      runningAnimation = true
      e.target.textContent = "Copied!"

      setTimeout(() => {
        e.target.textContent = "Copy"
        runningAnimation = false
      }, 2000)
    }

    navigator.clipboard.writeText(`Box-shadow : ${getBoxShadowValue(shadowValues)}`)
  }
  return (
    <div onClick={closeModal}>
      <div className="fixed z-10 inset-0 flex items-center justify-center bg-gray-600/75">
        <div
          onClick={(e) => e.stopPropagation()}
          className="max-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]"
        >
          <div
          className="flex items-end mb-5">
            <p className="font-semibold mr-5">Here is your code 🎉</p>
            <button
            onClick={handleCopy}
            className="ml-auto mr-2 text-sm bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 rounded">
              Copy
            </button>
            <button
              onClick={closeModal}
              className="text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded"
            >
              Close
            </button>
          </div>
          <div>
            <p className="rounded bg-gray-100 p-5">
              <span className="font-semibold">Box-shadow :</span>
              <span>{getBoxShadowValue(shadowValues)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
