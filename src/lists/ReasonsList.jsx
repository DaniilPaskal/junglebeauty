import { Link } from "react-router-dom";

const ReasonsList = [
  {
    title: `Your Choice, Your Kitten`,
    body: (
      <>
        <p>
          We believe every family deserves the perfect kitten, and every kitten
          deserves a loving home. With a first-come, first-served approach, we
          give everyone an equal opportunity to select from our available Bengal
          kittens. Each kitten’s unique health, personality, and charm are
          openly shared to help you find the one that feels like it was meant
          for you.
        </p>
      </>
    ),
  },
  {
    title: `The Perfect Match`,
    body: (
      <>
        <p>
          Our mission is to breed the healthiest, happiest kittens and help
          families find their ideal companion. Your preferences are valuable to
          us, and with the opportunity to meet the kittens and their parents,
          you can choose the one whose personality and characteristics resonate
          with you most.
        </p>
      </>
    ),
  },
  {
    title: `Health and Well-Being`,
    body: (
      <>
        <p>
          Transparency and quality are at the heart of our breeding practices.
          Every kitten comes with a{" "}
          <Link className="text-link" to="/price">
            health warranty
          </Link>{" "}
          , ensuring protection against congenital disorders for two years.
          You’ll also receive full details about the health and genetic history
          of the parents, so you can welcome your kitten with confidence.
        </p>
      </>
    ),
  },
  {
    title: `Responsible Neutering`,
    body: (
      <>
        <p>
          All kittens go to their forever homes after being spayed/neutered at a
          safe and respectful age of 11–14 weeks. This ensures a smooth
          transition and prevents behaviors like yowling or marking, while also
          protecting the long-term health of Bengal females.
        </p>
      </>
    ),
  },
  {
    title: `Here for You, Always`,
    body: (
      <>
        <p>
          We’re dedicated to supporting both our kittens and their new families.
          From the moment you choose your kitten, we’re here to answer your
          questions and provide guidance, ensuring a seamless transition and a
          lasting, loving relationship.
        </p>
      </>
    ),
  },

  /*
    {
        title: ``,
        body:
            <>
                <p>

                </p>
            </>
    }
    */
];

export default ReasonsList;
