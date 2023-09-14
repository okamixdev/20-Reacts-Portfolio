import React from "react";

export const Contact = () => {
    return (
        <div className="contact">
            <br /> <br />
            <form className= "forma" action="">
                <h3>Contact Me:</h3>
                <input type="text" id="name" placeholder="Name" required />
                <input type="email" id="email" placeholder="Email" required />
                <input type="text" id="phone" placeholder="Phone #" required />
                <textarea name="message" id="message" cols="30" rows="4" placeholder="Hii, how can I help you?"></textarea>
                <button type="submit">Send!</button>
            </form>


        </div>
    );
};