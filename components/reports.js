export class ReportsSection {
  getSidebar() {
    return `
      <div class="sidebar-header">
        <div class="sidebar-title">Reports</div>
      </div>
      <ul class="sidebar-nav">
        <li><a href="#" class="sidebar-link active" data-scroll="my-reports">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2"/>
            <path d="M14 2V8H20" stroke="currentColor" stroke-width="2"/>
            <path d="M16 13H8" stroke="currentColor" stroke-width="2"/>
            <path d="M16 17H8" stroke="currentColor" stroke-width="2"/>
            <path d="M10 9H9H8" stroke="currentColor" stroke-width="2"/>
          </svg>
          My Reports
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="all-reports">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M8 6H21" stroke="currentColor" stroke-width="2"/>
            <path d="M8 12H21" stroke="currentColor" stroke-width="2"/>
            <path d="M8 18H21" stroke="currentColor" stroke-width="2"/>
            <path d="M3 6H3.01" stroke="currentColor" stroke-width="2"/>
            <path d="M3 12H3.01" stroke="currentColor" stroke-width="2"/>
            <path d="M3 18H3.01" stroke="currentColor" stroke-width="2"/>
          </svg>
          All Reports
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="favourites">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2"/>
          </svg>
          Favourites
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="shared-reports">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12" stroke="currentColor" stroke-width="2"/>
            <path d="M16 6L12 2L8 6" stroke="currentColor" stroke-width="2"/>
            <path d="M12 2V15" stroke="currentColor" stroke-width="2"/>
          </svg>
          Shared Reports
        </a></li>
      </ul>
    `
  }

  getContent() {
    return `
      <div class="section-header">
        <h1 class="section-title">Reports & Analytics</h1>
        <p class="section-subtitle">Comprehensive reporting and data insights</p>
      </div>

      <div id="my-reports" class="content-section">
        <h2>My Reports</h2>
        <div class="grid grid-3">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Sales Performance</h3>
              <div class="card-actions">
                <button class="btn btn-outline">View</button>
              </div>
            </div>
            <div class="report-preview">
              <div class="chart-placeholder">
                📊 Sales Chart
              </div>
              <div class="report-stats">
                <div class="stat-item">
                  <span class="stat-label">This Month:</span>
                  <span class="stat-value">$48,500</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Growth:</span>
                  <span class="stat-value text-success">+12.5%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Lead Conversion</h3>
              <div class="card-actions">
                <button class="btn btn-outline">View</button>
              </div>
            </div>
            <div class="report-preview">
              <div class="chart-placeholder">
                📈 Conversion Chart
              </div>
              <div class="report-stats">
                <div class="stat-item">
                  <span class="stat-label">Conversion Rate:</span>
                  <span class="stat-value">18.7%</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Total Leads:</span>
                  <span class="stat-value">1,247</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Customer Activity</h3>
              <div class="card-actions">
                <button class="btn btn-outline">View</button>
              </div>
            </div>
            <div class="report-preview">
              <div class="chart-placeholder">
                📊 Activity Chart
              </div>
              <div class="report-stats">
                <div class="stat-item">
                  <span class="stat-label">Active Users:</span>
                  <span class="stat-value">892</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Engagement:</span>
                  <span class="stat-value text-success">+8.3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="all-reports" class="content-section">
        <h2>All Reports</h2>
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Available Reports</h3>
            <div class="card-actions">
              <button class="btn btn-accent">Create New</button>
              <button class="btn btn-outline">Import</button>
            </div>
          </div>
          <table class="data-table">
            <thead>
              <tr>
                <th>Report Name</th>
                <th>Type</th>
                <th>Created By</th>
                <th>Last Modified</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr class="data-row">
                <td>Q4 Sales Summary</td>
                <td>Sales</td>
                <td>John Smith</td>
                <td>2 days ago</td>
                <td><span class="status-badge status-completed">Active</span></td>
                <td>
                  <button class="btn btn-primary">View</button>
                  <button class="btn btn-outline">Edit</button>
                </td>
              </tr>
              <tr class="data-row">
                <td>Lead Source Analysis</td>
                <td>Marketing</td>
                <td>Sarah Johnson</td>
                <td>1 week ago</td>
                <td><span class="status-badge status-completed">Active</span></td>
                <td>
                  <button class="btn btn-primary">View</button>
                  <button class="btn btn-outline">Edit</button>
                </td>
              </tr>
              <tr class="data-row">
                <td>Customer Satisfaction</td>
                <td>Support</td>
                <td>Mike Wilson</td>
                <td>3 days ago</td>
                <td><span class="status-badge status-pending">Draft</span></td>
                <td>
                  <button class="btn btn-primary">View</button>
                  <button class="btn btn-outline">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="favourites" class="content-section">
        <h2>Favourite Reports</h2>
        <div class="grid grid-2">
          <div class="card favourite-card">
            <div class="card-header">
              <h3 class="card-title">Monthly Revenue</h3>
              <div class="favourite-star">⭐</div>
            </div>
            <div class="report-preview">
              <div class="metric-large">$248,500</div>
              <div class="metric-change positive">+15.2% from last month</div>
            </div>
          </div>

          <div class="card favourite-card">
            <div class="card-header">
              <h3 class="card-title">Top Performers</h3>
              <div class="favourite-star">⭐</div>
            </div>
            <div class="report-preview">
              <div class="performer-list">
                <div class="performer-item">
                  <span class="performer-name">Alice Johnson</span>
                  <span class="performer-score">94%</span>
                </div>
                <div class="performer-item">
                  <span class="performer-name">Bob Smith</span>
                  <span class="performer-score">89%</span>
                </div>
                <div class="performer-item">
                  <span class="performer-name">Carol Davis</span>
                  <span class="performer-score">85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="shared-reports" class="content-section">
        <h2>Shared Reports</h2>
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Reports Shared With Me</h3>
            <div class="card-actions">
              <button class="btn btn-outline">Share Report</button>
            </div>
          </div>
          <div class="shared-reports-list">
            <div class="shared-report-item">
              <div class="report-info">
                <div class="report-name">Team Performance Dashboard</div>
                <div class="report-meta">Shared by: David Chen • 2 days ago</div>
              </div>
              <div class="report-actions">
                <button class="btn btn-primary">Open</button>
                <button class="btn btn-outline">Copy</button>
              </div>
            </div>
            <div class="shared-report-item">
              <div class="report-info">
                <div class="report-name">Customer Acquisition Cost</div>
                <div class="report-meta">Shared by: Emma Wilson • 1 week ago</div>
              </div>
              <div class="report-actions">
                <button class="btn btn-primary">Open</button>
                <button class="btn btn-outline">Copy</button>
              </div>
            </div>
            <div class="shared-report-item">
              <div class="report-info">
                <div class="report-name">Regional Sales Breakdown</div>
                <div class="report-meta">Shared by: Lisa Rodriguez • 3 days ago</div>
              </div>
              <div class="report-actions">
                <button class="btn btn-primary">Open</button>
                <button class="btn btn-outline">Copy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  initialize() {
    // Add specific functionality for reports section
    console.log('Reports section initialized')
  }
}