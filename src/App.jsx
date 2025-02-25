import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import MailboxForm from "./components/MailboxForm/MailboxForm.jsx";
import Mailboxes from "./components/MailboxList/MailboxList.jsx";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import "./App.css";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newBox) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      ...newBox,
    };
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes"
          element={<Mailboxes mailboxes={mailboxes} />}
        />
        <Route
          path="/mailboxes/:id"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
