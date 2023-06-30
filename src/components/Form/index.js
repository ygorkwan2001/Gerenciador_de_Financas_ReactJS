import React, { useState } from 'react'
import * as Y from "./styles";
import Grid from "../Grid";

const Form = ({handleAdd, transactionsList, setTransactionList}) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generatedID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a Descrição eo Valor")
            return;
        } else if (amount < 1) {
            alert("O Valor tem que ser positivo!")
            return;
        }

        const transaction = {
            id: generatedID(),
            desc: desc,
            amount: amount,
            expense: isExpense
        };

        handleAdd(transaction)

        setDesc("");
        setAmount("");
    };
    
    return (
        <>
            <Y.Container>
                <Y.InputContent>
                    <Y.Label>Descrição</Y.Label>
                    <Y.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </Y.InputContent>
                <Y.InputContent>
                    <Y.Label>Valor</Y.Label>
                    <Y.Input
                        value={amount}
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </Y.InputContent>
                <Y.RadioGroup>
                    <Y.Input
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                        onChange={() => setExpense(!isExpense)}
                    />
                    <Y.Label htmlFor="rIncome">Entrada</Y.Label>
                    <Y.Input
                        type="radio"
                        id="rExpenses"
                        name="group1"
                        onChange={() => setExpense(!isExpense)}
                    />
                    <Y.Label htmlFor="rExpenses">Saída</Y.Label>
                </Y.RadioGroup>
                <Y.Button style={{ display: 'block', margin: '0 auto' }} onClick={handleSave}>ADICIONAR</Y.Button>
            </Y.Container>
            <Grid itens={transactionsList} setItens={setTransactionList} />
        </>
    );
};

export default Form