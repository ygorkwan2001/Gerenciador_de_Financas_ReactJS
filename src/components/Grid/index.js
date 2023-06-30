import React from 'react'
import GridItem from "../GridItem"
import * as Y from "./styles";

const Grid = ({ itens, setItens }) => {
    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id != ID);
        setItens(newArray);
        localStorage.setItem("transaction", JSON.stringify(newArray));
    }

    return (
        <Y.Table>
            <Y.Thead>
                <Y.Tr>
                    <Y.Th width={40}>Descrição</Y.Th>
                    <Y.Th width={40}>Valor</Y.Th>
                    <Y.Th width={10} alignCenter>Tipo</Y.Th>
                    <Y.Th width={10}></Y.Th>
                </Y.Tr>
            </Y.Thead>
            <Y.Tbody>
                {itens?.map((item, index) => (
                    <GridItem key= {index} item = {item} onDelete={onDelete} />
                ))}
            </Y.Tbody>
        </Y.Table>
    );
};

export default Grid;