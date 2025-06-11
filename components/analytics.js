export class AnalyticsSection {
  getSidebar() {
    return `
      <div class="sidebar-header">
        <div class="sidebar-title">Analytics</div>
      </div>
      <ul class="sidebar-nav">
        <li><a href="#" class="sidebar-link active" data-scroll="analytical-dashboard">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M3 3V21H21" stroke="currentColor" stroke-width="2"/>
            <path d="M7 12L12 7L16 11L21 6" stroke="currentColor" stroke-width="2"/>
            <circle cx="7" cy="12" r="1" fill="currentColor"/>
            <circle cx="12" cy="7" r="1" fill="currentColor"/>
            <circle cx="16" cy="11" r="1" fill="currentColor"/>
            <circle cx="21" cy="6" r="1" fill="currentColor"/>
          </svg>
          Analytical Dashboard
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="sales-insight">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2"/>
          </svg>
          Sales Insight
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="performance-analytics">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
            <path d="M12 1V5" stroke="currentColor" stroke-width="2"/>
            <path d="M12 19V23" stroke="currentColor" stroke-width="2"/>
            <path d="M4.22 4.22L6.34 6.34" stroke="currentColor" stroke-width="2"/>
            <path d="M17.66 17.66L19.78 19.78" stroke="currentColor" stroke-width="2"/>
            <path d="M1 12H5" stroke="currentColor" stroke-width="2"/>
            <path d="M19 12H23" stroke="currentColor" stroke-width="2"/>
            <path d="M4.22 19.78L6.34 17.66" stroke="currentColor" stroke-width="2"/>
            <path d="M17.66 6.34L19.78 4.22" stroke="currentColor" stroke-width="2"/>
          </svg>
          Performance Analytics
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="forecasting">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M21.2 8.4C21.9 9.2 22.8 10.7 21.4 12C20.8 12.8 20.2 13.1 19.7 13.2C19.4 13.3 19.2 13.3 19 13.3C18.4 13.3 17.8 13.1 17.3 12.8C16.3 12.1 15.7 11.1 15.7 10C15.7 8.4 17 7.1 18.6 7.1C19.2 7.1 19.7 7.3 20.2 7.6C20.7 7.9 21 8.1 21.2 8.4Z" stroke="currentColor" stroke-width="2"/>
            <path d="M3 3V21L21 21" stroke="currentColor" stroke-width="2"/>
            <path d="M7 17L12 12L16 16L21 11" stroke="currentColor" stroke-width="2"/>
          </svg>
          Forecasting
        </a></li>
      </ul>
    `
  }

  getContent() {
    return `
      <div class="section-header">
        <h1 class="section-title">Analytics Hub</h1>
        <p class="section-subtitle">Advanced analytics and business intelligence</p>
      </div>

      <div id="analytical-dashboard" class="content-section">
        <h2>Analytical Dashboard</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">96.7%</div>
            <div class="stat-label">Customer Satisfaction</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">$1.2M</div>
            <div class="stat-label">Monthly Revenue</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">18.5%</div>
            <div class="stat-label">Conversion Rate</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">2.3s</div>
            <div class="stat-label">Avg Response Time</div>
          </div>
        </div>

        <div class="grid grid-2">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Revenue Trends</h3>
              <div class="card-actions">
                <button class="btn btn-outline">Export</button>
              </div>
            </div>
            <div class="analytics-chart">
              <div class="chart-container">
                <div class="chart-placeholder large">
                  📈 Interactive Revenue Chart
                  <div class="chart-legend">
                    <div class="legend-item">
                      <div class="legend-color" style="background: var(--primary-green)"></div>
                      <span>Current Year</span>
                    </div>
                    <div class="legend-item">
                      <div class="legend-color" style="background: var(--secondary-green)"></div>
                      <span>Previous Year</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Customer Acquisition</h3>
              <div class="card-actions">
                <button class="btn btn-outline">Analyze</button>
              </div>
            </div>
            <div class="analytics-chart">
              <div class="chart-container">
                <div class="chart-placeholder large">
                  🎯 Acquisition Funnel
                  <div class="funnel-metrics">
                    <div class="metric-item">
                      <span class="metric-label">Visitors</span>
                      <span class="metric-value">12,450</span>
                    </div>
                    <div class="metric-item">
                      <span class="metric-label">Leads</span>
                      <span class="metric-value">2,890</span>
                    </div>
                    <div class="metric-item">
                      <span class="metric-label">Customers</span>
                      <span class="metric-value">534</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sales-insight" class="content-section">
        <h2>Sales Insight</h2>
        <div class="grid grid-3">
          <div class="card insight-card">
            <div class="card-header">
              <h3 class="card-title">Top Products</h3>
            </div>
            <div class="insight-content">
              <div class="product-ranking">
                <div class="ranking-item">
                  <div class="rank-number">1</div>
                  <div class="product-info">
                    <div class="product-name">Premium Package</div>
                    <div class="product-sales">$48,200</div>
                  </div>
                </div>
                <div class="ranking-item">
                  <div class="rank-number">2</div>
                  <div class="product-info">
                    <div class="product-name">Standard Plan</div>
                    <div class="product-sales">$32,450</div>
                  </div>
                </div>
                <div class="ranking-item">
                  <div class="rank-number">3</div>
                  <div class="product-info">
                    <div class="product-name">Basic Service</div>
                    <div class="product-sales">$18,900</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card insight-card">
            <div class="card-header">
              <h3 class="card-title">Sales by Region</h3>
            </div>
            <div class="insight-content">
              <div class="region-breakdown">
                <div class="region-item">
                  <div class="region-name">North America</div>
                  <div class="region-bar">
                    <div class="region-progress" style="width: 65%"></div>
                  </div>
                  <div class="region-value">65%</div>
                </div>
                <div class="region-item">
                  <div class="region-name">Europe</div>
                  <div class="region-bar">
                    <div class="region-progress" style="width: 25%"></div>
                  </div>
                  <div class="region-value">25%</div>
                </div>
                <div class="region-item">
                  <div class="region-name">Asia Pacific</div>
                  <div class="region-bar">
                    <div class="region-progress" style="width: 10%"></div>
                  </div>
                  <div class="region-value">10%</div>
                </div>
              </div>
            </div>
          </div>

          <div class="card insight-card">
            <div class="card-header">
              <h3 class="card-title">Deal Pipeline</h3>
            </div>
            <div class="insight-content">
              <div class="pipeline-stages">
                <div class="stage-item">
                  <div class="stage-name">Qualified</div>
                  <div class="stage-count">47</div>
                  <div class="stage-value">$2.1M</div>
                </div>
                <div class="stage-item">
                  <div class="stage-name">Proposal</div>
                  <div class="stage-count">23</div>
                  <div class="stage-value">$1.8M</div>
                </div>
                <div class="stage-item">
                  <div class="stage-name">Negotiation</div>
                  <div class="stage-count">12</div>
                  <div class="stage-value">$950K</div>
                </div>
                <div class="stage-item">
                  <div class="stage-name">Closing</div>
                  <div class="stage-count">8</div>
                  <div class="stage-value">$420K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="performance-analytics" class="content-section">
        <h2>Performance Analytics</h2>
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Team Performance Metrics</h3>
            <div class="card-actions">
              <button class="btn btn-primary">Generate Report</button>
            </div>
          </div>
          <table class="data-table">
            <thead>
              <tr>
                <th>Team Member</th>
                <th>Deals Closed</th>
                <th>Revenue Generated</th>
                <th>Activities</th>
                <th>Performance Score</th>
                <th>Trend</th>
              </tr>
            </thead>
            <tbody>
              <tr class="data-row">
                <td>Alice Johnson</td>
                <td>23</td>
                <td>$485,200</td>
                <td>156</td>
                <td>
                  <div class="performance-score excellent">94%</div>
                </td>
                <td>
                  <div class="trend-indicator up">↗️ +12%</div>
                </td>
              </tr>
              <tr class="data-row">
                <td>Bob Smith</td>
                <td>19</td>
                <td>$392,800</td>
                <td>142</td>
                <td>
                  <div class="performance-score good">89%</div>
                </td>
                <td>
                  <div class="trend-indicator up">↗️ +8%</div>
                </td>
              </tr>
              <tr class="data-row">
                <td>Carol Davis</td>
                <td>17</td>
                <td>$345,600</td>
                <td>128</td>
                <td>
                  <div class="performance-score good">85%</div>
                </td>
                <td>
                  <div class="trend-indicator stable">→ 0%</div>
                </td>
              </tr>
              <tr class="data-row">
                <td>David Wilson</td>
                <td>15</td>
                <td>$298,400</td>
                <td>118</td>
                <td>
                  <div class="performance-score average">78%</div>
                </td>
                <td>
                  <div class="trend-indicator down">↘️ -5%</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="forecasting" class="content-section">
        <h2>Sales Forecasting</h2>
        <div class="grid grid-2">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Revenue Forecast</h3>
              <div class="card-actions">
                <button class="btn btn-outline">Adjust Model</button>
              </div>
            </div>
            <div class="forecast-content">
              <div class="forecast-chart">
                <div class="chart-placeholder large">
                  📈 Revenue Forecast Chart
                  <div class="forecast-data">
                    <div class="forecast-period">
                      <div class="period-label">Next Quarter</div>
                      <div class="period-value">$3.2M</div>
                      <div class="confidence-level">87% confidence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Goal Tracking</h3>
              <div class="card-actions">
                <button class="btn btn-outline">Set Goals</button>
              </div>
            </div>
            <div class="goal-tracking">
              <div class="goal-item">
                <div class="goal-header">
                  <span class="goal-name">Quarterly Revenue</span>
                  <span class="goal-percentage">78%</span>
                </div>
                <div class="goal-bar">
                  <div class="goal-progress" style="width: 78%"></div>
                </div>
                <div class="goal-details">
                  <span>$2.5M of $3.2M target</span>
                </div>
              </div>

              <div class="goal-item">
                <div class="goal-header">
                  <span class="goal-name">New Customers</span>
                  <span class="goal-percentage">92%</span>
                </div>
                <div class="goal-bar">
                  <div class="goal-progress" style="width: 92%"></div>
                </div>
                <div class="goal-details">
                  <span>184 of 200 target</span>
                </div>
              </div>

              <div class="goal-item">
                <div class="goal-header">
                  <span class="goal-name">Team Activities</span>
                  <span class="goal-percentage">65%</span>
                </div>
                <div class="goal-bar">
                  <div class="goal-progress" style="width: 65%"></div>
                </div>
                <div class="goal-details">
                  <span>1,300 of 2,000 target</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  initialize() {
    // Add specific functionality for analytics section
    console.log('Analytics section initialized')
  }
}