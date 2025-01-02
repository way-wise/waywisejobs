import React from "react";
import BreadcrumbSection from "../components/section/BreadcrumbSection";

const PrivacyPolicy = () => (
  <>
    <BreadcrumbSection />
    <div className="container mx-auto px-4 py-8">
      <p className="mb-6 ">
        At <span className="font-semibold">Way-Wise Jobs</span>, we
        value your trust and are committed to protecting your personal
        information. This Privacy Policy outlines how we collect, use, store,
        and protect your data, ensuring compliance with applicable data
        protection laws. By using our services, you agree to the terms outlined
        in this policy.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-4 ">
          We may collect the following types of personal information:
        </p>
        <ul className="list-disc list-inside space-y-2 ">
          <li>
            <strong>Personal Identification Information</strong>: Name, date of
            birth, gender, passport details, and photographs.
          </li>
          <li>
            <strong>Contact Information</strong>: Address, phone number, and
            email address.
          </li>
          <li>
            <strong>Employment Information</strong>: Education, work experience,
            certifications, and references.
          </li>
          <li>
            <strong>Health Information</strong>: Medical records (where required
            for specific roles or visas).
          </li>
          <li>
            <strong>Financial Information</strong>: Bank details for payroll
            purposes.
          </li>
          <li>
            <strong>Travel Information</strong>: Visa details, flight
            itineraries, and destination addresses.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-4 ">
          We use the information collected for the following purposes:
        </p>
        <ul className="list-disc list-inside space-y-2 ">
          <li>
            <strong>Recruitment</strong>: To assess your qualifications and
            match you with suitable job opportunities.
          </li>
          <li>
            <strong>Legal Compliance</strong>: To fulfill regulatory and
            immigration requirements.
          </li>
          <li>
            <strong>Communication</strong>: To provide updates, job offers, and
            necessary notifications.
          </li>
          <li>
            <strong>Training and Onboarding</strong>: To prepare you for your
            role, including cultural orientation and language training.
          </li>
          <li>
            <strong>Payroll and Benefits</strong>: To process payments and other
            related services.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
        <p className="mb-4 ">
          We may share your personal information with:
        </p>
        <ul className="list-disc list-inside space-y-2 ">
          <li>
            <strong>Employers</strong>: To facilitate your placement and
            employment.
          </li>
          <li>
            <strong>Government Authorities</strong>: For visa applications, work
            permits, and compliance with laws.
          </li>
          <li>
            <strong>Service Providers</strong>: To assist with medical
            examinations, travel arrangements, and training programs.
          </li>
          <li>
            <strong>Affiliated Partners</strong>: To enhance our recruitment
            services.
          </li>
        </ul>
        <p className="">
          We do not sell or rent your personal information to third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <p className="mb-4 ">
          We implement strict measures to safeguard your personal information,
          including:
        </p>
        <ul className="list-disc list-inside space-y-2 ">
          <li>Encryption of sensitive data.</li>
          <li>Access controls to limit data exposure.</li>
          <li>Regular audits and compliance checks.</li>
        </ul>
      </section>

      {/* Continue for other sections */}

      <footer className="text-center mt-8">
        <p>
          By using our services, you acknowledge that you have read and
          understood this Privacy Policy.
        </p>
      </footer>
    </div>
  </>
);

export default PrivacyPolicy;
