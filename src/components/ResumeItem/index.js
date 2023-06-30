import React from 'react'
import * as Y from "./styles";

const ResumeItem = ({title,Icon,value}) => {
  return (
    <Y.Container>
        <Y.Header>
            <Y.HeaderTitle>{title}</Y.HeaderTitle>
            <Icon/>
        </Y.Header>
        <Y.Total>{value}</Y.Total>
    </Y.Container>
  );
};

export default ResumeItem;