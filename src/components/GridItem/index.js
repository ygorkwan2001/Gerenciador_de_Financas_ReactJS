import styled from "styled-components"
import * as Y from "./styles";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash,
} from "react-icons/fa";

const GridItem = ({item , onDelete}) => {
    return(
        <Y.Tr>
            <Y.Td>
                {item.desc}
            </Y.Td>
            <Y.Td>
                {item.amount}
            </Y.Td>
            <Y.Td alignCenter>
                {item.expense ? (
                    <FaRegArrowAltCircleUp color="red" />
                ) : (
                    <FaRegArrowAltCircleDown color="green" />
                )}
            </Y.Td>
            <Y.Td alignCenter>
                <FaTrash onClick={() => onDelete(item.id)}/>
            </Y.Td>
        </Y.Tr>
    );
};

export default GridItem;