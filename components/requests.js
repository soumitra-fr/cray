export class RequestsSection {
  getSidebar() {
    return `
      <div class="sidebar-header">
        <div class="sidebar-title">My Requests</div>
      </div>
      <ul class="sidebar-nav">
        <li><a href="#" class="sidebar-link active" data-scroll="pending-requests">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2"/>
          </svg>
          Pending Requests
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="approved-requests">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
          </svg>
          Approved Requests
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="rejected-requests">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M15 9L9 15" stroke="currentColor" stroke-width="2"/>
            <path d="M9 9L15 15" stroke="currentColor" stroke-width="2"/>
          </svg>
          Rejected Requests
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="all-requests">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M8 6H21" stroke="currentColor" stroke-width="2"/>
            <path d="M8 12H21" stroke="currentColor" stroke-width="2"/>
            <path d="M8 18H21" stroke="currentColor" stroke-width="2"/>
            <path d="M3 6H3.01" stroke="currentColor" stroke-width="2"/>
            <path d="M3 12H3.01" stroke="currentColor" stroke-width="2"/>
            <path d="M3 18H3.01" stroke="currentColor" stroke-width="2"/>
          </svg>
          All Requests
        </a></li>
      </ul>
    `
  }

  getContent() {
    return `
      <div class="section-header">
        <h1 class="section-title">Request Management</h1>
        <p class="section-subtitle">Track and manage all your requests</p>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">12</div>
          <div class="stat-label">Pending Requests</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">45</div>
          <div class="stat-label">Approved This Month</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">3</div>
          <div class="stat-label">Rejected</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">2.5 days</div>
          <div class="stat-label">Avg Response Time</div>
        </div>
      </div>

      <div id="pending-requests" class="content-section">
        <h2>Pending Requests</h2>
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Awaiting Approval</h3>
            <div class="card-actions">
              <button class="btn btn-accent">New Request</button>
            </div>
          </div>
          <div class="request-list">
            <div class="request-item">
              <div class="request-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="request-content">
                <div class="request-title">Budget Approval for Q4 Campaign</div>
                <div class="request-meta">
                  <span class="request-type">Budget Request</span>
                  <span class="request-date">Submitted 2 days ago</span>
                </div>
                <div class="request-description">Requesting $50,000 budget allocation for Q4 marketing campaign initiatives.</div>
              </div>
              <div class="request-status">
                <span class="status-badge status-pending">Pending</span>
              </div>
              <div class="request-actions">
                <button class="btn btn-primary">View Details</button>
              </div>
            </div>

            <div class="request-item">
              <div class="request-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 1.41157 16.1716C0.661427 16.9217 0.239998 17.9391 0.239998 19V21" stroke="currentColor" stroke-width="2"/>
                  <circle cx="8.5" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
                  <path d="M20 8V14" stroke="currentColor" stroke-width="2"/>
                  <path d="M23 11H17" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="request-content">
                <div class="request-title">New Team Member Access</div>
                <div class="request-meta">
                  <span class="request-type">Access Request</span>
                  <span class="request-date">Submitted 4 days ago</span>
                </div>
                <div class="request-description">Request for new hire to access CRM system and sales tools.</div>
              </div>
              <div class="request-status">
                <span class="status-badge status-pending">Pending</span>
              </div>
              <div class="request-actions">
                <button class="btn btn-primary">View Details</button>
              </div>
            </div>

            <div class="request-item">
              <div class="request-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="request-content">
                <div class="request-title">Software License Upgrade</div>
                <div class="request-meta">
                  <span class="request-type">Resource Request</span>
                  <span class="request-date">Submitted 1 week ago</span>
                </div>
                <div class="request-description">Upgrade request for advanced analytics package to support growing team needs.</div>
              </div>
              <div class="request-status">
                <span class="status-badge status-pending">Pending</span>
              </div>
              <div class="request-actions">
                <button class="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="approved-requests" class="content-section">
        <h2>Approved Requests</h2>
        <div class="card">
          <table class="data-table">
            <thead>
              <tr>
                <th>Request Title</th>
                <th>Type</th>
                <th>Submitted Date</th>
                <th>Approved Date</th>
                <th>Approved By</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr class="data-row">
                <td>Monthly Travel Expenses</td>
                <td>Expense</td>
                <td>Oct 15, 2024</td>
                <td>Oct 17, 2024</td>
                <td>Sarah Johnson</td>
                <td>
                  <button class="btn btn-outline">View</button>
                </td>
              </tr>
              <tr class="data-row">
                <td>Conference Attendance</td>
                <td>Training</td>
                <td>Oct 10, 2024</td>
                <td>Oct 12, 2024</td>
                <td>Mike Wilson</td>
                <td>
                  <button class="btn btn-outline">View</button>
                </td>
              </tr>
              <tr class="data-row">
                <td>New Equipment Purchase</td>
                <td>Resource</td>
                <td>Oct 8, 2024</td>
                <td>Oct 11, 2024</td>
                <td>David Chen</td>
                <td>
                  <button class="btn btn-outline">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="rejected-requests" class="content-section">
        <h2>Rejected Requests</h2>
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Recently Rejected</h3>
          </div>
          <div class="request-list">
            <div class="request-item rejected">
              <div class="request-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  <path d="M15 9L9 15" stroke="currentColor" stroke-width="2"/>
                  <path d="M9 9L15 15" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="request-content">
                <div class="request-title">Premium Software Subscription</div>
                <div class="request-meta">
                  <span class="request-type">Software Request</span>
                  <span class="request-date">Rejected 3 days ago</span>
                </div>
                <div class="request-description">Request for premium analytics software subscription.</div>
                <div class="rejection-reason">
                  <strong>Reason:</strong> Current budget constraints, consider alternative solutions.
                </div>
              </div>
              <div class="request-status">
                <span class="status-badge status-error">Rejected</span>
              </div>
              <div class="request-actions">
                <button class="btn btn-outline">Resubmit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="all-requests" class="content-section">
        <h2>All Requests</h2>
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Request History</h3>
            <div class="card-actions">
              <button class="btn btn-outline">Filter</button>
              <button class="btn btn-outline">Export</button>
            </div>
          </div>
          <table class="data-table">
            <thead>
              <tr>
                <th>Request Title</th>
                <th>Type</th>
                <th>Status</th>
                <th>Date Submitted</th>
                <th>Last Updated</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr class="data-row">
                <td>Budget Approval for Q4 Campaign</td>
                <td>Budget</td>
                <td><span class="status-badge status-pending">Pending</span></td>
                <td>Oct 20, 2024</td>
                <td>Oct 20, 2024</td>
                <td>
                  <button class="btn btn-primary">View</button>
                </td>
              </tr>
              <tr class="data-row">
                <td>Monthly Travel Expenses</td>
                <td>Expense</td>
                <td><span class="status-badge status-completed">Approved</span></td>
                <td>Oct 15, 2024</td>
                <td>Oct 17, 2024</td>
                <td>
                  <button class="btn btn-primary">View</button>
                </td>
              </tr>
              <tr class="data-row">
                <td>Premium Software Subscription</td>
                <td>Software</td>
                <td><span class="status-badge status-error">Rejected</span></td>
                <td>Oct 14, 2024</td>
                <td>Oct 16, 2024</td>
                <td>
                  <button class="btn btn-primary">View</button>
                </td>
              </tr>
              <tr class="data-row">
                <td>Conference Attendance</td>
                <td>Training</td>
                <td><span class="status-badge status-completed">Approved</span></td>
                <td>Oct 10, 2024</td>
                <td>Oct 12, 2024</td>
                <td>
                  <button class="btn btn-primary">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  }

  initialize() {
    // Add specific functionality for requests section
    console.log('Requests section initialized')
  }
}