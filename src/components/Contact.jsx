import React from "react";

class Contact extends React.Component {
  convertDate(admissionDate) {
    let dateConverted = new Date(admissionDate);
    return `${("" + dateConverted.getDate()).padStart(2, "0")}/${(
      "" +
      (dateConverted.getMonth() + 1)
    ).padStart(2, "0")}/${dateConverted.getFullYear()}`;
  }
  render() {
    const contact = this.props.data;
    return (
      <article data-testid="contact" className="contact">
        <span className="contact__avatar">
          <img src={contact.avatar} alt={contact.name} />
        </span>
        <span data-testid="contact-name" className="contact__data">
          {contact.name}
        </span>
        <span data-testid="contact-phone" className="contact__data">
          {contact.phone}
        </span>
        <span data-testid="contact-country" className="contact__data">
          {contact.country}
        </span>
        <span data-testid="contact-date" className="contact__data">
          {this.convertDate(contact.admissionDate)}
        </span>
        <span data-testid="contact-company" className="contact__data">
          {contact.company}
        </span>
        <span data-testid="contact-department" className="contact__data">
          {contact.department}
        </span>
      </article>
    );
  }
}

export default Contact;
