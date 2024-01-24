import {
    Form,
    useLoaderData,
    redirect,
} from "react-router-dom"
import { useSelector } from "react-redux";

import Modal from "../components/Modal";
import useModal from "../customHooks/useModal";

import imgIcon from "../assets/imgIcon.png"
import Header from "../components/Header";

// spinner should work test it out when apis are made
export async function loader({ params }) {
    // make api call to get tickets here they com,e filtered show only
    // const ticket = await getTicket(params.ticketId);
    console.log(params.requestId);
    const request =
    {
        id: '1',
        category: 'garbage',
        location: 'RAK',
        issueDate: '18/12/2023',
        status: "opened",
        Attachments: ["https://www.epicnonsense.com/wp-content/uploads/2013/05/d153805f768c94a3006d630caab0e178.jpg", "https://www.pio.gov.cy/coronavirus/uploads/Lorem_ipsum.pdf", "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"],
        // add data here for tickets
    }
    if (!request) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }

    return { request };
}


// maybe use fetcher form to implement optimistic rendering
export async function action({ request, }) {
    // call endpoint to change status rediret to same page
    const data = Object.fromEntries(await request.formData());


    // return updateContact(params.contactId, {
    //     favorite: formData.get("favorite") === "true",
    // });
    console.log(data);
    console.log("trust me I submited");
    // return redirect(`/tickets/${ticket.id}`);
    return redirect(`/requests/${data.id}`);
}


export default function Request() {
    const { request } = useLoaderData();
    const { isShowing, toggle, fileInfo, setInfo } = useModal();
    const isDarkmode = useSelector((state) => state.darkmode.value);
    const className = isDarkmode ? "dark--primary light--gray" : "";

    let keys = [];
    for (let key in request) {
        keys.push(key);
    }
    const info = keys.map((key) => {
        if (key != 'id' && key != 'Attachments') {
            return (
                <span className={className} key={key}>{key}: {request[key]}</span>
            );
        }
    });

    // this should be dynamic right? maybe I get the statuses from an api call?
    // maybe use fetcherform


    const Attachments = request.hasOwnProperty('Attachments') ? request['Attachments'].map((a) => {

        const fileName = a.split("/").at(-1);
        const type = fileName.split('.')[1] ? fileName.split('.')[1] : fileName.split(';')[0];
        return (
            // <a href={a} key={a} target={`attachment${a}`}>
            <div key={a}
            >
                <div
                    className="attachment"
                    onClick={() => {
                        setInfo(type, a);
                        toggle();
                    }}
                >
                    <img src={imgIcon} alt="documentIcon" />
                    <span>{type}</span>


                </div>


            </div>



        );
    }) : null;


    return (
        <>
            <Modal isShowing={isShowing} hide={toggle} fileInfo={fileInfo} />

            <Header name={request.id} allowSearch={false} />


            {/* make this a component */}
            <div className={`display--elements ${className}`}>
                {/* map to tickets here with a component  */}
                <div className="ticket--info">
                    {info}
                    {
                        request.hasOwnProperty("Attachments") &&
                        <>
                            <span className={className}>Attachments:</span>
                            <div className="attachments--holder">
                                {Attachments}
                            </div>

                        </>

                    }
                </div>
                {
                    /* form or add a function and it goes to the action redirect? */
                    /* tbh i dont want to add a form cause a form will mean i gotta add action then intent*/
                    /* so lets tru onclick functions for now okie?*/
                    request.status === "opened" &&
                    <div className="buttons--holder">

                        <Form method="post">
                            <input type="text" hidden name="handle" value="reject" readOnly></input>
                            <input type="text" hidden readOnly value={request.id} name="id"></input>

                            <button className="button">Reject</button>
                        </Form>
                        <button className="button"
                            onClick={
                                () => {
                                    setInfo("Accept", request.id);
                                    toggle();
                                }
                            }
                        >Accept</button>
                    </div>

                }

            </div>




        </>
    );
}