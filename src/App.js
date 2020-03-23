import React from 'react';

import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import Control from "./components/Control";
import ListTasksTable from "./components/ListTasksTable";

function App() {
    let injectedPropsControl = {
    }

    return (
        <Container>
            <Header />
            <Control {...injectedPropsControl} />
            <ListTasksTable/>
        </Container>
    );
}

export default App;
