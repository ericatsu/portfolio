import "./Styles/Contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Me!</h1>
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d254116.0362619761!2d-0.10330358660888717!3d5.631323934937186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1625143472415!5m2!1sen!2sgh"
             frameBorder="0"
             allowFullScreen=""
             aria-hidden="false"
             tabIndex="0"
            ></iframe>

            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d254116.0362619761!2d-0.10330358660888717!3d5.631323934937186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1625143472415!5m2!1sen!2sgh" 
            width="600" height="450" 
            style="border:0;" 
            allowfullscreen="" loading="lazy">
            </iframe> */}

            <h4>Phone</h4>
            <p>+233 500 8827 96</p>

            <h4>Email</h4>
            <p>ericatsu29@gmail.com</p>

            <h4>Address</h4>
            <p>Old Winneba Road, Accra</p>
        </div>
    )
}

export default Contact
