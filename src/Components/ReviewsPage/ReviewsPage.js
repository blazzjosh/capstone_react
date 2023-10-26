import React from 'react';
import './ReviewsPage.css';
const ReviewsPage = () => {
  // Sample data for doctor's appointments
  const appointments = [
    {
      id: 1,
      doctorName: 'Dr. Smith',
      date: '2023-11-15',
      time: '10:00 AM',
      feedbackLink: '/review-form/1', // Replace with the actual link
    },
    {
      id: 2,
      doctorName: 'Dr. Johnson',
      date: '2023-11-20',
      time: '2:30 PM',
      feedbackLink: '/review-form/2', // Replace with the actual link
    },
    // Add more appointment data here
  ];

  return (
    <div className="reviewspage-container">
      <h2>Reviews</h2>
      <table>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Provide Feedback</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.doctorName}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>
                <a className="button" href={appointment.feedbackLink}>Provide Feedback</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewsPage;