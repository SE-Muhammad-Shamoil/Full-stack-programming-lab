const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, ShadingType } = require('docx');

const doc = new Document({
  sections: [
    {
      properties: {},
      children: [
        new Paragraph({
          text: 'Full Stack Programming Lab Project Submission',
          heading: HeadingLevel.HEADING_1,
          alignment: AlignmentType.CENTER,
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: 'Project Title: ', bold: true }),
            new TextRun({ text: 'lifeCore Concierge Medical Platform' }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: 'Tech Stack: ', bold: true }),
            new TextRun({ text: 'Next.js, Node.js, Express, MongoDB, Tailwind CSS' }),
          ],
        }),
        
        new Paragraph({ text: '', spacing: { before: 200, after: 200 } }),
        
        // Section 1
        new Paragraph({
          text: '1. Project Overview & System Architecture',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph({
          children: [
            new TextRun({ text: 'The ' }),
            new TextRun({ text: 'lifeCore Concierge Medical Platform', bold: true }),
            new TextRun({ text: ' is a comprehensive, modern healthcare management system designed to connect elite clinical specialists with patients. The system utilizes a robust ' }),
            new TextRun({ text: 'MERN-like stack', bold: true }),
            new TextRun({ text: ' (MongoDB, Express, React/Next.js, Node.js) with strict role-based access control and a visually rich, responsive user interface.' }),
          ],
        }),
        new Paragraph({
          text: 'Key Architectural Decisions:',
          heading: HeadingLevel.HEADING_3,
        }),
        new Paragraph({
          bullet: { level: 0 },
          children: [
            new TextRun({ text: 'Frontend: ', bold: true }),
            new TextRun({ text: 'Built with Next.js App Router for server-side rendering and SEO optimization. Styling is handled via modern Tailwind CSS with a custom design system encompassing glassmorphism and smooth micro-animations.' }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          children: [
            new TextRun({ text: 'Backend: ', bold: true }),
            new TextRun({ text: 'A RESTful API built on Node.js and Express. It interfaces with a MongoDB database using Mongoose schemas.' }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          children: [
            new TextRun({ text: 'State Management & Auth: ', bold: true }),
            new TextRun({ text: 'JSON Web Tokens (JWT) are utilized for stateless authentication, securely stored in client-side cookies using js-cookie.' }),
          ],
        }),
        new Paragraph({ text: '', spacing: { before: 200, after: 200 } }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          shading: { type: ShadingType.CLEAR, color: 'auto', fill: 'FFF2CC' },
          children: [
            new TextRun({ text: '[PLACEHOLDER: Insert screenshot of the Landing Page here]', bold: true, color: 'D6B656' })
          ]
        }),
        new Paragraph({ text: '', spacing: { before: 200, after: 200 } }),

        // Section 2
        new Paragraph({
          text: '2. Module I: Authentication System (15 Marks)',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph({
          children: [
            new TextRun({ text: 'The authentication system is highly secure and role-based, categorizing users into Admin, Doctor, and Patient roles. It prevents unauthorized API access across all protected endpoints.' }),
          ],
        }),
        new Paragraph({
          text: 'Implementation Details:',
          heading: HeadingLevel.HEADING_3,
        }),
        new Paragraph({
          bullet: { level: 0 },
          children: [
            new TextRun({ text: 'Secure Registration: ', bold: true }),
            new TextRun({ text: 'Users provide their details, which are rigorously validated. Passwords are securely hashed using bcrypt before database insertion.' }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          children: [
            new TextRun({ text: 'OTP Email Verification: ', bold: true }),
            new TextRun({ text: 'To ensure the validity of user emails, a 6-digit OTP is generated upon registration and sent to the user\'s inbox via a custom HTML-formatted Nodemailer template. The user must verify this code to unlock their account.' }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          children: [
            new TextRun({ text: 'JWT Login & Logout: ', bold: true }),
            new TextRun({ text: 'Upon successful verification and login, a JWT token is generated. Protected routes restrict dashboard access strictly to authenticated sessions. Secure logout functionality is implemented to clear cookies and session data.' }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          children: [
            new TextRun({ text: 'Role-Based Access Control (RBAC): ', bold: true }),
            new TextRun({ text: 'Express middleware checks the JWT payload to ensure users can only access endpoints matching their specific roles.' }),
          ],
        }),
        new Paragraph({ text: '', spacing: { before: 200, after: 200 } }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          shading: { type: ShadingType.CLEAR, fill: 'FFF2CC' },
          children: [
            new TextRun({ text: '[PLACEHOLDER: Insert screenshot of the OTP Verification Modal here]', bold: true, color: 'D6B656' })
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          shading: { type: ShadingType.CLEAR, fill: 'FFF2CC' },
          children: [
            new TextRun({ text: '[PLACEHOLDER: Insert screenshot of the OTP Email received in Gmail here]', bold: true, color: 'D6B656' })
          ]
        }),
        new Paragraph({ text: '', spacing: { before: 200, after: 200 } }),

        // Section 3
        new Paragraph({
          text: '3. Module II: Doctor & Patient Management System',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph({
          children: [
            new TextRun({ text: 'This module encompasses the core CRUD operations for handling hospital records, strictly adhering to the 15-record data constraint to simulate a fully-populated concierge clinic.' }),
          ],
        }),
        new Paragraph({
          text: 'Implementation Details:',
          heading: HeadingLevel.HEADING_3,
        }),
        new Paragraph({
          bullet: { level: 0 },
          children: [
            new TextRun({ text: 'Data Models: ', bold: true }),
            new TextRun({ text: 'Separate Mongoose schemas for User, DoctorProfile, and PatientProfile ensure that generic auth data is kept separate from specialized medical data (e.g., allergies, chronic diseases, schedules).' }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          children: [
            new TextRun({ text: 'CRUD Operations: ', bold: true }),
            new TextRun({ text: 'Fully functional API endpoints allow administrators and doctors to add, view, update, and delete patient records and doctor profiles.' }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          children: [
            new TextRun({ text: 'Doctor-Patient Assignment: ', bold: true }),
            new TextRun({ text: 'The system supports dynamic assignments where doctors are explicitly linked to specific patients for long-term care management.' }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          children: [
            new TextRun({ text: 'Input Validation: ', bold: true }),
            new TextRun({ text: 'Both the Next.js frontend forms and Express backend controllers rigorously validate all input fields to maintain database integrity.' }),
          ],
        }),
        new Paragraph({ text: '', spacing: { before: 200, after: 200 } }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          shading: { type: ShadingType.CLEAR, fill: 'FFF2CC' },
          children: [
            new TextRun({ text: '[PLACEHOLDER: Insert screenshot of the Patient Dashboard here]', bold: true, color: 'D6B656' })
          ]
        }),
        new Paragraph({ text: '', spacing: { before: 200, after: 200 } }),

        // Section 4
        new Paragraph({
          text: '4. Module III: Appointment & Treatment Management System',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph({
          children: [
            new TextRun({ text: 'This is the operational core of the hospital, facilitating real-time scheduling and detailed medical record tracking.' }),
          ],
        }),
        new Paragraph({
          text: 'Implementation Details:',
          heading: HeadingLevel.HEADING_3,
        }),
        new Paragraph({
          bullet: { level: 0 },
          children: [
            new TextRun({ text: 'Appointment Booking: ', bold: true }),
            new TextRun({ text: 'Patients can request appointments based on their assigned doctor\'s specific daily availability. The system incorporates validation to prevent double-booking.' }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          children: [
            new TextRun({ text: 'Status Workflow: ', bold: true }),
            new TextRun({ text: 'Appointments move dynamically through statuses (Pending, Confirmed, In Treatment, Completed, Rejected).' }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          children: [
            new TextRun({ text: 'Automated Email Notifications: ', bold: true }),
            new TextRun({ text: 'Any change in appointment status automatically triggers a beautifully formatted HTML email sent to the patient\'s registered email address.' }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          children: [
            new TextRun({ text: 'Prescriptions: ', bold: true }),
            new TextRun({ text: 'Doctors can seamlessly attach digital prescriptions to appointments, detailing medication names, dosages, frequencies, and durations. Patients are notified via email when a prescription is issued.' }),
          ],
        }),
        new Paragraph({
          bullet: { level: 0 },
          children: [
            new TextRun({ text: 'Treatment Tracking: ', bold: true }),
            new TextRun({ text: 'The platform tracks physical checkup metrics (height, weight, BP, Heart Rate) and treatment progress over time, storing medical history for easy retrieval.' }),
          ],
        }),
        new Paragraph({ text: '', spacing: { before: 200, after: 200 } }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          shading: { type: ShadingType.CLEAR, fill: 'FFF2CC' },
          children: [
            new TextRun({ text: '[PLACEHOLDER: Insert screenshot of the Doctor Dashboard here]', bold: true, color: 'D6B656' })
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          shading: { type: ShadingType.CLEAR, fill: 'FFF2CC' },
          children: [
            new TextRun({ text: '[PLACEHOLDER: Insert screenshot of the HTML Appointment Confirmation/Rejection Email received in Gmail here]', bold: true, color: 'D6B656' })
          ]
        }),
        new Paragraph({ text: '', spacing: { before: 200, after: 200 } }),

        // Section 5
        new Paragraph({
          text: '5. Administrative Controls',
          heading: HeadingLevel.HEADING_2,
        }),
        new Paragraph({
          children: [
            new TextRun({ text: 'The platform provides an overarching administrative view to oversee hospital operations, ensuring smooth management of both staff and patients. Admins possess the highest clearance for system-wide CRUD operations.' }),
          ],
        }),
        new Paragraph({ text: '', spacing: { before: 200, after: 200 } }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          shading: { type: ShadingType.CLEAR, fill: 'FFF2CC' },
          children: [
            new TextRun({ text: '[PLACEHOLDER: Insert screenshot of the Admin Dashboard here]', bold: true, color: 'D6B656' })
          ]
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync('../lifeCore_Submission_Document.docx', buffer);
  console.log('Document created successfully');
});
