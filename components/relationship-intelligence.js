export class RelationshipIntelligenceSection {
  getSidebar() {
    return `
      <div class="sidebar-header">
        <div class="sidebar-title">Relationship Intelligence</div>
      </div>
      <ul class="sidebar-nav">
        <li><a href="#" class="sidebar-link active" data-scroll="relationship-overview">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M20.84 4.61C19.32 3.09 17.35 2.24 15.28 2.24C13.21 2.24 11.24 3.09 9.72 4.61L12 6.89L14.28 4.61C15.8 3.09 18.2 3.09 19.72 4.61C21.24 6.13 21.24 8.53 19.72 10.05L12 17.77L4.28 10.05C2.76 8.53 2.76 6.13 4.28 4.61C5.8 3.09 8.2 3.09 9.72 4.61L12 6.89" stroke="currentColor" stroke-width="2"/>
          </svg>
          Relationship Overview
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="sentiment-analysis">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M8 14S9.5 16 12 16S16 14 16 14" stroke="currentColor" stroke-width="2"/>
            <path d="M9 9H9.01" stroke="currentColor" stroke-width="2"/>
            <path d="M15 9H15.01" stroke="currentColor" stroke-width="2"/>
          </svg>
          Sentiment Analysis
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="interaction-insights">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2"/>
          </svg>
          Interaction Insights
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="recommendations">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 11H15L13 13L15 15H9L11 13L9 11Z" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
          </svg>
          AI Recommendations
        </a></li>
      </ul>
    `
  }

  getContent() {
    return `
      <div class="section-header">
        <h1 class="section-title">Relationship Intelligence</h1>
        <p class="section-subtitle">AI-powered insights into customer relationship health and emotional dynamics</p>
      </div>

      <div id="relationship-overview" class="content-section">
        <h2>Relationship Health Overview</h2>
        <div class="grid grid-3">
          <div class="card relationship-score-card">
            <div class="card-header">
              <h3 class="card-title">Overall Relationship Score</h3>
              <div class="score-status positive">🟢 Healthy</div>
            </div>
            <div class="relationship-score-container">
              <div class="circular-progress" data-score="87">
                <svg class="progress-ring" width="200" height="200">
                  <circle class="progress-ring-background" cx="100" cy="100" r="85" stroke-width="12"/>
                  <circle class="progress-ring-fill" cx="100" cy="100" r="85" stroke-width="12"/>
                </svg>
                <div class="score-display">
                  <div class="score-number">87</div>
                  <div class="score-label">Relationship Score</div>
                </div>
              </div>
              <div class="score-breakdown">
                <div class="breakdown-item">
                  <span class="breakdown-label">Communication</span>
                  <div class="breakdown-bar">
                    <div class="breakdown-fill" style="width: 92%"></div>
                  </div>
                  <span class="breakdown-value">92%</span>
                </div>
                <div class="breakdown-item">
                  <span class="breakdown-label">Responsiveness</span>
                  <div class="breakdown-bar">
                    <div class="breakdown-fill" style="width: 78%"></div>
                  </div>
                  <span class="breakdown-value">78%</span>
                </div>
                <div class="breakdown-item">
                  <span class="breakdown-label">Satisfaction</span>
                  <div class="breakdown-bar">
                    <div class="breakdown-fill" style="width: 91%"></div>
                  </div>
                  <span class="breakdown-value">91%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card sentiment-trends-card">
            <div class="card-header">
              <h3 class="card-title">Sentiment Trends</h3>
              <div class="trend-indicator positive">📈 +12%</div>
            </div>
            <div class="sentiment-chart-container">
              <div class="mini-trendline-chart">
                <svg width="100%" height="120" viewBox="0 0 300 120">
                  <defs>
                    <linearGradient id="sentimentGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style="stop-color:#00A86B;stop-opacity:0.3"/>
                      <stop offset="100%" style="stop-color:#00A86B;stop-opacity:0"/>
                    </linearGradient>
                  </defs>
                  <path class="trend-line" d="M20,80 Q60,70 100,60 T180,45 T260,35" stroke="#00A86B" stroke-width="3" fill="none"/>
                  <path class="trend-area" d="M20,80 Q60,70 100,60 T180,45 T260,35 L260,100 L20,100 Z" fill="url(#sentimentGradient)"/>
                  <circle class="trend-point" cx="20" cy="80" r="4" fill="#00A86B"/>
                  <circle class="trend-point" cx="100" cy="60" r="4" fill="#00A86B"/>
                  <circle class="trend-point" cx="180" cy="45" r="4" fill="#00A86B"/>
                  <circle class="trend-point" cx="260" cy="35" r="4" fill="#00A86B"/>
                </svg>
              </div>
              <div class="sentiment-timeline">
                <div class="timeline-item">
                  <span class="timeline-date">Jan</span>
                  <span class="timeline-score">72</span>
                </div>
                <div class="timeline-item">
                  <span class="timeline-date">Feb</span>
                  <span class="timeline-score">78</span>
                </div>
                <div class="timeline-item">
                  <span class="timeline-date">Mar</span>
                  <span class="timeline-score">85</span>
                </div>
                <div class="timeline-item">
                  <span class="timeline-date">Apr</span>
                  <span class="timeline-score">87</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card status-overview-card">
            <div class="card-header">
              <h3 class="card-title">Relationship Status</h3>
            </div>
            <div class="status-tags-container">
              <div class="status-tag positive">
                <span class="status-emoji">😊</span>
                <span class="status-text">Positive</span>
              </div>
              <div class="status-tag engaged">
                <span class="status-emoji">🤝</span>
                <span class="status-text">Engaged</span>
              </div>
              <div class="status-tag responsive">
                <span class="status-emoji">⚡</span>
                <span class="status-text">Responsive</span>
              </div>
            </div>
            <div class="quick-stats">
              <div class="quick-stat">
                <div class="stat-number">24</div>
                <div class="stat-label">Days Since Last Contact</div>
              </div>
              <div class="quick-stat">
                <div class="stat-number">94%</div>
                <div class="stat-label">Response Rate</div>
              </div>
              <div class="quick-stat">
                <div class="stat-number">4.8</div>
                <div class="stat-label">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sentiment-analysis" class="content-section">
        <h2>Sentiment Analysis & Insights</h2>
        <div class="grid grid-2">
          <div class="card insight-pills-card">
            <div class="card-header">
              <h3 class="card-title">Communication Insights</h3>
              <div class="insight-refresh">
                <button class="btn btn-outline">🔄 Refresh</button>
              </div>
            </div>
            <div class="insight-pills-container">
              <div class="insight-pill positive">
                <span class="pill-icon">✅</span>
                <span class="pill-text">Quick Responses</span>
                <span class="pill-confidence">95%</span>
              </div>
              <div class="insight-pill neutral">
                <span class="pill-icon">⏰</span>
                <span class="pill-text">Delayed Responses</span>
                <span class="pill-confidence">23%</span>
              </div>
              <div class="insight-pill warning">
                <span class="pill-icon">😤</span>
                <span class="pill-text">Impatient Tone</span>
                <span class="pill-confidence">12%</span>
              </div>
              <div class="insight-pill positive">
                <span class="pill-icon">💬</span>
                <span class="pill-text">Detailed Feedback</span>
                <span class="pill-confidence">87%</span>
              </div>
              <div class="insight-pill neutral">
                <span class="pill-icon">❓</span>
                <span class="pill-text">Frequent Questions</span>
                <span class="pill-confidence">34%</span>
              </div>
              <div class="insight-pill positive">
                <span class="pill-icon">👍</span>
                <span class="pill-text">Positive Language</span>
                <span class="pill-confidence">91%</span>
              </div>
            </div>
          </div>

          <div class="card emotion-analysis-card">
            <div class="card-header">
              <h3 class="card-title">Emotional Analysis</h3>
            </div>
            <div class="emotion-breakdown">
              <div class="emotion-item">
                <div class="emotion-icon">😊</div>
                <div class="emotion-details">
                  <div class="emotion-name">Joy</div>
                  <div class="emotion-bar">
                    <div class="emotion-fill joy" style="width: 78%"></div>
                  </div>
                  <div class="emotion-percentage">78%</div>
                </div>
              </div>
              <div class="emotion-item">
                <div class="emotion-icon">😐</div>
                <div class="emotion-details">
                  <div class="emotion-name">Neutral</div>
                  <div class="emotion-bar">
                    <div class="emotion-fill neutral" style="width: 15%"></div>
                  </div>
                  <div class="emotion-percentage">15%</div>
                </div>
              </div>
              <div class="emotion-item">
                <div class="emotion-icon">😟</div>
                <div class="emotion-details">
                  <div class="emotion-name">Concern</div>
                  <div class="emotion-bar">
                    <div class="emotion-fill concern" style="width: 7%"></div>
                  </div>
                  <div class="emotion-percentage">7%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="interaction-insights" class="content-section">
        <h2>Interaction Insights</h2>
        <div class="card interaction-timeline-card">
          <div class="card-header">
            <h3 class="card-title">Recent Interaction Timeline</h3>
            <div class="timeline-filters">
              <button class="btn btn-outline active">7 Days</button>
              <button class="btn btn-outline">30 Days</button>
              <button class="btn btn-outline">90 Days</button>
            </div>
          </div>
          <div class="interaction-timeline">
            <div class="timeline-item-detailed positive">
              <div class="timeline-dot positive"></div>
              <div class="timeline-content">
                <div class="timeline-header">
                  <span class="timeline-title">Product Demo Call</span>
                  <span class="timeline-sentiment positive">😊 Positive</span>
                  <span class="timeline-date">2 days ago</span>
                </div>
                <div class="timeline-description">Customer expressed high interest in premium features. Tone was enthusiastic and engaged throughout the 45-minute call.</div>
                <div class="timeline-metrics">
                  <span class="metric">Engagement: 94%</span>
                  <span class="metric">Sentiment: +0.8</span>
                  <span class="metric">Duration: 45min</span>
                </div>
              </div>
            </div>
            
            <div class="timeline-item-detailed neutral">
              <div class="timeline-dot neutral"></div>
              <div class="timeline-content">
                <div class="timeline-header">
                  <span class="timeline-title">Support Ticket Response</span>
                  <span class="timeline-sentiment neutral">😐 Neutral</span>
                  <span class="timeline-date">5 days ago</span>
                </div>
                <div class="timeline-description">Quick response to technical question. Professional tone but no emotional indicators.</div>
                <div class="timeline-metrics">
                  <span class="metric">Engagement: 67%</span>
                  <span class="metric">Sentiment: 0.1</span>
                  <span class="metric">Response Time: 2h</span>
                </div>
              </div>
            </div>

            <div class="timeline-item-detailed warning">
              <div class="timeline-dot warning"></div>
              <div class="timeline-content">
                <div class="timeline-header">
                  <span class="timeline-title">Billing Inquiry</span>
                  <span class="timeline-sentiment warning">😤 Frustrated</span>
                  <span class="timeline-date">1 week ago</span>
                </div>
                <div class="timeline-description">Customer expressed frustration about unexpected charges. Used urgent language and requested immediate resolution.</div>
                <div class="timeline-metrics">
                  <span class="metric">Engagement: 89%</span>
                  <span class="metric">Sentiment: -0.6</span>
                  <span class="metric">Urgency: High</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="recommendations" class="content-section">
        <h2>AI-Powered Recommendations</h2>
        <div class="grid grid-2">
          <div class="card ai-suggestions-card">
            <div class="card-header">
              <h3 class="card-title">Next Best Actions</h3>
              <div class="ai-badge">
                <span class="ai-icon">🤖</span>
                <span>AI Powered</span>
              </div>
            </div>
            <div class="suggestions-container">
              <div class="suggestion-box high-priority">
                <div class="suggestion-header">
                  <span class="priority-indicator high">🔥 High Priority</span>
                  <span class="confidence-score">92% Confidence</span>
                </div>
                <div class="suggestion-title">Schedule Follow-up Call</div>
                <div class="suggestion-description">Customer showed high interest in premium features during last demo. Strike while the iron is hot!</div>
                <div class="suggestion-actions">
                  <button class="btn btn-primary">Schedule Call</button>
                  <button class="btn btn-outline">Dismiss</button>
                </div>
              </div>

              <div class="suggestion-box medium-priority">
                <div class="suggestion-header">
                  <span class="priority-indicator medium">⚡ Medium Priority</span>
                  <span class="confidence-score">78% Confidence</span>
                </div>
                <div class="suggestion-title">Send Personalized Content</div>
                <div class="suggestion-description">Based on interaction history, customer would benefit from case studies in their industry.</div>
                <div class="suggestion-actions">
                  <button class="btn btn-secondary">Send Content</button>
                  <button class="btn btn-outline">View Content</button>
                </div>
              </div>

              <div class="suggestion-box low-priority">
                <div class="suggestion-header">
                  <span class="priority-indicator low">💡 Low Priority</span>
                  <span class="confidence-score">65% Confidence</span>
                </div>
                <div class="suggestion-title">Update Contact Preferences</div>
                <div class="suggestion-description">Customer prefers email over phone calls based on response patterns.</div>
                <div class="suggestion-actions">
                  <button class="btn btn-outline">Update Preferences</button>
                </div>
              </div>
            </div>
          </div>

          <div class="card relationship-forecast-card">
            <div class="card-header">
              <h3 class="card-title">Relationship Forecast</h3>
              <div class="forecast-period">Next 30 Days</div>
            </div>
            <div class="forecast-container">
              <div class="forecast-score">
                <div class="forecast-number">89</div>
                <div class="forecast-label">Predicted Score</div>
                <div class="forecast-change positive">+2 points</div>
              </div>
              <div class="forecast-factors">
                <div class="factor-item positive">
                  <span class="factor-icon">📈</span>
                  <span class="factor-text">Increasing engagement</span>
                  <span class="factor-impact">+3</span>
                </div>
                <div class="factor-item neutral">
                  <span class="factor-icon">📅</span>
                  <span class="factor-text">Regular check-ins</span>
                  <span class="factor-impact">+1</span>
                </div>
                <div class="factor-item warning">
                  <span class="factor-icon">⏰</span>
                  <span class="factor-text">Delayed responses</span>
                  <span class="factor-impact">-2</span>
                </div>
              </div>
              <div class="forecast-actions">
                <button class="btn btn-accent">View Full Forecast</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  initialize() {
    this.initializeCircularProgress()
    this.initializeTrendlineAnimation()
    this.initializeInsightPills()
    this.initializeSuggestionBoxes()
    console.log('Relationship Intelligence section initialized')
  }

  initializeCircularProgress() {
    const progressRings = document.querySelectorAll('.circular-progress')
    
    progressRings.forEach(ring => {
      const score = parseInt(ring.dataset.score)
      const circle = ring.querySelector('.progress-ring-fill')
      const scoreNumber = ring.querySelector('.score-number')
      
      if (circle && scoreNumber) {
        const radius = 85
        const circumference = 2 * Math.PI * radius
        
        circle.style.strokeDasharray = circumference
        circle.style.strokeDashoffset = circumference
        
        // Animate the progress ring
        setTimeout(() => {
          const offset = circumference - (score / 100) * circumference
          circle.style.strokeDashoffset = offset
          
          // Animate the number
          this.animateNumber(scoreNumber, 0, score, 2000)
        }, 500)
      }
    })
  }

  initializeTrendlineAnimation() {
    const trendLines = document.querySelectorAll('.trend-line')
    const trendPoints = document.querySelectorAll('.trend-point')
    
    trendLines.forEach(line => {
      const length = line.getTotalLength()
      line.style.strokeDasharray = length
      line.style.strokeDashoffset = length
      
      setTimeout(() => {
        line.style.strokeDashoffset = 0
      }, 1000)
    })
    
    // Animate trend points
    trendPoints.forEach((point, index) => {
      setTimeout(() => {
        point.style.opacity = 1
        point.style.transform = 'scale(1)'
      }, 1500 + (index * 200))
    })
  }

  initializeInsightPills() {
    const pills = document.querySelectorAll('.insight-pill')
    
    pills.forEach((pill, index) => {
      pill.addEventListener('mouseenter', () => {
        pill.style.transform = 'translateY(-4px) scale(1.05)'
        pill.style.boxShadow = '0 8px 25px rgba(0, 168, 107, 0.3)'
      })
      
      pill.addEventListener('mouseleave', () => {
        pill.style.transform = 'translateY(0) scale(1)'
        pill.style.boxShadow = ''
      })
      
      // Staggered entrance animation
      setTimeout(() => {
        pill.style.opacity = 1
        pill.style.transform = 'translateY(0)'
      }, index * 150)
    })
  }

  initializeSuggestionBoxes() {
    const suggestionBoxes = document.querySelectorAll('.suggestion-box')
    
    suggestionBoxes.forEach(box => {
      box.addEventListener('mouseenter', () => {
        box.style.transform = 'translateY(-8px) scale(1.02)'
        box.style.boxShadow = '0 15px 40px rgba(0, 168, 107, 0.2)'
      })
      
      box.addEventListener('mouseleave', () => {
        box.style.transform = 'translateY(0) scale(1)'
        box.style.boxShadow = ''
      })
    })
  }

  animateNumber(element, start, end, duration) {
    const startTime = performance.now()
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      const current = Math.floor(start + (end - start) * progress)
      element.textContent = current
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }
}