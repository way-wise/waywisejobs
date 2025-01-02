import React from "react";
import BreadcrumbSection from "../components/section/BreadcrumbSection";

const TermsAndConditions = () => (
  <>
    {" "}
    <BreadcrumbSection />
    <div className="container mx-auto px-4 py-8">
      <p className="mb-6 ">
        Welcome to{" "}
        <span className="font-semibold">Way-Wise Jobs</span>. By
        accessing or using our services, you agree to comply with and be bound
        by the following Terms and Conditions. Please read them carefully before
        using our website or services. If you do not agree with any part of
        these terms, you should not use our services.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="">
          By using our services, you agree to these Terms and Conditions, which
          may be updated from time to time. Any changes will be posted on this
          page, and your continued use of our services constitutes your
          acceptance of those changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
        <ul className="list-disc list-inside space-y-2 ">
          <li>
            You must provide accurate and complete information during the
            recruitment process.
          </li>
          <li>
            You agree not to misuse our services or use them for unlawful
            purposes.
          </li>
          <li>
            We reserve the right to terminate or suspend your access to our
            services if you violate these terms.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Recruitment Process</h2>
        <p className=" mb-4">
          We act as an intermediary between job seekers and employers. While we
          strive to ensure accurate job placements, we are not responsible for
          the terms of employment agreed upon between the employer and the
          employee.
        </p>
        <ul className="list-disc list-inside space-y-2 ">
          <li>
            Job offers and contracts are subject to the employer's terms and
            conditions.
          </li>
          <li>
            It is the candidate's responsibility to ensure compliance with visa
            and work permit requirements.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          4. Intellectual Property
        </h2>
        <p className="">
          All content on our website, including text, graphics, logos, and
          images, is the property of{" "}
          <span className="font-semibold">Way-Wise Jobs</span> or
          its content suppliers and is protected by copyright laws. You may not
          reproduce, distribute, or modify any content without prior written
          consent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          5. Limitation of Liability
        </h2>
        <p className="">
          To the fullest extent permitted by law,{" "}
          <span className="font-semibold">Way-Wise Jobs</span> is
          not liable for any direct, indirect, incidental, or consequential
          damages arising out of your use of our services or website.
        </p>
      </section>

      <footer className="text-center mt-8">
        <p>
          By using our services, you acknowledge that you have read and
          understood these Terms and Conditions.
        </p>
      </footer>
    </div>
  </>
);

export default TermsAndConditions;
