import { useSelector, useDispatch } from "react-redux"
import Shadow from "./Shadow"
import {addShadow, shadowSlice} from "../../features/shadows"

export default function ShadowList() {
  const dispatch = useDispatch()
  const shadows = useSelector(state => state.shadows)

  return (
    <div>
      <div className="flex justify-between p-6 border-b border-gray-300">
        <p className="font-bold text-lg">Customize Shadows</p>
        <button
        onClick={() => dispatch(addShadow())}
        className="py-1 px-3 text-sm rounded bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2  hover:bg-blue-700 text-white">Add a shadow</button>
      </div>
      <div>
        <ul>
          {shadows.map((shadow, index) =>
          <Shadow panelNumber={index + 1}
          shadow={shadow}
          key={shadow.id} /> )}
        </ul>
      </div>
    </div>
  )
}
