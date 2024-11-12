import { usePopupIdStore } from "./states"

export const useSelectedPoupIdStates = () =>{
    const selectedPopupId = usePopupIdStore(state=>state.selectedPopupId)
const updateSelectedPopupId = usePopupIdStore(state=> state.updateSelectedPopupId);

return{
    selectedPopupId,
updateSelectedPopupId
}