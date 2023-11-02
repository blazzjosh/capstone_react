import React from 'react';
import './ReportsLayout.css';

const ReportLayout = () => {
    const data = [
        // { id: 1, name: 'Dr. John Doe', speciality: 'Cardiology' },
        // { id: 2, name: 'Dr. Smith', speciality: 'Dermatology' }
    ];

    const viewReport = () => {
        window.open("/patient_report.pdf", '_blank');
    }

    const downloadReport = () => {
        window.location.href = `/patient_report.pdf?download=true`;
    }

    return (
        <div className="table-container">
            <h1>Reports</h1>
            {data.length > 0 ? (
                 <table>
                 <thead>
                     <tr>
                         <th>Serial Number</th>
                         <th>Doctor Name</th>
                         <th>Doctor Speciality</th>
                         <th>View Report</th>
                         <th>Download Report</th>
                     </tr>
                 </thead>
                 <tbody>
                     {data.map(row => (
                         <tr key={row.id}>
                             <td>{row.id}</td>
                             <td>{row.name}</td>
                             <td>{row.speciality}</td>
                             <td><button onClick={() => viewReport()}>View Report</button></td>
                             <td><button onClick={() => downloadReport()}>Download Report</button></td>
                         </tr>
                     ))}
                 </tbody>
             </table>
            ) : (
                <p>You do not have any reports available.</p>
            )} 
        </div>
    );
};

export default ReportLayout;
