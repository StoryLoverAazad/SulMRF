//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { MdContentCopy } from "react-icons/md";
import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Alert, InputGroup } from "react-bootstrap";
import BookDataService from "../services/bookservices";

  const AddBook = ({ id, setBookId }) => {
    const [isCopied, setIsCopied] = useState(false);

    const codeSnippet = `
  UPI NUMBER
  `;

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    //const [status, setStatus] = useState("Available");
    //const [flag, setFlag] = useState(true);
    const [message, setMessage] = useState({ error: false, msg: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        if (title === "" || author === "") {
          setMessage({ error: true, msg: "All fields are mandatory!" });
          return;
        }
        const newBook = {
          title,
          author,
        };
        console.log(newBook);
    
        try {
          if (id !== undefined && id !== "") {
            await BookDataService.updateBook(id, newBook);
            setBookId("");
            setMessage({ error: false, msg: "Updated successfully!" });
          } else {
            await BookDataService.addBooks(newBook);
            setMessage({ error: false, msg: "UTR Number Added successfully!" });
          }
        } catch (err) {
          setMessage({ error: true, msg: err.message });
        }
    
        setTitle("");
        setAuthor("");
      };
    
      const editHandler = async () => {
        setMessage("");
        try {
          const docSnap = await BookDataService.getBook(id);
          console.log("the record is :", docSnap.data());
          setTitle(docSnap.data().title);
          setAuthor(docSnap.data().author);
          //setStatus(docSnap.data().status);
        } catch (err) {
          setMessage({ error: true, msg: err.message });
        }
      };
    
      useEffect(() => {
        console.log("The id here is : ", id);
        if (id !== undefined && id !== "") {
          editHandler();
        }
      }, [id]);

  return (
    <>
          <pre>{codeSnippet}</pre>
          <CopyToClipboard text={codeSnippet} onCopy={onCopyText}>
            <span>{isCopied ? "Copied!" : <MdContentCopy />}</span>
          </CopyToClipboard>

          <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">M</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter Your Mobile Number"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor">U/R</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="UTR(UPI Ref. ID) must be 12 digits"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          {/* <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Available");
                setFlag(false);
              }}
            >
              Not Available
            </Button>
          </ButtonGroup> */}
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Submit UTR
            </Button>
          </div>
        </Form>
      </div>

    </>
    );
}

export default AddBook;
