// Personal Website JavaScript
class PersonalWebsite {
    constructor() {
        this.currentSection = 'home';
        this.navLinks = document.querySelectorAll('nav a[data-section]');
        this.sections = document.querySelectorAll('main section');
        this.cards = document.querySelectorAll('.card');
        
        
        // Content data for blog posts and projects
        this.contentData = this.initializeContentData();
        
        this.init();
    }

    // Initialize content data for blog posts and projects
    initializeContentData() {
        return {
            // Blog posts
            'streamlit-website': {
                title: 'How to Build a Personal Website with Streamlit',
                meta: '2024-06-01',
                type: 'blog',
                content: `
                    <h2>Introduction</h2>
                    <p>Streamlit has revolutionized how we build data applications and personal websites. In this comprehensive guide, I'll walk you through creating a stunning personal website using Streamlit's powerful features.</p>
                    
                    <h2>Why Streamlit for Personal Websites?</h2>
                    <p>Streamlit offers several advantages for personal websites:</p>
                    <ul>
                        <li><strong>Rapid Development:</strong> Build interactive web apps with just Python</li>
                        <li><strong>Data Integration:</strong> Seamlessly integrate data visualizations and analysis</li>
                        <li><strong>Responsive Design:</strong> Automatically adapts to different screen sizes</li>
                        <li><strong>Easy Deployment:</strong> Deploy to Streamlit Cloud with one click</li>
                    </ul>
                    
                    <h2>Getting Started</h2>
                    <p>First, install Streamlit and create your main application file:</p>
                    <pre><code>pip install streamlit
streamlit run app.py</code></pre>
                    
                    <h2>Building Your Homepage</h2>
                    <p>Create an engaging homepage with your personal information, skills, and projects. Use Streamlit's layout components to organize your content effectively.</p>
                    
                    <h2>Adding Interactive Features</h2>
                    <p>Make your website interactive with:</p>
                    <ul>
                        <li>Contact forms using st.form</li>
                        <li>Project galleries with st.columns</li>
                        <li>Blog post readers with st.expander</li>
                        <li>Data visualizations with plotly or matplotlib</li>
                    </ul>
                    
                    <h2>Deployment Best Practices</h2>
                    <p>When deploying your Streamlit website:</p>
                    <ul>
                        <li>Use environment variables for sensitive data</li>
                        <li>Optimize your code for performance</li>
                        <li>Add proper error handling</li>
                        <li>Test across different devices and browsers</li>
                    </ul>
                    
                    <h2>Conclusion</h2>
                    <p>Streamlit makes it incredibly easy to create professional personal websites with minimal effort. The combination of Python's power and Streamlit's simplicity creates endless possibilities for showcasing your work and skills.</p>
                `
            },
            'ml-basics': {
                title: 'Understanding Machine Learning Basics',
                meta: '2024-05-15',
                type: 'blog',
                content: `
                    <h2>What is Machine Learning?</h2>
                    <p>Machine Learning (ML) is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed for every task.</p>
                    
                    <h2>Types of Machine Learning</h2>
                    <h3>1. Supervised Learning</h3>
                    <p>In supervised learning, the algorithm learns from labeled training data to make predictions on new, unseen data. Common examples include:</p>
                    <ul>
                        <li><strong>Classification:</strong> Predicting categories (spam/not spam, disease diagnosis)</li>
                        <li><strong>Regression:</strong> Predicting continuous values (house prices, stock prices)</li>
                    </ul>
                    
                    <h3>2. Unsupervised Learning</h3>
                    <p>Unsupervised learning finds hidden patterns in data without labeled examples:</p>
                    <ul>
                        <li><strong>Clustering:</strong> Grouping similar data points (customer segmentation)</li>
                        <li><strong>Dimensionality Reduction:</strong> Reducing data complexity while preserving important information</li>
                    </ul>
                    
                    <h3>3. Reinforcement Learning</h3>
                    <p>Reinforcement learning involves an agent learning to make decisions through trial and error, receiving rewards or penalties for its actions.</p>
                    
                    <h2>Key Concepts</h2>
                    <h3>Training vs Testing</h3>
                    <p>Models are trained on a training dataset and evaluated on a separate testing dataset to ensure they generalize well to new data.</p>
                    
                    <h3>Overfitting and Underfitting</h3>
                    <p>Overfitting occurs when a model learns the training data too well, including noise. Underfitting happens when a model is too simple to capture the underlying patterns.</p>
                    
                    <h2>Popular Algorithms</h2>
                    <ul>
                        <li><strong>Linear Regression:</strong> For predicting continuous values</li>
                        <li><strong>Decision Trees:</strong> Easy to understand and interpret</li>
                        <li><strong>Random Forest:</strong> Ensemble method combining multiple decision trees</li>
                        <li><strong>Neural Networks:</strong> Inspired by the human brain, great for complex patterns</li>
                        <li><strong>Support Vector Machines:</strong> Effective for classification tasks</li>
                    </ul>
                    
                    <h2>Getting Started</h2>
                    <p>Begin your ML journey with:</p>
                    <ol>
                        <li>Learn Python programming basics</li>
                        <li>Understand statistics and linear algebra</li>
                        <li>Practice with datasets on Kaggle</li>
                        <li>Use libraries like scikit-learn, pandas, and numpy</li>
                        <li>Build simple projects to apply your knowledge</li>
                    </ol>
                `
            },
            'data-viz': {
                title: 'Data Visualization Best Practices',
                meta: '2024-04-20',
                type: 'blog',
                content: `
                    <h2>The Power of Data Visualization</h2>
                    <p>Effective data visualization transforms complex data into clear, actionable insights. It's not just about making pretty charts—it's about telling a story with your data.</p>
                    
                    <h2>Choosing the Right Chart Type</h2>
                    <h3>For Comparisons</h3>
                    <ul>
                        <li><strong>Bar Charts:</strong> Compare categories or groups</li>
                        <li><strong>Column Charts:</strong> Show changes over time for categories</li>
                        <li><strong>Pie Charts:</strong> Show parts of a whole (use sparingly)</li>
                    </ul>
                    
                    <h3>For Trends</h3>
                    <ul>
                        <li><strong>Line Charts:</strong> Show trends over time</li>
                        <li><strong>Area Charts:</strong> Emphasize the magnitude of change</li>
                        <li><strong>Scatter Plots:</strong> Show relationships between variables</li>
                    </ul>
                    
                    <h2>Design Principles</h2>
                    <h3>1. Keep It Simple</h3>
                    <p>Remove unnecessary elements. Every element should serve a purpose. Avoid 3D effects unless they add value.</p>
                    
                    <h3>2. Use Color Effectively</h3>
                    <ul>
                        <li>Choose colors that are accessible to colorblind users</li>
                        <li>Use color to highlight important information</li>
                        <li>Maintain consistency across your visualizations</li>
                    </ul>
                    
                    <h2>Best Practices Summary</h2>
                    <ol>
                        <li>Know your audience and their needs</li>
                        <li>Choose the right chart type for your data</li>
                        <li>Keep it simple and focused</li>
                        <li>Use color and design elements purposefully</li>
                        <li>Test with real users when possible</li>
                    </ol>
                `
            },
            'python-datascience': {
                title: 'Python for Data Science',
                meta: '2024-03-10',
                type: 'blog',
                content: `
                    <h2>Why Python for Data Science?</h2>
                    <p>Python has become the de facto language for data science due to its simplicity, extensive library ecosystem, and strong community support.</p>
                    
                    <h2>Essential Python Libraries</h2>
                    <h3>Data Manipulation</h3>
                    <ul>
                        <li><strong>Pandas:</strong> Data manipulation and analysis</li>
                        <li><strong>NumPy:</strong> Numerical computing foundation</li>
                    </ul>
                    
                    <h3>Data Visualization</h3>
                    <ul>
                        <li><strong>Matplotlib:</strong> Basic plotting and visualization</li>
                        <li><strong>Seaborn:</strong> Statistical data visualization</li>
                        <li><strong>Plotly:</strong> Interactive visualizations</li>
                    </ul>
                    
                    <h3>Machine Learning</h3>
                    <ul>
                        <li><strong>Scikit-learn:</strong> General-purpose machine learning</li>
                        <li><strong>TensorFlow:</strong> Deep learning framework</li>
                        <li><strong>PyTorch:</strong> Dynamic deep learning</li>
                    </ul>
                    
                    <h2>Data Science Workflow</h2>
                    <ol>
                        <li>Data Collection</li>
                        <li>Data Cleaning</li>
                        <li>Exploratory Data Analysis (EDA)</li>
                        <li>Feature Engineering</li>
                        <li>Model Building</li>
                        <li>Model Deployment</li>
                    </ol>
                `
            },
            // Research Papers
            'deep-learning-paper': {
                title: 'Deep Learning for Image Classification',
                meta: 'Your Name, Co-author | Journal of AI Research, 2023',
                type: 'paper',
                content: `
                    <h2>Abstract</h2>
                    <p>This paper presents a comprehensive study of deep learning techniques for image classification tasks. We compare various convolutional neural network (CNN) architectures and optimization strategies, demonstrating significant improvements in classification accuracy across multiple datasets.</p>
                    
                    <h2>Introduction</h2>
                    <p>Image classification has been revolutionized by deep learning approaches, particularly convolutional neural networks. This work explores the effectiveness of different CNN architectures and training strategies for improving classification performance.</p>
                    
                    <h2>Methodology</h2>
                    <h3>Dataset</h3>
                    <p>We evaluated our approach on three benchmark datasets:</p>
                    <ul>
                        <li>CIFAR-10: 60,000 32x32 color images in 10 classes</li>
                        <li>ImageNet: 1.2 million images in 1,000 classes</li>
                        <li>Custom medical imaging dataset: 50,000 X-ray images</li>
                    </ul>
                    
                    <h3>Architectures Tested</h3>
                    <ul>
                        <li>ResNet-50 and ResNet-101</li>
                        <li>EfficientNet-B0 to EfficientNet-B7</li>
                        <li>Vision Transformer (ViT)</li>
                        <li>Custom hybrid architecture</li>
                    </ul>
                    
                    <h2>Results</h2>
                    <p>Our experiments show that:</p>
                    <ul>
                        <li>EfficientNet-B7 achieved 98.7% accuracy on CIFAR-10</li>
                        <li>Transfer learning improved performance by 15-20%</li>
                        <li>Data augmentation reduced overfitting significantly</li>
                        <li>Our custom architecture outperformed baseline models by 8%</li>
                    </ul>
                    
                    <h2>Conclusion</h2>
                    <p>This study provides insights into effective deep learning practices for image classification. The findings can guide practitioners in selecting appropriate architectures and training strategies for their specific use cases.</p>
                `
            },
            'nlp-advances-paper': {
                title: 'Natural Language Processing Advances',
                meta: 'Your Name | Conference on NLP, 2022',
                type: 'paper',
                content: `
                    <h2>Abstract</h2>
                    <p>This survey paper examines recent advances in natural language processing, with a particular focus on transformer architectures and their applications. We provide a comprehensive overview of the field's evolution and current state-of-the-art techniques.</p>
                    
                    <h2>Introduction</h2>
                    <p>Natural Language Processing has undergone a paradigm shift with the introduction of transformer architectures. This paper surveys the key developments and their implications for the field.</p>
                    
                    <h2>Key Transformer Architectures</h2>
                    <h3>BERT (Bidirectional Encoder Representations from Transformers)</h3>
                    <p>BERT revolutionized NLP by introducing bidirectional training and achieving state-of-the-art results on multiple tasks.</p>
                    
                    <h3>GPT (Generative Pre-trained Transformer)</h3>
                    <p>GPT demonstrated the power of autoregressive language modeling and few-shot learning capabilities.</p>
                    
                    <h2>Applications</h2>
                    <ul>
                        <li><strong>Text Classification:</strong> Sentiment analysis, topic classification</li>
                        <li><strong>Question Answering:</strong> Reading comprehension tasks</li>
                        <li><strong>Text Generation:</strong> Coherent and contextually appropriate text</li>
                        <li><strong>Machine Translation:</strong> Improved translation quality</li>
                    </ul>
                    
                    <h2>Conclusion</h2>
                    <p>The transformer architecture has fundamentally changed the landscape of NLP. As the field continues to evolve, we expect to see continued improvements in model efficiency, capabilities, and applications.</p>
                `
            },
            // Projects
            'personal-website-project': {
                title: 'Personal Website',
                meta: 'Technologies: HTML, CSS, JavaScript',
                type: 'project',
                content: `
                    <h2>Project Overview</h2>
                    <p>A responsive personal website built with modern web technologies, featuring smooth animations, accessibility features, and a clean, professional design. This project showcases my skills in frontend development and user experience design.</p>
                    
                    <h2>Key Features</h2>
                    <ul>
                        <li><strong>Responsive Design:</strong> Optimized for all device sizes</li>
                        <li><strong>Accessibility:</strong> WCAG 2.1 compliant with keyboard navigation</li>
                        <li><strong>Performance:</strong> Fast loading with optimized assets</li>
                        <li><strong>Interactive Elements:</strong> Smooth animations and transitions</li>
                        <li><strong>SEO Optimized:</strong> Proper meta tags and semantic HTML</li>
                    </ul>
                    
                    <h2>Technologies Used</h2>
                    <ul>
                        <li><strong>HTML5:</strong> Semantic markup and accessibility</li>
                        <li><strong>CSS3:</strong> Flexbox, Grid, and custom properties</li>
                        <li><strong>JavaScript (ES6+):</strong> Modern JavaScript features</li>
                        <li><strong>Git:</strong> Version control</li>
                    </ul>
                    
                    <h2>Results</h2>
                    <ul>
                        <li>Lighthouse Performance Score: 95+</li>
                        <li>Accessibility Score: 100</li>
                        <li>SEO Score: 100</li>
                        <li>Mobile-friendly design</li>
                    </ul>
                `
            },
            'ai-chatbot-project': {
                title: 'AI Chatbot Assistant',
                meta: 'Technologies: Python, NLTK, Transformers',
                type: 'project',
                content: `
                    <h2>Project Overview</h2>
                    <p>An intelligent AI-powered chatbot designed to answer questions and provide assistance across various domains. The chatbot leverages natural language processing and machine learning techniques to understand user queries and generate appropriate responses.</p>
                    
                    <h2>Key Features</h2>
                    <ul>
                        <li><strong>Natural Language Understanding:</strong> Processes user queries in natural language</li>
                        <li><strong>Context Awareness:</strong> Maintains conversation context</li>
                        <li><strong>Multi-domain Support:</strong> Handles questions across different topics</li>
                        <li><strong>Learning Capability:</strong> Improves responses over time</li>
                    </ul>
                    
                    <h2>Technologies Used</h2>
                    <ul>
                        <li><strong>Python 3.8+:</strong> Main programming language</li>
                        <li><strong>NLTK:</strong> Natural language processing toolkit</li>
                        <li><strong>Transformers:</strong> Hugging Face transformers library</li>
                        <li><strong>PyTorch:</strong> Deep learning framework</li>
                        <li><strong>Flask:</strong> Web API framework</li>
                    </ul>
                    
                    <h2>Performance Metrics</h2>
                    <ul>
                        <li><strong>Intent Classification Accuracy:</strong> 92%</li>
                        <li><strong>Response Relevance:</strong> 88%</li>
                        <li><strong>User Satisfaction:</strong> 4.2/5</li>
                        <li><strong>Response Time:</strong> < 2 seconds</li>
                    </ul>
                `
            },
            'data-dashboard-project': {
                title: 'Data Analysis Dashboard',
                meta: 'Technologies: Python, Streamlit, Plotly',
                type: 'project',
                content: `
                    <h2>Project Overview</h2>
                    <p>An interactive web-based dashboard for data visualization and analysis, providing users with powerful tools to explore, analyze, and visualize their data through various charts, filters, and interactive components.</p>
                    
                    <h2>Key Features</h2>
                    <ul>
                        <li><strong>Interactive Visualizations:</strong> Dynamic charts that respond to user interactions</li>
                        <li><strong>Data Filtering:</strong> Multiple filter options for data exploration</li>
                        <li><strong>Real-time Updates:</strong> Live data updates and refresh capabilities</li>
                        <li><strong>Export Functionality:</strong> Download charts and data in various formats</li>
                        <li><strong>Responsive Design:</strong> Works on desktop and mobile devices</li>
                    </ul>
                    
                    <h2>Technologies Used</h2>
                    <ul>
                        <li><strong>Python 3.8+:</strong> Core programming language</li>
                        <li><strong>Streamlit:</strong> Web application framework</li>
                        <li><strong>Plotly:</strong> Interactive plotting library</li>
                        <li><strong>Pandas:</strong> Data manipulation and analysis</li>
                        <li><strong>PostgreSQL:</strong> Primary database</li>
                    </ul>
                    
                    <h2>Dashboard Components</h2>
                    <ul>
                        <li>Data upload and validation</li>
                        <li>Multiple chart types (line, bar, scatter, heatmap)</li>
                        <li>Interactive filtering and selection</li>
                        <li>Export and sharing capabilities</li>
                    </ul>
                `
            }
        };
    }

    init() {
        this.setupNavigation();
        this.setupAnimations();
        this.setupCardInteractions();
        this.setupGlobalSearch();
        this.setupBackToTop();
        this.setupAccessibility();
        this.setupKeyboardShortcuts();
        this.setupFooterLinks();
    }

    // Navigation functionality
    setupNavigation() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('data-section');
                this.scrollToSection(target);
            });
        });

        // Mobile nav toggle
        const nav = document.getElementById('primaryNav');
        const toggle = document.querySelector('.nav-toggle');
        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                const isOpen = nav.classList.toggle('open');
                toggle.setAttribute('aria-expanded', String(isOpen));
            });
        }

        // Logo click navigates home
        const logo = document.querySelector('.site-logo');
        if (logo && logo.getAttribute('data-section')) {
            logo.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateToSection(logo.getAttribute('data-section'));
            });
        }

        // Handle browser back/forward buttons for scrolling
        window.addEventListener('popstate', (e) => {
            const section = (e.state && e.state.section) || (location.hash ? location.hash.slice(1) : 'home');
            this.scrollToSection(section);
        });
    }

    navigateToSection(sectionId) {
        this.scrollToSection(sectionId);
    }

    showSection(sectionId, animate = true) {
        // Single-page: all sections visible. Only update active link and URL, then scroll.
        this.currentSection = sectionId;
        this.updateAriaForTabs(sectionId);
    }

    scrollToSection(sectionId) {
        // Update active navigation link
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            }
        });

        // Update URL hash
        const newUrl = `${window.location.pathname}#${sectionId}`;
        window.history.pushState({ section: sectionId }, '', newUrl);

        // Scroll to section
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    updateAriaForTabs(activeSectionId) {
        this.navLinks.forEach(link => {
            const isActive = link.getAttribute('data-section') === activeSectionId;
            link.setAttribute('aria-selected', String(isActive));
            link.setAttribute('tabindex', isActive ? '0' : '-1');
        });
    }
    

    // Animation setup
    setupAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe cards for animation
        this.cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);

            // Attach modal data from card content
            const link = card.querySelector('a');
            if (link) {
                link.dataset.modalTitle = card.querySelector('h3')?.textContent || 'Details';
                link.dataset.modalMeta = card.querySelector('.meta')?.textContent || '';
                link.dataset.modalBody = card.querySelector('p')?.textContent || '';
            }
        });
    }

    // Card interactions
    setupCardInteractions() {
        this.cards.forEach(card => {
            // Add click handler for card links
            const link = card.querySelector('a');
            if (link) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // Get content ID from card's data attribute
                    const contentId = card.getAttribute('data-content-id');
                    
                    if (contentId && this.contentData[contentId]) {
                        // Use content from data structure
                        const content = this.contentData[contentId];
                        this.showContentPage({
                            title: content.title,
                            meta: content.meta,
                            body: content.content,
                            type: content.type
                        });
                    } else {
                        // Fallback to card content if no data found
                    const title = card.querySelector('h3')?.textContent || 'Details';
                    const meta = card.querySelector('.meta')?.textContent || '';
                    const body = card.querySelector('p')?.textContent || '';
                    
                    this.showContentPage({ title, meta, body });
                    }
                });
            }

            // Add hover effects
            card.addEventListener('mouseenter', () => {
                this.addCardHoverEffect(card);
            });

            card.addEventListener('mouseleave', () => {
                this.removeCardHoverEffect(card);
            });
        });

        // Contact form
        const form = document.getElementById('contactForm');
        if (form) {
            const nameEl = document.getElementById('contactName');
            const emailEl = document.getElementById('contactEmail');
            const msgEl = document.getElementById('contactMessage');
            const statusEl = document.getElementById('contactStatus');
            const submitBtn = document.getElementById('contactSubmit');
            const endpoint = 'https://formsubmit.co/ajax/anjaltimsina23@gmail.com';
            const emailRe = /[^@\s]+@[^@\s]+\.[^@\s]+/;

            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const name = nameEl.value.trim();
                const email = emailEl.value.trim();
                const message = msgEl.value.trim();

                if (!name || !email || !message) {
                    statusEl.textContent = 'Please fill out all fields.';
                    return;
                }
                if (!emailRe.test(email)) {
                    statusEl.textContent = 'Please enter a valid email address.';
                    return;
                }

                statusEl.innerHTML = '<span class="loading"></span> Sending...';
                submitBtn.disabled = true;

                try {
                    const payload = new URLSearchParams();
                    payload.append('name', name);
                    payload.append('email', email);
                    payload.append('message', message);
                    payload.append('_subject', 'New portfolio message');
                    payload.append('_template', 'box');
                    payload.append('_captcha', 'false');

                    const response = await fetch(endpoint, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Accept': 'application/json'
                        },
                        body: payload.toString()
                    });

                    if (!response.ok) {
                        throw new Error('Failed to send');
                    }

                    statusEl.textContent = 'Thanks! Your message has been sent.';
                    form.reset();
                    this.showToast('Message sent ✅');
                } catch (error) {
                    console.error(error);
                    statusEl.textContent = 'Something went wrong. Please try again.';
                    this.showToast('Message failed ❌', 'error');
                } finally {
                    submitBtn.disabled = false;
                    setTimeout(() => {
                        statusEl.textContent = '';
                    }, 4000);
                }
            });
        }

        // CTA buttons in hero
        const viewWorksBtn = document.getElementById('viewWorksBtn');
        if (viewWorksBtn) {
            viewWorksBtn.addEventListener('click', () => this.scrollToSection('work'));
        }
        const contactMeBtn = document.getElementById('contactMeBtn');
        if (contactMeBtn) {
            contactMeBtn.addEventListener('click', () => this.scrollToSection('contact'));
        }

        // Newsletter
        const newsletterForm = document.getElementById('newsletterForm');
        const newsletterEmail = document.getElementById('newsletterEmail');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = (newsletterEmail?.value || '').trim();
                const emailRe = /[^@\s]+@[^@\s]+\.[^@\s]+/;
                if (!emailRe.test(email)) { this.showToast('Enter a valid email'); return; }
                this.showToast('Subscribed 🎉');
                if (newsletterEmail) newsletterEmail.value = '';
            });
        }

        // Games
        this.initTypingRace();
        this.initReactionGame();
        this.initNumberGuess();
    }

    // Show dedicated content page instead of modal
    showContentPage({ title, meta, body, type = 'content' }) {
        // Remove existing overlay if present
        const existingOverlay = document.getElementById('contentPageOverlay');
        if (existingOverlay) {
            existingOverlay.remove();
        }

        // Create content page HTML
        const contentHTML = `
            <div class="content-page-overlay" id="contentPageOverlay">
                <div class="content-page">
                    <div class="content-page-header">
                        <button class="content-page-close" id="contentPageClose" aria-label="Close">×</button>
                        <div class="content-type-badge">${type.toUpperCase()}</div>
                        <h2>${title}</h2>
                        ${meta ? `<div class="content-meta">${meta}</div>` : ''}
                    </div>
                    <div class="content-page-body">
                        <div class="content-text">${body}</div>
                        <div class="content-actions">
                            <button class="btn" onclick="window.print()">Print</button>
                            <button class="btn secondary" onclick="navigator.share ? navigator.share({title: '${title}', text: '${body.replace(/<[^>]*>/g, '')}'}) : this.copyToClipboard('${title}\\n\\n${body.replace(/<[^>]*>/g, '')}')">Share</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Add to body
            document.body.insertAdjacentHTML('beforeend', contentHTML);

        // Show the content page
        const overlay = document.getElementById('contentPageOverlay');
        // Force a reflow to ensure the element is in the DOM
        overlay.offsetHeight;
        overlay.classList.add('show');

        // Setup close functionality
        const closeBtn = document.getElementById('contentPageClose');
        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('show');
        });

        // Close on overlay click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('show');
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.classList.contains('show')) {
                overlay.classList.remove('show');
            }
        });
    }

    initReactionGame() {
        const panel = document.getElementById('reactionPanel');
        const startBtn = document.getElementById('reactionStart');
        const resultEl = document.getElementById('reactionResult');
        const nameEl = document.getElementById('reactionName');
        const saveBtn = document.getElementById('reactionSave');
        const tableBody = document.querySelector('#reactionLeaderboard tbody');
        if (!panel || !startBtn) return;

        let timeoutId = null;
        let startTs = 0;
        let ready = false;
        let lastMs = null;

        const reset = () => {
            ready = false;
            startTs = 0;
            clearTimeout(timeoutId);
            timeoutId = null;
            panel.classList.remove('wait','ready');
            panel.textContent = 'Click "Start" to begin';
            resultEl.textContent = '';
        };

        const load = () => JSON.parse(localStorage.getItem('leaderboard_reaction') || '[]');
        const save = (rows) => localStorage.setItem('leaderboard_reaction', JSON.stringify(rows.slice(0,10)));
        const renderLb = () => {
            if (!tableBody) return;
            const rows = load().slice(0,10);
            tableBody.innerHTML = '';
            rows.forEach((r, i) => {
                const tr = document.createElement('tr');
                const cls = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
                const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '';
                if (cls) tr.classList.add(cls);
                tr.innerHTML = `<td>${i+1} ${medal ? `<span class=\"medal\">${medal}</span>` : ''}</td><td>${r.name}</td><td>${r.ms} ms</td>`;
                tableBody.appendChild(tr);
            });
        };
        renderLb();

        const schedule = () => {
            panel.classList.add('wait');
            panel.textContent = 'Wait for green...';
            const delay = 1000 + Math.random()*2000;
            timeoutId = setTimeout(() => {
                panel.classList.remove('wait');
                panel.classList.add('ready');
                panel.textContent = 'GO! Click now!';
                ready = true;
                startTs = performance.now();
            }, delay);
        };

        startBtn.addEventListener('click', () => {
            reset();
            schedule();
        });

        panel.addEventListener('click', () => {
            if (!timeoutId && !ready) return; // not started
            if (!ready) {
                // clicked too early
                clearTimeout(timeoutId);
                timeoutId = null;
                panel.classList.remove('wait');
                panel.textContent = 'Too soon! Click Start to try again';
                return;
            }
            const ms = Math.round(performance.now() - startTs);
            lastMs = ms;
            ready = false;
            panel.classList.remove('ready');
            panel.textContent = `Your reaction: ${ms} ms`;
            resultEl.textContent = `${ms} ms`;
        });

        saveBtn?.addEventListener('click', () => {
            if (lastMs == null) return;
            const name = (nameEl?.value || 'Anonymous').trim().slice(0,20) || 'Anonymous';
            const rows = load();
            rows.push({ name, ms: lastMs });
            rows.sort((a,b) => a.ms - b.ms);
            save(rows.slice(0,10));
            renderLb();
            nameEl.value = '';
            this.showToast('Saved to leaderboard ✅');
        });
    }

    initNumberGuess() {
        const newBtn = document.getElementById('guessNew');
        const input = document.getElementById('guessInput');
        const submitBtn = document.getElementById('guessSubmit');
        const feedback = document.getElementById('guessFeedback');
        const nameEl = document.getElementById('guessName');
        const saveBtn = document.getElementById('guessSave');
        const tableBody = document.querySelector('#guessLeaderboard tbody');
        if (!newBtn || !input || !submitBtn || !feedback) return;

        let target = null;
        let attempts = 0;

        const load = () => JSON.parse(localStorage.getItem('leaderboard_guess') || '[]');
        const save = (rows) => localStorage.setItem('leaderboard_guess', JSON.stringify(rows.slice(0,10)));
        const renderLb = () => {
            if (!tableBody) return;
            const rows = load().slice(0,10);
            tableBody.innerHTML = '';
            rows.forEach((r, i) => {
                const tr = document.createElement('tr');
                const cls = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
                const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '';
                if (cls) tr.classList.add(cls);
                tr.innerHTML = `<td>${i+1} ${medal ? `<span class=\"medal\">${medal}</span>` : ''}</td><td>${r.name}</td><td>${r.attempts}</td>`;
                tableBody.appendChild(tr);
            });
        };
        renderLb();

        const start = () => {
            target = Math.floor(Math.random()*100)+1;
            attempts = 0;
            input.value = '';
            input.disabled = false;
            submitBtn.disabled = false;
            feedback.textContent = 'Game started! Enter your guess.';
            input.focus();
        };

        const handleGuess = () => {
            if (target == null) { feedback.textContent = 'Click New Game to start.'; return; }
            const val = parseInt(input.value, 10);
            if (isNaN(val) || val < 1 || val > 100) { feedback.textContent = 'Enter a number between 1 and 100.'; return; }
            attempts += 1;
            if (val === target) {
                feedback.textContent = `Correct! The number was ${target}. Attempts: ${attempts}.`;
                input.disabled = true;
                submitBtn.disabled = true;
                // store last result for saving
                this.lastGuessGame = { attempts };
                this.showToast('Nice! Save your score.');
            } else if (val < target) {
                feedback.textContent = 'Too low!';
            } else {
                feedback.textContent = 'Too high!';
            }
            input.select();
        };

        newBtn.addEventListener('click', start);
        submitBtn.addEventListener('click', handleGuess);
        input.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleGuess(); });

        saveBtn?.addEventListener('click', () => {
            if (!this.lastGuessGame) return;
            const name = (nameEl?.value || 'Anonymous').trim().slice(0,20) || 'Anonymous';
            const rows = load();
            rows.push({ name, attempts: this.lastGuessGame.attempts });
            rows.sort((a,b) => a.attempts - b.attempts);
            save(rows.slice(0,10));
            renderLb();
            nameEl.value = '';
            this.showToast('Saved to leaderboard ✅');
        });
    }

    // Copy to clipboard utility
    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            this.showToast('Copied to clipboard 📋');
        }).catch(() => {
            this.showToast('Copy failed');
        });
    }

    initTypingRace() {
        const startBtn = document.getElementById('typingStart');
        const input = document.getElementById('typingInput');
        const textEl = document.getElementById('typingText');
        const wpmEl = document.getElementById('typingWpm');
        const accEl = document.getElementById('typingAcc');
        const timeEl = document.getElementById('typingTime');
        const nameEl = document.getElementById('typingName');
        const saveBtn = document.getElementById('typingSave');
        const tableBody = document.querySelector('#typingLeaderboard tbody');
        if (!startBtn || !input || !textEl) return;

        const samples = [
            'Simplicity is the soul of efficiency.',
            'Code is like humor. When you have to explain it, it is bad.',
            'Programs must be written for people to read.',
            'Premature optimization is the root of all evil.',
            'The morning was calm. The sun rose slowly above the hills. Birds chirped in the trees.',
            'She opened an old book from the shelf. The pages were yellowed and soft.',
            'The park was lively in the afternoon. Children played on swings and slides.',
            'The rain began suddenly. Dark clouds covered the sky. Thunder rumbled in the distance.',
        ];
        let target = '';
        let targetWords = [];
        let typedWords = [];
        let currentWordIndex = 0;
        let startTime = 0;
        let timerId = null;
        let isRaceActive = false;
        let hasStartedTyping = false;
        let justAdvanced = false;
        let consecutiveErrors = 0;
        let lockedForErrors = false;

        const getAcc = (typed, target) => {
            if (target.length === 0) return 0;
            let correct = 0;
            for (let i = 0; i < typed.length; i++) {
                if (typed[i] === target[i]) correct++;
            }
            return Math.round((correct / Math.max(typed.length, target.length)) * 100);
        };

        const getTargetString = () => targetWords.join(' ');

        const renderWords = () => {
            if (!targetWords.length) {
                textEl.textContent = 'Click "New Race" to begin.';
                return;
            }
            const html = targetWords.map((word, idx) => {
                let cls = 'word';
                if (idx < currentWordIndex) {
                    cls += (typedWords[idx] === word) ? ' ok' : ' bad';
                } else if (idx === currentWordIndex) {
                    cls += ' current';
                    const currentValue = input.value.trim();
                    if (currentValue && !word.startsWith(currentValue)) cls += ' bad';
                }
                return `<span class="${cls}">${word}</span>`;
            }).join(' ');
            textEl.innerHTML = html;
        };

        const getTypedString = () => {
            const completed = typedWords.slice(0, Math.min(currentWordIndex, typedWords.length));
            if (currentWordIndex < targetWords.length) {
                completed.push(input.value.trim());
            }
            return completed.join(' ').trim();
        };

        const finishRace = () => {
            clearInterval(timerId);
            timerId = null;
            const elapsed = (performance.now() - startTime) / 1000;
            const wordsTyped = targetWords.length || 1;
            const wpm = Math.round((wordsTyped / elapsed) * 60) || 0;
            const acc = getAcc(typedWords.join(' '), getTargetString());
            wpmEl.textContent = String(wpm);
            accEl.textContent = acc + '%';
            if (timeEl) timeEl.textContent = elapsed.toFixed(1) + 's';
            input.disabled = true;
            isRaceActive = false;
            hasStartedTyping = false;
            this.lastTyping = { wpm, acc };
            this.showToast('Finished! Save your score.');
        };

        const isPrevWordCorrect = () => {
            if (currentWordIndex === 0) return false;
            return typedWords[currentWordIndex - 1] === targetWords[currentWordIndex - 1];
        };

        const submitCurrentWord = () => {
            if (!isRaceActive || currentWordIndex >= targetWords.length) return;
            const value = input.value.trim();
            if (!value) return;
            typedWords[currentWordIndex] = value;
            if (value === targetWords[currentWordIndex]) {
                consecutiveErrors = 0;
                lockedForErrors = false;
            } else {
                consecutiveErrors += 1;
                if (consecutiveErrors >= 3) {
                    lockedForErrors = true;
                    this.showToast('Too many mistakes! Fix the last words before continuing.');
                    return;
                }
            }
            if (currentWordIndex === targetWords.length - 1) {
                finishRace();
                return;
            }
            currentWordIndex += 1;
            justAdvanced = true;
            input.value = typedWords[currentWordIndex] || '';
            renderWords();
            updateStats();
            input.setSelectionRange(input.value.length, input.value.length);
        };

        const goToPreviousWord = () => {
            if (currentWordIndex === 0 || isPrevWordCorrect()) return;
            typedWords[currentWordIndex] = input.value.trim();
            currentWordIndex -= 1;
            input.value = typedWords[currentWordIndex] || '';
            justAdvanced = false;
            renderWords();
            updateStats();
            const caretPos = input.value.length;
            requestAnimationFrame(() => input.setSelectionRange(caretPos, caretPos));
        };

        const updateStats = () => {
            if (!hasStartedTyping) return;
            const elapsed = (performance.now() - startTime) / 1000;
            const completedWords = currentWordIndex;
            const partialWord = input.value.trim().length ? 1 : 0;
            const words = completedWords + partialWord;
            const wpm = Math.round((words / elapsed) * 60) || 0;
            wpmEl.textContent = String(wpm);
            accEl.textContent = getAcc(getTypedString(), getTargetString()) + '%';
            if (timeEl) timeEl.textContent = elapsed.toFixed(1) + 's';
        };

        const start = () => {
            target = samples[Math.floor(Math.random() * samples.length)];
            targetWords = target.split(/\s+/).filter(Boolean);
            typedWords = new Array(targetWords.length).fill('');
            currentWordIndex = 0;
            consecutiveErrors = 0;
            lockedForErrors = false;
            input.value = '';
            input.disabled = false;
            input.focus();
            renderWords();
            isRaceActive = true;
            hasStartedTyping = false;
            startTime = 0;
            clearInterval(timerId);
            timerId = null;
            wpmEl.textContent = '0';
            accEl.textContent = '0%';
            if (timeEl) timeEl.textContent = '0.0s';
        };

        startBtn.addEventListener('click', start);
        
        input.addEventListener('input', () => {
            if (!isRaceActive) {
                input.value = '';
                return;
            }
            if (isRaceActive && !hasStartedTyping) {
                // Start timer on first keystroke
                hasStartedTyping = true;
                startTime = performance.now();
                timerId = setInterval(updateStats, 100);
            }
            justAdvanced = false;
            typedWords[currentWordIndex] = input.value.trim();
            renderWords();
            if (currentWordIndex === targetWords.length - 1 && input.value.trim() === targetWords[currentWordIndex]) {
                finishRace();
            } else {
                updateStats();
            }
        });

        input.addEventListener('keydown', (e) => {
            if (!isRaceActive) return;
            if ((e.key === ' ' || e.key === 'Enter') && lockedForErrors) {
                e.preventDefault();
                this.showToast('Fix your last mistakes before continuing.');
                return;
            }
            if (e.key === ' ' && !e.ctrlKey && !e.altKey) {
                e.preventDefault();
                submitCurrentWord();
            } else if (e.key === 'Enter') {
                e.preventDefault();
                submitCurrentWord();
            } else if (e.key === 'Backspace') {
                const caretAtStart = input.selectionStart === 0 && input.selectionEnd === 0;
                const allowReturn = (!isPrevWordCorrect()) && (justAdvanced || (caretAtStart && input.value === ''));
                if (allowReturn) {
                    e.preventDefault();
                    goToPreviousWord();
                } else {
                    justAdvanced = false;
                }
            }
        });

        // Block copy/cut/paste and context menu in typing input
        const blockEvent = (e) => { e.preventDefault(); };
        input.addEventListener('copy', blockEvent);
        input.addEventListener('cut', blockEvent);
        input.addEventListener('paste', blockEvent);
        input.addEventListener('contextmenu', blockEvent);
        input.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && ['c','x','v','a'].includes(e.key.toLowerCase())) {
                if (e.key.toLowerCase() !== 'a') e.preventDefault(); // allow select all
            }
        });

        // Leaderboard
        const load = () => JSON.parse(localStorage.getItem('leaderboard_typing') || '[]');
        const save = (rows) => localStorage.setItem('leaderboard_typing', JSON.stringify(rows.slice(0,10)));
        const renderLb = () => {
            const rows = load().slice(0, 10);
            if (!tableBody) return;
            tableBody.innerHTML = '';
            rows.forEach((r, i) => {
                const tr = document.createElement('tr');
                const cls = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
                const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '';
                if (cls) tr.classList.add(cls);
                tr.innerHTML = `<td>${i+1} ${medal ? `<span class=\"medal\">${medal}</span>` : ''}</td><td>${r.name}</td><td>${r.wpm}</td><td>${r.acc}%</td>`;
                tableBody.appendChild(tr);
            });
        };
        renderLb();
        saveBtn?.addEventListener('click', () => {
            if (!this.lastTyping) return;
            const name = (nameEl?.value || 'Anonymous').trim().slice(0, 20) || 'Anonymous';
            const rows = load();
            rows.push({ name, ...this.lastTyping });
            rows.sort((a,b) => b.wpm - a.wpm || b.acc - a.acc);
            save(rows.slice(0, 10));
            renderLb();
            nameEl.value = '';
            this.showToast('Saved to leaderboard ✅');
        });
    }

    addCardHoverEffect(card) {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    }

    removeCardHoverEffect(card) {
        card.style.transform = 'translateY(0) scale(1)';
    }

    // Global search
    setupGlobalSearch() {
        const form = document.getElementById('globalSearchForm');
        const input = document.getElementById('globalSearchInput');
        const container = document.getElementById('searchResults');
        const list = document.getElementById('searchList');
        const countEl = document.getElementById('searchCount');
        const clearBtn = document.getElementById('searchClear');
        if (!form) return;

        const index = [];
        document.querySelectorAll('.card').forEach(card => {
            const contentId = card.getAttribute('data-content-id');
            const title = card.querySelector('h3')?.textContent || '';
            const meta = card.querySelector('.meta')?.textContent || '';
            const body = card.querySelector('p')?.textContent || '';
            const section = card.closest('section')?.id || 'content';
            
            // Determine the specific type for work section
            let where = section;
            if (section === 'work') {
                // Check if it's a paper or project based on the link text
                const linkText = card.querySelector('a')?.textContent?.toLowerCase() || '';
                if (linkText.includes('paper') || linkText.includes('read full')) {
                    where = 'papers';
                } else if (linkText.includes('project') || linkText.includes('view')) {
                    where = 'projects';
                } else {
                    // Fallback: check if card is in papers or projects subsection
                    const workSection = card.closest('#work');
                    if (workSection) {
                        // Find the projects h3 element
                        const projectsH3 = Array.from(workSection.querySelectorAll('h3'))
                            .find(h3 => h3.textContent.includes('Projects'));
                        
                        if (projectsH3) {
                            // Check if card comes after the Projects h3
                            const cardPosition = card.compareDocumentPosition(projectsH3);
                            if (cardPosition & Node.DOCUMENT_POSITION_FOLLOWING) {
                                where = 'projects';
                            } else {
                                where = 'papers';
                            }
                        } else {
                            where = 'papers'; // Default to papers if no projects h3 found
                        }
                    }
                }
            }
            
            index.push({
                where: where,
                title: title,
                meta: meta,
                body: body,
                contentId: contentId,
                link: card.querySelector('a')
            });
        });

        const render = (items) => {
            list.innerHTML = '';
            items.forEach(({ where, title, meta, body, contentId, link }) => {
                const li = document.createElement('li');
                li.className = 'result-item';
                
                // Format the section label
                let sectionLabel = where.toUpperCase();
                if (where === 'papers') {
                    sectionLabel = '📄 PAPERS';
                } else if (where === 'projects') {
                    sectionLabel = '💻 PROJECTS';
                }
                
                li.innerHTML = `<div class="where">${sectionLabel}</div><div><strong>${title}</strong></div><div class="meta">${meta}</div><div>${body}</div>`;
                li.addEventListener('click', () => {
                    // Use detailed content if available, otherwise fallback to card content
                    if (contentId && this.contentData[contentId]) {
                        const content = this.contentData[contentId];
                        this.showContentPage({
                            title: content.title,
                            meta: content.meta,
                            body: content.content,
                            type: content.type
                        });
                    } else {
                        // Fallback to card content
                        this.showContentPage({ title, meta, body });
                    }
                });
                list.appendChild(li);
            });
            countEl.textContent = String(items.length);
            container.hidden = items.length === 0;
        };

        const doSearch = () => {
            const q = (input.value || '').trim().toLowerCase();
            if (!q) {
                container.hidden = true;
                list.innerHTML = '';
                countEl.textContent = '0';
                return;
            }
            const results = index.filter(item =>
                item.title.toLowerCase().includes(q) ||
                item.meta.toLowerCase().includes(q) ||
                item.body.toLowerCase().includes(q)
            ).slice(0, 20);
            render(results);
        };

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            doSearch();
        });
        input.addEventListener('input', PersonalWebsite.debounce(doSearch, 200));
        clearBtn?.addEventListener('click', () => {
            input.value = '';
            container.hidden = true;
            list.innerHTML = '';
            countEl.textContent = '0';
            input.focus();
        });
    }



    // Toast utility
    showToast(message = '', type = 'success') {
        if (!message) return;
        
        const container = document.getElementById('notificationContainer');
        if (!container) return;
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const icons = {
            success: '✅',
            error: '❌',
            info: 'ℹ️',
            warning: '⚠️'
        };
        
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${icons[type] || icons.info}</span>
                <span class="notification-message">${this.escapeHtml(message)}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
            <div class="notification-progress"></div>
        `;
        
        container.appendChild(notification);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.classList.add('removing');
                setTimeout(() => {
                    if (notification.parentElement) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 5000);
    }

    // Back to top
    setupBackToTop() {
        const btn = document.getElementById('backToTop');
        if (!btn) return;
        
        const onScroll = () => {
            const y = window.scrollY || document.documentElement.scrollTop;
            if (y > 400) {
                btn.classList.add('show');
            } else {
                btn.classList.remove('show');
            }
        };
        
        window.addEventListener('scroll', onScroll);
        onScroll();
        
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Accessibility features
    setupAccessibility() {
        // Keyboard navigation and shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
            // Shortcut: focus search (Ctrl/Cmd + K)
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                const input = document.getElementById('globalSearchInput');
                if (input) { e.preventDefault(); input.focus(); }
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });

        // Focus management
        this.navLinks.forEach(link => {
            link.addEventListener('focus', () => {
                link.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            });
        });

        // Ensure aria-labelledby when missing (do not override roles in HTML)
        this.sections.forEach(section => {
            if (!section.hasAttribute('aria-labelledby')) {
                const heading = section.querySelector('h2[id]');
                if (heading) {
                    section.setAttribute('aria-labelledby', heading.id);
                }
            }
            // Single-page: ensure sections are tabbable and visible to screen readers
            section.setAttribute('aria-hidden', 'false');
            section.setAttribute('tabindex', '0');
        });

        // Copy email quick action
        const copyBtn = document.getElementById('copyEmail');
        const emailLink = document.getElementById('contactEmailLink');
        copyBtn?.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(emailLink?.textContent || '');
                this.showToast('Email copied 📋');
                const originalText = copyBtn.dataset.label || copyBtn.textContent || 'Copy';
                copyBtn.dataset.label = originalText;
                copyBtn.textContent = 'Copied';
                copyBtn.classList.add('copied');
                copyBtn.disabled = true;
                setTimeout(() => {
                    copyBtn.textContent = copyBtn.dataset.label;
                    copyBtn.classList.remove('copied');
                    copyBtn.disabled = false;
                }, 5000);
            } catch (_) {
                this.showToast('Copy failed');
            }
        });
    }

    // Utility methods
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }


    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Only handle shortcuts when not typing in input fields
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
                return;
            }
            
            // Ctrl/Cmd + K: Focus search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.getElementById('globalSearchInput');
                if (searchInput) {
                    searchInput.focus();
                }
            }
            
            // Ctrl/Cmd + 1-6: Navigate to sections
            if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '6') {
                e.preventDefault();
                const sectionIndex = parseInt(e.key) - 1;
                const sections = Array.from(this.sections);
                if (sections[sectionIndex]) {
                    this.navigateToSection(sections[sectionIndex].id);
                }
            }
            
            // Escape: Close modals
            if (e.key === 'Escape') {
                const overlay = document.getElementById('contentPageOverlay');
                if (overlay && overlay.classList.contains('show')) {
                    overlay.classList.remove('show');
                }
            }
        });
        
        // Show keyboard shortcuts help
        const showShortcuts = () => {
            this.showToast('Keyboard shortcuts: Ctrl+K (search), Ctrl+1-6 (navigate), Esc (close modals)', 'info');
        };
        
        // Show shortcuts on Ctrl+Shift+?
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === '?') {
                e.preventDefault();
                showShortcuts();
            }
        });
    }

    setupFooterLinks() {
        // Get all footer links with data-section attributes
        const footerLinks = document.querySelectorAll('footer a[data-section]');
        
        footerLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSection = link.getAttribute('data-section');
                this.scrollToSection(targetSection);
            });
        });
    }


}



// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    window.personalWebsite = new PersonalWebsite();
});

// Service Worker registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PersonalWebsite };
} 