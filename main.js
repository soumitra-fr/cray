import './style.css'
import { ModulesSection } from './components/modules.js'
import { ReportsSection } from './components/reports.js'
import { AnalyticsSection } from './components/analytics.js'
import { RequestsSection } from './components/requests.js'
import { MarketplaceSection } from './components/marketplace.js'

class CRMApp {
  constructor() {
    this.currentSection = 'modules'
    this.sections = {
      modules: new ModulesSection(),
      reports: new ReportsSection(),
      analytics: new AnalyticsSection(),
      requests: new RequestsSection(),
      marketplace: new MarketplaceSection()
    }
    
    this.mouse = { x: 0, y: 0 }
    this.particles = []
    this.animationFrame = null
    this.chatbotOpen = false
    
    this.initializeEventListeners()
    this.initializeAdvancedAnimations()
    this.initializeChatbot()
    this.loadSection('modules')
    this.hideLoading()
  }

  initializeEventListeners() {
    // Navigation buttons with enhanced animations
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        const section = btn.dataset.section
        this.loadSection(section)
        this.setActiveNav(btn)
        this.createNavClickEffect(e)
      })

      // Add micro-interactions to nav buttons
      btn.addEventListener('mouseenter', (e) => {
        this.addMicroInteraction(e.target, 'micro-glow')
      })

      btn.addEventListener('mouseleave', (e) => {
        this.removeMicroInteraction(e.target, 'micro-glow')
      })
    })

    // Enhanced smooth scrolling with easing
    document.addEventListener('click', (e) => {
      if (e.target instanceof Element && e.target.matches('.sidebar-link[data-scroll]')) {
        e.preventDefault()
        const targetId = e.target.dataset.scroll
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          this.smoothScrollToElement(targetElement)
          this.updateActiveSidebarLink(e.target)
          this.createScrollEffect(e)
        }
      }
    })

    // Mouse tracking for magnetic effects
    document.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX
      this.mouse.y = e.clientY
      this.updateMagneticElements(e)
      this.updateParallaxElements(e)
    })

    // Enhanced micro-interactions
    this.addGodTierMicroInteractions()
    
    // Intersection Observer for scroll animations
    this.initializeScrollAnimations()
    
    // Particle system
    this.initializeParticleSystem()
    
    // Advanced hover effects
    this.initializeAdvancedHoverEffects()
    
    // Keyboard interactions
    this.initializeKeyboardInteractions()

    // Enhanced click interactions
    this.initializeEnhancedClickInteractions()
  }

  initializeAdvancedAnimations() {
    // Staggered entrance animations
    this.animateElementsOnLoad()
    
    // Breathing effect for important elements
    this.addBreathingEffect()
    
    // Floating animations
    this.addFloatingAnimations()
    
    // Typewriter effects
    this.addTypewriterEffects()
    
    // Morphing animations
    this.addMorphingAnimations()
  }

  initializeChatbot() {
    // Create chatbot HTML
    const chatbotHTML = `
      <div class="chatbot-container">
        <button class="chatbot-button" id="chatbot-toggle">
          💬
        </button>
        <div class="chatbot-popup" id="chatbot-popup">
          <div class="chatbot-header">
            <div class="chatbot-title">
              🤖 CRM Assistant
            </div>
            <button class="chatbot-close" id="chatbot-close">×</button>
          </div>
          <div class="chatbot-content">
            <div class="chatbot-welcome">
              <h3>How can I help you today?</h3>
              <p>Choose a topic below or ask me anything about your CRM!</p>
            </div>
            <div class="chatbot-queries">
              <button class="query-button" data-query="sales">
                📊 How to track sales performance?
              </button>
              <button class="query-button" data-query="leads">
                🎯 Managing leads effectively
              </button>
              <button class="query-button" data-query="reports">
                📈 Creating custom reports
              </button>
              <button class="query-button" data-query="automation">
                ⚡ Setting up automation
              </button>
            </div>
            <div class="chatbot-response" id="chatbot-response"></div>
          </div>
        </div>
      </div>
    `

    // Add chatbot to the page
    document.body.insertAdjacentHTML('beforeend', chatbotHTML)

    // Add event listeners
    const chatbotToggle = document.getElementById('chatbot-toggle')
    const chatbotPopup = document.getElementById('chatbot-popup')
    const chatbotClose = document.getElementById('chatbot-close')
    const queryButtons = document.querySelectorAll('.query-button')

    chatbotToggle.addEventListener('click', () => {
      this.toggleChatbot()
    })

    chatbotClose.addEventListener('click', () => {
      this.closeChatbot()
    })

    queryButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const query = e.target.dataset.query
        this.handleChatbotQuery(query)
        this.addMicroInteraction(e.target, 'micro-bounce')
      })
    })

    // Add micro-interactions to chatbot elements
    chatbotToggle.addEventListener('mouseenter', () => {
      this.addMicroInteraction(chatbotToggle, 'micro-rotate')
    })

    queryButtons.forEach(button => {
      button.addEventListener('mouseenter', (e) => {
        this.addMicroInteraction(e.target, 'micro-glow')
      })
      button.addEventListener('mouseleave', (e) => {
        this.removeMicroInteraction(e.target, 'micro-glow')
      })
    })
  }

  toggleChatbot() {
    const popup = document.getElementById('chatbot-popup')
    this.chatbotOpen = !this.chatbotOpen
    
    if (this.chatbotOpen) {
      popup.classList.add('show')
      this.createParticleExplosion(document.getElementById('chatbot-toggle'))
    } else {
      popup.classList.remove('show')
    }
  }

  closeChatbot() {
    const popup = document.getElementById('chatbot-popup')
    popup.classList.remove('show')
    this.chatbotOpen = false
  }

  handleChatbotQuery(query) {
    const responseDiv = document.getElementById('chatbot-response')
    const responses = {
      sales: {
        title: "📊 Sales Performance Tracking",
        content: `
          <p>Here's how to effectively track your sales performance:</p>
          <ul>
            <li>Use the Analytics dashboard for real-time metrics</li>
            <li>Set up custom KPIs and goals</li>
            <li>Monitor conversion rates and pipeline health</li>
            <li>Generate automated weekly/monthly reports</li>
            <li>Track individual and team performance</li>
          </ul>
          <p>Navigate to <strong>Analytics > Sales Insight</strong> to get started!</p>
        `
      },
      leads: {
        title: "🎯 Lead Management Best Practices",
        content: `
          <p>Maximize your lead conversion with these strategies:</p>
          <ul>
            <li>Qualify leads using our scoring system</li>
            <li>Set up automated follow-up sequences</li>
            <li>Use tags and categories for organization</li>
            <li>Track lead sources and campaign effectiveness</li>
            <li>Implement lead nurturing workflows</li>
          </ul>
          <p>Check out <strong>Modules > Leads</strong> for detailed lead management tools!</p>
        `
      },
      reports: {
        title: "📈 Custom Report Creation",
        content: `
          <p>Create powerful custom reports in just a few steps:</p>
          <ul>
            <li>Choose from 50+ pre-built report templates</li>
            <li>Customize data fields and filters</li>
            <li>Set up automated report scheduling</li>
            <li>Share reports with team members</li>
            <li>Export to PDF, Excel, or CSV formats</li>
          </ul>
          <p>Visit <strong>Reports > All Reports</strong> to start building your custom reports!</p>
        `
      },
      automation: {
        title: "⚡ CRM Automation Setup",
        content: `
          <p>Streamline your workflow with smart automation:</p>
          <ul>
            <li>Email sequences for lead nurturing</li>
            <li>Task assignment based on deal stages</li>
            <li>Automatic data entry and updates</li>
            <li>Trigger-based notifications and alerts</li>
            <li>Integration with external tools and apps</li>
          </ul>
          <p>Explore <strong>Marketplace > Automation Tools</strong> to set up your workflows!</p>
        `
      }
    }

    const response = responses[query]
    if (response) {
      responseDiv.innerHTML = `
        <h4>${response.title}</h4>
        ${response.content}
      `
      responseDiv.classList.add('show')
      
      // Add animation to response
      setTimeout(() => {
        this.addMicroInteraction(responseDiv, 'micro-bounce')
      }, 100)
    }
  }

  loadSection(sectionName) {
    this.showLoading()
    
    // Update current section
    this.currentSection = sectionName
    
    // Get section instance
    const section = this.sections[sectionName]
    
    // Advanced sidebar animation
    const sidebar = document.getElementById('sidebar')
    this.animateOut(sidebar, 'slideOutLeft').then(() => {
      sidebar.innerHTML = section.getSidebar()
      this.animateIn(sidebar, 'slideInLeft')
      this.addSidebarAnimations()
    })
    
    // Advanced content animation with morphing
    const content = document.getElementById('content')
    this.animateOut(content, 'fadeOutScale').then(() => {
      content.innerHTML = section.getContent()
      this.animateIn(content, 'fadeInScale')
      
      // Initialize section-specific functionality
      section.initialize()
      
      // Add advanced animations to new content
      this.animateNewContent()
      this.addContentSpecificAnimations()
      this.initializeScrollAnimations()
      this.addEnhancedMicroInteractions()
    })
    
    setTimeout(() => {
      this.hideLoading()
    }, 600)
  }

  animateOut(element, animationClass) {
    return new Promise(resolve => {
      element.style.animation = 'none'
      element.offsetHeight // Trigger reflow
      element.style.animation = null
      element.classList.add(animationClass)
      
      setTimeout(() => {
        element.classList.remove(animationClass)
        resolve()
      }, 400)
    })
  }

  animateIn(element, animationClass) {
    element.style.opacity = '0'
    element.style.transform = 'translateY(30px) scale(0.95)'
    
    setTimeout(() => {
      element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      element.style.opacity = '1'
      element.style.transform = 'translateY(0) scale(1)'
      element.classList.add(animationClass)
    }, 50)
  }

  smoothScrollToElement(element) {
    const headerOffset = 120
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset
    
    // Custom easing function
    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    }
    
    const startPosition = window.pageYOffset
    const distance = offsetPosition - startPosition
    const duration = 1000
    let start = null
    
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const ease = easeInOutCubic(progress)
      
      window.scrollTo(0, startPosition + distance * ease)
      
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    
    requestAnimationFrame(step)
  }

  updateActiveSidebarLink(activeLink) {
    document.querySelectorAll('.sidebar-link').forEach(link => {
      link.classList.remove('active')
      link.style.transform = 'translateX(0)'
    })
    activeLink.classList.add('active')
    activeLink.style.transform = 'translateX(8px) scale(1.05)'
  }

  setActiveNav(activeBtn) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.remove('active')
      btn.style.transform = 'translateY(0) scale(1)'
    })
    activeBtn.classList.add('active')
    activeBtn.style.transform = 'translateY(-2px) scale(1.05)'
    
    // Add ripple effect
    this.createAdvancedRipple({ 
      currentTarget: activeBtn, 
      clientX: activeBtn.offsetLeft + activeBtn.offsetWidth / 2,
      clientY: activeBtn.offsetTop + activeBtn.offsetHeight / 2
    })
  }

  showLoading() {
    const loading = document.getElementById('loading')
    loading.classList.add('show')
    loading.style.animation = 'loadingEntrance 0.5s ease-out'
  }

  hideLoading() {
    const loading = document.getElementById('loading')
    loading.style.animation = 'loadingExit 0.5s ease-out'
    setTimeout(() => {
      loading.classList.remove('show')
    }, 500)
  }

  animateNewContent() {
    const cards = document.querySelectorAll('.card, .stat-card, .deal-card, .task-card, .account-card, .product-card')
    cards.forEach((card, index) => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(40px) scale(0.9) rotateX(10deg)'
      
      setTimeout(() => {
        card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        card.style.opacity = '1'
        card.style.transform = 'translateY(0) scale(1) rotateX(0deg)'
        
        // Add floating class for continuous animation
        setTimeout(() => {
          card.classList.add('floating-element')
        }, 800)
      }, index * 150)
    })
  }

  addGodTierMicroInteractions() {
    // Enhanced ripple effect for all interactive elements
    document.addEventListener('click', (e) => {
      if (e.target instanceof Element && e.target.matches('button, .btn, .card, .data-row, .sidebar-link, .nav-btn')) {
        this.createAdvancedRipple(e)
        this.createClickParticles(e)
      }
    })

    // Magnetic hover effect with advanced physics
    document.addEventListener('mousemove', (e) => {
      if (e.target instanceof Element && e.target.matches('.btn, .nav-btn, .card')) {
        this.applyMagneticEffect(e.target, e)
      }
    })

    document.addEventListener('mouseleave', (e) => {
      if (e.target instanceof Element && e.target.matches('.btn, .nav-btn, .card')) {
        this.resetMagneticEffect(e.target)
      }
    })

    // Enhanced card hover animations with 3D effects
    document.addEventListener('mouseover', (e) => {
      if (e.target instanceof Element && e.target.matches('.card, .data-row, .stat-card, .deal-card, .task-card, .account-card, .product-card')) {
        this.enhancedCardHover(e.target, e)
      }
    })

    document.addEventListener('mouseout', (e) => {
      if (e.target instanceof Element && e.target.matches('.card, .data-row, .stat-card, .deal-card, .task-card, .account-card, .product-card')) {
        this.resetCardHover(e.target)
      }
    })

    // Button press animations
    document.addEventListener('mousedown', (e) => {
      if (e.target instanceof Element && e.target.matches('.btn, .nav-btn')) {
        this.buttonPressAnimation(e.target)
      }
    })

    document.addEventListener('mouseup', (e) => {
      if (e.target instanceof Element && e.target.matches('.btn, .nav-btn')) {
        this.buttonReleaseAnimation(e.target)
      }
    })
  }

  addEnhancedMicroInteractions() {
    // Add micro-interactions to all interactive elements
    const interactiveElements = document.querySelectorAll('button, .btn, .card, .sidebar-link, .nav-btn, .data-row')
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', (e) => {
        this.addMicroInteraction(e.target, 'micro-glow')
      })

      element.addEventListener('mouseleave', (e) => {
        this.removeMicroInteraction(e.target, 'micro-glow')
      })

      element.addEventListener('click', (e) => {
        this.addMicroInteraction(e.target, 'micro-bounce')
        this.createParticleExplosion(e.target)
      })
    })

    // Add special interactions for specific elements
    const statCards = document.querySelectorAll('.stat-card')
    statCards.forEach(card => {
      card.addEventListener('mouseenter', (e) => {
        this.addMicroInteraction(e.target, 'heartbeat')
      })
      card.addEventListener('mouseleave', (e) => {
        this.removeMicroInteraction(e.target, 'heartbeat')
      })
    })
  }

  addMicroInteraction(element, className) {
    element.classList.add(className)
  }

  removeMicroInteraction(element, className) {
    element.classList.remove(className)
  }

  createParticleExplosion(element) {
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    for (let i = 0; i < 12; i++) {
      const particle = document.createElement('div')
      particle.style.position = 'fixed'
      particle.style.left = `${centerX}px`
      particle.style.top = `${centerY}px`
      particle.style.width = '6px'
      particle.style.height = '6px'
      particle.style.background = `hsl(${Math.random() * 60 + 140}, 70%, 60%)`
      particle.style.borderRadius = '50%'
      particle.style.pointerEvents = 'none'
      particle.style.zIndex = '9999'
      
      const angle = (i / 12) * Math.PI * 2
      const velocity = 80 + Math.random() * 40
      const vx = Math.cos(angle) * velocity
      const vy = Math.sin(angle) * velocity
      
      document.body.appendChild(particle)
      
      let x = 0, y = 0, opacity = 1, scale = 1
      const animate = () => {
        x += vx * 0.02
        y += vy * 0.02 + 0.8 // gravity
        opacity -= 0.025
        scale -= 0.02
        
        particle.style.transform = `translate(${x}px, ${y}px) scale(${scale})`
        particle.style.opacity = opacity
        
        if (opacity > 0 && scale > 0) {
          requestAnimationFrame(animate)
        } else {
          particle.remove()
        }
      }
      
      requestAnimationFrame(animate)
    }
  }

  initializeEnhancedClickInteractions() {
    // Add enhanced click effects to all clickable elements
    document.addEventListener('click', (e) => {
      if (e.target instanceof Element) {
        // Create ripple effect
        if (e.target.matches('button, .btn, .card, .sidebar-link, .nav-btn')) {
          this.createEnhancedRipple(e)
        }

        // Add bounce effect to important buttons
        if (e.target.matches('.btn-primary, .btn-accent')) {
          this.addMicroInteraction(e.target, 'elastic')
          setTimeout(() => {
            this.removeMicroInteraction(e.target, 'elastic')
          }, 1000)
        }

        // Add shake effect to error/warning buttons
        if (e.target.matches('.btn-outline')) {
          this.addMicroInteraction(e.target, 'micro-shake')
          setTimeout(() => {
            this.removeMicroInteraction(e.target, 'micro-shake')
          }, 500)
        }
      }
    })
  }

  createEnhancedRipple(event) {
    const element = event.currentTarget
    const circle = document.createElement('span')
    const diameter = Math.max(element.clientWidth, element.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - element.offsetLeft - radius}px`
    circle.style.top = `${event.clientY - element.offsetTop - radius}px`
    circle.classList.add('advanced-ripple')

    const ripple = element.getElementsByClassName('advanced-ripple')[0]
    if (ripple) {
      ripple.remove()
    }

    element.appendChild(circle)

    // Remove ripple after animation
    setTimeout(() => {
      circle.remove()
    }, 800)
  }

  applyMagneticEffect(element, event) {
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (event.clientX - centerX) * 0.15
    const deltaY = (event.clientY - centerY) * 0.15
    
    element.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.05) rotateX(${deltaY * 0.1}deg) rotateY(${deltaX * 0.1}deg)`
    element.style.boxShadow = `${deltaX * 0.5}px ${deltaY * 0.5 + 10}px 30px rgba(0, 168, 107, 0.3)`
  }

  resetMagneticEffect(element) {
    element.style.transform = 'translate(0px, 0px) scale(1) rotateX(0deg) rotateY(0deg)'
    element.style.boxShadow = ''
    element.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    
    setTimeout(() => {
      element.style.transition = ''
    }, 400)
  }

  enhancedCardHover(element, event) {
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (event.clientX - centerX) * 0.05
    const deltaY = (event.clientY - centerY) * 0.05
    
    element.style.transform = `translateY(-12px) scale(1.03) rotateX(${deltaY * 0.1}deg) rotateY(${deltaX * 0.1}deg)`
    element.style.boxShadow = '0 25px 50px rgba(0, 168, 107, 0.2)'
    element.style.borderColor = 'var(--primary-green)'
    element.style.filter = 'brightness(1.05)'
    
    // Add glow effect
    element.style.setProperty('--glow-opacity', '1')
  }

  resetCardHover(element) {
    element.style.transform = 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)'
    element.style.boxShadow = 'var(--shadow-md)'
    element.style.borderColor = 'var(--border-color)'
    element.style.filter = 'brightness(1)'
    element.style.setProperty('--glow-opacity', '0')
  }

  buttonPressAnimation(element) {
    element.style.transform = 'scale(0.95) translateY(2px)'
    element.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)'
  }

  buttonReleaseAnimation(element) {
    element.style.transform = 'scale(1.05) translateY(-2px)'
    element.style.boxShadow = '0 8px 25px rgba(0, 168, 107, 0.3)'
    
    setTimeout(() => {
      element.style.transform = 'scale(1) translateY(0)'
      element.style.boxShadow = ''
    }, 150)
  }

  createAdvancedRipple(event) {
    const element = event.currentTarget
    const circle = document.createElement('span')
    const diameter = Math.max(element.clientWidth, element.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - element.offsetLeft - radius}px`
    circle.style.top = `${event.clientY - element.offsetTop - radius}px`
    circle.classList.add('advanced-ripple')

    const ripple = element.getElementsByClassName('advanced-ripple')[0]
    if (ripple) {
      ripple.remove()
    }

    element.appendChild(circle)

    // Remove ripple after animation
    setTimeout(() => {
      circle.remove()
    }, 800)
  }

  createClickParticles(event) {
    const particleCount = 8
    const colors = ['var(--primary-green)', 'var(--secondary-green)', 'var(--cta-accent)']
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.style.position = 'fixed'
      particle.style.left = `${event.clientX}px`
      particle.style.top = `${event.clientY}px`
      particle.style.width = '4px'
      particle.style.height = '4px'
      particle.style.background = colors[Math.floor(Math.random() * colors.length)]
      particle.style.borderRadius = '50%'
      particle.style.pointerEvents = 'none'
      particle.style.zIndex = '9999'
      
      const angle = (i / particleCount) * Math.PI * 2
      const velocity = 50 + Math.random() * 50
      const vx = Math.cos(angle) * velocity
      const vy = Math.sin(angle) * velocity
      
      document.body.appendChild(particle)
      
      let x = 0, y = 0, opacity = 1
      const animate = () => {
        x += vx * 0.02
        y += vy * 0.02 + 0.5 // gravity
        opacity -= 0.02
        
        particle.style.transform = `translate(${x}px, ${y}px)`
        particle.style.opacity = opacity
        
        if (opacity > 0) {
          requestAnimationFrame(animate)
        } else {
          particle.remove()
        }
      }
      
      requestAnimationFrame(animate)
    }
  }

  createNavClickEffect(event) {
    const element = event.currentTarget
    const wave = document.createElement('div')
    wave.style.position = 'absolute'
    wave.style.top = '0'
    wave.style.left = '0'
    wave.style.width = '100%'
    wave.style.height = '100%'
    wave.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)'
    wave.style.borderRadius = '12px'
    wave.style.transform = 'scale(0)'
    wave.style.animation = 'waveExpand 0.6s ease-out'
    wave.style.pointerEvents = 'none'
    
    element.appendChild(wave)
    
    setTimeout(() => {
      wave.remove()
    }, 600)
  }

  createScrollEffect(event) {
    const sparkles = document.createElement('div')
    sparkles.style.position = 'fixed'
    sparkles.style.left = `${event.clientX}px`
    sparkles.style.top = `${event.clientY}px`
    sparkles.style.width = '20px'
    sparkles.style.height = '20px'
    sparkles.style.background = 'radial-gradient(circle, var(--primary-green) 0%, transparent 70%)'
    sparkles.style.borderRadius = '50%'
    sparkles.style.pointerEvents = 'none'
    sparkles.style.zIndex = '9999'
    sparkles.style.animation = 'sparkleEffect 1s ease-out'
    
    document.body.appendChild(sparkles)
    
    setTimeout(() => {
      sparkles.remove()
    }, 1000)
  }

  initializeScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          this.animateProgressBars(entry.target)
          this.animateCounters(entry.target)
        }
      })
    }, observerOptions)

    // Observe all animatable elements
    document.querySelectorAll('.card, .stat-card, .content-section, .activity-item').forEach(el => {
      el.classList.add('scroll-reveal')
      observer.observe(el)
    })
  }

  animateProgressBars(container) {
    const progressBars = container.querySelectorAll('.progress-fill, .goal-progress, .region-progress')
    
    progressBars.forEach(bar => {
      const width = bar.style.width || bar.getAttribute('data-width') || '0%'
      bar.style.width = '0%'
      bar.style.transition = 'width 2s cubic-bezier(0.4, 0, 0.2, 1)'
      
      setTimeout(() => {
        bar.style.width = width
      }, 200)
    })
  }

  animateCounters(container) {
    const counters = container.querySelectorAll('.stat-value, .metric-value')
    
    counters.forEach(counter => {
      const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''))
      
      if (!isNaN(target) && target > 0) {
        let current = 0
        const increment = target / 60
        const originalText = counter.textContent
        const prefix = originalText.replace(/[0-9,]/g, '')
        
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          
          counter.textContent = prefix + Math.floor(current).toLocaleString()
        }, 33)
      }
    })
  }

  initializeParticleSystem() {
    const canvas = document.createElement('canvas')
    canvas.style.position = 'fixed'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.pointerEvents = 'none'
    canvas.style.zIndex = '-1'
    canvas.style.opacity = '0.6'
    document.body.appendChild(canvas)
    
    const ctx = canvas.getContext('2d')
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Create floating particles
    for (let i = 0; i < 20; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: `hsl(${Math.random() * 60 + 140}, 70%, 60%)`
      })
    }
    
    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      this.particles.forEach(particle => {
        particle.x += particle.vx
        particle.y += particle.vy
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fill()
      })
      
      this.animationFrame = requestAnimationFrame(animateParticles)
    }
    
    animateParticles()
  }

  initializeAdvancedHoverEffects() {
    // Tilt effect for cards
    document.addEventListener('mousemove', (e) => {
      const cards = document.querySelectorAll('.card:hover')
      cards.forEach(card => {
        const rect = card.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const deltaX = (e.clientX - centerX) / rect.width
        const deltaY = (e.clientY - centerY) / rect.height
        
        card.style.transform = `
          translateY(-12px) 
          scale(1.03) 
          rotateX(${deltaY * 10}deg) 
          rotateY(${deltaX * 10}deg)
          perspective(1000px)
        `
      })
    })
  }

  initializeKeyboardInteractions() {
    document.addEventListener('keydown', (e) => {
      // Add keyboard shortcuts with animations
      if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
          case '1':
            e.preventDefault()
            this.loadSection('modules')
            this.animateKeyboardShortcut('modules')
            break
          case '2':
            e.preventDefault()
            this.loadSection('reports')
            this.animateKeyboardShortcut('reports')
            break
          case '3':
            e.preventDefault()
            this.loadSection('analytics')
            this.animateKeyboardShortcut('analytics')
            break
        }
      }

      // Chatbot toggle with space key
      if (e.key === ' ' && e.ctrlKey) {
        e.preventDefault()
        this.toggleChatbot()
      }
    })
  }

  animateKeyboardShortcut(section) {
    const btn = document.querySelector(`[data-section="${section}"]`)
    if (btn) {
      btn.style.animation = 'keyboardActivate 0.3s ease'
      setTimeout(() => {
        btn.style.animation = ''
      }, 300)
    }
  }

  addSidebarAnimations() {
    const links = document.querySelectorAll('.sidebar-link')
    links.forEach((link, index) => {
      link.style.animation = `slideInLeft 0.6s ease-out ${index * 0.1}s both`
    })
  }

  addContentSpecificAnimations() {
    // Add breathing effect to important stats
    document.querySelectorAll('.stat-value').forEach(stat => {
      stat.classList.add('breathing')
    })
    
    // Add floating effect to cards
    document.querySelectorAll('.card').forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('floating-element')
      }, index * 100)
    })
    
    // Add typewriter effect to titles
    document.querySelectorAll('.section-title').forEach(title => {
      title.classList.add('typewriter')
    })
  }

  animateElementsOnLoad() {
    // Staggered animation for navigation items
    document.querySelectorAll('.nav-btn').forEach((btn, index) => {
      btn.style.animation = `slideInTop 0.6s ease-out ${index * 0.1}s both`
    })
  }

  addBreathingEffect() {
    document.querySelectorAll('.brand-logo, .profile-avatar').forEach(el => {
      el.classList.add('breathing')
    })
  }

  addFloatingAnimations() {
    document.querySelectorAll('.stat-card').forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`
      card.classList.add('floating-element')
    })
  }

  addTypewriterEffects() {
    document.querySelectorAll('.section-title').forEach(title => {
      title.classList.add('typewriter')
    })
  }

  addMorphingAnimations() {
    // Add morphing hover effects to buttons
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        btn.style.borderRadius = '20px'
      })
      btn.addEventListener('mouseleave', () => {
        btn.style.borderRadius = '8px'
      })
    })
  }

  updateMagneticElements(event) {
    document.querySelectorAll('.magnetic').forEach(element => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distance = Math.sqrt(
        Math.pow(event.clientX - centerX, 2) + Math.pow(event.clientY - centerY, 2)
      )
      
      if (distance < 100) {
        const deltaX = (event.clientX - centerX) * 0.1
        const deltaY = (event.clientY - centerY) * 0.1
        element.style.transform = `translate(${deltaX}px, ${deltaY}px)`
      } else {
        element.style.transform = 'translate(0px, 0px)'
      }
    })
  }

  updateParallaxElements(event) {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    const deltaX = (event.clientX - centerX) / centerX
    const deltaY = (event.clientY - centerY) / centerY
    
    document.querySelectorAll('.parallax-element').forEach(element => {
      const speed = element.dataset.speed || 0.05
      element.style.transform = `translate(${deltaX * speed * 20}px, ${deltaY * speed * 20}px)`
    })
  }

  // Cleanup method
  destroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame)
    }
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CRMApp()
})

// Add dynamic CSS animations
const style = document.createElement('style')
style.textContent = `
  @keyframes waveExpand {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  
  @keyframes sparkleEffect {
    0% {
      transform: scale(0) rotate(0deg);
      opacity: 1;
    }
    50% {
      transform: scale(1.5) rotate(180deg);
      opacity: 0.8;
    }
    100% {
      transform: scale(0) rotate(360deg);
      opacity: 0;
    }
  }
  
  @keyframes slideInTop {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutLeft {
    to {
      transform: translateX(-100%);
      opacity: 0;
    }
  }
  
  @keyframes fadeOutScale {
    to {
      transform: scale(0.8);
      opacity: 0;
    }
  }
  
  @keyframes fadeInScale {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  @keyframes loadingEntrance {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  @keyframes loadingExit {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(1.2);
      opacity: 0;
    }
  }
  
  @keyframes keyboardActivate {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
      box-shadow: 0 0 20px rgba(0, 168, 107, 0.5);
    }
  }
`
document.head.appendChild(style)