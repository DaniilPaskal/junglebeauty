import "./../App.css";

const Price = () => {
  return (
    <main className="page-background paragraph-container">
      <h2 className="page-header">Health Guarantee</h2>

      {/* General Health Guarantee Section */}
      <section className="section-text">
        <h3 className="page-subheader">General Health Guarantee</h3>
        <ul className="list-container">
          <li>
            We will provide comprehensive documentation, including the kitten's
            vaccination records, deworming treatments, and veterinary reports at
            the time of transfer.
          </li>
          <li>
            The kitten is guaranteed to be in good health at the time of
            transfer and for a period of 72 hours thereafter.
          </li>
          <li>
            You are required to have the kitten examined by a licensed
            veterinarian within 72 hours of transfer.
          </li>
          <li>
            If, during this period, the kitten is found to have a serious
            medical condition, we will accept its return and provide a refund,
            excluding the deposit, provided the following conditions are met:
            <ul>
              <li>
                You supply official documentation from a licensed veterinarian
                detailing the medical condition and confirming the kitten’s
                severe medical deficiency.
              </li>
              <li>
                A second examination by a veterinarian of our choice validates
                these findings.
              </li>
            </ul>
          </li>
          <li>
            This guarantee does not cover respiratory illnesses, fleas,
            ringworms, parasitic infections, environmental stress (e.g.,
            diarrhea), or conditions arising from dietary changes.
          </li>
          <li>
            Beyond the 72-hour period, we cannot guarantee the kitten's health,
            except in cases involving birth defects.
          </li>
        </ul>
      </section>

      {/* Genetic Health Guarantee Section */}
      <section className="section-text">
        <h3 className="page-subheader">Genetic Health Guarantee</h3>
        <ul className="list-container">
          <li>
            The kitten is guaranteed against lethal genetic or congenital
            defects for a period of 24 months from the date of purchase.
          </li>
          <li>
            If the kitten passes away or requires euthanasia due to a genetic or
            congenital defect within this period, we will provide a replacement
            kitten under the following conditions:
            <ul>
              <li>
                A necropsy report from a licensed, impartial veterinary
                pathologist confirms the defect as the cause of death. This
                report will be conducted at our expense.
              </li>
              <li>
                A second examination by a veterinarian of our choice
                corroborates these findings.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Additional Benefits Section */}
      <section className="section-text">
        <h3 className="page-subheader">Included with Your Kitten</h3>
        <ul className="list-container">
          <li>Two sets of vaccines</li>
          <li>Spay/neuter surgery</li>
          <li>Microchip implantation</li>
          <li>Deworming (at least twice, more if necessary)</li>
          <li>72-hour general health guarantee</li>
          <li>2-year genetic health guarantee</li>
          <li>Litter training</li>
          <li>Legal and binding contract</li>
          <li>
            TICA registration papers (provided after proof of spay/neuter)
          </li>
          <li>Food samples</li>
          <li>Royal Canin new owner’s kit</li>
          <li>Kitten’s favorite toy</li>
          <li>A blanket with the scent of their home</li>
          <li>Detailed instructions and ongoing support</li>
          <li>30 days of complimentary pet insurance with Trupanion</li>
        </ul>

        <h3 className="page-subheader">
          The price for a kitten ranges between CAD 2,000 and CAD 3,500
        </h3>
      </section>
    </main>
  );
};

export default Price;
