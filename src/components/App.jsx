import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";

import contacts from "../contacts";

function createCard(contact) {
    return (
        <Card
            key={contact.id}
            id={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
        />
    );
}
function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <Avatar img="https://media-exp1.licdn.com/dms/image/D4D03AQEUtH1XQkCLJg/profile-displayphoto-shrink_800_800/0/1664544635467?e=1675900800&v=beta&t=dzkUMfdzC6NvWTbrMe1A-GWmF88Rkol1HII5kqjZWUA" />
            {contacts.map(createCard)}
        </div>
    );
}

export default App;
