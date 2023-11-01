import React from "react";
import { useParams, Link } from "react-router-dom";
import { PersonDisplay } from "../components";

function PersonPage() {
    const { person_id } = useParams();
    return (
        <>
            <PersonDisplay person_id={person_id} />
        </>
    )
}

export default PersonPage;