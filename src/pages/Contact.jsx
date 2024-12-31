import EmailForm from "../components/EmailForm";
import "./../App.css";

const Contact = () => {
  return (
    <main className="page-background paragraph-container">
      <h2 className="page-header">Contact JungleBeauty Bengal Cattery</h2>
      <section className="section-text">
        <h3 className="page-subheader">Reach Out to Us</h3>
        <p>
          We’re happy to answer any questions or provide further details about
          our Bengal kittens. Feel free to get in touch through email, Skype, or
          Instagram.
        </p>
      </section>
      <section className="section-text">
        <h3 className="page-subheader">Send Us an Email</h3>
        <EmailForm />
      </section>
      <section className="section-text">
        <h3 className="page-subheader">Other Ways to Contact Us</h3>
        <p>
          Start a chat with us on Skype:
          <br />
          <a className="text-link" href={"skype:JungleBeautyBengals?chat"}>
            JungleBeautyBengals
          </a>
        </p>
        <p>
          Follow us on Instagram for daily updates and adorable kitten photos:
          <br />
          <a
            className="text-link"
            href={"https://www.instagram.com/junglebeautybengals/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            @junglebeautybengals
          </a>
        </p>
      </section>
    </main>
  );
};

export default Contact;
