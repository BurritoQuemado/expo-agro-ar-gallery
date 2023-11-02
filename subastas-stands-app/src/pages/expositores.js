import React from 'react';
import { ExpositoresList } from '../components';
import ExpositoresInfo from '../utils/expositores';

function ExpositoresPage(){
    return (
        <>
            <ExpositoresList title="Expositores" expositores={ExpositoresInfo} />
        </>
    )
}

export default ExpositoresPage;