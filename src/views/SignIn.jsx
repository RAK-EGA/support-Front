import axios from 'axios';
import "../styles/login.css";
import signInlogo from "../assets/signInlogo.png"
import {
    Form, redirect,


} from "react-router-dom"

let baseUrl = 'http://172.27.134.146:3000';

// let baseUrl = 'https://rakmun-api.rakega.online'

export async function action({ request }) {
    const data = Object.fromEntries(await request.formData());

    try {
        const res = await axios({
            method: 'post',
            url: baseUrl + '/support/signin',
            // validateStatus(status){
            //     if(status)
            // }
            headers: {},
            data: data
        });

        const user = JSON.stringify(res.data);

        localStorage.setItem("user", user);

    } catch (error) {

    }
    return redirect("/");

}

export const instance = (token) => axios.create({
    baseURL: baseUrl,
    headers: { 'Authorization': 'Bearer ' + token }

})

export default function SignIn() {


    return (
        <>
            <div className="big">

            </div>
            <div className='login--image'>
                <div className="form--container">
                    <div className="form--items">
                        <h6>Sign in</h6>

                        <Form method='post'>
                            <input
                                id="email"
                                className=""
                                aria-label={`email`}
                                type="email"
                                name="email"
                                placeholder='Email'
                                required
                            />
                            <input
                                id="password"
                                className=""
                                aria-label={`password`}
                                type="password"
                                name="password"
                                placeholder='Password'
                                required
                            />
                            <button type='submit'>Sign in</button>
                        </Form>

                    </div>

                </div>
                <img src={signInlogo} className='RAK--logo' alt="RAK logo" />


            </div>

        </>
    );
}