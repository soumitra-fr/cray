export class ModulesSection {
  constructor() {
    this.currentModule = 'home'
  }

  getSidebar() {
    return `
      <div class="sidebar-header">
        <div class="sidebar-title">Modules</div>
      </div>
      <ul class="sidebar-nav">
        <li><a href="#" class="sidebar-link active" data-module="home">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" stroke-width="2"/>
            <path d="M9 22V12H15V22" stroke="currentColor" stroke-width="2"/>
          </svg>
          Home
        </a></li>
        <li><a href="#" class="sidebar-link" data-module="leads">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 1.41157 16.1716C0.661427 16.9217 0.239998 17.9391 0.239998 19V21" stroke="currentColor" stroke-width="2"/>
            <circle cx="8.5" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
            <path d="M20 8V14" stroke="currentColor" stroke-width="2"/>
            <path d="M23 11H17" stroke="currentColor" stroke-width="2"/>
          </svg>
          Leads
        </a></li>
        <li><a href="#" class="sidebar-link" data-module="contacts">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
          </svg>
          Contacts
        </a></li>
        <li><a href="#" class="sidebar-link" data-module="accounts">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
            <path d="M8 14S9.5 16 12 16S16 14 16 14" stroke="currentColor" stroke-width="2"/>
            <path d="M9 9H9.01" stroke="currentColor" stroke-width="2"/>
            <path d="M15 9H15.01" stroke="currentColor" stroke-width="2"/>
          </svg>
          Accounts
        </a></li>
        <li><a href="#" class="sidebar-link" data-module="deals">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2"/>
          </svg>
          Deals
        </a></li>
        <li><a href="#" class="sidebar-link" data-module="tasks">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 11L12 14L22 4" stroke="currentColor" stroke-width="2"/>
            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C13.0929 3 14.1175 3.2072 15.0497 3.58201" stroke="currentColor" stroke-width="2"/>
          </svg>
          Tasks
        </a></li>
        <li><a href="#" class="sidebar-link" data-module="meetings">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
            <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" stroke-width="2"/>
            <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" stroke-width="2"/>
            <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2"/>
          </svg>
          Meetings
        </a></li>
        <li><a href="#" class="sidebar-link" data-module="calls">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M22 16.92V19.92C22 20.9985 21.1046 21.8977 20.0261 21.8599C18.0049 21.7652 16.0369 21.2695 14.2116 20.4C12.5237 19.6084 10.9963 18.5092 9.69501 17.1493C8.33509 15.8479 7.23611 14.3205 6.44501 12.6327C5.57504 10.8073 5.07933 8.83934 4.98501 6.81797C4.94721 5.73954 5.84641 4.84434 6.92501 4.84434H9.92501C10.9296 4.84434 11.7684 5.60575 11.8684 6.60345C11.9564 7.48693 12.1763 8.35627 12.5216 9.18135C12.7906 9.80697 12.6165 10.5257 12.0884 10.9538L10.8284 12.0738C11.7734 13.8582 13.1416 15.2263 14.926 16.1713L16.046 14.9113C16.4741 14.3832 17.1928 14.2091 17.8184 14.4781C18.6435 14.8234 19.5129 15.0433 20.3963 15.1313C21.394 15.2313 22.1554 16.0701 22.1554 17.0747" stroke="currentColor" stroke-width="2"/>
          </svg>
          Calls
        </a></li>
        <li><a href="#" class="sidebar-link" data-module="products">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="currentColor" stroke-width="2"/>
            <path d="M3 6H21" stroke="currentColor" stroke-width="2"/>
            <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" stroke-width="2"/>
          </svg>
          Products
        </a></li>
      </ul>
    `
  }

  getContent() {
    return `
      <div class="section-header">
        <h1 class="section-title">CRM Dashboard</h1>
        <p class="section-subtitle">Welcome to your comprehensive customer relationship management hub</p>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">1,247</div>
          <div class="stat-label">Total Leads</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">892</div>
          <div class="stat-label">Active Contacts</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">156</div>
          <div class="stat-label">Open Deals</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">$2.4M</div>
          <div class="stat-label">Revenue YTD</div>
        </div>
      </div>

      <div id="module-content">
        ${this.getModuleContent('home')}
      </div>
    `
  }

  getModuleContent(module) {
    const moduleData = {
      home: {
        title: 'Dashboard Overview',
        content: `
          <div class="grid grid-2">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Recent Activities</h3>
                <div class="card-actions">
                  <button class="btn btn-outline">View All</button>
                </div>
              </div>
              <div class="activity-list">
                <div class="activity-item">
                  <div class="activity-icon">📞</div>
                  <div class="activity-content">
                    <div class="activity-title">Call with John Doe</div>
                    <div class="activity-time">2 hours ago</div>
                  </div>
                </div>
                <div class="activity-item">
                  <div class="activity-icon">✉️</div>
                  <div class="activity-content">
                    <div class="activity-title">Email sent to Jane Smith</div>
                    <div class="activity-time">4 hours ago</div>
                  </div>
                </div>
                <div class="activity-item">
                  <div class="activity-icon">🤝</div>
                  <div class="activity-content">
                    <div class="activity-title">Deal closed with ABC Corp</div>
                    <div class="activity-time">1 day ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Upcoming Tasks</h3>
                <div class="card-actions">
                  <button class="btn btn-primary">Add Task</button>
                </div>
              </div>
              <div class="task-list">
                <div class="task-item">
                  <div class="task-priority high"></div>
                  <div class="task-content">
                    <div class="task-title">Follow up with lead</div>
                    <div class="task-due">Due: Today</div>
                  </div>
                </div>
                <div class="task-item">
                  <div class="task-priority medium"></div>
                  <div class="task-content">
                    <div class="task-title">Prepare presentation</div>
                    <div class="task-due">Due: Tomorrow</div>
                  </div>
                </div>
                <div class="task-item">
                  <div class="task-priority low"></div>
                  <div class="task-content">
                    <div class="task-title">Update contact information</div>
                    <div class="task-due">Due: This week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      leads: {
        title: 'Leads Management',
        content: `
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">All Leads</h3>
              <div class="card-actions">
                <button class="btn btn-accent">Add New Lead</button>
                <button class="btn btn-outline">Import</button>
              </div>
            </div>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Source</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr class="data-row">
                  <td>Michael Johnson</td>
                  <td>Tech Solutions Inc</td>
                  <td>m.johnson@techsolutions.com</td>
                  <td><span class="status-badge status-active">Hot</span></td>
                  <td>Website</td>
                  <td>
                    <button class="btn btn-primary">Contact</button>
                  </td>
                </tr>
                <tr class="data-row">
                  <td>Sarah Wilson</td>
                  <td>Marketing Pro</td>
                  <td>sarah@marketingpro.com</td>
                  <td><span class="status-badge status-pending">Warm</span></td>
                  <td>LinkedIn</td>
                  <td>
                    <button class="btn btn-primary">Contact</button>
                  </td>
                </tr>
                <tr class="data-row">
                  <td>David Chen</td>
                  <td>Innovation Labs</td>
                  <td>d.chen@innovationlabs.com</td>
                  <td><span class="status-badge status-completed">Qualified</span></td>
                  <td>Referral</td>
                  <td>
                    <button class="btn btn-primary">Contact</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      contacts: {
        title: 'Contact Management',
        content: `
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">All Contacts</h3>
              <div class="card-actions">
                <button class="btn btn-accent">Add Contact</button>
                <button class="btn btn-outline">Export</button>
              </div>
            </div>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr class="data-row">
                  <td>Emma Thompson</td>
                  <td>CEO</td>
                  <td>Future Corp</td>
                  <td>emma@futurecorp.com</td>
                  <td>+1 (555) 123-4567</td>
                  <td>
                    <button class="btn btn-primary">Edit</button>
                  </td>
                </tr>
                <tr class="data-row">
                  <td>Robert Kim</td>
                  <td>CTO</td>
                  <td>Digital Innovations</td>
                  <td>robert@digitalinn.com</td>
                  <td>+1 (555) 987-6543</td>
                  <td>
                    <button class="btn btn-primary">Edit</button>
                  </td>
                </tr>
                <tr class="data-row">
                  <td>Lisa Rodriguez</td>
                  <td>VP Sales</td>
                  <td>Growth Dynamics</td>
                  <td>lisa@growthdynamics.com</td>
                  <td>+1 (555) 456-7890</td>
                  <td>
                    <button class="btn btn-primary">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      accounts: {
        title: 'Account Management',
        content: `
          <div class="grid grid-3">
            <div class="card account-card">
              <div class="account-header">
                <div class="account-avatar">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="var(--primary-green)" stroke-width="2"/>
                  </svg>
                </div>
                <div class="account-info">
                  <div class="account-name">TechCorp Solutions</div>
                  <div class="account-type">Enterprise</div>
                </div>
              </div>
              <div class="account-stats">
                <div class="stat-item">
                  <span class="stat-label">Revenue:</span>
                  <span class="stat-value">$485,000</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Contacts:</span>
                  <span class="stat-value">23</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Open Deals:</span>
                  <span class="stat-value">5</span>
                </div>
              </div>
              <div class="account-actions">
                <button class="btn btn-primary">View Details</button>
                <button class="btn btn-outline">Edit</button>
              </div>
            </div>

            <div class="card account-card">
              <div class="account-header">
                <div class="account-avatar">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="var(--secondary-green)" stroke-width="2"/>
                  </svg>
                </div>
                <div class="account-info">
                  <div class="account-name">Global Industries</div>
                  <div class="account-type">Corporate</div>
                </div>
              </div>
              <div class="account-stats">
                <div class="stat-item">
                  <span class="stat-label">Revenue:</span>
                  <span class="stat-value">$320,000</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Contacts:</span>
                  <span class="stat-value">18</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Open Deals:</span>
                  <span class="stat-value">3</span>
                </div>
              </div>
              <div class="account-actions">
                <button class="btn btn-primary">View Details</button>
                <button class="btn btn-outline">Edit</button>
              </div>
            </div>

            <div class="card account-card">
              <div class="account-header">
                <div class="account-avatar">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="var(--cta-accent)" stroke-width="2"/>
                  </svg>
                </div>
                <div class="account-info">
                  <div class="account-name">StartupX</div>
                  <div class="account-type">Small Business</div>
                </div>
              </div>
              <div class="account-stats">
                <div class="stat-item">
                  <span class="stat-label">Revenue:</span>
                  <span class="stat-value">$85,000</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Contacts:</span>
                  <span class="stat-value">8</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Open Deals:</span>
                  <span class="stat-value">2</span>
                </div>
              </div>
              <div class="account-actions">
                <button class="btn btn-primary">View Details</button>
                <button class="btn btn-outline">Edit</button>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Account Performance</h3>
              <div class="card-actions">
                <button class="btn btn-outline">Generate Report</button>
              </div>
            </div>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Account Name</th>
                  <th>Industry</th>
                  <th>Annual Revenue</th>
                  <th>Last Activity</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr class="data-row">
                  <td>TechCorp Solutions</td>
                  <td>Technology</td>
                  <td>$485,000</td>
                  <td>2 days ago</td>
                  <td><span class="status-badge status-active">Active</span></td>
                  <td>
                    <button class="btn btn-primary">Manage</button>
                  </td>
                </tr>
                <tr class="data-row">
                  <td>Global Industries</td>
                  <td>Manufacturing</td>
                  <td>$320,000</td>
                  <td>1 week ago</td>
                  <td><span class="status-badge status-completed">Engaged</span></td>
                  <td>
                    <button class="btn btn-primary">Manage</button>
                  </td>
                </tr>
                <tr class="data-row">
                  <td>StartupX</td>
                  <td>Software</td>
                  <td>$85,000</td>
                  <td>3 days ago</td>
                  <td><span class="status-badge status-pending">Prospect</span></td>
                  <td>
                    <button class="btn btn-primary">Manage</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      deals: {
        title: 'Deal Pipeline',
        content: `
          <div class="pipeline-board">
            <div class="pipeline-column">
              <div class="column-header">
                <h3>Qualified</h3>
                <span class="deal-count">12</span>
              </div>
              <div class="deal-cards">
                <div class="deal-card">
                  <div class="deal-header">
                    <div class="deal-title">Enterprise Software License</div>
                    <div class="deal-value">$125,000</div>
                  </div>
                  <div class="deal-company">TechCorp Solutions</div>
                  <div class="deal-progress">
                    <div class="progress-bar">
                      <div class="progress-fill" style="width: 25%"></div>
                    </div>
                    <span class="progress-text">25%</span>
                  </div>
                  <div class="deal-meta">
                    <span class="deal-owner">John Smith</span>
                    <span class="deal-date">Due: Dec 15</span>
                  </div>
                </div>

                <div class="deal-card">
                  <div class="deal-header">
                    <div class="deal-title">Marketing Automation</div>
                    <div class="deal-value">$45,000</div>
                  </div>
                  <div class="deal-company">Growth Dynamics</div>
                  <div class="deal-progress">
                    <div class="progress-bar">
                      <div class="progress-fill" style="width: 15%"></div>
                    </div>
                    <span class="progress-text">15%</span>
                  </div>
                  <div class="deal-meta">
                    <span class="deal-owner">Sarah Johnson</span>
                    <span class="deal-date">Due: Dec 20</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="pipeline-column">
              <div class="column-header">
                <h3>Proposal</h3>
                <span class="deal-count">8</span>
              </div>
              <div class="deal-cards">
                <div class="deal-card">
                  <div class="deal-header">
                    <div class="deal-title">Cloud Infrastructure</div>
                    <div class="deal-value">$85,000</div>
                  </div>
                  <div class="deal-company">Digital Innovations</div>
                  <div class="deal-progress">
                    <div class="progress-bar">
                      <div class="progress-fill" style="width: 60%"></div>
                    </div>
                    <span class="progress-text">60%</span>
                  </div>
                  <div class="deal-meta">
                    <span class="deal-owner">Mike Wilson</span>
                    <span class="deal-date">Due: Dec 10</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="pipeline-column">
              <div class="column-header">
                <h3>Negotiation</h3>
                <span class="deal-count">5</span>
              </div>
              <div class="deal-cards">
                <div class="deal-card">
                  <div class="deal-header">
                    <div class="deal-title">CRM Implementation</div>
                    <div class="deal-value">$95,000</div>
                  </div>
                  <div class="deal-company">Future Corp</div>
                  <div class="deal-progress">
                    <div class="progress-bar">
                      <div class="progress-fill" style="width: 80%"></div>
                    </div>
                    <span class="progress-text">80%</span>
                  </div>
                  <div class="deal-meta">
                    <span class="deal-owner">Lisa Rodriguez</span>
                    <span class="deal-date">Due: Dec 8</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="pipeline-column">
              <div class="column-header">
                <h3>Closed Won</h3>
                <span class="deal-count">15</span>
              </div>
              <div class="deal-cards">
                <div class="deal-card won">
                  <div class="deal-header">
                    <div class="deal-title">Security Audit</div>
                    <div class="deal-value">$35,000</div>
                  </div>
                  <div class="deal-company">StartupX</div>
                  <div class="deal-progress">
                    <div class="progress-bar">
                      <div class="progress-fill" style="width: 100%"></div>
                    </div>
                    <span class="progress-text">100%</span>
                  </div>
                  <div class="deal-meta">
                    <span class="deal-owner">David Chen</span>
                    <span class="deal-date">Closed: Dec 1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Deal Analytics</h3>
              <div class="card-actions">
                <button class="btn btn-accent">Add New Deal</button>
                <button class="btn btn-outline">Export Report</button>
              </div>
            </div>
            <div class="grid grid-4">
              <div class="metric-card">
                <div class="metric-value">$2.4M</div>
                <div class="metric-label">Total Pipeline Value</div>
                <div class="metric-change positive">+15.2%</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">18.5%</div>
                <div class="metric-label">Win Rate</div>
                <div class="metric-change positive">+2.1%</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">45 days</div>
                <div class="metric-label">Avg. Sales Cycle</div>
                <div class="metric-change negative">-3 days</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">$125K</div>
                <div class="metric-label">Avg. Deal Size</div>
                <div class="metric-change positive">+8.7%</div>
              </div>
            </div>
          </div>
        `
      },
      tasks: {
        title: 'Task Management',
        content: `
          <div class="grid grid-3">
            <div class="task-column">
              <div class="column-header">
                <h3>To Do</h3>
                <span class="task-count">8</span>
              </div>
              <div class="task-cards">
                <div class="task-card high-priority">
                  <div class="task-header">
                    <div class="task-title">Follow up with TechCorp</div>
                    <div class="priority-indicator high"></div>
                  </div>
                  <div class="task-description">Schedule demo call for enterprise package</div>
                  <div class="task-meta">
                    <span class="task-assignee">John Smith</span>
                    <span class="task-due">Due: Today</span>
                  </div>
                  <div class="task-actions">
                    <button class="btn btn-primary">Start</button>
                    <button class="btn btn-outline">Edit</button>
                  </div>
                </div>

                <div class="task-card medium-priority">
                  <div class="task-header">
                    <div class="task-title">Prepare Q4 Report</div>
                    <div class="priority-indicator medium"></div>
                  </div>
                  <div class="task-description">Compile sales data and performance metrics</div>
                  <div class="task-meta">
                    <span class="task-assignee">Sarah Johnson</span>
                    <span class="task-due">Due: Tomorrow</span>
                  </div>
                  <div class="task-actions">
                    <button class="btn btn-primary">Start</button>
                    <button class="btn btn-outline">Edit</button>
                  </div>
                </div>

                <div class="task-card low-priority">
                  <div class="task-header">
                    <div class="task-title">Update CRM Database</div>
                    <div class="priority-indicator low"></div>
                  </div>
                  <div class="task-description">Clean up duplicate contacts and leads</div>
                  <div class="task-meta">
                    <span class="task-assignee">Mike Wilson</span>
                    <span class="task-due">Due: This Week</span>
                  </div>
                  <div class="task-actions">
                    <button class="btn btn-primary">Start</button>
                    <button class="btn btn-outline">Edit</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="task-column">
              <div class="column-header">
                <h3>In Progress</h3>
                <span class="task-count">5</span>
              </div>
              <div class="task-cards">
                <div class="task-card in-progress">
                  <div class="task-header">
                    <div class="task-title">Client Presentation</div>
                    <div class="priority-indicator high"></div>
                  </div>
                  <div class="task-description">Create slides for Digital Innovations pitch</div>
                  <div class="task-progress">
                    <div class="progress-bar">
                      <div class="progress-fill" style="width: 65%"></div>
                    </div>
                    <span class="progress-text">65%</span>
                  </div>
                  <div class="task-meta">
                    <span class="task-assignee">Lisa Rodriguez</span>
                    <span class="task-due">Due: Dec 12</span>
                  </div>
                  <div class="task-actions">
                    <button class="btn btn-primary">Continue</button>
                    <button class="btn btn-outline">Pause</button>
                  </div>
                </div>

                <div class="task-card in-progress">
                  <div class="task-header">
                    <div class="task-title">Contract Review</div>
                    <div class="priority-indicator medium"></div>
                  </div>
                  <div class="task-description">Review terms for Future Corp agreement</div>
                  <div class="task-progress">
                    <div class="progress-bar">
                      <div class="progress-fill" style="width: 40%"></div>
                    </div>
                    <span class="progress-text">40%</span>
                  </div>
                  <div class="task-meta">
                    <span class="task-assignee">David Chen</span>
                    <span class="task-due">Due: Dec 15</span>
                  </div>
                  <div class="task-actions">
                    <button class="btn btn-primary">Continue</button>
                    <button class="btn btn-outline">Pause</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="task-column">
              <div class="column-header">
                <h3>Completed</h3>
                <span class="task-count">12</span>
              </div>
              <div class="task-cards">
                <div class="task-card completed">
                  <div class="task-header">
                    <div class="task-title">Lead Qualification</div>
                    <div class="completion-check">✓</div>
                  </div>
                  <div class="task-description">Qualify leads from marketing campaign</div>
                  <div class="task-meta">
                    <span class="task-assignee">John Smith</span>
                    <span class="task-completed">Completed: Dec 5</span>
                  </div>
                  <div class="task-actions">
                    <button class="btn btn-outline">View Details</button>
                  </div>
                </div>

                <div class="task-card completed">
                  <div class="task-header">
                    <div class="task-title">Customer Onboarding</div>
                    <div class="completion-check">✓</div>
                  </div>
                  <div class="task-description">Complete onboarding for StartupX</div>
                  <div class="task-meta">
                    <span class="task-assignee">Sarah Johnson</span>
                    <span class="task-completed">Completed: Dec 3</span>
                  </div>
                  <div class="task-actions">
                    <button class="btn btn-outline">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Task Analytics</h3>
              <div class="card-actions">
                <button class="btn btn-accent">Create Task</button>
                <button class="btn btn-outline">Bulk Actions</button>
              </div>
            </div>
            <div class="grid grid-4">
              <div class="metric-card">
                <div class="metric-value">25</div>
                <div class="metric-label">Total Tasks</div>
                <div class="metric-change positive">+3</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">48%</div>
                <div class="metric-label">Completion Rate</div>
                <div class="metric-change positive">+5%</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">2.3 days</div>
                <div class="metric-label">Avg. Completion Time</div>
                <div class="metric-change negative">+0.2 days</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">8</div>
                <div class="metric-label">Overdue Tasks</div>
                <div class="metric-change negative">+2</div>
              </div>
            </div>
          </div>
        `
      },
      meetings: {
        title: 'Meeting Scheduler',
        content: `
          <div class="grid grid-2">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Today's Meetings</h3>
                <div class="card-actions">
                  <button class="btn btn-accent">Schedule Meeting</button>
                </div>
              </div>
              <div class="meeting-list">
                <div class="meeting-item">
                  <div class="meeting-time">
                    <div class="time-slot">9:00 AM</div>
                    <div class="duration">1 hour</div>
                  </div>
                  <div class="meeting-details">
                    <div class="meeting-title">Product Demo - TechCorp</div>
                    <div class="meeting-attendees">
                      <span class="attendee">John Smith</span>
                      <span class="attendee">Emma Thompson</span>
                      <span class="attendee">+2 more</span>
                    </div>
                    <div class="meeting-location">Conference Room A</div>
                  </div>
                  <div class="meeting-status">
                    <span class="status-badge status-active">Upcoming</span>
                  </div>
                  <div class="meeting-actions">
                    <button class="btn btn-primary">Join</button>
                    <button class="btn btn-outline">Edit</button>
                  </div>
                </div>

                <div class="meeting-item">
                  <div class="meeting-time">
                    <div class="time-slot">2:00 PM</div>
                    <div class="duration">30 min</div>
                  </div>
                  <div class="meeting-details">
                    <div class="meeting-title">Weekly Team Sync</div>
                    <div class="meeting-attendees">
                      <span class="attendee">Sarah Johnson</span>
                      <span class="attendee">Mike Wilson</span>
                      <span class="attendee">+5 more</span>
                    </div>
                    <div class="meeting-location">Zoom Meeting</div>
                  </div>
                  <div class="meeting-status">
                    <span class="status-badge status-pending">Scheduled</span>
                  </div>
                  <div class="meeting-actions">
                    <button class="btn btn-primary">Join</button>
                    <button class="btn btn-outline">Edit</button>
                  </div>
                </div>

                <div class="meeting-item">
                  <div class="meeting-time">
                    <div class="time-slot">4:30 PM</div>
                    <div class="duration">45 min</div>
                  </div>
                  <div class="meeting-details">
                    <div class="meeting-title">Client Check-in - Future Corp</div>
                    <div class="meeting-attendees">
                      <span class="attendee">Lisa Rodriguez</span>
                      <span class="attendee">Robert Kim</span>
                    </div>
                    <div class="meeting-location">Client Office</div>
                  </div>
                  <div class="meeting-status">
                    <span class="status-badge status-pending">Scheduled</span>
                  </div>
                  <div class="meeting-actions">
                    <button class="btn btn-primary">Join</button>
                    <button class="btn btn-outline">Edit</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Meeting Calendar</h3>
                <div class="card-actions">
                  <button class="btn btn-outline">View Full Calendar</button>
                </div>
              </div>
              <div class="calendar-widget">
                <div class="calendar-header">
                  <button class="calendar-nav">‹</button>
                  <div class="calendar-title">December 2024</div>
                  <button class="calendar-nav">›</button>
                </div>
                <div class="calendar-grid">
                  <div class="calendar-day header">Sun</div>
                  <div class="calendar-day header">Mon</div>
                  <div class="calendar-day header">Tue</div>
                  <div class="calendar-day header">Wed</div>
                  <div class="calendar-day header">Thu</div>
                  <div class="calendar-day header">Fri</div>
                  <div class="calendar-day header">Sat</div>
                  
                  <div class="calendar-day">1</div>
                  <div class="calendar-day">2</div>
                  <div class="calendar-day">3</div>
                  <div class="calendar-day">4</div>
                  <div class="calendar-day">5</div>
                  <div class="calendar-day today">6</div>
                  <div class="calendar-day">7</div>
                  <div class="calendar-day">8</div>
                  <div class="calendar-day has-meeting">9</div>
                  <div class="calendar-day">10</div>
                  <div class="calendar-day">11</div>
                  <div class="calendar-day has-meeting">12</div>
                  <div class="calendar-day">13</div>
                  <div class="calendar-day">14</div>
                  <div class="calendar-day has-meeting">15</div>
                  <div class="calendar-day">16</div>
                  <div class="calendar-day">17</div>
                  <div class="calendar-day">18</div>
                  <div class="calendar-day">19</div>
                  <div class="calendar-day">20</div>
                  <div class="calendar-day">21</div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Meeting Analytics</h3>
              <div class="card-actions">
                <button class="btn btn-outline">Export Report</button>
              </div>
            </div>
            <div class="grid grid-4">
              <div class="metric-card">
                <div class="metric-value">24</div>
                <div class="metric-label">Meetings This Week</div>
                <div class="metric-change positive">+6</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">92%</div>
                <div class="metric-label">Attendance Rate</div>
                <div class="metric-change positive">+3%</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">45 min</div>
                <div class="metric-label">Avg. Duration</div>
                <div class="metric-change negative">-5 min</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">18</div>
                <div class="metric-label">Client Meetings</div>
                <div class="metric-change positive">+4</div>
              </div>
            </div>
          </div>
        `
      },
      calls: {
        title: 'Call Management',
        content: `
          <div class="grid grid-2">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Recent Calls</h3>
                <div class="card-actions">
                  <button class="btn btn-accent">Make Call</button>
                  <button class="btn btn-outline">Call Log</button>
                </div>
              </div>
              <div class="call-list">
                <div class="call-item">
                  <div class="call-icon outgoing">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92V19.92C22 20.9985 21.1046 21.8977 20.0261 21.8599C18.0049 21.7652 16.0369 21.2695 14.2116 20.4" stroke="currentColor" stroke-width="2"/>
                    </svg>
                  </div>
                  <div class="call-details">
                    <div class="call-contact">Emma Thompson</div>
                    <div class="call-company">Future Corp</div>
                    <div class="call-meta">
                      <span class="call-duration">12:34</span>
                      <span class="call-time">2 hours ago</span>
                    </div>
                  </div>
                  <div class="call-status">
                    <span class="status-badge status-completed">Completed</span>
                  </div>
                  <div class="call-actions">
                    <button class="btn btn-primary">Call Back</button>
                    <button class="btn btn-outline">Notes</button>
                  </div>
                </div>

                <div class="call-item">
                  <div class="call-icon incoming">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92V19.92C22 20.9985 21.1046 21.8977 20.0261 21.8599C18.0049 21.7652 16.0369 21.2695 14.2116 20.4" stroke="currentColor" stroke-width="2"/>
                    </svg>
                  </div>
                  <div class="call-details">
                    <div class="call-contact">Michael Johnson</div>
                    <div class="call-company">Tech Solutions Inc</div>
                    <div class="call-meta">
                      <span class="call-duration">8:45</span>
                      <span class="call-time">4 hours ago</span>
                    </div>
                  </div>
                  <div class="call-status">
                    <span class="status-badge status-completed">Completed</span>
                  </div>
                  <div class="call-actions">
                    <button class="btn btn-primary">Call Back</button>
                    <button class="btn btn-outline">Notes</button>
                  </div>
                </div>

                <div class="call-item">
                  <div class="call-icon missed">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92V19.92C22 20.9985 21.1046 21.8977 20.0261 21.8599C18.0049 21.7652 16.0369 21.2695 14.2116 20.4" stroke="currentColor" stroke-width="2"/>
                    </svg>
                  </div>
                  <div class="call-details">
                    <div class="call-contact">Sarah Wilson</div>
                    <div class="call-company">Marketing Pro</div>
                    <div class="call-meta">
                      <span class="call-duration">Missed</span>
                      <span class="call-time">6 hours ago</span>
                    </div>
                  </div>
                  <div class="call-status">
                    <span class="status-badge status-error">Missed</span>
                  </div>
                  <div class="call-actions">
                    <button class="btn btn-accent">Call Back</button>
                    <button class="btn btn-outline">Notes</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Quick Dial</h3>
                <div class="card-actions">
                  <button class="btn btn-outline">Add Contact</button>
                </div>
              </div>
              <div class="quick-dial-grid">
                <div class="quick-dial-contact">
                  <div class="contact-avatar">ET</div>
                  <div class="contact-name">Emma Thompson</div>
                  <div class="contact-title">CEO, Future Corp</div>
                  <button class="btn btn-primary">Call</button>
                </div>

                <div class="quick-dial-contact">
                  <div class="contact-avatar">MJ</div>
                  <div class="contact-name">Michael Johnson</div>
                  <div class="contact-title">CTO, Tech Solutions</div>
                  <button class="btn btn-primary">Call</button>
                </div>

                <div class="quick-dial-contact">
                  <div class="contact-avatar">RK</div>
                  <div class="contact-name">Robert Kim</div>
                  <div class="contact-title">VP, Digital Inn</div>
                  <button class="btn btn-primary">Call</button>
                </div>

                <div class="quick-dial-contact">
                  <div class="contact-avatar">LR</div>
                  <div class="contact-name">Lisa Rodriguez</div>
                  <div class="contact-title">Sales Director</div>
                  <button class="btn btn-primary">Call</button>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Call Analytics</h3>
              <div class="card-actions">
                <button class="btn btn-outline">Detailed Report</button>
              </div>
            </div>
            <div class="grid grid-4">
              <div class="metric-card">
                <div class="metric-value">47</div>
                <div class="metric-label">Calls Today</div>
                <div class="metric-change positive">+12</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">8:32</div>
                <div class="metric-label">Avg. Call Duration</div>
                <div class="metric-change positive">+1:15</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">89%</div>
                <div class="metric-label">Answer Rate</div>
                <div class="metric-change positive">+5%</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">23%</div>
                <div class="metric-label">Conversion Rate</div>
                <div class="metric-change positive">+3%</div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Call Queue</h3>
              <div class="card-actions">
                <button class="btn btn-accent">Add to Queue</button>
              </div>
            </div>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Contact</th>
                  <th>Company</th>
                  <th>Priority</th>
                  <th>Scheduled Time</th>
                  <th>Purpose</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr class="data-row">
                  <td>David Chen</td>
                  <td>Innovation Labs</td>
                  <td><span class="status-badge status-error">High</span></td>
                  <td>3:00 PM</td>
                  <td>Follow-up Demo</td>
                  <td>
                    <button class="btn btn-primary">Call Now</button>
                  </td>
                </tr>
                <tr class="data-row">
                  <td>Sarah Wilson</td>
                  <td>Marketing Pro</td>
                  <td><span class="status-badge status-pending">Medium</span></td>
                  <td>4:30 PM</td>
                  <td>Proposal Discussion</td>
                  <td>
                    <button class="btn btn-primary">Call Now</button>
                  </td>
                </tr>
                <tr class="data-row">
                  <td>Alex Turner</td>
                  <td>Growth Dynamics</td>
                  <td><span class="status-badge status-completed">Low</span></td>
                  <td>5:00 PM</td>
                  <td>Check-in Call</td>
                  <td>
                    <button class="btn btn-primary">Call Now</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      products: {
        title: 'Product Catalog',
        content: `
          <div class="grid grid-3">
            <div class="card product-card">
              <div class="product-header">
                <div class="product-image">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="var(--primary-green)" stroke-width="2"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="var(--primary-green)" stroke-width="2"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="var(--primary-green)" stroke-width="2"/>
                  </svg>
                </div>
                <div class="product-status">
                  <span class="status-badge status-active">Active</span>
                </div>
              </div>
              <div class="product-info">
                <div class="product-name">Enterprise CRM Suite</div>
                <div class="product-category">Software</div>
                <div class="product-price">$299/month</div>
                <div class="product-description">Complete CRM solution with advanced analytics, automation, and integrations.</div>
              </div>
              <div class="product-stats">
                <div class="stat-item">
                  <span class="stat-label">Sales:</span>
                  <span class="stat-value">156</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Revenue:</span>
                  <span class="stat-value">$46,644</span>
                </div>
              </div>
              <div class="product-actions">
                <button class="btn btn-primary">Edit Product</button>
                <button class="btn btn-outline">View Details</button>
              </div>
            </div>

            <div class="card product-card">
              <div class="product-header">
                <div class="product-image">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="var(--secondary-green)" stroke-width="2"/>
                    <path d="M2 17L12 22L22 17" stroke="var(--secondary-green)" stroke-width="2"/>
                    <path d="M2 12L12 17L22 12" stroke="var(--secondary-green)" stroke-width="2"/>
                  </svg>
                </div>
                <div class="product-status">
                  <span class="status-badge status-active">Active</span>
                </div>
              </div>
              <div class="product-info">
                <div class="product-name">Sales Analytics Pro</div>
                <div class="product-category">Analytics</div>
                <div class="product-price">$149/month</div>
                <div class="product-description">Advanced sales reporting and predictive analytics platform.</div>
              </div>
              <div class="product-stats">
                <div class="stat-item">
                  <span class="stat-label">Sales:</span>
                  <span class="stat-value">89</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Revenue:</span>
                  <span class="stat-value">$13,261</span>
                </div>
              </div>
              <div class="product-actions">
                <button class="btn btn-primary">Edit Product</button>
                <button class="btn btn-outline">View Details</button>
              </div>
            </div>

            <div class="card product-card">
              <div class="product-header">
                <div class="product-image">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="var(--cta-accent)" stroke-width="2"/>
                  </svg>
                </div>
                <div class="product-status">
                  <span class="status-badge status-pending">Beta</span>
                </div>
              </div>
              <div class="product-info">
                <div class="product-name">AI Chat Assistant</div>
                <div class="product-category">AI Tools</div>
                <div class="product-price">$79/month</div>
                <div class="product-description">Intelligent chatbot for customer support and lead qualification.</div>
              </div>
              <div class="product-stats">
                <div class="stat-item">
                  <span class="stat-label">Sales:</span>
                  <span class="stat-value">34</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Revenue:</span>
                  <span class="stat-value">$2,686</span>
                </div>
              </div>
              <div class="product-actions">
                <button class="btn btn-primary">Edit Product</button>
                <button class="btn btn-outline">View Details</button>
              </div>
            </div>

            <div class="card product-card">
              <div class="product-header">
                <div class="product-image">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="var(--primary-green)" stroke-width="2"/>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="var(--primary-green)" stroke-width="2"/>
                  </svg>
                </div>
                <div class="product-status">
                  <span class="status-badge status-active">Active</span>
                </div>
              </div>
              <div class="product-info">
                <div class="product-name">Document Manager</div>
                <div class="product-category">Productivity</div>
                <div class="product-price">$49/month</div>
                <div class="product-description">Secure document storage and collaboration platform.</div>
              </div>
              <div class="product-stats">
                <div class="stat-item">
                  <span class="stat-label">Sales:</span>
                  <span class="stat-value">203</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Revenue:</span>
                  <span class="stat-value">$9,947</span>
                </div>
              </div>
              <div class="product-actions">
                <button class="btn btn-primary">Edit Product</button>
                <button class="btn btn-outline">View Details</button>
              </div>
            </div>

            <div class="card product-card">
              <div class="product-header">
                <div class="product-image">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92V19.92C22 20.9985 21.1046 21.8977 20.0261 21.8599C18.0049 21.7652 16.0369 21.2695 14.2116 20.4" stroke="var(--secondary-green)" stroke-width="2"/>
                  </svg>
                </div>
                <div class="product-status">
                  <span class="status-badge status-active">Active</span>
                </div>
              </div>
              <div class="product-info">
                <div class="product-name">VoIP Integration</div>
                <div class="product-category">Communication</div>
                <div class="product-price">$29/month</div>
                <div class="product-description">Seamless phone system integration with call tracking.</div>
              </div>
              <div class="product-stats">
                <div class="stat-item">
                  <span class="stat-label">Sales:</span>
                  <span class="stat-value">127</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Revenue:</span>
                  <span class="stat-value">$3,683</span>
                </div>
              </div>
              <div class="product-actions">
                <button class="btn btn-primary">Edit Product</button>
                <button class="btn btn-outline">View Details</button>
              </div>
            </div>

            <div class="card product-card">
              <div class="product-header">
                <div class="product-image">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--cta-accent)" stroke-width="2"/>
                    <path d="M8 14S9.5 16 12 16S16 14 16 14" stroke="var(--cta-accent)" stroke-width="2"/>
                    <path d="M9 9H9.01" stroke="var(--cta-accent)" stroke-width="2"/>
                    <path d="M15 9H15.01" stroke="var(--cta-accent)" stroke-width="2"/>
                  </svg>
                </div>
                <div class="product-status">
                  <span class="status-badge status-active">Active</span>
                </div>
              </div>
              <div class="product-info">
                <div class="product-name">Customer Support Suite</div>
                <div class="product-category">Support</div>
                <div class="product-price">$99/month</div>
                <div class="product-description">Complete customer support platform with ticketing system.</div>
              </div>
              <div class="product-stats">
                <div class="stat-item">
                  <span class="stat-label">Sales:</span>
                  <span class="stat-value">78</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Revenue:</span>
                  <span class="stat-value">$7,722</span>
                </div>
              </div>
              <div class="product-actions">
                <button class="btn btn-primary">Edit Product</button>
                <button class="btn btn-outline">View Details</button>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Product Performance</h3>
              <div class="card-actions">
                <button class="btn btn-accent">Add New Product</button>
                <button class="btn btn-outline">Export Catalog</button>
              </div>
            </div>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Units Sold</th>
                  <th>Revenue</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr class="data-row">
                  <td>Enterprise CRM Suite</td>
                  <td>Software</td>
                  <td>$299/month</td>
                  <td>156</td>
                  <td>$46,644</td>
                  <td><span class="status-badge status-active">Active</span></td>
                  <td>
                    <button class="btn btn-primary">Manage</button>
                  </td>
                </tr>
                <tr class="data-row">
                  <td>Document Manager</td>
                  <td>Productivity</td>
                  <td>$49/month</td>
                  <td>203</td>
                  <td>$9,947</td>
                  <td><span class="status-badge status-active">Active</span></td>
                  <td>
                    <button class="btn btn-primary">Manage</button>
                  </td>
                </tr>
                <tr class="data-row">
                  <td>Sales Analytics Pro</td>
                  <td>Analytics</td>
                  <td>$149/month</td>
                  <td>89</td>
                  <td>$13,261</td>
                  <td><span class="status-badge status-active">Active</span></td>
                  <td>
                    <button class="btn btn-primary">Manage</button>
                  </td>
                </tr>
                <tr class="data-row">
                  <td>AI Chat Assistant</td>
                  <td>AI Tools</td>
                  <td>$79/month</td>
                  <td>34</td>
                  <td>$2,686</td>
                  <td><span class="status-badge status-pending">Beta</span></td>
                  <td>
                    <button class="btn btn-primary">Manage</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Product Analytics</h3>
              <div class="card-actions">
                <button class="btn btn-outline">Detailed Report</button>
              </div>
            </div>
            <div class="grid grid-4">
              <div class="metric-card">
                <div class="metric-value">6</div>
                <div class="metric-label">Total Products</div>
                <div class="metric-change positive">+1</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">$84,943</div>
                <div class="metric-label">Total Revenue</div>
                <div class="metric-change positive">+12.5%</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">687</div>
                <div class="metric-label">Units Sold</div>
                <div class="metric-change positive">+8.3%</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">$123.65</div>
                <div class="metric-label">Avg. Order Value</div>
                <div class="metric-change positive">+4.2%</div>
              </div>
            </div>
          </div>
        `
      }
    }

    const data = moduleData[module] || moduleData.home
    return `
      <div class="content-section">
        <h2>${data.title}</h2>
        ${data.content}
      </div>
    `
  }

  initialize() {
    // Add event listeners for module navigation
    document.querySelectorAll('.sidebar-link[data-module]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const module = link.dataset.module
        this.loadModule(module)
        this.setActiveModule(link)
      })
    })
  }

  loadModule(module) {
    const content = document.getElementById('module-content')
    content.innerHTML = this.getModuleContent(module)
    this.currentModule = module
  }

  setActiveModule(activeLink) {
    document.querySelectorAll('.sidebar-link').forEach(link => {
      link.classList.remove('active')
    })
    activeLink.classList.add('active')
  }
}