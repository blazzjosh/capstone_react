import React from 'react';
import './ReviewsPage.css';
import ReviewsForm from '../ReviewForm/ReviewForm';

const ReviewsPage = () => {
  // Sample data for doctor's appointments
  const appointments = [
    {
      id: 1,
      doctorName: 'Dr. Smith',
      doctorSpeciality: 'Cardiology',
      feedbackLink: '/review-form/1', // Replace with the actual link
      reviewgiven: ''
    },
    {
      id: 2,
      doctorName: 'Dr. Johnson',
      doctorSpeciality: 'Cardiology',
      feedbackLink: '/review-form/2', // Replace with the actual link
      reviewgiven: ''

    },
    // Add more appointment data here
  ];

  return (
    <div className="reviewspage-container">
      <h2>Reviews</h2>
      <table>
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>Provide Feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={appointment.id}>
              <td>{index + 1}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.doctorSpeciality}</td>
              <td>
              <ReviewsForm/>
               
              </td>
              <td>{appointment.reviewgiven}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewsPage;
 {/* <a className="button" href={appointment.feedbackLink}>Provide Feedback</a> */}