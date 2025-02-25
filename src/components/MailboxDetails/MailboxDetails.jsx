import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { id } = useParams();
  const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(id));

  if (!selectedBox) {
    return <h1>Mailbox Not Found!</h1>;
  }

  return (
    <div>
      <h1>Mailbox Details</h1>
      <p>Box Number: {selectedBox._id}</p>
      <p>Box Owner: {selectedBox.boxOwner}</p>
      <p>Box Size: {selectedBox.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;
