import ContactForm from "./ContactForm";
import ContactInputBox from "./ContactInputBox";

function ContactBox() {
  return (
    <div className="w-40/100">
        <ContactForm>
          <ContactInputBox />
        </ContactForm>
    </div>
  );
}

export default ContactBox;
