import { api } from "../../../api/axiosConfig"
import { allTickets } from "./TicketSlice";

export const getAllTickets = () =>{
    return async function (dispatch){
        try {
            const {data} = await api.get('/tickets/allTickets');
            console.log('responsable :>> ', data);
            dispatch(allTickets({tickets:data}))
        } catch (error) {
            
        }
    }
}