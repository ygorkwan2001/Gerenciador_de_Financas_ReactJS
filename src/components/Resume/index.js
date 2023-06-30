import React from 'react'
import * as Y from './styles'
import ResumeItem from '../ResumeItem';
import{
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
}   from "react-icons/fa";

const Resume = ({income,expense,total}) => {
    return (
        <Y.Container>
            <ResumeItem title= "Entradas" Icon={FaRegArrowAltCircleUp} value={income}/>
            <ResumeItem title= "Saida" Icon={FaRegArrowAltCircleDown} value={expense}/>
            <ResumeItem title= "Total" Icon={FaDollarSign} value={total}/>
        </Y.Container>
    );
};

export default Resume;