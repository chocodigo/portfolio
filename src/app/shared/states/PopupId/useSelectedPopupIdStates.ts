import { usePopupIdStore } from "./states"

export const useSelectedPoupIdStates = () =>{
    const selectedPopupId = usePopupIdStore(state=>state.selectedPopupId)
const updateSelectedPopupId = usePopupIdStore(state=> state.updateSelectedPopupId);
const notionId = usePopupIdStore(state=>state.notionId);
const updateNotionId= usePopupIdStore(state=>state.updateNotionId)


return{
    selectedPopupId,
updateSelectedPopupId,
notionId,
updateNotionId
}