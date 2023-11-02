import React from "react";
import { useParams } from "react-router-dom";
import { ExpositorDisplay } from "../components";

function ExpositorPage() {
    const { expositor_id } = useParams();
    return (
        <>
            <ExpositorDisplay expositor_id={expositor_id} />
        </>
    )
}

export default ExpositorPage;