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
    
    this.initializeEventListeners()
    this.loadSection('modules')
    this.hideLoading()
  }

  initializeEventListeners() {
    // Navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        const section = btn.dataset.section
        this.loadSection(section)
        this.setActiveNav(btn)
      })
    })

    // Smooth scrolling for sidebar links with precise positioning
    document.addEventListener('click', (e) => {
      if (e.target.matches('.sidebar-link[data-scroll]')) {
        e.preventDefault()
        const targetId = e.target.dataset.scroll
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          // Calculate precise offset for perfect positioning
          const headerOffset = 100 // Account for fixed header and padding
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })

          // Update active sidebar link
          document.querySelectorAll('.sidebar-link').forEach(link => {
            link.classList.remove('active')
          })
          e.target.classList.add('active')
        }
      }
    })

    // Enhanced micro-interactions
    this.addAdvancedMicroInteractions()
  }

  loadSection(sectionName) {
    this.showLoading()
    
    // Update current section
    this.currentSection = sectionName
    
    // Get section instance
    const section = this.sections[sectionName]
    
    // Load sidebar with animation
    const sidebar = document.getElementById('sidebar')
    sidebar.style.opacity = '0'
    sidebar.style.transform = 'translateX(-20px)'
    
    setTimeout(() => {
      sidebar.innerHTML = section.getSidebar()
      sidebar.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      sidebar.style.opacity = '1'
      sidebar.style.transform = 'translateX(0)'
    }, 100)
    
    // Load content with staggered animation
    const content = document.getElementById('content')
    content.style.opacity = '0'
    content.style.transform = 'translateY(30px)'
    
    setTimeout(() => {
      content.innerHTML = section.getContent()
      content.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
      content.style.opacity = '1'
      content.style.transform = 'translateY(0)'
      
      // Initialize section-specific functionality
      section.initialize()
      
      // Add staggered animations to cards
      this.animateCards()
    }, 200)
    
    setTimeout(() => {
      this.hideLoading()
    }, 400)
  }

  setActiveNav(activeBtn) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.remove('active')
    })
    activeBtn.classList.add('active')
  }

  showLoading() {
    document.getElementById('loading').classList.add('show')
  }

  hideLoading() {
    document.getElementById('loading').classList.remove('show')
  }

  animateCards() {
    const cards = document.querySelectorAll('.card, .stat-card, .deal-card, .task-card, .account-card, .product-card')
    cards.forEach((card, index) => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(20px) scale(0.95)'
      
      setTimeout(() => {
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        card.style.opacity = '1'
        card.style.transform = 'translateY(0) scale(1)'
      }, index * 100)
    })
  }

  addAdvancedMicroInteractions() {
    // Enhanced ripple effect for buttons
    document.addEventListener('click', (e) => {
      if (e.target.matches('button, .btn, .card, .data-row, .sidebar-link')) {
        this.createAdvancedRipple(e)
      }
    })

    // Magnetic hover effect for buttons
    document.addEventListener('mousemove', (e) => {
      if (e.target.matches('.btn, .nav-btn')) {
        const rect = e.target.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        
        e.target.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.02)`
      }
    })

    document.addEventListener('mouseleave', (e) => {
      if (e.target.matches('.btn, .nav-btn')) {
        e.target.style.transform = 'translate(0px, 0px) scale(1)'
      }
    })

    // Enhanced card hover animations
    document.addEventListener('mouseover', (e) => {
      if (e.target.matches('.card, .data-row, .stat-card, .deal-card, .task-card, .account-card, .product-card')) {
        e.target.style.transform = 'translateY(-8px) scale(1.02)'
        e.target.style.boxShadow = '0 20px 40px rgba(0, 168, 107, 0.15)'
        e.target.style.borderColor = 'var(--primary-green)'
      }
    })

    document.addEventListener('mouseout', (e) => {
      if (e.target.matches('.card, .data-row, .stat-card, .deal-card, .task-card, .account-card, .product-card')) {
        e.target.style.transform = 'translateY(0) scale(1)'
        e.target.style.boxShadow = 'var(--shadow-md)'
        e.target.style.borderColor = 'var(--border-color)'
      }
    })

    // Floating animation for important elements
    this.addFloatingAnimation()

    // Parallax scrolling effect
    this.addParallaxEffect()

    // Progress bar animations
    this.animateProgressBars()

    // Number counter animations
    this.animateCounters()
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
    }, 600)
  }

  addFloatingAnimation() {
    const floatingElements = document.querySelectorAll('.stat-value, .metric-value')
    floatingElements.forEach((element, index) => {
      element.style.animation = `float 3s ease-in-out infinite ${index * 0.5}s`
    })
  }

  addParallaxEffect() {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.section-header')
      
      parallaxElements.forEach(element => {
        const speed = 0.5
        element.style.transform = `translateY(${scrolled * speed}px)`
      })
    })
  }

  animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill, .goal-progress, .region-progress')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target
          const width = progressBar.style.width
          progressBar.style.width = '0%'
          progressBar.style.transition = 'width 2s cubic-bezier(0.4, 0, 0.2, 1)'
          
          setTimeout(() => {
            progressBar.style.width = width
          }, 100)
        }
      })
    })

    progressBars.forEach(bar => observer.observe(bar))
  }

  animateCounters() {
    const counters = document.querySelectorAll('.stat-value, .metric-value')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target
          const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''))
          
          if (!isNaN(target)) {
            let current = 0
            const increment = target / 50
            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                current = target
                clearInterval(timer)
              }
              
              const originalText = counter.textContent
              const prefix = originalText.replace(/[0-9,]/g, '')
              counter.textContent = prefix + Math.floor(current).toLocaleString()
            }, 40)
          }
        }
      })
    })

    counters.forEach(counter => observer.observe(counter))
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CRMApp()
})