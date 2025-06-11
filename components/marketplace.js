export class MarketplaceSection {
  getSidebar() {
    return `
      <div class="sidebar-header">
        <div class="sidebar-title">Marketplace</div>
      </div>
      <ul class="sidebar-nav">
        <li><a href="#" class="sidebar-link active" data-scroll="featured-apps">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2"/>
          </svg>
          Featured Apps
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="categories">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
            <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
            <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
            <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
          </svg>
          Categories
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="my-apps">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
          </svg>
          My Apps
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="developer-tools">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M16 18L22 12L16 6" stroke="currentColor" stroke-width="2"/>
            <path d="M8 6L2 12L8 18" stroke="currentColor" stroke-width="2"/>
          </svg>
          Developer Tools
        </a></li>
      </ul>
    `
  }

  getContent() {
    return `
      <div class="section-header">
        <h1 class="section-title">App Marketplace</h1>
        <p class="section-subtitle">Discover and install apps to extend your CRM capabilities</p>
      </div>

      <div id="featured-apps" class="content-section">
        <h2>Featured Apps</h2>
        <div class="grid grid-3">
          <div class="card app-card featured">
            <div class="app-header">
              <div class="app-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="var(--primary-green)" stroke-width="2" fill="var(--secondary-green-bg)"/>
                </svg>
              </div>
              <div class="featured-badge">✨ Featured</div>
            </div>
            <div class="app-content">
              <div class="app-title">Email Marketing Pro</div>
              <div class="app-developer">by MarketingTools Inc.</div>
              <div class="app-description">Advanced email marketing automation with CRM integration. Create campaigns, track performance, and nurture leads.</div>
              <div class="app-stats">
                <div class="app-rating">
                  <span class="stars">⭐⭐⭐⭐⭐</span>
                  <span class="rating-text">4.8 (1,240 reviews)</span>
                </div>
                <div class="app-installs">50K+ installs</div>
              </div>
            </div>
            <div class="app-actions">
              <button class="btn btn-accent">Install</button>
              <button class="btn btn-outline">Learn More</button>
            </div>
          </div>

          <div class="card app-card featured">
            <div class="app-header">
              <div class="app-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M3 3V21H21" stroke="var(--primary-green)" stroke-width="2"/>
                  <path d="M7 12L12 7L16 11L21 6" stroke="var(--primary-green)" stroke-width="2"/>
                  <circle cx="7" cy="12" r="2" fill="var(--secondary-green)"/>
                  <circle cx="12" cy="7" r="2" fill="var(--secondary-green)"/>
                  <circle cx="16" cy="11" r="2" fill="var(--secondary-green)"/>
                  <circle cx="21" cy="6" r="2" fill="var(--secondary-green)"/>
                </svg>
              </div>
              <div class="featured-badge">✨ Featured</div>
            </div>
            <div class="app-content">
              <div class="app-title">Advanced Analytics</div>
              <div class="app-developer">by DataInsights Co.</div>
              <div class="app-description">Powerful analytics and reporting tools with predictive insights and custom dashboards.</div>
              <div class="app-stats">
                <div class="app-rating">
                  <span class="stars">⭐⭐⭐⭐⭐</span>
                  <span class="rating-text">4.9 (856 reviews)</span>
                </div>
                <div class="app-installs">25K+ installs</div>
              </div>
            </div>
            <div class="app-actions">
              <button class="btn btn-accent">Install</button>
              <button class="btn btn-outline">Learn More</button>
            </div>
          </div>

          <div class="card app-card featured">
            <div class="app-header">
              <div class="app-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19.92C22 20.9985 21.1046 21.8977 20.0261 21.8599C18.0049 21.7652 16.0369 21.2695 14.2116 20.4C12.5237 19.6084 10.9963 18.5092 9.69501 17.1493C8.33509 15.8479 7.23611 14.3205 6.44501 12.6327C5.57504 10.8073 5.07933 8.83934 4.98501 6.81797C4.94721 5.73954 5.84641 4.84434 6.92501 4.84434H9.92501C10.9296 4.84434 11.7684 5.60575 11.8684 6.60345C11.9564 7.48693 12.1763 8.35627 12.5216 9.18135C12.7906 9.80697 12.6165 10.5257 12.0884 10.9538L10.8284 12.0738C11.7734 13.8582 13.1416 15.2263 14.926 16.1713L16.046 14.9113C16.4741 14.3832 17.1928 14.2091 17.8184 14.4781C18.6435 14.8234 19.5129 15.0433 20.3963 15.1313C21.394 15.2313 22.1554 16.0701 22.1554 17.0747" stroke="var(--primary-green)" stroke-width="2" fill="var(--secondary-green-bg)"/>
                </svg>
              </div>
              <div class="featured-badge">✨ Featured</div>
            </div>
            <div class="app-content">
              <div class="app-title">VoIP Integration</div>
              <div class="app-developer">by CommSolutions Ltd.</div>
              <div class="app-description">Seamless phone system integration with call logging, recording, and automatic contact updates.</div>
              <div class="app-stats">
                <div class="app-rating">
                  <span class="stars">⭐⭐⭐⭐⭐</span>
                  <span class="rating-text">4.7 (2,134 reviews)</span>
                </div>
                <div class="app-installs">75K+ installs</div>
              </div>
            </div>
            <div class="app-actions">
              <button class="btn btn-accent">Install</button>
              <button class="btn btn-outline">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <div id="categories" class="content-section">
        <h2>Browse by Category</h2>
        <div class="grid grid-4">
          <div class="category-card">
            <div class="category-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="category-name">Marketing</div>
            <div class="category-count">23 apps</div>
          </div>

          <div class="category-card">
            <div class="category-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M3 3V21H21" stroke="currentColor" stroke-width="2"/>
                <path d="M7 12L12 7L16 11L21 6" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="category-name">Analytics</div>
            <div class="category-count">18 apps</div>
          </div>

          <div class="category-card">
            <div class="category-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="category-name">Sales</div>
            <div class="category-count">31 apps</div>
          </div>

          <div class="category-card">
            <div class="category-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="currentColor" stroke-width="2"/>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="category-name">Productivity</div>
            <div class="category-count">45 apps</div>
          </div>

          <div class="category-card">
            <div class="category-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92V19.92C22 20.9985 21.1046 21.8977 20.0261 21.8599C18.0049 21.7652 16.0369 21.2695 14.2116 20.4C12.5237 19.6084 10.9963 18.5092 9.69501 17.1493C8.33509 15.8479 7.23611 14.3205 6.44501 12.6327C5.57504 10.8073 5.07933 8.83934 4.98501 6.81797C4.94721 5.73954 5.84641 4.84434 6.92501 4.84434H9.92501" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="category-name">Communication</div>
            <div class="category-count">27 apps</div>
          </div>

          <div class="category-card">
            <div class="category-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                <path d="M8 14S9.5 16 12 16S16 14 16 14" stroke="currentColor" stroke-width="2"/>
                <path d="M9 9H9.01" stroke="currentColor" stroke-width="2"/>
                <path d="M15 9H15.01" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="category-name">Customer Service</div>
            <div class="category-count">19 apps</div>
          </div>

          <div class="category-card">
            <div class="category-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
                <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" stroke-width="2"/>
                <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="category-name">Integrations</div>
            <div class="category-count">52 apps</div>
          </div>

          <div class="category-card">
            <div class="category-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="category-name">Finance</div>
            <div class="category-count">14 apps</div>
          </div>
        </div>
      </div>

      <div id="my-apps" class="content-section">
        <h2>My Installed Apps</h2>
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Currently Installed</h3>
            <div class="card-actions">
              <button class="btn btn-outline">Manage All</button>
            </div>
          </div>
          <div class="installed-apps-grid">
            <div class="installed-app-item">
              <div class="app-info">
                <div class="app-icon small">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="app-details">
                  <div class="app-name">Email Marketing Pro</div>
                  <div class="app-status">Active • Version 2.1.4</div>
                </div>
              </div>
              <div class="app-actions">
                <button class="btn btn-outline">Configure</button>
                <button class="btn btn-outline">Remove</button>
              </div>
            </div>

            <div class="installed-app-item">
              <div class="app-info">
                <div class="app-icon small">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92V19.92C22 20.9985 21.1046 21.8977 20.0261 21.8599C18.0049 21.7652 16.0369 21.2695 14.2116 20.4" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="app-details">
                  <div class="app-name">VoIP Integration</div>
                  <div class="app-status">Active • Version 1.8.2</div>
                </div>
              </div>
              <div class="app-actions">
                <button class="btn btn-outline">Configure</button>
                <button class="btn btn-outline">Remove</button>
              </div>
            </div>

            <div class="installed-app-item">
              <div class="app-info">
                <div class="app-icon small">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <div class="app-details">
                  <div class="app-name">Document Manager</div>
                  <div class="app-status">Active • Version 3.2.1</div>
                </div>
              </div>
              <div class="app-actions">
                <button class="btn btn-outline">Configure</button>
                <button class="btn btn-outline">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="developer-tools" class="content-section">
        <h2>Developer Tools</h2>
        <div class="grid grid-2">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">API Documentation</h3>
            </div>
            <div class="developer-content">
              <p>Comprehensive API documentation for building custom integrations and applications.</p>
              <div class="feature-list">
                <div class="feature-item">📖 REST API Reference</div>
                <div class="feature-item">🔧 SDK Downloads</div>
                <div class="feature-item">💡 Code Examples</div>
                <div class="feature-item">🚀 Quick Start Guide</div>
              </div>
              <button class="btn btn-primary">View Documentation</button>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">App Development Kit</h3>
            </div>
            <div class="developer-content">
              <p>Tools and resources for building your own CRM applications and extensions.</p>
              <div class="feature-list">
                <div class="feature-item">🛠️ Development Tools</div>
                <div class="feature-item">📱 App Templates</div>
                <div class="feature-item">🔐 Authentication Kit</div>
                <div class="feature-item">📊 Analytics SDK</div>
              </div>
              <button class="btn btn-primary">Download SDK</button>
            </div>
          </div>
        </div>
      </div>
    `
  }

  initialize() {
    // Add specific functionality for marketplace section
    console.log('Marketplace section initialized')
  }
}