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
            <Avatar img="https://scontent.fsof11-1.fna.fbcdn.net/v/t39.30808-6/271661026_5383711081643789_5680859784590421635_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=oEj9HCWjIvsAX8iLR-V&_nc_ht=scontent.fsof11-1.fna&oh=00_AfBX0nipIAWG06gsT7FkPrUuHeQSCdTkzyHIfYX90r4nQQ&oe=63949287" />
            {contacts.map(createCard)}
        </div>
    );
}

export default App;
